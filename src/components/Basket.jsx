import React, { useState } from "react";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProductToBasket } from "../actions/basketActions";
//react bootstrap
import { Card } from "react-bootstrap";

const Basket = ({ basketReducer }) => {


  const [basketItems, setBasketItems] = useState(basketReducer);

  const removeHandler = (item,index) => {
   
  //  const posItem = basketItems.indexOf(item);
  //  setBasketItems(basketItems.splice(posItem, 1));
  //  console.log("setBasketItems Splice", basketItems)
   setBasketItems(basketItems.filter(el => el.id !== item.id));
  };
  basketReducer.splice(0, basketReducer.length, ...basketItems);

  return (
    <>
      {basketItems.length === 0 ? (
        <Card className="cardBasket">
          <Card.Body className="containerSearchBar pl-1 pr-1">
            <div>Card is empty</div>
          </Card.Body>
        </Card>
      ) : (
        basketItems.map((item, index) => (
          <>
            <Card className="cardBasket" key={index}>
              <Card.Body className="containerSearchBar pl-1 pr-1">
                <div>
                  <img
                    src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                    alt="image"
                    width="60px"
                    height="auto"
                  ></img>
                </div>
                <div className="pl-1">{item.count} x {item.name}</div>
                <div>
                  <button className="sumCardButton">${(item.price * item.count).toFixed(2)}</button>
                  <button className="deleteCardButton" onClick={() => removeHandler(item,index)}>Delete</button>
                </div>
              </Card.Body>
            </Card>
          </>
        ))
      )}
      <Card className="cardBasket">
        <Card.Body className="containerSearchBar pl-1 pr-1">
          ${basketItems.reduce((a, b) => a + b.price * b.count, 0).toFixed(2)}
        </Card.Body>
      </Card>
    </>
  );
};

Basket.propTypes = {
  basketReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  basketReducer: state.basketReducer.basketProducts
});

export default connect(mapStateToProps, { addProductToBasket })(Basket);
