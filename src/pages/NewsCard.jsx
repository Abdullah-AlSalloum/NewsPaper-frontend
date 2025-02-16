import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

// NewsCard component: displays a news article with an image, title, description, and a "Read More" button.
const NewsCard = ({ article }) => {
  return (
    <Card>
      {/* Render the article image only if a valid image URL exists */}
      {article.urlToImage && (
        <CardMedia
          component="img"
          alt={article.title}
          height="140"
          image={article.urlToImage}
        />
      )}
      {/* Display article details and a button linking to the full article */}
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {article.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={article.url}
          target="_blank"
          fullWidth
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
