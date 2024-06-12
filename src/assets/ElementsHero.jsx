import Element1 from "./Element1";
import Element2 from "./Element2";
import Element3 from "./Element3";
import Element4 from "./Element4";

const ElementsHero = () => {
  return (
    <>
      <div className="absolute top-0 end-[625px] hidden md:block">
        <div className="relative">
          <div className="absolute">
            <Element1 />
          </div>
          <div className="absolute top-[200px] start-[224px]">
            <Element2 />
          </div>
          <div className="absolute top-[390px]">
            <Element3 />
          </div>
          <div className="absolute top-[500px]">
            <Element4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementsHero;