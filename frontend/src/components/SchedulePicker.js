
import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Label } from './ui/label';

// Time slots - Same as reference code  
const LUNCH_SLOTS = [
  '12:00 PM - 12:30 PM',
  '12:30 PM - 1:00 PM',
  '1:00 PM - 1:30 PM',
  '1:30 PM - 2:00 PM',
  '2:00 PM - 2:30 PM',
  '2:30 PM - 3:00 PM',
];

const DINNER_SLOTS = [
  '7:00 PM - 7:30 PM',
  '7:30 PM - 8:00 PM',
  '8:00 PM - 8:30 PM',
  '8:30 PM - 9:00 PM',
  '9:00 PM - 9:30 PM',
  '9:30 PM - 10:00 PM',
];

const SchedulePicker = ({ onScheduleSelect }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // Get date options - Today, Tomorrow, Day After
  const getDateOptions = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    const formatDate = (date) => {
      return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    };

    return [
      { 
        value: 'today', 
        label: 'Today', 
        date: formatDate(today),
        fullDate: today 
      },
      { 
        value: 'tomorrow', 
        label: 'Tomorrow', 
        date: formatDate(tomorrow),
        fullDate: tomorrow 
      },
      { 
        value: 'day-after', 
        label: dayAfter.toLocaleDateString('en-IN', { weekday: 'long' }), 
        date: formatDate(dayAfter),
        fullDate: dayAfter 
      }
    ];
  };

  const dateOptions = getDateOptions();

  const handleDaySelect = (value) => {
    setSelectedDay(value);
    setSelectedMealType('');
    setSelectedTimeSlot('');
    updateSchedule(value, '', '');
  };

  const handleMealTypeSelect = (value) => {
    setSelectedMealType(value);
    setSelectedTimeSlot('');
    updateSchedule(selectedDay, value, '');
  };

  const handleTimeSlotSelect = (value) => {
    setSelectedTimeSlot(value);
    updateSchedule(selectedDay, selectedMealType, value);
  };

  const updateSchedule = (day, mealType, timeSlot) => {
  if (day && mealType && timeSlot) {
    const dateOption = dateOptions.find(d => d.value === day);

    onScheduleSelect({
      dateLabel: `${dateOption.label}, ${dateOption.date}`,
      mealType: mealType,
      timeSlot: timeSlot
    });
  } else {
    onScheduleSelect(null);
  }
};

  const currentSlots = selectedMealType === 'lunch' 
    ? LUNCH_SLOTS 
    : selectedMealType === 'dinner' 
      ? DINNER_SLOTS 
      : [];

  return (
    <div className="space-y-4">
      <Label className="text-[#E9EDEF] mb-3 block flex items-center gap-2">
        <Clock className="w-4 h-4" />
        Schedule Delivery
      </Label>

      <div>
        <p className="text-xs font-medium text-[#8696A0] mb-2">Select Day</p>
        <div className="grid grid-cols-3 gap-2">
          {dateOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleDaySelect(option.value)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                selectedDay === option.value
                  ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366]'
                  : 'border-[#2A3942] bg-[#202C33] text-[#8696A0] hover:border-[#25D366]/50'
              }`}
              data-testid={`date-${option.value}`}
            >
              <div>
                <p className="text-xs mb-1">{option.date}</p>
                <p className="text-sm font-medium">{option.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedDay && (
        <div>
          <p className="text-xs font-medium text-[#8696A0] mb-2">Select Meal Type</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleMealTypeSelect('lunch')}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                selectedMealType === 'lunch'
                  ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366]'
                  : 'border-[#2A3942] bg-[#202C33] text-[#E9EDEF] hover:border-[#25D366]/50'
              }`}
              data-testid="meal-lunch"
            >
              <span className="text-2xl mb-1 block">🍛</span>
              <span className="text-sm font-medium block">Lunch</span>
              <span className={`text-xs ${selectedMealType === 'lunch' ? 'text-[#25D366]/80' : 'text-[#8696A0]'}`}>
                12:00 PM - 3:00 PM
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleMealTypeSelect('dinner')}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                selectedMealType === 'dinner'
                  ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366]'
                  : 'border-[#2A3942] bg-[#202C33] text-[#E9EDEF] hover:border-[#25D366]/50'
              }`}
              data-testid="meal-dinner"
            >
              <span className="text-2xl mb-1 block">🍖</span>
              <span className="text-sm font-medium block">Dinner</span>
              <span className={`text-xs ${selectedMealType === 'dinner' ? 'text-[#25D366]/80' : 'text-[#8696A0]'}`}>
                7:00 PM - 10:00 PM
              </span>
            </button>
          </div>
        </div>
      )}

      {selectedMealType && currentSlots.length > 0 && (
        <div>
          <p className="text-xs font-medium text-[#8696A0] mb-2">Select Time Slot</p>
          <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto">
            {currentSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => handleTimeSlotSelect(slot)}
                className={`p-2.5 rounded-lg border-2 text-center transition-all text-sm ${
                  selectedTimeSlot === slot
                    ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366] font-semibold'
                    : 'border-[#2A3942] bg-[#111B21] text-[#E9EDEF] hover:border-[#25D366]/50'
                }`}
                data-testid={`time-${slot}`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDay && selectedMealType && selectedTimeSlot && (
        <div className="mt-4 bg-[#111B21] rounded-lg p-3 border border-[#25D366]" data-testid="selected-schedule">
          <p className="text-xs text-[#8696A0] mb-1">Scheduled for:</p>
          <p className="text-[#E9EDEF] font-medium">
            {dateOptions.find(d => d.value === selectedDay)?.label},{' '}
            {selectedMealType === 'lunch' ? 'Lunch' : 'Dinner'} ({selectedTimeSlot})
          </p>
        </div>
      )}
    </div>
  );
};

export default SchedulePicker;
