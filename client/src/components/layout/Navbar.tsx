import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

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
          <Navbar.Brand href="/" className="fw-bold fs-4">
            食圈儿 FOOOODIS
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/menu" className="mx-2">
                菜单
              </Nav.Link>
              <Nav.Link href="/stores" className="mx-2">
                门店
              </Nav.Link>
              <Nav.Link href="/franchise" className="mx-2">
                加盟
              </Nav.Link>
              <Nav.Link href="/about" className="mx-2">
                关于我们
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                href="/order"
                variant="primary"
                className="rounded-pill px-4 me-2"
              >
                在线点餐
              </Button>
              <Button
                href="/admin"
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
