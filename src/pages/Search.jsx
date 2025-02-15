import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Typography, CircularProgress, TextField, Button } from "@mui/material";
import NewsCard from "./NewsCard"; 


const SearchPage = () => {
  const { searchQuery } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    if (!searchQuery || !searchQuery.trim()) {
      setArticles([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=b993d180fa78484d8215ec096e341438`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [searchQuery]);

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
