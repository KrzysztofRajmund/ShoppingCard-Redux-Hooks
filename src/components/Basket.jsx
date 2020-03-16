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
   
   const pos = basketItems.indexOf(item);
    basketItems.splice(pos, 1);
      setBasketItems(basketItems.filter(el => el.id !== item.id));
  };

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
                <div className="pl-1">{item.name}</div>
                <div>
                  <button>${item.price.toFixed(2)}</button>
                  <button onClick={() => removeHandler(item,index)}>Delete</button>
                </div>
              </Card.Body>
            </Card>
          </>
        ))
      )}
      <Card className="cardBasket">
        <Card.Body className="containerSearchBar pl-1 pr-1">
          ${basketReducer.reduce((a, b) => a + b.price, 0).toFixed(2)}
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
