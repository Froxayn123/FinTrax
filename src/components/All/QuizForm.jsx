import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@/components/ui/Button";
import ButtonTransparent from "@/components/ui/ButtonTransparent";
import { quizQuestions } from "@/data/QuizQuestions";

const QuizForm = ({ onSubmit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handlerOnChange = (e) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers];
    });
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentSlide] = e.target.value;
      return updatedAnswers;
    });
  };

  const renderForm = () => {
    const question = quizQuestions[currentSlide];

    return (
      <div className="w-[946px] flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-[45px] border-b border-neutral-500 justify-center items-center inline-flex">
          <h2 className="w-[946px] self-stretch text-gray-100 text-2xl font-normal font-['Roboto'] leading-loose">{currentSlide + 1}/12</h2>
        </div>
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <h1 className="text-gray-100 text-[32px] font-normal font-['Roboto'] leading-10">{question.text}</h1>
            <div className="flex-col justify-start items-start gap-4 flex">
              {question.options.map((option, i) => {
                return (
                  <div key={i} className="flex justify-center items-center space-x-[20px] focus:bg-slate-500">
                    <input
                      type="radio"
                      id={`option-${currentSlide}-${i}`}
                      name={question.id}
                      value={option}
                      className=" checked:bg-purple-700 checked:hover:bg-purple-700 checked:active:bg-purple-700 checked:focus:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 transition-all ease-in-out duration-500"
                      onChange={handlerOnChange}
                      checked={userAnswers[currentSlide] === option}
                    />
                    <label htmlFor={`option-${currentSlide}-${i}`} className="text-gray-100 text-[22px] font-medium font-['Roboto'] leading-7">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row-reverse justify-center items-center gap-6 absolute bottom-10 ">
            {currentSlide == quizQuestions.length - 1 ? (
              <Button type="submit" title="submit" colors="bg-gradient-secondary" />
            ) : (
              <Button type="button" title="next" onClick={() => setCurrentSlide(currentSlide + 1)} colors="bg-gradient-secondary" />
            )}
            {currentSlide == 0 ? "" : <ButtonTransparent type="button" title="back" onClick={() => setCurrentSlide(currentSlide - 1)} colors="border border-gray-100" />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <form
      id="QuizForm"
      className="h-[600px] px-8 pt-8 pb-16 fixed top-1/2 left-1/2 -translate-x-[5000px] -translate-y-1/2 transition-all ease-out delay-500 duration-1000 rounded-[30px] shadow border border-white backdrop-blur-[14.35px] z-50"
      onSubmit={onSubmit}
    >
      {renderForm()}
    </form>
  );
};

export default QuizForm;

QuizForm.propTypes = {
  onSubmit: PropTypes.func,
};
