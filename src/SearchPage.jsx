import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import OurProductsCard from "./OurProductsCard"; // تأكد من صحة المسار

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // 'q' هو اسم المتغير في الرابط
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return; // لا تقم بالبحث إذا كان حقل البحث فارغًا

    async function getSearchResults() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setResults(data.products);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setLoading(false);
      }
    }
    getSearchResults();
  }, [query]); // يتم البحث من جديد كلما تغيرت كلمة البحث في الرابط

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">
          Search Results for: <span className="text-success">"{query}"</span>
        </h1>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : results.length > 0 ? (
        <Row xs={2} md={3} lg={4} className="g-4">
          {results.map((product) => {
            const discountedPrice =
              product.price * (1 - product.discountPercentage / 100);
            return (
              <Col key={product.id}>
                <OurProductsCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.thumbnail}
                  discountPercentage={product.discountPercentage}
                  discountedPrice={discountedPrice}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <p className="text-center fs-4 text-muted">No products found.</p>
      )}
    </Container>
  );
}

export default SearchPage;
