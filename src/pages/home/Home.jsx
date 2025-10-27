import { useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbare/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useState(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={styled.homeWrapper}>
      <Navbar title="مهدی بلاگ" />
      <div className="container">
        <h2>مقالات اخیر</h2>
        {isLoading ? (
          <p>چند لحظه صبر کنید</p>
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
