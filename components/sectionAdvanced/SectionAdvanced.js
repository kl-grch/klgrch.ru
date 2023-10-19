import { Container, Row, Col } from "react-bootstrap";
import "./sectionAdvanced.scss";
import Image from "next/image";

export default function SectionAdvanced() {
  return (
    <Container>
      <div className="advanced">
        <div className="advanced__title">Опыт</div>
        <div className="advanced__subtitle">Чем я буду полезен</div>
        <div className="divider"></div>
        <div className="advanced__info">
          <Row>
            <Col xs={12} md={6} className="p-2">
              <div className="info__column">
                <div className="column__title">Образование</div>
                <div className="column__item">
                  <div className="item__head">
                    <div className="head__img">
                      <Image
                        src={"/images/education.svg"}
                        alt="icon education"
                        width={21}
                        height={25}
                      />
                    </div>
                    <div className="head__title">СПБ ГУАП</div>
                    <div className="head__location">
                      Диплом бакалавра | СПБ (2011 - 2015)
                    </div>
                  </div>
                  <div className="item__body">
                    Высшее образование по направлению &quot;Менеджмент&quot;
                  </div>
                </div>
                <div className="column__item">
                  <div className="item__head">
                    <div className="head__img">
                      <Image
                        src={"/images/education.svg"}
                        alt="icon education"
                        width={21}
                        height={25}
                      />
                    </div>
                    <div className="head__title">Университет ИТМО</div>
                    <div className="head__location">
                      Курсы по программе &quot;Веб-разработчик (Node.js)&quot;
                    </div>
                  </div>
                  <div className="item__body">
                    Прошел курсы по переподготовке, где мной были изучены
                    следующие темы:
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                </div>
                <div className="column__item">
                  <div className="item__head">
                    <div className="head__img">
                      <Image
                        src={"/images/education.svg"}
                        alt="icon education"
                        width={21}
                        height={25}
                      />
                    </div>
                    <div className="head__title">Udemy</div>
                    <div className="head__location">
                      Курсы по Web-разработке | 2022
                    </div>
                  </div>
                  <div className="item__body">
                    На данном курсе закрепил полученные ранее знания, и узнал
                    много нового
                  </div>
                </div>
                <div className="column__item">
                  <div className="item__head">
                    <div className="head__img">
                      <Image
                        src={"/images/education.svg"}
                        alt="icon education"
                        width={21}
                        height={25}
                      />
                    </div>
                    <div className="head__title">Udemy</div>
                    <div className="head__location">
                      Курсы по JavaScript + React | 2022
                    </div>
                  </div>
                  <div className="item__body">
                    <ul>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>Redux</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="info__column">
                <div className="column__title">Опыт работы</div>
                <div className="column__item">
                  <div className="item__head">
                    <div className="head__img">
                      <Image
                        src={"/images/work.svg"}
                        alt="icon work"
                        width={21}
                        height={25}
                      />
                    </div>
                    <div className="head__title">Front-End Developer</div>
                    <div className="head__location">Freelance</div>
                  </div>
                  <div className="item__body">Разработка сайтов</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
