import DropArrow from "./DropArrow";

const DropDown = () => {
  return (
    <>
      <div className="w-[333px] h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
        <div className="self-stretch grow shrink basis-0 rounded border-2 border-gray-100 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch grow shrink basis-0 pl-4 py-1 rounded-tl rounded-tr justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 py-1 flex-col justify-center items-start inline-flex">
              <div className="justify-start items-center inline-flex">
                <div className="text-gray-100 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Choice your country</div>
              </div>
            </div>
            <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                <div className="p-2 justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative">
                    <DropArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
