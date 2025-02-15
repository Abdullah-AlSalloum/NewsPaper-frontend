import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const NewsCard = ({ article }) => {
  return (
    <Card>
      {article.urlToImage && (
        <CardMedia
          component="img"
          alt={article.title}
          height="140"
          image={article.urlToImage}
        />
      )}
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
