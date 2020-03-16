import React, { useState, useEffect } from "react";
//bootstrap
import { Carousel, Button } from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../actions/fetchActions";
import { Link } from "react-router-dom";
//assets
import basketicon from "./navbar/assets/basketicon.png";

const PromotionSlide = ({ getItems, fetchReducer }) => {
  useEffect(() => {
    getItems();
  }, []);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const suggestedItems = fetchReducer.slice(0, 3).map(item => (
    <Carousel.Item key={item.id}>
      <Link to={"/" + item.id}>
        <img
          className="d-block w-100"
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          alt="First slide"
          height="auto"
          width="100%"
        />
      </Link>
      <Carousel.Caption>
        <h3>{item.name}</h3>
        <h4>${item.price.toFixed(2)}</h4>
        <Button className="slideMainBtn" type="button" key={item.id}>
          <img
            src={basketicon}
            alt="basket img"
            height="35px"
            width="35px"
          ></img>
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        {suggestedItems}
      </Carousel>
      <hr/>
    </>
  );
};

PromotionSlide.propTypes = {
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items
});

export default connect(mapStateToProps, { getItems })(PromotionSlide);
