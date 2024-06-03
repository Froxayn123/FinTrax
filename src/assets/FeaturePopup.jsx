import PropTypes from 'prop-types';
import AddTransactionModal from '../components/AddTransactionModal';
import SavingModal from '../components/SavingModal';
import PlanModal from '../components/PlanModal';

const FeaturePopup = ({ feature, onClose }) => {
  if (!feature) return null;

  const renderModal = () => {
    if (feature.id === 'feature1') {
      return <AddTransactionModal isOpen={true} onClose={onClose} onAddTransaction={() => {}} />;
    } else if (feature.id === 'feature5') {
      return <SavingModal isOpen={true} onClose={onClose} />;
    } else if (feature.id === 'feature3') {
      return <PlanModal isOpen={true} onClose={onClose} />;
    } else {
      return (
        <div className="bg-white p-4 rounded shadow-lg relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-black">Close</button>
          <div className="p-4">
            <img src={feature.img} alt="" className="w-full h-auto" />
            <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">{feature.title}</h1>
            <p className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight tracking-tight">{feature.desc}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {renderModal()}
    </div>
  );
};

FeaturePopup.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default FeaturePopup;
