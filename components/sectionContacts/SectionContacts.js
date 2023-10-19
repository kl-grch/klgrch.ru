import { Col, Container, Row } from "react-bootstrap";
import "./sectionContacts.scss";

export default function SectionContacts() {
  return (
    <Container>
      <div className="contacts">
        <div className="contacts__title">Контакты</div>
        <div className="contacts__subtitle">Свяжитесь со мной</div>
        <div className="divider"></div>
        <div className="contacts__info">
          <a href="https://github.com/kl-grch">
            <div className="info__item">
              <div className="item__title">Я на GitHub</div>
              <div className="item__img">
                <i className="bi bi-github"></i>
              </div>
            </div>
          </a>
          <a href="https://klgrch.t.me">
            <div className="info__item">
              <div className="item__title">Я в Telegram</div>
              <div className="item__img">
                <i className="bi bi-telegram"></i>
              </div>
            </div>
          </a>
          <a href="mailto:kolyagerich@gmail.com?subject=Сообщение с сайта klgrch.ru&body=Добрый день, хотел бы заказать у вас сайт">
            <div className="info__item">
              <div className="item__title">Написать на почту</div>
              <div className="item__img">
                <i className="bi bi-envelope-at"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}
