// Search.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography, CircularProgress } from "@mui/material";

const API_KEY = "b993d180fa78484d8215ec096e341438";

const Search = () => {
  const { query } = useParams(); // gets the search query from the URL
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Search Results for "{query}"
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{article.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {article.description || "No description available."}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No articles found.</Typography>
      )}
    </Container>
  );
};

export default Search;
