import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero/hero-1.jpg";
import dish1 from "../assets/dishes/dish-1.jpg";
import dish2 from "../assets/dishes/dish-2.jpg";
import dish3 from "../assets/dishes/dish-3.jpg";
import storyImage from "../assets/brand/story.jpg";

const Home: React.FC = () => {
  const dishes = [
    { id: 1, image: dish1, name: "火腿咸香", desc: "精选食材，独特工艺" },
    { id: 2, image: dish2, name: "特色奶茶", desc: "精选食材，独特工艺" },
    { id: 3, image: dish3, name: "特色奶茶", desc: "精选食材，独特工艺" },
  ];

  return (
    <div className="w-100 overflow-hidden">
      {/* Hero Section */}
      <section className="position-relative w-100 vh-90">
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ width: "90%", maxWidth: "800px" }}
        >
          <h1 className="display-3 fw-bold mb-4">美味传承，品质至上</h1>
          <p className="lead mb-4">精选食材，用心制作，为您带来极致美食体验</p>
          <Button
            as={Link}
            to="/menu"
            variant="primary"
            size="lg"
            className="rounded-pill px-5 py-3 me-3"
          >
            浏览菜单
          </Button>
          <Button
            as={Link}
            to="/order"
            variant="outline-light"
            size="lg"
            className="rounded-pill px-5 py-3"
          >
            在线点餐
          </Button>
        </div>
      </section>

      {/* 特色菜品 */}
      <section className="py-5 w-100">
        <div className="container-fluid px-4 px-md-5">
          <h2 className="text-center display-5 mb-5">特色菜品</h2>
          <Row className="g-4">
            {dishes.map((dish) => (
              <Col md={4} key={dish.id}>
                <div className="position-relative overflow-hidden rounded-4">
                  <div style={{ paddingTop: "100%", position: "relative" }}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-100 h-100 position-absolute top-0 start-0"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    }}
                  >
                    <h3>{dish.name}</h3>
                    <p className="mb-0">{dish.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* 品牌优势 */}
      <section className="py-5 bg-light w-100">
        <div className="container-fluid px-4 px-md-5">
          <h2 className="text-center display-5 mb-5">为什么选择我们</h2>
          <Row className="g-4">
            <Col md={3}>
              <div className="text-center">
                <i className="fas fa-leaf fa-3x text-primary mb-3"></i>
                <h4>新鲜食材</h4>
                <p>
                  每日精选新鲜食材
                  <br />
                  确保品质
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <i className="fas fa-utensils fa-3x text-primary mb-3"></i>
                <h4>匠心制作</h4>
                <p>
                  传统工艺结合
                  <br />
                  现代创新
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                <h4>快速配送</h4>
                <p>
                  专业配送团队
                  <br />
                  准时送达
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <i className="fas fa-heart fa-3x text-primary mb-3"></i>
                <h4>用心服务</h4>
                <p>
                  以客为尊
                  <br />
                  提供优质体验
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* 加盟信息 */}
      <section className="position-relative w-100" style={{ height: "500px" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${storyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        ></div>
        <div className="position-relative h-100 d-flex align-items-center justify-content-center">
          <div className="text-center text-white">
            <h2 className="display-5 mb-4">加入我们</h2>
            <p className="lead mb-4">
              加入我们的大家庭，共同打造餐饮业的新标杆
            </p>
            <Button
              as={Link}
              to="/franchise"
              variant="primary"
              size="lg"
              className="rounded-pill px-5 py-3"
            >
              了解加盟
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
