import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define the API key and URL to fetch top headlines from the US
const API_KEY = "b993d180fa78484d8215ec096e341438";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const NewsSlider = () => {
  // State to store fetched articles
  const [articles, setArticles] = useState([]);

  // Fetch news articles when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // Limit the slider to display only the first 3 articles
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
    // Swiper slider configuration with navigation, pagination, autoplay, and looping
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
      {/* Map through the articles and create a slide for each */}
      {articles.map((article, index) => (
        <SwiperSlide key={index}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {/* Display the article image or a placeholder if unavailable */}
            <img
              src={article.urlToImage || "https://via.placeholder.com/800x400"}
              alt={article.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Overlay containing the article title, description, and a "Read More" link */}
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
              <p>
                {article.description
                  ? article.description.substring(0, 100) + "..."
                  : "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffcc00" }}
              >
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
