import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

// 菜单数据
const menuData = {
  all: [
    {
      id: "all1",
      name: "热烤热压三明治",
      description: "每一天的美好开始",
      price: "¥6-12",
      image: "/src/assets/menu/all-1.jpg",
    },
    {
      id: "all2",
      name: "特色饮品",
      description: "悠闲时光的最佳搭配",
      price: "¥6",
      image: "/src/assets/menu/all-2.jpg",
    },
    {
      id: "all3",
      name: "手作面包",
      description: "深受顾客喜爱的组合",
      price: "¥6-12",
      image: "/src/assets/menu/all-3.jpg",
    },
  ],
  sandwich: [
    {
      id: "s1",
      name: "火腿咸香三明治",
      description: "精选火腿，搭配新鲜生菜，口感丰富",
      price: "¥10",
      image: "/src/assets/menu/sandwich-1.jpg",
    },
    {
      id: "s2",
      name: "鸡蛋三明治",
      description: "嫩滑鸡蛋，搭配特制酱料",
      price: "¥10",
      image: "/src/assets/menu/sandwich-2.jpg",
    },
    {
      id: "s3",
      name: "牛肉芝士三明治",
      description: "澳洲进口牛肉，搭配香浓芝士",
      price: "¥10",
      image: "/src/assets/menu/sandwich-3.jpg",
    },
  ],
  drinks: [
    {
      id: "d1",
      name: "斑斓椰奶",
      description: "精选茶底，搭配进口奶制品",
      price: "¥6",
      image: "/src/assets/menu/drink-1.jpg",
    },
    {
      id: "d2",
      name: "水果茶",
      description: "新鲜水果，清爽怡人",
      price: "¥6",
      image: "/src/assets/menu/drink-2.jpg",
    },
    {
      id: "d3",
      name: "美式咖啡",
      description: "醇香浓郁，提神醒脑",
      price: "¥6",
      image: "/src/assets/menu/drink-3.jpg",
    },
  ],
  bread: [
    {
      id: "b1",
      name: "牛角面包",
      description: "黄油香酥，层次分明",
      price: "¥12",
      image: "/src/assets/menu/bread-1.jpg",
    },
    {
      id: "b2",
      name: "吐司面包",
      description: "松软可口，早餐首选",
      price: "¥8",
      image: "/src/assets/menu/bread-2.jpg",
    },
    {
      id: "b3",
      name: "全麦面包",
      description: "健康营养，粗粮主食",
      price: "¥10",
      image: "/src/assets/menu/bread-3.jpg",
    },
    {
      id: "b4",
      name: "法式长棍",
      description: "外酥内软，经典法式",
      price: "¥15",
      image: "/src/assets/menu/bread-4.jpg",
    },
    {
      id: "b5",
      name: "肉松面包",
      description: "松软可口，美味营养",
      price: "¥9",
      image: "/src/assets/menu/bread-5.jpg",
    },
    {
      id: "b6",
      name: "芝士面包",
      description: "浓郁芝士，香甜可口",
      price: "¥11",
      image: "/src/assets/menu/bread-6.jpg",
    },
  ],
  sets: [
    {
      id: "set1",
      name: "早餐套餐A",
      description: "三明治+奶茶+水果",
      //price: "¥28",
      image: "/src/assets/menu/set-1.jpg",
    },
    {
      id: "set2",
      name: "下午茶套餐",
      description: "面包+饮品+小食",
      //price: "¥32",
      image: "/src/assets/menu/set-2.jpg",
    },
  ],
};

const categories = [
  { id: "all", name: "全部", icon: "🍽️" },
  { id: "sandwich", name: "三明治", icon: "🥪" },
  { id: "drinks", name: "饮品", icon: "🥤" },
  { id: "bread", name: "手作面包", icon: "🥖" },
  { id: "sets", name: "套餐", icon: "🍱" },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // 获取当前类别的菜品
  const getCurrentItems = () => {
    return menuData[activeCategory as keyof typeof menuData];
  };

  return (
    <div className="menu-container py-5">
      <h2 className="text-center menu-title">菜单</h2>

      {/* 分类导航 */}
      <Nav className="justify-content-center mb-5">
        {categories.map((category) => (
          <Nav.Item key={category.id}>
            <Nav.Link
              className={`mx-3 px-4 py-2 rounded-pill ${
                activeCategory === category.id ? "active" : "text-dark"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* 菜品展示 */}
      <Row className="g-4">
        {getCurrentItems().map((item) => (
          <Col
            key={item.id}
            md={activeCategory === "all" ? 12 : 6}
            lg={activeCategory === "all" ? 12 : 4}
          >
            <div className="menu-item card h-100 border-0">
              <div className="position-relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
                {item.price && (
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge fs-5">{item.price}</span>
                  </div>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
