import Button from "./Button";
import anime from "animejs";

const HeroIntro = () => {
  return (
    <>
      <div className="py-[184px] w-[512px] space-y-[24px] text-center md:text-left">
  <h1 className="font-roboto text-[45px] text-[#E9E9E9]">
    Take Control of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DF1AFF] to-[#BE48FF]">Finances</span>
  </h1>
  <p className="font-roboto text-[16px] text-[#E9E9E9] text-justify">
    Manage your money with ease and confidence. Our tools for tracking income and expenses, creating budgets, and setting financial goals are designed to help you make smarter financial decisions. Discover personalized investment and
    savings recommendations, and explore a wealth of financial tips to guide you toward a brighter financial future.
  </p>
  <Button
    title="get started"
    colors={"bg-gradient-primary"}
    onClick={() => {
      anime({
        targets: document.getElementById("QuizForm"),
        translateX: "-50%",
        translateY: "-50%",
      });
    }}
    className="mx-auto md:mx-0" // Membuat tombol menjadi rata tengah secara horizontal di layar ponsel
  />
</div>

    </>
  );
};

export default HeroIntro;
