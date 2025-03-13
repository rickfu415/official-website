import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import qrcode from "../../assets/qrcode/qrcode.jpg"; // 导入二维码图片

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="g-4">
          {/* 品牌信息 */}
          <Col lg={4} md={6}>
            <div className="pe-lg-5">
              <h5 className="mb-4 text-white">食圈儿 FOOOODIS</h5>
              <p className="mb-4 text-light-gray">
                我们致力于为顾客提供高品质的美食体验，用心传承传统美食文化，创新发展现代餐饮服务。
              </p>
              <div className="social-links">
                <a href="#" className="me-3 text-light">
                  <i className="fab fa-weixin fa-lg"></i>
                </a>
                <a href="#" className="me-3 text-light">
                  <i className="fab fa-weibo fa-lg"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-tiktok fa-lg"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* 快速链接 */}
          <Col lg={2} md={6}>
            <h5 className="mb-4 text-white">快速链接</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link
                  to="/menu"
                  className="text-light-gray text-decoration-none hover-white"
                >
                  浏览菜单
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/stores"
                  className="text-light-gray text-decoration-none hover-white"
                >
                  门店查询
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/franchise"
                  className="text-light-gray text-decoration-none hover-white"
                >
                  加盟信息
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-light-gray text-decoration-none hover-white"
                >
                  关于我们
                </Link>
              </li>
            </ul>
          </Col>

          {/* 联系方式 */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 text-white">联系我们</h5>
            <ul className="list-unstyled footer-contact">
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-phone-alt me-2 text-primary"></i>
                <span className="text-light-gray">18628055545</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-clock me-2 text-primary"></i>
                <span className="text-light-gray">营业时间：10:00-22:00</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="fas fa-handshake me-2 text-primary"></i>
                <span className="text-light-gray">商务合作与加盟咨询</span>
              </li>
            </ul>
          </Col>

          {/* 关注我们 */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 text-white">关注我们</h5>
            <div
              className="qrcode-container bg-light p-3 rounded-3 text-center"
              style={{ maxWidth: "200px" }}
            >
              <img
                src={qrcode}
                alt="微信二维码"
                className="img-fluid mb-2"
                style={{ maxWidth: "150px" }}
              />
              <p className="mb-0 text-dark small">微信号</p>
            </div>
          </Col>
        </Row>

        {/* 版权信息 */}
        <div className="border-top border-secondary mt-5 pt-4">
          <Row className="text-center">
            <Col md={12} className="mb-3">
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray text-decoration-none hover-white"
              >
                蜀ICP备2025128270号-1
              </a>
            </Col>
            <Col md={12} className="mb-3">
              <p className="mb-0 text-light-gray">
                © 2024 食圈儿. All rights reserved.
              </p>
            </Col>
            <Col md={12}>
              <div className="footer-bottom-links">
                <a
                  href="#"
                  className="text-light-gray text-decoration-none me-3 hover-white"
                >
                  隐私政策
                </a>
                <a
                  href="#"
                  className="text-light-gray text-decoration-none hover-white"
                >
                  服务条款
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
