import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerImage from "./assets/mainImg.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { FaArrowRight } from "react-icons/fa";

// 1. استيراد مكونات Swiper والملفات الخاصة بها
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // استيراد وحدة التشغيل التلقائي
import "swiper/css"; // استيراد الأنماط الأساسية
import "swiper/css/autoplay"; // استيراد أنماط التشغيل التلقائي

function Home() {
  const [categories, setCategories] = useState([]);

  // useEffect لجلب البيانات يبقى كما هو تمامًا
  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        const allProducts = data.products;

        const uniqueCategories = {};
        allProducts.forEach((product) => {
          if (!uniqueCategories[product.category]) {
            uniqueCategories[product.category] = product.thumbnail;
          }
        });

        const categoriesArray = Object.keys(uniqueCategories).map(
          (category) => ({
            name: category,
            image: uniqueCategories[category],
          })
        );

        setCategories(categoriesArray);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    getCategories();
  }, []);

  return (
    <>
      {/* --- قسم الهيدر يبقى كما هو --- */}
      <div className="bg-light">
        <Container>
          <Row className="align-items-center justify-content-center text-center text-md-start py-5">
            <Col md={6} className="order-2 order-md-1">
              <h1 className="display-3 fw-bold">
                Your One-Stop <br />
                <span className="text-success">Product Shop</span>
              </h1>
              <p className="lead my-4 text-muted">
                From everyday essentials to unique finds, we've got everything
                you need. Quality products, delivered right to your door.
              </p>
              <Button as={Link} to="/product" variant="success">
                Shop Now <FaArrowRight className="ms-2" />
              </Button>
            </Col>
            <Col md={6} className="order-1 order-md-2 mb-4 mb-md-0">
              <Image src={headerImage} alt="Header" fluid />
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- قسم شريط الأصناف باستخدام Swiper --- */}
      <Container className="my-5">
        <h2 className="text-center mb-4 fw-bold text-uppercase">
          Shop by Category
        </h2>
        {categories.length > 0 ? (
          // 2. استخدام مكون Swiper بدلًا من Slider
          <Swiper
            modules={[Autoplay]} // تفعيل الوحدات التي سنستخدمها
            spaceBetween={20} // مسافة بين الشرائح
            slidesPerView={5} // عدد الشرائح الافتراضي
            loop={true} // التكرار اللانهائي
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // 3. الإعدادات المتجاوبة بصيغة Swiper
            breakpoints={{
              // عندما يكون عرض الشاشة 0px أو أكبر
              0: {
                slidesPerView: 1,
              },
              // عندما يكون عرض الشاشة 480px أو أكبر
              480: {
                slidesPerView: 2,
              },
              // عندما يكون عرض الشاشة 768px أو أكبر
              768: {
                slidesPerView: 3,
              },
              // عندما يكون عرض الشاشة 1024px أو أكبر
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {categories.map((cat) => (
              // 4. يجب لف كل عنصر بداخل SwiperSlide
              <SwiperSlide key={cat.name}>
                <CategoryCard name={cat.name} image={cat.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center">Loading categories...</p>
        )}
      </Container>
    </>
  );
}

export default Home;
