import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroNews } from "../../components/hero/heroNews/HeroNews";
import { NewsCategories } from "../../components/newsCategories/NewsCategories";

const News = () => {
  return (
    <>
      <HeroNews />
      <NewsCategories />
      <FooterForm />
    </>
  );
};

export default News;
