import React, { Component, useState, useEffect } from "react";
//bootstrap
import { Card, Row } from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../actions/fetchActions";
import { addProductToBasket } from "../actions/basketActions";
//assets
import basketicon from "./navbar/assets/basketicon.png";
//components
import PaginationComponent from "./PaginationComponent";

const ChosenForYou = ({ getItems, fetchReducer,addProductToBasket, basketReducer }) => {
  useEffect(() => {
    getItems();
  }, []);

  const addProduct = item => {
    addProductToBasket(item);
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  const lastItemOfPage = currentPage * itemsPerPage;
  const firstItemOfPage = lastItemOfPage - itemsPerPage;
  const currentItems = fetchReducer.slice(firstItemOfPage, lastItemOfPage);

  const paginate = activePage => setCurrentPage(activePage);

  return (
    <Row className="row-12 productDisplay">
      
      {currentItems.map(item => (
        <Card className="cardGroup col-xs-12 col-md-2" key={item.id}>
          <Card.Img
            className="d-block w-100"
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            height="auto"
            width="auto"
          />
          <Card.Body onClick={() => addProduct(item)}>
            <Card.Title>
              {item.name} ${item.price.toFixed(2)}
            </Card.Title>
            <img
              src={basketicon}
              className="buttonBasket lead float-right mr-3"
              height="auto"
              width="35px"
              onClick={() => console.log("i am clicked")}
            />
          </Card.Body>
        </Card>
      ))}

      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={fetchReducer.length}
        paginate={paginate}
      />
    </Row>
  );
};

ChosenForYou.propTypes = {
  getItems: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  basketReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items,
  basketReducer: state.basketReducer.basketProducts
});

export default connect(mapStateToProps, { getItems, addProductToBasket })(ChosenForYou);
