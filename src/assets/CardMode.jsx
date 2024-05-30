import PropTypes from 'prop-types';

const CardMode = ({ imageSrc, label, onClick, darkMode }) => {
  return (
    <div 
      className={`max-w-xs rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-transparent transition duration-300 ${darkMode ? 'bg-gray-800 text-white hover:border-blue-500 active:border-blue-700' : 'bg-gray-800 text-white hover:border-blue-500 active:border-blue-700'}`}
      onClick={onClick}
    >
      <img className="w-full" src={imageSrc} alt={label} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{label}</div>
      </div>
    </div>
  );
};

CardMode.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default CardMode;
