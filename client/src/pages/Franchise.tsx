import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Franchise: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里处理表单提交逻辑
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">加盟信息</h2>

      {/* 加盟优势 */}
      <section className="mb-5">
        <h3 className="text-center mb-4">加盟优势</h3>
        <Row>
          <Col md={3}>
            <Card className="text-center mb-4">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-chart-line fa-3x text-primary"></i>
                </div>
                <Card.Title>品牌价值</Card.Title>
                <Card.Text>成熟的品牌形象和市场认知度</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center mb-4">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-tools fa-3x text-primary"></i>
                </div>
                <Card.Title>运营支持</Card.Title>
                <Card.Text>专业的运营团队提供全方位支持</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center mb-4">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-graduation-cap fa-3x text-primary"></i>
                </div>
                <Card.Title>培训体系</Card.Title>
                <Card.Text>完善的培训体系确保标准化运营</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center mb-4">
              <Card.Body>
                <div className="mb-3">
                  <i className="fas fa-handshake fa-3x text-primary"></i>
                </div>
                <Card.Title>市场保护</Card.Title>
                <Card.Text>合理的区域保护政策</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* 加盟流程 */}
      <section className="mb-5">
        <h3 className="text-center mb-4">加盟流程</h3>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  1
                </div>
                <p>提交申请</p>
              </div>
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  2
                </div>
                <p>资质审核</p>
              </div>
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  3
                </div>
                <p>实地考察</p>
              </div>
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  4
                </div>
                <p>签订合同</p>
              </div>
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  5
                </div>
                <p>开业筹备</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* 加盟申请表单 */}
      <section>
        <h3 className="text-center mb-4">加盟申请</h3>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>电话</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>电子邮箱</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>意向城市</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>投资预算</Form.Label>
                <Form.Select
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择投资预算</option>
                  <option value="30-50万">30-50万</option>
                  <option value="50-100万">50-100万</option>
                  <option value="100-200万">100-200万</option>
                  <option value="200万以上">200万以上</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>留言信息</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="primary" size="lg">
                  提交申请
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Franchise;
