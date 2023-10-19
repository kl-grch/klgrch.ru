import Image from "next/image";
import "./sectionWorks.scss";
import { Container } from "react-bootstrap";

export default function SectionWorks() {
  return (
    <Container>
      <div className="works" id="portfolio">
        <div className="works__title">Портфолио</div>
        <div className="works__subtitle">Мои работы</div>
        <div className="divider"></div>
        <div className="works__items">
          <a
            href={"https://glamarkennel.com"}
            title="Питомник шнауцеров и австралийский терьеров"
          >
            <div className="items__work">
              <div className="work__img">
                <Image
                  src="/images/works/glamarkennel.png"
                  alt="the one of works"
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}
