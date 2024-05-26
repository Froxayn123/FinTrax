import PropTypes from "prop-types";

const Goals = ({ goals, activeButton, handleButtonClick, handleApplyClick }) => (
  <div>
    <div className="grid grid-cols-4 gap-4">
      {goals.map((goal) => (
        <button key={goal.name} className={`bg-transparent rounded-xl hover:bg-white hover:bg-opacity-10 p-2 ${activeButton === goal.name ? "bg-white bg-opacity-10" : ""}`} onClick={() => handleButtonClick(goal.name)}>
          <img src={`/${goal.img}`} alt={goal.name} className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
          <span className="text-lg">{goal.name}</span>
        </button>
      ))}
    </div>
    <button className="p-2 w-full text-2xl mt-4 rounded-xl shadow-lg" style={{ background: "linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)" }} onClick={handleApplyClick}>
      Apply
    </button>
  </div>
);

Goals.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeButton: PropTypes.string,
  handleButtonClick: PropTypes.func.isRequired,
  handleApplyClick: PropTypes.func.isRequired,
};

export default Goals;
