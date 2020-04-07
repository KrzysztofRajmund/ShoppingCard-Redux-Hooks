import React, { useState, useEffect } from "react";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/fetchActions";
import { addProductToBasket } from "../../actions/basketActions";
//react bootstrap
import {
  Card,
  Button,
  Navbar,
  Nav,
  Badge,
  Modal,
  Form,
  FormControl
} from "react-bootstrap";
//assets
import basketicon from "./assets/basketicon.png";
import searchicon from "./assets/searchicon.png";
//components
import Basket from "./../Basket";

const NavMain = ({
  getItems,
  addProductToBasket,
  fetchReducer,
  basketReducer
}) => {
  useEffect(() => {
    getItems();
  }, []);


  //modal search
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProduct("");
  };
  const handleShowSearch = () => {
    setShow(true);
  };

  //search filter
  const [product, setProduct] = useState("");
  const [productResult, setProductResult] = useState([]);

  const searchHandler = e => {
    setProduct(e.target.value);
  };

  useEffect(() => {
    const result = fetchReducer.filter(
      item =>
        item.name
          .toString()
          .toLowerCase()
          .includes(product.toLowerCase()) ||
        item.id
          .toString()
          .toLowerCase()
          .includes(product.toLowerCase())
    );
    if (product.length > 2) return setProductResult(result);
    if (product.length <= 2) return setProductResult([]);
  }, [product]);

  //shopping basket
  const [showBasket, setShowBasket] = useState(false);

  const handleShowBasket = () => {
    setShowBasket(true);
  };
    
  
  const addProduct = (product,basketReducer) => {
    addProductToBasket(product,basketReducer) 
    };
   
 
  const handleCloseBasket = () => {
    setShowBasket(false);
  };


  return (
    <>
      {/* navbar */}
      <Navbar className="navbarMain" expand="lg" sticky="top">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          {/* search icon + basket icon */}
          <Nav className="mr-5">
            <Nav.Link>
              <Button className="p-0" variant="link" onClick={handleShowBasket}>
                <img
                  src={basketicon}
                  alt="basket img"
                  height="20px"
                  width="20px"
                ></img>
                <Badge pill variant="success">
                {basketReducer.length}
                </Badge>
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button className="p-0" variant="link" onClick={handleShowSearch}>
                <img
                  src={searchicon}
                  alt="searchicon img"
                  height="20px"
                  width="20px"
                ></img>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* modal search */}
      <Modal className="modalSearch" show={show} onHide={handleClose}>
        <Modal.Body closeButton>
          <Form className="searchFormControl" inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={searchHandler}
              value={product}
            />
          </Form>
          <div>
            {productResult.map(search => (
              <Card className="cardSearchBar">
                <Card.Body className="containerSearchBar pl-1 pr-1">
                  <div>
                    <img
                      src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                      alt="image"
                      width="60px"
                      height="40"
                    ></img>
                  </div>

                  <div className="pl-1">
                    {search.name.substr(0, 12) + "..."}
                  </div>

                  <div className="pl-1 pr-1">${search.price.toFixed(2)}</div>

                  <div>
                    <button disabled>-10%</button>
                    <button onClick={() => addProduct(search,basketReducer)}>
                      <img
                        src={basketicon}
                        alt="basket img"
                        height="20px"
                        width="20px"
                      ></img>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      {/* modal basket */}
      <Modal
        className="basketModal"
        show={showBasket}
        onHide={handleCloseBasket}
      >
        <Modal.Body closeButton>
          <Basket basketProducts={basketReducer} />
        </Modal.Body>
      </Modal>
    </>
  );
};

NavMain.propTypes = {
  getItems: PropTypes.func.isRequired,
  addProductToBasket: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  basketReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items,
  basketReducer: state.basketReducer.basketProducts
});

export default connect(mapStateToProps, { getItems, addProductToBasket })(
  NavMain
);
