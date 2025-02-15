import React, { useState, useEffect } from "react";
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "b993d180fa78484d8215ec096e341438";

function Category(){
    const [articles, setArticles] = useState([]);
     const [loading, setLoading] = useState(true);
     const [category, setCategory] = useState("business");

     const { categoryParam } = useParams(); // To get category from URL if necessary

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category || categoryParam}&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the articles:", error);
        setLoading(false);
      }
    };
    fetchArticles();
  }, [category, categoryParam]);

    return(
        <>
         <Container>
      <Grid container spacing={3}>
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
        <Grid item xs={12} sm={9}>
          {loading ? (
            <CircularProgress />
          ) : (
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
    )
}

export default Category;