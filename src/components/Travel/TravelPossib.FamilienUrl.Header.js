import React, { useState } from 'react';
import { Box, Container, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTransition, animated } from 'react-spring';

const SliderArrow = ({ direction, onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction === 'left' ? 'left' : 'right']: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#aa8055',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        zIndex: 2,
      }}
    >
      {direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </IconButton>
  );
  
  const SliderCard = ({ link, imgSrc, title, style }) => (
    <animated.div style={{ ...style, width: '100%', position: 'absolute' }}>
      <Card
        component="a"
        href={link}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
          },
          borderRadius: '12px',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: '50vh', objectFit: 'cover', width: '100%' }} />
        <CardContent sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </animated.div>
  );
  
  export default function FamilienurlaubHeader() {
    const sliderItems = [
      {
        link: 'https://www.designreisen.de/luxusreisen/reisethemen/luxus-yachtcharter-weltweit',
        imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/9/0/csm_fam_yachting_41f7644fe7.jpg',
        title: 'Luxus Yachtcharter weltweit',
      },
      {
        link: 'https://www.designreisen.de/luxusreisen/reisethemen/luxus-yachtcharter-weltweit',
        imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/6/6/csm_yachtwordl_1323b56590.jpg',
        title: 'Luxus Yachtcharter weltweit',
      },
      {
        link: '',
        imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/6/c/csm_swimmingworld_d58933117d.jpg',
        title: 'Luxus Yachtcharter weltweit',
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');
  
    const handlePrevSlide = () => {
      setDirection('left');
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
    };
  
    const handleNextSlide = () => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
    };
  
    const transitions = useTransition(currentIndex, {
      from: {
        opacity: 0,
        transform: direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
      },
      enter: {
        opacity: 1,
        transform: 'translateX(0%)',
      },
      leave: {
        opacity: 0,
        transform: direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)',
      },
      config: { tension: 280, friction: 30 },
    });
  
    return (
      <Box sx={{ position: 'relative', paddingBottom: '105px' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#aa8055',
              marginBottom: 4,
              textTransform: 'uppercase',
            }}
          >
            Luxus Yachtcharter weltweit
          </Typography>
          <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />
          <Box sx={{ overflow: 'hidden', position: 'relative', width: '100%', height: '50vh' }}>
            <SliderArrow direction="left" onClick={handlePrevSlide} />
            <Box sx={{ width: '100%', position: 'relative', height: '50vh' }}>
              {transitions((style, index) => (
                <SliderCard
                  key={index}
                  link={sliderItems[index].link}
                  imgSrc={sliderItems[index].imgSrc}
                  title={sliderItems[index].title}
                  style={style}
                />
              ))}
            </Box>
            <SliderArrow direction="right" onClick={handleNextSlide} />
          </Box>
        </Container>
      </Box>
    );
  }