import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        fixed="top"
        className="py-3 shadow-sm"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            食圈儿 FOOOODIS
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/menu" className="mx-2">
                菜单
              </Nav.Link>
              <Nav.Link as={Link} to="/stores" className="mx-2">
                门店
              </Nav.Link>
              <Nav.Link as={Link} to="/franchise" className="mx-2">
                加盟
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-2">
                关于我们
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                as={Link}
                to="/order"
                variant="primary"
                className="rounded-pill px-4 me-2"
              >
                在线点餐
              </Button>
              <Button
                as={Link}
                to="/admin"
                variant="outline-primary"
                className="rounded-pill px-4"
              >
                登录
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "76px" }} /> {/* 导航栏占位符 */}
    </>
  );
};

export default MainNavbar;
