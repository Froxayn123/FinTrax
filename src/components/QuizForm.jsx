import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, previousQuestion } from "../redux/quizSlice";
import Chooser from "../assets/Chooser";
import anime from "animejs";
import { useEffect } from "react";

const QuizForm = () => {
  const question = useSelector((state) => state.counterQuiz.value);
  const counter = useSelector((state) => state.counterQuiz.counter);
  const answers = question[counter].answers;
  const dispatch = useDispatch();

  let chooser = [];
  for (let i = 0; i < answers.length; i++) {
    chooser.push(<Chooser key={i} text={answers[i]} />);
  }

  useEffect(() => {
    anime({
      targets: document.getElementById("QuizForm"),
      translateX: "-50%",
      translateY: "-50%",
    });
  });

  return (
    <>
      <section
        id="QuizForm"
        className="h-[600px] px-8 pt-8 pb-16 fixed top-1/2 left-1/2 -translate-x-[5000px] -translate-y-1/2 transition-all ease-out delay-1000 duration-1000 rounded-[30px] shadow border border-white backdrop-blur-[14.35px] z-50"
      >
        <div className="w-[946px] flex-col justify-center items-start gap-6 inline-flex" onClick={(e) => e.stopPropagation}>
          <div className="self-stretch h-[45px] border-b border-neutral-500 justify-center items-center inline-flex">
            <h2 className="w-[946px] self-stretch text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">{question[counter].no}/12</h2>
          </div>
          <div className="self-stretch flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <h1 className="text-gray-100 text-[32px] font-normal font-['Roboto'] leading-10">{question[counter].question}</h1>
              <div className="flex-col justify-start items-start gap-4 flex">{chooser}</div>
            </div>
            <div className="flex flex-row-reverse justify-center items-center gap-6 absolute bottom-10 ">
              {counter === 11 ? (
                <button className="px-6 py-1.5 bg-gradient-to-b from-purple-700 to-fuchsia-700 text-center text-gray-100 text-sm font-medium font-['Roboto'] leading-tight tracking-tight rounded-lg" onClick={() => dispatch(nextQuestion())}>
                  Submit
                </button>
              ) : (
                <button className="px-6 py-1.5 bg-gradient-to-b from-purple-700 to-fuchsia-700 text-center text-gray-100 text-sm font-medium font-['Roboto'] leading-tight tracking-tight rounded-lg" onClick={() => dispatch(nextQuestion())}>
                  Next
                </button>
              )}

              {counter === 0 ? (
                ""
              ) : (
                <button className="px-6 py-1.5 rounded-lg text-center border border-gray-100 text-gray-100 text-sm font-medium font-['Roboto'] leading-tight tracking-tight" onClick={() => dispatch(previousQuestion())}>
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizForm;
