import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Product1Content from "../../content/Product1Content.json"
import MiddleBlockContent2 from "../../content/MiddleBlockContent2.json"

const MiddleBlock2 = lazy(()=>import("../../components/MiddleBlock2"))
const Contact = lazy(() => import("../../components/ContactForm"));
const Block = lazy(()=> import("../../components/Block"))
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlock2 = lazy(()=>import("../../components/ContentBlock2"))

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id = "middle"
      />
      {/* <Block
        type = "left"
        title={AboutContent.title}
        content={AboutContent.text}
        section = {AboutContent.section}
        
      
      /> */}
      <ContentBlock2
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
       
        id="about"
      />
      <ContentBlock2
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
      
        id="mission"
      />
      <ContentBlock2
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        
        id="product"
      />
       <ContentBlock2
        type="right"
        title={Product1Content.title}
        content={Product1Content.text}
        
        id="product"
      />
      <MiddleBlock2
        title={MiddleBlockContent2.title}
        content={MiddleBlockContent2.text}
        button={MiddleBlockContent2.button}
        id = "middle"
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
