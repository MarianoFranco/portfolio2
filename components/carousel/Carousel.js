import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CardCOntainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: red;
    padding:20px;
`;

export default class CenterMode extends Component {
  render() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
       
    };
    return (
        <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
            <CardCOntainer>
                <h1>Funciona</h1>
            </CardCOntainer>
            <CardCOntainer>
                <h1>o NO</h1>
            </CardCOntainer>
          <div className="card__container">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}