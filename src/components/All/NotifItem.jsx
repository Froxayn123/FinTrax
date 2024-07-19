import PropTypes from "prop-types";

const NotifItem = ({ id, title, desc, isChecked }) => {
  return (
    <div className="w-full p-5 flex justify-between items-center bg-slate-900 rounded-[15px]">
      <label htmlFor={id}>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-zinc-200 text-base font-normal font-['Roboto'] select-none">{title}</h1>
          <p className="text-stone-300 text-sm font-normal font-['Roboto'] select-none">{desc}</p>
        </div>
      </label>
      <input type="checkbox" id={id} name={title} value="Bike" checked={isChecked} className="p-3 text-[#8A00D4] focus:ring-[#8A00D4]" />
    </div>
  );
};

NotifItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default NotifItem;
