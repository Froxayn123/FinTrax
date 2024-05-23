import PropTypes from "prop-types";
import Button from "../assets/Button";

const BlogCard = ({ title, desc, img }) => {
  return (
    <>
      <div className="w-[360px] h-[480px] p-4 flex flex-col justify-start items-center bg-gradient-trinary rounded-md space-y-8 relative -z-10">
        <h1 className="text-slate-900 text-base font-medium font-['Roboto']">{title}</h1>
        <img src={img} alt="" />
        <p className="text-slate-900 text-sm font-normal font-['Roboto']">{desc}</p>
        <Button title="Read More" colors="bg-gradient-primary absolute bottom-4 end-4" onClick={() => {}} />
      </div>
    </>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

export default BlogCard;
