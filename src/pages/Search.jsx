import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, CircularProgress, TextField, Button } from "@mui/material";
import NewsCard from "./NewsCard";  // Import the NewsCard component

const SearchPage = () => {
  const { searchQuery } = useParams();  // Get the search query from the URL
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState(searchQuery || "");

  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);

    if (!searchQuery.trim()) {
      setArticles([]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=b993d180fa78484d8215ec096e341438`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (err) {
      setError("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search/${searchInput.trim()}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <TextField
          variant="outlined"
          label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit">Search</Button>
      </form>
      
      <Typography variant="h4" gutterBottom>
        Search Results for "{searchQuery}"
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography variant="h6" color="error">{error}</Typography>}
      {articles.length === 0 && !loading && !error && (
        <Typography>No articles found for "{searchQuery}"</Typography>
      )}
      {articles.length > 0 && (
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard article={article} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchPage;
