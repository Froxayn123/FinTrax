import PropTypes from "prop-types";

const ArticleCard = ({ img, title, desc }) => {
  return (
    <>
      <div className="w-[590px] h-[146px] px-[16px] py-[8px] flex justify-center items-center space-x-[16px] border-l-2 border-l-[#D91AFF] ">
        <img src={img} alt="article.png" />
        <div>
          <h1 className=" text-gray-200 text-[22px] font-medium font-['Roboto'] leading-7">{title}</h1>
          <p className=" text-gray-200 text-base font-normal font-['Roboto'] leading-normal tracking-wide">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

ArticleCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
