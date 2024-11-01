import React from 'react';
import { Container, Grid, Box, Typography, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Fade in={inView} timeout={1500}>
      <div ref={ref}>{children}</div>
    </Fade>
  );
};

const HomePagePanel = ({ title, description, image }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 10, px: 5, borderRadius: '16px', boxShadow: 3, mb: 8, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <FadeInSection>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 3, color: '#ffffff' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: 2 }}
            />
          </Grid>
        </Grid>
      </FadeInSection>
    </Container>
  );
};

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#121212', py: 10 }}>
      <HomePagePanel
        title="Welcome to Our Service"
        description="Experience the best of our offerings with a seamless and delightful interface. Our platform is designed with you in mind, providing intuitive navigation and exceptional features to enhance your experience."
        image="https://via.placeholder.com/600"
      />
      <HomePagePanel
        title="Innovative Solutions"
        description="We provide state-of-the-art solutions that help you stay ahead in your industry. Our innovation-driven approach ensures that you have the tools you need to succeed in an ever-changing environment."
        image="https://via.placeholder.com/600"
      />
      <HomePagePanel
        title="Reliable Support"
        description="Our support team is available 24/7 to assist you with any questions or issues you might have. We are committed to ensuring your satisfaction and success, offering prompt and effective solutions every time."
        image="https://via.placeholder.com/600"
      />
    </Box>
  );
};

export default HomePage;
