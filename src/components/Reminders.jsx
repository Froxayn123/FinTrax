import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, setYear } from 'date-fns';

const Reminders = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today);
    const [selectedDate, setSelectedDate] = useState(today);
    const [reminders, setReminders] = useState([{ date: new Date(2024, 5, 20), description: 'Service Motorcycle' }]);
    const [newReminder, setNewReminder] = useState('');
  
  
  
    const renderDays = () => {
      const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
      return (
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day, i) => (
            <div key={i} className="text-xs font-semibold">
              {day}
            </div>
          ))}
        </div>
      );
    };
  
    const renderCells = () => {
      const monthStart = startOfMonth(currentMonth);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);
  
      const dateFormat = 'd';
      const rows = [];
  
      let days = [];
      let day = startDate;
      let formattedDate = '';
  
      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = format(day, dateFormat);
          const cloneDay = day;
          const hasReminder = reminders.some((reminder) => isSameDay(reminder.date, cloneDay));
          days.push(
            <div
              className={`p-2 rounded-full text-center cursor-pointer relative ${
                !isSameMonth(day, monthStart)
                  ? 'text-gray-500'
                  : isSameDay(day, selectedDate)
                  ? 'bg-purple-500 text-white'
                  : hasReminder
                  ? 'border  text-white'
                  : ''
              }`}
              key={day}
              onClick={() => setSelectedDate(cloneDay)}
            >
              <span className="text-sm">{formattedDate}</span>
              {hasReminder && (
                <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
              )}
            </div>
          );
          day = addDays(day, 1);
        }
        rows.push(
          <div className="grid grid-cols-7 gap-1 text-center" key={day}>
            {days}
          </div>
        );
        days = [];
      }
      return <div>{rows}</div>;
    };
  
    const nextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
    };
  
    const prevMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1));
    };
  
    const handleYearChange = (e) => {
      const newYear = parseInt(e.target.value, 10);
      setCurrentMonth(setYear(currentMonth, newYear));
    };
  
    const renderNavigation = () => {
      const currentYear = currentMonth.getFullYear();
      const years = [];
      for (let i = new Date().getFullYear() - 50; i <= new Date().getFullYear() + 50; i++) {
        years.push(i);
      }
  
      return (
        <div className="flex justify-between mb-2 pr-5 items-center">
          <div className="flex items-center">
            <span className="text-xs mr-2">{format(currentMonth, 'MMMM yyyy')}</span>
            <select
              value={currentYear}
              onChange={handleYearChange}
              className="text-xs rounded p-1 text-white [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]"
            >
              {years.map((year) => (
                <option key={year} value={year} className="text-black">
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={prevMonth} className="p-1 rounded hover:bg-gray-700 mr-14">
              &lt;
            </button>
            <button onClick={nextMonth} className="p-1 rounded hover:bg-gray-700">
              &gt;
            </button>
          </div>
        </div>
      );
    };
  
    const renderReminder = () => {
      return (
        <div className="ml-6">
          <h3 className="text-lg font-semibold mb-2">Reminder</h3>
          {reminders.map((reminder, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <p>
                {format(reminder.date, 'd MMMM')} - {reminder.description}
              </p>
              <button
                className="h-[35px] w-[110px] bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleRemoveReminder(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Add a reminder"
              className="bg-transparent border border-gray-300 rounded px-2 py-1 mr-2 text-white "
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddReminder();
                }
              }}
            />
          </div>
        </div>
      );
    };
  
    const handleAddReminder = () => {
      if (newReminder.trim() !== '') {
        setReminders([...reminders, { date: selectedDate, description: newReminder }]);
        setNewReminder('');
      }
    };
  
    const handleRemoveReminder = (index) => {
      const newReminders = [...reminders];
      newReminders.splice(index, 1);
      setReminders(newReminders);
    };
  
    const renderFooter = () => {
      return (
        <div className="flex justify-end mt-4">
          <button className="h-[45px] w-[150px] bg-transparent border  text-white px-4 py-1 rounded-lg mr-4 hover:bg-purple-500">Cancel</button>
          <button className="w-[150px] bg-purple-500 text-white px-4 py-1 rounded-lg" onClick={handleAddReminder}>
            New
          </button>
        </div>
      );
    };
  
    return (
      <div className="p-4 text-white rounded-lg shadow-lg ">
        <div className="flex">
          <div className="w-1/2">
            {renderNavigation()}
            {renderDays()}
            {renderCells()}
          </div>
          <div className="border-l border-white mx-4"></div>
          <div className="w-1/2">
            {renderReminder()}
          </div>
        </div>
        <div className="border-t border-white mt-4"></div>
        {renderFooter()}
      </div>
    );
  };
export default Reminders