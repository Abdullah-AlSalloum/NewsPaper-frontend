import React from "react";
import { Container, Grid, Typography, Box, Paper, Avatar, Chip, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        {/* Profile Section */}
        <Avatar
          alt="Abdullah AL SALLOUM"
          src="/path/to/your-profile-pic.jpg"
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          Abdullah AL SALLOUM
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mb: 3 }}>
          Computer Engineer | Software Developer
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          I'm a Computer Engineer with expertise in software development, object-oriented programming (OOP), and database management. Proficient in JavaScript, React, Node.js, and Python, I have hands-on experience in building web applications, machine learning, automation, and cloud platforms. I strive for creating clean, efficient, and maintainable code.
        </Typography>
      </Box>

      {/* Education Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Bachelor of Computer Engineering"
              secondary="University of Karabuk – Turkey | Sep 2021 – Jan 2025"
            />
          </ListItem>
        </List>
      </Box>

      {/* Work Experience Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Software Engineering (Self-directed Projects & Freelance Work)"
              secondary="Jan 2021 – Present"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 3 }}>
              - Developed full-stack web applications using HTML, CSS, JavaScript, and React.
              - Applied Object-Oriented Programming principles in automation projects with C++ and C#.
              - Utilized Git for version control and collaborated on codebases via GitHub.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Skills
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <Chip label="JavaScript" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="React" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Node.js" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Python" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="CSS" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="HTML" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Git/GitHub" variant="outlined" />
          </Grid>
        </Grid>
      </Box>

      {/* Certifications Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Certifications
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Database Design and Programming with SQL" secondary="ORACLE Academy (Jul 2022)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Training of Trainers" secondary="Sida Organization (Oct 2018)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time Management" secondary="Sida Organization (Sep 2018)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Conflict-Sensitive Business Skills" secondary="SPARK Organization (Aug 2018)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Digital Financial Training" secondary="The ANSWER for Development and Training (Apr 2018)" />
          </ListItem>
        </List>
      </Box>

      {/* Projects Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Projects
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            Movie Recommendation System
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            A recommendation system built using Python with collaborative filtering. Used Kaggle datasets and machine learning algorithms for predictive modeling.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technologies: Python, Scikit-learn, Pandas, NumPy
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            Fingerprint Detection and Matching System
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            A fingerprint matching system developed using Python and OpenCV. It utilizes the SIFT algorithm for robust fingerprint detection and matching.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technologies: Python, OpenCV, Image Processing
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            Apple-like Website
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            A responsive website designed based on Apple’s core design principles. Built with HTML, CSS, and JavaScript focusing on clean UI/UX.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technologies: HTML, CSS, JavaScript
          </Typography>
        </Paper>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          Get in touch with me!
        </Typography>
        <Typography variant="body1">
          Email: abdullahalsalloum06@gmail.com | LinkedIn:{" "}
          <Link href="https://www.linkedin.com/in/abdullahalsalloum" target="_blank">
            linkedin.com/in/abdullahalsalloum
          </Link>{" "}
          | GitHub:{" "}
          <Link href="https://github.com/Abdullah-AlSalloum" target="_blank">
            github.com/Abdullah-AlSalloum
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
