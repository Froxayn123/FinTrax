import PropTypes from "prop-types";

const Insight = ({ insight, handleCloseInsight }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-[#001833] bg-opacity-90 border-2 border-white border-opacity-20 p-6 rounded-xl shadow-lg mr-28 ml-96">
      <h2 className="text-white text-2xl mb-4 text-center border-b-2 pb-2">Insight</h2>
      <div className="text-white">{insight}</div>
      <button className="mt-4 p-2 w-full rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white" onClick={handleCloseInsight}>
        Close
      </button>
    </div>
  </div>
);

Insight.propTypes = {
  insight: PropTypes.node.isRequired,
  handleCloseInsight: PropTypes.func.isRequired,
};

export default Insight;
