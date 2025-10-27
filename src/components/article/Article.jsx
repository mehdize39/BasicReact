import styled from "./article.module.css";
// import article from "./../../assets/images/js.png";

function Article(props) {
  //   console.log(props);
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.image} />
      <h3>{props.article.title}</h3>
      <p>{props.article.description}</p>
    </div>
  );
}

export default Article;
