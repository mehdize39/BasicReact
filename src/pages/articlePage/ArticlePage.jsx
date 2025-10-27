import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticles] = useState({});

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticles(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} />
      <h3>{article.description}</h3>
    </div>
  );
}

export default ArticlePage;
