import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function RelatedProductCard({
  id,
  title,
  image,
  price,
  discountedPrice,
  discountPercentage,
}) {
  return (
    <Card className="h-100 shadow-sm rounded border-0 overflow-hidden">
      <Link to={`/product/${id}`} className="text-decoration-none text-dark">
        <div className="position-relative">
          <div className="ratio ratio-1x1">
            <Card.Img
              variant="top"
              src={image}
              alt={title}
              style={{ objectFit: "cover" }}
            />
          </div>
          {discountPercentage > 0 && (
            <Badge
              bg="danger"
              className="position-absolute top-0 start-0 m-2"
              style={{ zIndex: 1 }}
            >
              {Math.round(discountPercentage)}% OFF
            </Badge>
          )}
        </div>

        <Card.Body className="p-2 d-flex flex-column">
          <Card.Title
            className="h6 text-dark mb-1"
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

          <div className="mt-auto pt-2">
            {" "}
            {/* mt-auto لدفع الأسعار للأسفل */}
            {/* السعر القديم فوق السعر الجديد */}
            <del className="text-muted small">${price.toFixed(2)}</del>
            <div className="fw-bold text-success fs-6">
              ${discountedPrice.toFixed(2)}
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default RelatedProductCard;
