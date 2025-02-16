import React, { useEffect, useState } from "react";
import NewsSlider from "../components/NewsSlider";
import '../styles/Home.css'

// API configuration
const API_KEY = "b993d180fa78484d8215ec096e341438";
const PAGE_SIZE = 10; 

function Home() {
    // State to store the fetched articles, total results count, and current page for pagination
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch top headlines from the News API whenever the currentPage changes
    useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
            );
            const data = await response.json();
            if (data.articles) {
              // Update state with fetched articles and total results
              setArticles(data.articles);
              setTotalResults(data.totalResults);
            }
          } catch (error) {
            console.error("Error fetching news:", error);
          }
        };
    
        fetchNews();
    }, [currentPage]);

    // Calculate the total number of pages based on the total results and page size
    const totalPages = Math.ceil(totalResults / PAGE_SIZE);

    return(
        <>
            <h2>Latest News</h2>
            {/* Display a slider of featured news */}
            <NewsSlider />
            
            <h2>More News</h2>
            <div className="moreNews">
                {/* Skip the first 3 articles and display the remaining articles */}
                {articles.slice(3).map((article, index) => (
                    <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                        <h3>{article.title}</h3>
                        <p>{article.description || "No description available."}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>
                    Page {currentPage} of {totalPages}
                </span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Home;
