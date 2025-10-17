import React, { useState, useEffect, useRef } from "react"; // استيراد useRef
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import toast from "react-hot-toast";
import Slider from "react-slick";
import RelatedProductCard from "./RelatedProductCard";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Spinner,
  Alert,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoreData() {
  const params = useParams();
  const dispatch = useDispatch();
  const sliderRef = useRef(null); // تعريف الـ ref للسلايدر

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function getProductData() {
      setLoading(true);
      setRelatedProducts([]); // إعادة تعيين لضمان تشغيل التأثير التالي
      try {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await res.json();
        setProduct(data);

        if (data && data.category) {
          const relatedRes = await fetch(
            `https://dummyjson.com/products/category/${data.category}`
          );
          const relatedData = await relatedRes.json();
          setRelatedProducts(
            relatedData.products.filter((p) => p.id !== data.id)
          );
        }
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    }
    getProductData();
  }, [params.id]);

  // هذا التأثير الجديد هو الذي يحل المشكلة
  useEffect(() => {
    if (sliderRef.current && relatedProducts.length > 0) {
      // هذا الأمر يجبر السلايدر على إعادة الحساب والعرض بشكل صحيح
      sliderRef.current.slickGoTo(0);
    }
  }, [relatedProducts]); // يعمل فقط عند وصول بيانات المنتجات

  const handleAddToCart = () => {
    const discountedPrice =
      product.price * (1 - product.discountPercentage / 100);
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: discountedPrice,
      thumbnail: product.thumbnail,
    };
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(productToAdd));
    }
    toast.success(`${quantity} x ${product.title} added to cart!`);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < fullStars; i++)
      stars.push(
        <i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>
      );
    if (halfStar)
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    for (let i = 0; i < emptyStars; i++)
      stars.push(
        <i key={`empty-${i}`} className="bi bi-star text-warning"></i>
      );
    return stars;
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  if (!product) {
    return <Alert variant="danger">Product not found.</Alert>;
  }

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <>
      <Container className="my-5">
        <Row className="bg-white shadow-sm rounded-3 p-4">
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={product.thumbnail}
              className="img-fluid rounded"
              alt={product.title}
            />
          </Col>
          <Col md={7}>
            <div className="d-flex flex-column h-100 p-3">
              <h1 className="card-title display-6">{product.title}</h1>
              <h5 className="card-subtitle mb-2 text-muted">{product.brand}</h5>
              <div className="d-flex align-items-center my-3">
                <div className="me-3">
                  {renderRatingStars(product.rating)}
                  <span className="ms-2 fw-bold">
                    ({product.rating.toFixed(2)})
                  </span>
                </div>
                <Badge bg="info">{product.category}</Badge>
              </div>
              <p className="card-text fs-5">{product.description}</p>
              <div className="my-3">
                <span className="h3 fw-bold text-success me-3">
                  ${discountedPrice.toFixed(2)}
                </span>
                <del className="text-danger">${product.price.toFixed(2)}</del>
                <Badge bg="warning" text="dark" className="ms-2">
                  {product.discountPercentage}% OFF
                </Badge>
              </div>
              <Alert
                variant={
                  product.availabilityStatus === "In Stock"
                    ? "success"
                    : "danger"
                }
              >
                <strong>{product.availabilityStatus}</strong> ({product.stock}{" "}
                items left)
              </Alert>
              <div className="mt-auto">
                <div className="d-flex align-items-center mb-3">
                  <Button
                    variant="outline-secondary"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </Button>
                  <span className="mx-3 fs-5 fw-bold">{quantity}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      setQuantity((q) => Math.min(product.stock, q + 1))
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="success"
                  size="lg"
                  className="w-100"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {relatedProducts.length > 0 && (
        <Container className="my-5">
          <h2 className="mb-4 fw-bold">Related Products</h2>
          <Slider ref={sliderRef} {...sliderSettings}>
            {relatedProducts.map((p) => {
              const relatedDiscountedPrice =
                p.price * (1 - p.discountPercentage / 100);
              return (
                <div key={p.id} className="p-2">
                  <RelatedProductCard
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    image={p.thumbnail}
                    discountedPrice={relatedDiscountedPrice}
                    discountPercentage={p.discountPercentage}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
      )}
    </>
  );
}

export default MoreData;
