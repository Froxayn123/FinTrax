import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, previousQuestion } from "../redux/quizSlice";
import Button from "../assets/Button";
import { quizQuestions } from "../data/QuizQuestions";

const QuizForm = () => {
  const question = useSelector((state) => state.counterQuiz.value);
  const counter = useSelector((state) => state.counterQuiz.counter);
  const answers = question[counter].answers;
  const dispatch = useDispatch();

  return (
    <>
      <section
        id="QuizForm"
        className="h-[600px] px-8 pt-8 pb-16 fixed top-1/2 left-1/2 -translate-x-[5000px] -translate-y-1/2 transition-all ease-out delay-500 duration-1000 rounded-[30px] shadow border border-white backdrop-blur-[14.35px] z-50"
      >
        <div className="w-[946px] flex-col justify-center items-start gap-6 inline-flex" onClick={(e) => e.stopPropagation}>
          <div className="self-stretch h-[45px] border-b border-neutral-500 justify-center items-center inline-flex">
            <h2 className="w-[946px] self-stretch text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">{question[counter].no}/12</h2>
          </div>
          <div className="self-stretch flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <h1 className="text-gray-100 text-[32px] font-normal font-['Roboto'] leading-10">{question[counter].question}</h1>
              <div className="flex-col justify-start items-start gap-4 flex">{answers}</div>
            </div>
            <div className="flex flex-row-reverse justify-center items-center gap-6 absolute bottom-10 ">
              {counter === quizQuestions.length - 1 ? (
                <Button title="submit" onClick={() => dispatch(nextQuestion())} colors="bg-gradient-secondary" />
              ) : (
                <Button title="next" onClick={() => dispatch(nextQuestion())} colors="bg-gradient-secondary" />
              )}

              {counter === 0 ? "" : <Button title="back" onClick={() => dispatch(previousQuestion())} colors="border border-gray-100" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizForm;
