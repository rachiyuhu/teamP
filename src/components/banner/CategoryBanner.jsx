
import Category1 from '../images/Category001.jpg';


import React from "react";
import styled, { css } from "styled-components";



const CategoryBanner = () => {

const StyledCategory = styled.img`
  display: inline-block;
  width : 100%;
  height : 500px;
  `;



const Categorylink = [
    { id : "1",
      name : "MyReview",
      src : "../images/Category001.jpg" },
    { id : "2",
      name : "MySale",
      src : "../images/Category002.jpg" },
    { id : "3",
      name : "MyLike",
      src : "../images/Category003.jpg" },
  ]


    return (
      // 카테고리 배너(슬라이드 X) > 카테고리별로 다른 이미지랑
      // 다른 문구로 배열에서 불러올 수 있나??
      //console.log(Categorylink[0].src)
      <StyledCategory src={Categorylink[0].src}></StyledCategory>
      

      
      
      
    )
  }
export default CategoryBanner;