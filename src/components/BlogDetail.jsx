import { useParams } from "react-router-dom";
import { BlogDatas } from "../data/BlogDatas";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogDatas.find((blog) => blog.id === id);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-[100px] my-[100px]">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="text-white text-[57px] mt-20 w-[828px] text-center font-medium font-['Roboto']">{blog.title}</h1>
          <img src={blog.img} alt={blog.title} className="w-[720px] h-[480px]" />
          <div className="text-gray-100 w-[1035px] text-xl font-normal font-['Roboto'] space-y-4">
            {blog.detail.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BlogDetail;
