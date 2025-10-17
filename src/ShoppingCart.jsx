import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./redux/cartSlice";
import { FaTrash } from "react-icons/fa";

function ShoppingCart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // حساب السعر الإجمالي
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h3>Your cart is empty.</h3>
          <Link to="/" className="btn btn-primary mt-3">
            Go Shopping
          </Link>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex align-items-center"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={80}
                    rounded
                  />
                  <div className="ms-3 flex-grow-1">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h5>{item.title}</h5>
                    </Link>
                    <div>${item.price.toFixed(2)}</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    className="ms-4"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <FaTrash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <div className="card card-body">
              <h4>Order Summary</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="success" className="w-100">
                    Proceed to Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ShoppingCart;
