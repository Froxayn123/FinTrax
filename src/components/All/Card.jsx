import PropTypes from 'prop-types';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white bg-opacity-10 border-2 border-white border-opacity-25 p-4 ml-12 mt-12 mr-12 rounded-xl">
      <h2 className="text-white text-2xl font-semibold mb-4 border-b-2 pb-2 border-[#797979] ">{title}</h2>
      <p className="text-white">{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
