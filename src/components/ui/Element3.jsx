const Element3 = () => {
  return (
    <div className="w-[205px] relative flex flex-col space-y-16">
      <div className="flex relative">
        <img src="/Avatar1.png" alt="" className="absolute inset-x-[15px] rounded-full" />
        <img src="/Avatar2.png" alt="" className="absolute inset-x-[63px] rounded-full" />
        <img src="/Avatar3.png" alt="" className="absolute inset-x-[103px] rounded-full" />
        <img src="/Avatar1.png" alt="" className="absolute inset-x-[143px] blur-[1px] rounded-full" />
      </div>
      <div className="flex justify-center items-center space-x-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#64CC4A" />
          </svg>
        </div>
        <h1 className="font-roboto text-[16px] text-white capitalize">active users</h1>
      </div>
    </div>
  );
};

export default Element3;
