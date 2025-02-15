import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = "b993d180fa78484d8215ec096e341438";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const NewsSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      style={{ width: "100%", height: "400px" }}
    >
      {articles.map((article, index) => (
        <SwiperSlide key={index}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={article.urlToImage || "https://via.placeholder.com/800x400"}
              alt={article.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                maxWidth: "90%",
              }}
            >
              <h3>{article.title}</h3>
              <p>{article.description ? article.description.substring(0, 100) + "..." : "No description available."}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffcc00" }}>
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSlider;
