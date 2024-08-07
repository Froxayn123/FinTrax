import PropTypes from "prop-types";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, desc, img, id }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="w-[360px] h-[480px] p-4 flex flex-col justify-start items-center bg-white bg-opacity-10 border border-white border-opacity-10 rounded-lg space-y-8 relative">
      <h1 className="text-white text-base font-medium font-['Roboto']">{title}</h1>
      <img src={img} alt="" />
      <p className="text-white text-sm font-normal font-['Roboto']">{desc}</p>
      <Button title="Read More" colors="bg-gradient-primary absolute bottom-4 end-4" onClick={handleReadMore} />
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
};

export default BlogCard;
