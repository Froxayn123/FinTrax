import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TipsCard = ({ title, desc, img, createdAt, views, comments }) => {
  return (
    <div className="w-[602px] h-[400px] p-[40px] flex flex-col justify-start items-center bg-white bg-opacity-10 border border-white border-opacity-10 rounded-lg">
      <div className="grid grid-cols-2 gap-2 justify-center">
        <img src={img} alt="" className="w-[231px] h-[333px] rounded-md" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-white text-base text-[23px] font-semibold font-['Roboto'] mb-[16px]">{title}</h1>
          <p className="text-white text-sm font-normal font-['Roboto'] mb-[24px]">{desc}</p>
          <div className="flex items-center gap-4 text-white text-sm font-normal mb-[24px]">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-chat-left mr-1 text-[#8C3FD9]">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
              {comments}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill mr-1 text-[#8C3FD9]" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
              {views}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock mr-1 text-[#8C3FD9]" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              {createdAt}
            </div>
          </div>
          <Link to="#" className="text-white underline text-sm font-normal">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

TipsCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  createdAt: PropTypes.string,
  views: PropTypes.string,
  comments: PropTypes.string,
};

export default TipsCard;
