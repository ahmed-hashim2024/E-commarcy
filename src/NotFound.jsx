import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="container text-center py-5">
      <h1 class="display-1 fw-bold text-danger">404</h1>
      <h2 class="display-4 fw-light text-muted mb-4">Page Not Found</h2>
      <p class="lead mb-4">
        We're sorry, we couldn't find the page you were looking for. The page
        may have been removed, had its name changed, or the link you followed
        may be incorrect.
      </p>

      <Link className="btn btn-success" as={Link} to={"/"}>
        Return to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
