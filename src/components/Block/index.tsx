import { withTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { Container, TextWrapper, Content } from "./styles";
// import {BlockProps} from "../types2"

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
