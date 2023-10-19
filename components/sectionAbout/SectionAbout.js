import { Col, Container, Row } from "react-bootstrap";
import "./sectionAbout.scss";
import Image from "next/image";

export default function SectionAbout() {
  return (
    <Container>
      <div className="about" id="about">
        <Row>
          <Col md={{ span: 6, order: 1 }} xs={{ order: 2 }}>
            <div className="about__img">
              <Image
                src={"/images/about.jpg"}
                alt="Nikolay Gerasimov with funny cat Max"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Col>
          <Col md={{ span: 6, order: 2 }} xs={{ order: 1 }}>
            <div className="about__info">
              <div className="info__title">Обо мне</div>
              <div className="info__subtitle">Меня зовут Николай</div>
              <div className="divider"></div>
              <div className="info__text">
                Привет! Я Web-разработчик, занимаюсь созданием сайтов, прошел
                курсы по web-разработке в Университете ИТМО и несколько курсов
                на онлайн площадке Udemy, готов взять ваш сайт в свои руки 🤝🏻
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
