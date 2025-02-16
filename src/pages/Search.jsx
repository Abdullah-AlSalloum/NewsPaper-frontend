import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography, CircularProgress } from "@mui/material";



const API_KEY = "b993d180fa78484d8215ec096e341438";

const Search = () => {
  // Extract the 'query' parameter from the URL
  const { query } = useParams();

  // State to store the list of articles fetched from the API
  const [articles, setArticles] = useState([]);
  // State to handle the loading status during the fetch operation
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch search results whenever the query changes
  useEffect(() => {
    // Asynchronous function to fetch search results from the News API
    const fetchSearchResults = async () => {
      // Set loading state to true before initiating the fetch
      setLoading(true);
      try {
        // Fetch news articles matching the search query using the News API endpoint
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
        );
        // Parse the response data into JSON format
        const data = await response.json();
        // Update the articles state with the retrieved data
        setArticles(data.articles);
      } catch (error) {
        // Log an error message to the console if the fetch fails
        console.error("Error fetching search results:", error);
      }
      // Set loading state to false after the fetch operation is complete
      setLoading(false);
    };

    // Call the function to fetch search results
    fetchSearchResults();
  }, [query]); // Dependency array ensures this effect runs whenever 'query' changes

  return (
    <Container>
      {/* Display a header showing the search query */}
      <Typography variant="h4" sx={{ my: 2 }}>
        Search Results for "{query}"
      </Typography>
      {loading ? (
        // If the data is still loading, display a circular progress indicator
        <CircularProgress />
      ) : articles.length > 0 ? (
        // If articles exist, map through the array and render each article in a Card
        articles.map((article, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              {/* Display the title of the article */}
              <Typography variant="h6">{article.title}</Typography>
              {/* Display the article description or a fallback message if it's unavailable */}
              <Typography variant="body2" color="textSecondary">
                {article.description || "No description available."}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        // If no articles are found, display a message indicating so
        <Typography>No articles found.</Typography>
      )}
    </Container>
  );
};

export default Search;
