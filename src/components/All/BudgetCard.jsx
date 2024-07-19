import PropTypes from "prop-types";

const BudgetCard = ({ imgSrc, title, price, onButtonClick }) => (
  <div className="relative flex items-center bg-white bg-opacity-5 border-2 border-white border-opacity-20 p-4 rounded-2xl shadow-md">
    <div className="absolute top-2 right-2">
      <button className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-full w-8 h-8 flex items-center justify-center" onClick={onButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
    <div>
      <img src={imgSrc} alt={title} className="w-12 h-12 mr-4" />
      <h3 className="text-white text-lg font-medium">{title}</h3>
      <p className="text-gray-400">{price}</p>
    </div>
  </div>
);

BudgetCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default BudgetCard;
