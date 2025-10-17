import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("Signup Data:", data);
  const password = watch("password");

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 p-3 p-md-0"
    >
      <Row className="w-100" style={{ maxWidth: "900px" }}>
        <Col className="shadow-lg bg-white rounded-3 p-0">
          <Row className="m-0">
            {/* Left side: Welcome message */}
            {/* 1. تم تعديل ترتيب الأعمدة بصرياً باستخدام order-md-1 */}
            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center text-center text-white p-5 rounded-md-start rounded-top order-1 order-md-0 signInbg"
              style={{ minHeight: "300px" }} // إضافة ارتفاع بسيط للموبايل
            >
              <h2 className="mb-3">Hello, Friend!</h2>
              <p className="mb-4">
                Enter your personal details and start your journey with us.
              </p>
              <Link
                to="/signIn"
                className="btn btn-outline-light rounded-pill px-4"
              >
                Already have an account? Signin.
              </Link>
            </Col>

            {/* Right side: Signup Form */}
            <Col
              md={6}
              className="d-flex flex-column align-items-center justify-content-center p-4 p-md-5 order-0 order-md-1"
            >
              <div className="text-center w-100 mb-4">
                <h2 className="mb-4">Create Account</h2>
                <div className="w-85 mx-auto">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Form fields */}
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        className="p-3"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-danger text-start small mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        className="p-3"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-danger text-start small mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="p-3"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                        })}
                      />
                      {errors.password && (
                        <p className="text-danger text-start small mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        className="p-3"
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "Passwords do not match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <p className="text-danger text-start small mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="success"
                      className="w-100 p-3"
                    >
                      Signup
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
