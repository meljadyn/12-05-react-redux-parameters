import "./SingleArticle.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const articles = useSelector((state) => state.articleState.entries);

  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={`screenshot from ${article.title}`} />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
