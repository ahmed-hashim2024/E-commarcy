import { useState, useEffect } from "react";
import OurProductsCard from "./OurProductsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function OurProducts() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setMyData(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-uppercase">OUR PRODUCT</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: "600px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
        </p>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row xs={2} md={3} lg={4} className="g-4">
          {myData.map((product) => {
            const discountedPrice =
              product.price * (1 - product.discountPercentage / 100);
            return (
              <Col key={product.id}>
                <OurProductsCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  discountPercentage={product.discountPercentage}
                  discountedPrice={discountedPrice}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default OurProducts;
