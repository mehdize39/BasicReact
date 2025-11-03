import axios from "axios";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbare/Navbar";
import TextArea from "../../components/textarea/TextArea";
import styled from "./createArticle.module.css";
import { useState } from "react";

const CreateArticle = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    message: "",
    imageUrl: "",
  });

  const handleChangeArticle = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeArticleMessage = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      message: value,
    }));
  };

  const handleCreateArticle = (e) => {
    axios.post("http://localhost:8000/articles", {
      id: 4,
      title: articleData.title,
      // date: articleData.date,
      description: articleData.readingTime,
      // author: articleData.author,
      // message: articleData.message,
      image: articleData.imageUrl,
    });
  };
  return (
    <>
      <Navbar />
      <div className={styled.CreateArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>
          <Input
            label="عنوان"
            name="title"
            handleChange={handleChangeArticle}
          />
          <Input label="تاریخ" name="date" handleChange={handleChangeArticle} />
          <Input
            label="مدت زمان خواندن"
            name="readingTime"
            handleChange={handleChangeArticle}
          />
          <Input
            label="نویسنده"
            name="author"
            handleChange={handleChangeArticle}
          />
          <TextArea
            label="متن مقاله"
            handleChange={handleChangeArticleMessage}
          />
          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateArticle}>ایجاد مقاله</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
