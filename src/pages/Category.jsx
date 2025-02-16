import React, { useState, useEffect } from "react";
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

// API key for the News API
const API_KEY = "b993d180fa78484d8215ec096e341438";

// Category component: fetches and displays news articles for a selected category.
// The category can be chosen via a dropdown or provided via URL parameters.
function Category() {
  // State to store fetched articles
  const [articles, setArticles] = useState([]);
  // Loading state to show a spinner during API requests
  const [loading, setLoading] = useState(true);
  // State to manage the selected category; default is "business"
  const [category, setCategory] = useState("business");

  // Get the category parameter from the URL if available
  const { categoryParam } = useParams();

  // Fetch articles whenever the selected category or URL parameter changes
  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      try {
        // Use the category from state or fall back to the URL parameter
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category || categoryParam}&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching the articles:", error);
      }
      setLoading(false);
    };
    fetchArticles();
  }, [category, categoryParam]);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {/* Category selection dropdown */}
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Select Category</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="entertainment">Entertainment</MenuItem>
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="health">Health</MenuItem>
                <MenuItem value="science">Science</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="technology">Technology</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Articles display section */}
          <Grid item xs={12} sm={9}>
            {loading ? (
              // Show loading spinner while fetching data
              <CircularProgress />
            ) : (
              // Map through articles and display each in a Card
              articles.map((article, index) => (
                <Card key={index} sx={{ marginBottom: 3 }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">{article.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{article.description}</Typography>
                  </CardContent>
                </Card>
              ))
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Category;
