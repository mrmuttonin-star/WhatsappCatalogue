import requests
import sys
import json
from datetime import datetime

class WhatsAppCatalogueAPITester:
    def __init__(self, base_url="https://shop-connect-132.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_base = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_base}/{endpoint}" if endpoint else f"{self.api_base}/"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=30)

            success = response.status_code == expected_status
            
            result = {
                'test': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success
            }
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result['response_data'] = response.json()
                except:
                    result['response_data'] = response.text[:200]
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    result['error_data'] = response.json()
                except:
                    result['error_data'] = response.text[:200]

            self.test_results.append(result)
            return success, response.json() if success else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                'test': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': 'ERROR',
                'success': False,
                'error': str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "",
            200
        )
        return success

    def test_get_products(self):
        """Test getting all products"""
        success, response = self.run_test(
            "Get All Products",
            "GET",
            "products",
            200
        )
        
        if success and response:
            # Verify product structure and categories
            products = response
            categories = set()
            expected_categories = {"Mutton Handi", "Chicken Handi", "Add-ons", "Combo"}
            
            print(f"   Found {len(products)} products")
            
            for product in products:
                categories.add(product.get('category', ''))
                # Verify product structure
                required_fields = ['id', 'name', 'description', 'price', 'image', 'category']
                missing_fields = [field for field in required_fields if field not in product]
                if missing_fields:
                    print(f"   ⚠️  Product {product.get('id', 'unknown')} missing fields: {missing_fields}")
            
            print(f"   Categories found: {categories}")
            missing_categories = expected_categories - categories
            if missing_categories:
                print(f"   ⚠️  Missing categories: {missing_categories}")
            
        return success

    def test_create_razorpay_order(self):
        """Test Razorpay order creation"""
        success, response = self.run_test(
            "Create Razorpay Order",
            "POST",
            "razorpay/create-order",
            200,
            data={"amount": 500.0}
        )
        
        if success and response:
            expected_fields = ['id', 'amount', 'currency', 'key_id']
            for field in expected_fields:
                if field not in response:
                    print(f"   ⚠️  Missing field in Razorpay response: {field}")
        
        return success, response

    def test_create_cod_order(self):
        """Test COD order creation"""
        sample_cart = [
            {
                "product_id": "mutton-250",
                "name": "Ahuna Mutton (250g)",
                "price": 499.0,
                "quantity": 1,
                # "image": "https://example.com/image.jpg"
            }
        ]
        
        order_data = {
            "customer_name": "Test Customer",
            "customer_phone": "9999999999",
            "customer_address": "123 Test Street, Test City",
            "items": sample_cart,
            "total_amount": 499.0,
            "payment_method": "COD"
        }
        
        success, response = self.run_test(
            "Create COD Order",
            "POST",
            "orders",
            200,
            data=order_data
        )
        
        if success and response:
            # Verify order structure
            expected_fields = ['id', 'customer_name', 'customer_phone', 'customer_address', 
                             'items', 'total_amount', 'payment_method', 'payment_status', 
                             'order_status', 'created_at']
            for field in expected_fields:
                if field not in response:
                    print(f"   ⚠️  Missing field in order response: {field}")
            
            if response.get('payment_status') != 'COD':
                print(f"   ⚠️  Expected payment_status 'COD', got '{response.get('payment_status')}'")
        
        return success, response

    def test_get_orders(self):
        """Test getting all orders"""
        success, response = self.run_test(
            "Get All Orders",
            "GET",
            "orders",
            200
        )
        
        if success:
            print(f"   Found {len(response)} orders in database")
        
        return success

    def test_create_online_order_without_payment(self):
        """Test online order creation without payment verification (should fail)"""
        sample_cart = [
            {
                "product_id": "chicken-500",
                "name": "Ahuna Chicken (500g)",
                "price": 499.0,
                "quantity": 1,
                # "image": "https://example.com/image.jpg"
            }
        ]
        
        order_data = {
            "customer_name": "Test Customer",
            "customer_phone": "9999999999",
            "customer_address": "123 Test Street, Test City",
            "items": sample_cart,
            "total_amount": 499.0,
            "payment_method": "ONLINE"
            # Intentionally missing payment verification data
        }
        
        success, response = self.run_test(
            "Create Online Order Without Payment (Should Fail)",
            "POST",
            "orders",
            400,  # Should fail with 400
            data=order_data
        )
        
        return success

def main():
    print("🚀 Starting WhatsApp Catalogue API Tests...")
    print("=" * 60)
    
    # Setup
    tester = WhatsAppCatalogueAPITester()
    
    # Run tests
    print("\n📝 Running Backend API Tests:")
    
    # Basic API tests
    tester.test_api_root()
    tester.test_get_products()
    
    # Razorpay integration test
    razorpay_success, razorpay_response = tester.test_create_razorpay_order()
    
    # Order creation tests
    cod_success, cod_order = tester.test_create_cod_order()
    tester.test_get_orders()
    
    # Test order validation
    tester.test_create_online_order_without_payment()
    
    # Test specific order retrieval if we have an order ID
    if cod_success and cod_order and 'id' in cod_order:
        order_id = cod_order['id']
        tester.run_test(
            f"Get Order by ID ({order_id})",
            "GET",
            f"orders/{order_id}",
            200
        )
    
    # Print summary
    print("\n" + "=" * 60)
    print(f"📊 Test Results Summary:")
    print(f"   Tests Run: {tester.tests_run}")
    print(f"   Tests Passed: {tester.tests_passed}")
    print(f"   Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"   Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Print failed tests
    failed_tests = [test for test in tester.test_results if not test['success']]
    if failed_tests:
        print(f"\n❌ Failed Tests:")
        for test in failed_tests:
            error_msg = test.get('error', f"Status {test['actual_status']}")
            print(f"   - {test['test']}: {error_msg}")
    
    # Save detailed results to file
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            'timestamp': datetime.now().isoformat(),
            'summary': {
                'tests_run': tester.tests_run,
                'tests_passed': tester.tests_passed,
                'success_rate': (tester.tests_passed/tester.tests_run)*100 if tester.tests_run > 0 else 0
            },
            'detailed_results': tester.test_results
        }, f, indent=2)
    
    print(f"\n💾 Detailed results saved to: /app/backend_test_results.json")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())