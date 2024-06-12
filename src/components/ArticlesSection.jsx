import ArticleCard from "../assets/ArticleCard";
import Button from "../assets/Button";
import { articles } from "../data/Articles";
import { useNavigate } from 'react-router-dom';

const ArticlesSection = () => {
  const navigate = useNavigate();

  return (
    <>
  <section className="py-[60px] flex justify-between items-center mt-[96px]">
    <div className="space-y-[24px]">
      <h1 className="w-[590px] text-gray-200 text-[40px] font-bold font-['Roboto'] leading-[48px]">Financial Tips & Articles</h1>
      <p className="w-[590px] text-gray-200 text-[22px] font-medium font-['Roboto'] leading-7">We offer a variety of articles and tips to help you improve your financial literacy.</p>
      <Button
        title="Explore More"
        colors={"bg-gradient-primary"}
        onClick={() => navigate('/FinancialTips')}
      />
    </div>
    <div className="hidden md:block grid grid-rows-2 gap-4">
      {articles.map((article, i) => {
        return <ArticleCard key={i} img={article.img} title={article.title} desc={article.desc} />;
      })}
    </div>
  </section>
  <div className="md:hidden grid grid-rows-2 gap-4">
    {articles.map((article, i) => {
      return <ArticleCard key={i} img={article.img} title={article.title} desc={article.desc} />;
    })}
  </div>
</>

  );
};

export default ArticlesSection;