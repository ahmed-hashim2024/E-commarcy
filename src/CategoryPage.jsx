import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import OurProductsCard from "./OurProductsCard"; // تأكد من أن المسار صحيح

function CategoryPage() {
  const { categoryName } = useParams(); // لأخذ اسم الصنف من الرابط
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategoryProducts() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch category products:", error);
      } finally {
        setLoading(false);
      }
    }
    getCategoryProducts();
  }, [categoryName]); // يتم استدعاء الدالة كلما تغير اسم الصنف في الرابط

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-uppercase">
          {categoryName.replace("-", " ")}
        </h1>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <Row xs={2} md={3} lg={4} className="g-4">
          {products.map((product) => {
            const discountedPrice =
              product.price * (1 - product.discountPercentage / 100);
            return (
              <Col key={product.id}>
                <OurProductsCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.thumbnail} // نستخدم الصورة المصغرة هنا
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

export default CategoryPage;
