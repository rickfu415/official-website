import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import brandStory from "../assets/brand/story.jpg";
import process1 from "../assets/process/process-1.jpg";
import process2 from "../assets/process/process-2.jpg";
import process3 from "../assets/process/process-3.jpg";

const processSteps = [
  {
    id: 1,
    image: process1,
    title: "严选食材",
    description: "每日新鲜食材配送，确保品质",
    icon: "fas fa-carrot",
  },
  {
    id: 2,
    image: process2,
    title: "匠心制作",
    description: "专业厨师精心烹饪，用心制作",
    icon: "fas fa-utensils",
  },
  {
    id: 3,
    image: process3,
    title: "用心服务",
    description: "快速出餐，确保口感",
    icon: "fas fa-hand-holding-heart",
  },
];

const About: React.FC = () => {
  return (
    <Container className="py-5">
      {/* 品牌故事 */}
      <section className="mb-5">
        <h2 className="text-center mb-4">品牌故事</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="text-center mb-4">
              <img
                src={brandStory}
                alt="品牌故事"
                className="img-fluid rounded"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="text-center">
              <p className="lead mb-4">
                我们的品牌始于对美食的无限热爱和追求。多年来，我们始终坚持选用优质食材，
                传承传统工艺，融合现代创新，为顾客带来独特的美食体验。
              </p>
              <p>
                从最初的一家小店开始，到现在遍布全国的连锁品牌，我们始终不忘初心，
                坚持为每一位顾客提供优质的产品和服务。在发展过程中，我们不断创新，
                但始终保持对食材的严格把控和对品质的执着追求。
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* 制作流程 */}
      <section className="mb-5">
        <h2 className="text-center mb-5">制作流程</h2>
        <Row className="g-4">
          {processSteps.map((step, index) => (
            <Col key={step.id} md={4}>
              <div className="process-card text-center">
                <div className="process-image-wrapper mb-4">
                  <div className="process-number">{step.id}</div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="img-fluid rounded-circle process-image"
                  />
                  <div className="process-icon">
                    <i className={`${step.icon} fa-2x`}></i>
                  </div>
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-muted">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="process-arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* 企业文化 */}
      <section>
        <h2 className="text-center mb-4">企业文化</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center mb-4 culture-card">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-heart fa-3x text-primary"></i>
                </div>
                <Card.Title>企业使命</Card.Title>
                <Card.Text>传承美食文化，创造美好生活</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-4 culture-card">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-eye fa-3x text-primary"></i>
                </div>
                <Card.Title>企业愿景</Card.Title>
                <Card.Text>成为最受欢迎的餐饮品牌</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center mb-4 culture-card">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-star fa-3x text-primary"></i>
                </div>
                <Card.Title>核心价值观</Card.Title>
                <Card.Text>诚信、创新、品质、共赢</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
