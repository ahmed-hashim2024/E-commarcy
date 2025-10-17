import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";

function OurProductsCard({
  image,
  title,
  price,
  id,
  discountedPrice,
  discountPercentage,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      title,
      price: discountedPrice,
      thumbnail: image,
    };
    dispatch(addToCart(productToAdd));

    toast.success(`${title} added to cart!`, {
      duration: 3000,
      style: {
        border: "1px solid #28a745",
        padding: "16px",
        color: "#155724",
      },
      iconTheme: {
        primary: "#28a745",
        secondary: "#fff",
      },
    });
  };

  return (
    <Card className="shadow-sm bg-body rounded border-0 overflow-hidden h-100">
      {/* --- ✅ 1. تم تغليف الصورة برابط هنا --- */}
      <Link to={`/product/${id}`}>
        <div className="position-relative">
          <div className="ratio ratio-1x1">
            <Card.Img
              variant="top"
              src={image}
              alt={title}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Badge
            bg="danger"
            className="position-absolute top-0 start-0 m-2"
            style={{ zIndex: 1 }}
          >
            {Math.round(discountPercentage)}% OFF
          </Badge>
        </div>
      </Link>
      {/* ------------------------------------- */}

      <Card.Body className="d-flex flex-column p-3">
        <Card.Title
          className="h6 text-dark text-center flex-grow-1"
          style={{
            minHeight: "2.5em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Card.Title>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex flex-column align-items-start">
            <del className="text-muted small">${price.toFixed(2)}</del>
            <span className="fw-bold fs-5 text-success">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>
          <Button variant="success" size="sm" onClick={handleAddToCart}>
            <FaCartPlus />
          </Button>
        </div>

        {/* --- ✅ 2. تم حذف زر "More Details" من هنا --- */}
      </Card.Body>
    </Card>
  );
}

export default OurProductsCard;
