import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from "../sliderData";
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #f1f2f6;
    position: relative;
    overflow: hiden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #dfe4ea;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction ==="left" && "10px"};
    right: ${props=> props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.75s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=>props.bg}
`;

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 15cdpx;
    background-color: transparent;
    cursor: pointer;
`;



const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.image}/>
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Link to={"/products"}>
                  <Button>SHOPPEZ</Button>                
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowForwardIosOutlinedIcon/>
        </Arrow>
      </Container>
    </div>
  );
}

export default Slider;