import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { IoIosLogIn } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function NavScroll() {
  const [searchQuery, setSearchQuery] = useState("");
  // --- ✅ 1. إضافة حالة للتحكم في القائمة الجانبية ---
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)
  );

  // --- ✅ 2. دوال لفتح وإغلاق القائمة ---
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
      // --- ✅ 3. إغلاق القائمة بعد البحث أيضًا ---
      handleCloseOffcanvas();
    }
  };

  return (
    <Navbar
      key="md"
      expand="lg"
      sticky="top"
      className="bg-body-tertiary mb-3 Navbar"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <strong className="text-success mx-3">E-Comarcy</strong>
        </Navbar.Brand>
        {/* --- ✅ 4. تعديل زر التبديل ليستخدم دالة الفتح --- */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-md"
          onClick={handleShowOffcanvas}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          // --- ✅ 5. ربط حالة العرض والإخفاء بالقائمة ---
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              E-Comarcy
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex align-items-center order-lg-0 order-">
              <Form className="d-flex  " onSubmit={handleSearch}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="link"
                  className="text-success p-0 me-3"
                >
                  <FaMagnifyingGlass className="fs-4" />
                </Button>
              </Form>
            </div>

            <Nav className="justify-content-end flex-grow-1 pe-md-5">
              {/* --- ✅ 6. إضافة onClick لإغلاق القائمة عند الضغط على الروابط --- */}
              <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product" onClick={handleCloseOffcanvas}>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleCloseOffcanvas}>
                About Us
              </Nav.Link>
            </Nav>
            <Nav.Link
              as={Link}
              to="/cart"
              className="text-dark position-relative me-3  my-4 my-lg-0 align-content-center "
              onClick={handleCloseOffcanvas}
            >
              <FaShoppingCart className="fs-4 text-success mx-4" />
              <span className="d-lg-none d-inline ">Your Car</span>
              {cartItemsCount > 0 && (
                <Badge
                  pill
                  bg="secondary"
                  className="position-absolute top-1 start-0 ms-3 translate-middle "
                  style={{ fontSize: "0.6em" }}
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Nav.Link>

            <Link
              to="/signIn"
              className="btn btn-outline-success  text-nowrap"
              onClick={handleCloseOffcanvas}
            >
              <IoIosLogIn className="fs-4" />
              <span className="ms-2"> Login</span>
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
