import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("Signin Data:", data);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 p-3 p-md-0"
    >
      {/* تم تعديل الأعمدة لتكون متجاوبة */}
      <Row className="w-100" style={{ maxWidth: "900px" }}>
        <Col className="shadow-lg bg-white rounded-3 p-0">
          <Row className="m-0">
            {/* Left side: Signin Form */}
            {/* 1. تم إضافة md={6} ليأخذ نصف العرض على الشاشات المتوسطة وكامل العرض على الصغيرة */}
            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center p-4 p-md-5"
            >
              <div className="text-center w-100 mb-4">
                <h2 className="mb-4">Signin</h2>
                <div className="w-85 mx-auto">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        className="p-3"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-danger text-start small mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="p-3"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <p className="text-danger text-start small mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="success"
                      className="w-100 p-3"
                    >
                      Signin
                    </Button>
                  </Form>
                </div>
              </div>
              <div className="text-center w-100 mt-3">
                <p className="text-muted">or signin with</p>
                <div className="d-flex justify-content-center gap-3">
                  {/* Social buttons */}
                  <Button
                    variant="outline-primary"
                    className="rounded-circle p-2 d-flex"
                  >
                    <FaFacebookF size={20} />
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="rounded-circle p-2 d-flex"
                  >
                    <FaGooglePlusG size={20} />
                  </Button>
                  <Button
                    variant="outline-info"
                    className="rounded-circle p-2 d-flex"
                  >
                    <FaLinkedinIn size={20} />
                  </Button>
                </div>
              </div>
            </Col>

            {/* Right side: Welcome message */}

            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center text-center text-white p-5 rounded-md-end rounded-bottom signInbg"
              style={{ minHeight: "300px" }} // إضافة ارتفاع بسيط للموبايل
            >
              <h2 className="mb-3">Welcome back!</h2>
              <p className="mb-4">
                Welcome back! We are so happy to have you here. It's great to
                see you again.
              </p>
              <Link
                to="/signUp"
                className="btn btn-outline-light rounded-pill px-4"
              >
                No account yet? Signup.
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
