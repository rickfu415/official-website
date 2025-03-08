import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import store1 from "../assets/stores/store-1.jpg";
import store2 from "../assets/stores/store-2.jpg";
import store3 from "../assets/stores/store-3.jpg";

// 门店数据
const storeData = [
  {
    id: 1,
    name: "神仙树店",
    address: "四川省成都市武侯区神仙树地铁站 5/7号线换乘通道",
    phone: "15982162404",
    businessHours: "10:00-22:00",
    image: store1,
    metroInfo: "地铁5号线、7号线",
    exit: "5/7号线换乘通道",
  },
  {
    id: 2,
    name: "华府大道店",
    address: "四川省成都市双流区华府大道地铁站 C口",
    phone: "15328004919",
    businessHours: "10:00-22:00",
    image: store2,
    metroInfo: "地铁5号线",
    exit: "C口",
  },
  {
    id: 3,
    name: "昭觉寺南路店",
    address: "四川省成都市昭觉寺南路站 D/E口通道之间",
    phone: "19980497995",
    businessHours: "10:00-22:00",
    image: store3,
    metroInfo: "地铁3号线",
    exit: "D/E口通道之间",
  },
];

const Stores: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">门店展示</h2>

      {/* 搜索框 */}
      <div className="mb-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="输入地址或区域查找门店"
              />
              <button className="btn btn-primary">搜索</button>
            </div>
          </Col>
        </Row>
      </div>

      {/* 门店列表 */}
      <Row className="g-4">
        {storeData.map((store) => (
          <Col key={store.id} md={4}>
            <Card className="h-100 shadow-sm hover-lift">
              <Card.Img
                variant="top"
                src={store.image}
                alt={store.name}
                style={{ height: "240px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-4 mb-3">{store.name}</Card.Title>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-subway text-primary me-2"></i>
                    <span>{store.metroInfo}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-walking text-primary me-2"></i>
                    <span>地铁{store.exit}</span>
                  </div>
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-map-marker-alt text-primary me-2 mt-1"></i>
                    <span>{store.address}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-phone-alt text-primary me-2"></i>
                    <span>{store.phone}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-clock text-primary me-2"></i>
                    <span>{store.businessHours}</span>
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <a
                    href={`https://map.baidu.com/search/${encodeURIComponent(
                      store.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-location-arrow me-2"></i>
                    导航到这里
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Stores;
