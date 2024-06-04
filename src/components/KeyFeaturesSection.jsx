import KeyFeature1 from "../assets/KeyFeature1";
import KeyFeature2 from "../assets/KeyFeature2";

const KeyFeaturesSection = () => {
  return (
    <>
      <section className="flex justify-evenly items-center py-[100px] mt-[96px]">
        <h1 className="w-[590px] text-gray-200 text-[40px] font-bold font-['Roboto'] leading-[48px]">Key Features</h1>
        <div className="py-[20px] flex justify-center items-center space-x-[40px]">
          <div className="flex flex-col justify-start items-center">
            <KeyFeature1 />
            <h1 className="w-[275px] text-center text-gray-200 text-[28px] font-medium font-['Roboto'] leading-9">Monitor your spending habits</h1>
          </div>
          <div className="flex flex-col justify-start items-center">
            <KeyFeature2 />
            <h1 className="w-[275px] text-center text-gray-200 text-[28px] font-medium font-['Roboto'] leading-9">Set achievable money goals</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeaturesSection;
