import { Container } from "react-bootstrap";
import "./sectionPromo.scss";
import Link from "next/link";

export default function SectionPromo() {
  return (
    <div className="promo">
      <Container>
        <div className="promo__subtitle">Nikolay Gerasimov</div>
        <h1 className="promo__title">Web-разработчик из Санкт-Петербурга</h1>
        <div className="promo__buttons">
          <Link href={"#portfolio"}>
            <div className="buttons__portfolio">Портфолио</div>
          </Link>
          <Link href={"#about"}>
            <div className="buttons__about">Обо мне</div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
