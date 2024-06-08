import NotifItem from "../components/NotifItem";
import Sidebar from "../components/Sidebar";
import { Notifications } from "../data/Notifications";

const Notification = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <div>
            <h1 className="p-16 text-white text-4xl font-semibold font-['Roboto']">Notification</h1>
            <div className="flex flex-col justify-center items-center space-y-3">
              <p className="text-white text-base font-medium font-['Roboto'] leading-normal tracking-tight">We may still send you important notifications about your account outside of your notification settings</p>
              <div className="w-[721px] h-[517px] p-8 border border-white rounded-[15px] bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[14.35px] flex justify-center items-center">
                <div className="w-full flex flex-col justify-center items-start space-y-3">
                  {Notifications.map((notif, i) => {
                    return <NotifItem key={i} id={notif.id} title={notif.title} desc={notif.desc} isChecked={notif.isChecked} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
