import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, setYear } from "date-fns";
import PropTypes from "prop-types";

const Calendar = ({ userData }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const selectedDate = new Date(); // Change as needed

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center border-b border-white text-white">
        <h2 className="text-2xl font-semibold mr-4">Reminder</h2>
        ✏️
      </div>
    );
  };

  const renderDays = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return (
      <div className="grid grid-cols-7 gap-1 text-center text-white">
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

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className={`p-2 rounded-full text-center ${!isSameMonth(day, monthStart) ? "text-gray-500" : isSameDay(day, selectedDate) ? "bg-purple-500 text-white" : ""}`} key={day}>
            <span className="text-sm">{formattedDate}</span>
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
    return <div className="text-white">{rows}</div>;
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
      <div className="flex justify-between items-center text-white">
        <div className="flex items-center">
          <span className="text-xs mr-2">{format(currentMonth, "MMMM")}</span>
          <select
            value={currentYear}
            onChange={handleYearChange}
            className="text-xs rounded p-1 text-white [background:linear-gradient(113deg,rgba(255,255,255,0.13)_3.51%,rgba(255,255,255,0.00)_111.71%)] shadow-[10.253px_12.303px_20.506px_0px_rgba(0,0,0,0.05)]"
          >
            {years.map((year) => (
              <option key={year} value={year}>
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

  return (
    <div className="">
      {renderHeader()}
      {renderNavigation()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  userData: PropTypes.bool,
};
