import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `  https://newsapi.org/v2/everything?q=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }
 `;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="bg-secondary ">
        <marquee behavior="" direction="">
          <span className="badge bg-danger text-white fst-italic ">
            Top Headlines
          </span>
        </marquee>
      </h2>
      {articles &&
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            author={news.author}
            publishedAt={news.publishedAt}
          />
        ))}
    </div>
  );
};

export default NewsBoard;
