import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function CategoryCard({ name, image }) {
  return (
    <div className="p-2">
      <Link to={`/category/${name}`} className="text-decoration-none">
        <Card className="bg-dark text-white border-0 shadow-sm">
          <Card.Img
            src={image}
            alt={name}
            style={{
              height: "200px",
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          />
          <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
            <Card.Title className="text-uppercase fw-bold">{name}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </div>
  );
}

export default CategoryCard;
