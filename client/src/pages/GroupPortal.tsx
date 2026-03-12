import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const GroupPortal: React.FC = () => {
  const portals = [
    {
      id: 1,
      title: "TPS 深度研究与仿真生态",
      description: "热防护系统（TPS）从物理机制到求解器生态的完整分析",
      icon: "fas fa-rocket",
      htmlFile: "TPS仿真简介.html",
      color: "#8FB7FF",
    },
    {
      id: 2,
      title: "锐洋科技 · 技术战略路线图",
      description: "物理 AI、CAE 平台与敏捷智造的三位一体战略",
      icon: "fas fa-chart-line",
      htmlFile: "锐洋科技.html",
      color: "#E63329",
    },
  ];

  const handleOpenPortal = (htmlFile: string) => {
    window.open(`/temp_pages/${htmlFile}`, "_blank");
  };

  return (
    <div className="w-100 overflow-hidden">
      {/* Hero Section */}
      <section className="position-relative w-100" style={{ minHeight: "60vh" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(135deg, #0f1725 0%, #1a2332 100%)",
            zIndex: -1,
          }}
        ></div>
        <div className="d-flex align-items-center justify-content-center h-100 py-5">
          <div className="text-center text-white" style={{ maxWidth: "800px" }}>
            <h1 className="display-4 fw-bold mb-4">集团入口</h1>
            <p className="lead mb-0">
              探索我们的核心技术与战略方向
            </p>
          </div>
        </div>
      </section>

      {/* Portal Cards Section */}
      <section className="py-5 w-100">
        <Container>
          <Row className="g-4">
            {portals.map((portal) => (
              <Col md={6} key={portal.id}>
                <Card
                  className="h-100 shadow-sm"
                  style={{
                    border: `2px solid ${portal.color}`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 12px 26px rgba(0,0,0,0.15)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
                  }}
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <i
                        className={`${portal.icon} fa-3x`}
                        style={{ color: portal.color }}
                      ></i>
                    </div>
                    <Card.Title className="mb-3">{portal.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1 mb-4">
                      {portal.description}
                    </Card.Text>
                    <Button
                      onClick={() => handleOpenPortal(portal.htmlFile)}
                      style={{
                        backgroundColor: portal.color,
                        borderColor: portal.color,
                      }}
                      className="rounded-pill px-4 py-2"
                    >
                      进入 <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default GroupPortal;

