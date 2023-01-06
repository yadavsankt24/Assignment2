import React from "react";
import { Navbar } from "./Navbar";
import img1 from "../assets/img1.png";
import img2 from "../assets/ellipse.png";
import img3 from "../assets/mission.png";
import img4 from "../assets/mission2.png";
import img5 from "../assets/vision.png";
import img6 from "../assets/vision2.png";
import webDevelopment from "../assets/webDevelopment.png";
import ecommerce from "../assets/ecommerce.png";
import mobile from "../assets/mobile.png";
import ui from "../assets/ui.png";
import digital from "../assets/digital.png";
import service from "../assets/service.png";
import project from "../assets/project.png";
import Clients from "../assets/Clients.png";
import coffee from "../assets/coffee.png";
import rate from "../assets/rate.png";
import media from "../assets/media.png";
import kanvas from "../assets/kanvas.png";
import olympus from "../assets/olympus.png";
import travis from "../assets/travel.png";





import styles from "./uppersection.module.css";
import { Head } from "./Head";
import { Image } from "./Image";
import { Paragraph } from "./Paragraph";
import Footer from "./Footer";

export const UpperSection = () => {
  return (
    <div>
        <Navbar/>
      <div className={styles.upperSection}>
        <div className={styles.about}>
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img src={img2} />
        </div>
        <div className={styles.imageDiv}>
          <img src={img1} alt="" />
        </div>
      </div>

      <div
        style={{
          width: "95%",
          margin: "auto",
          backgroundColor: "#FAFAFA",
        }}
      >
        <div className={styles.midsection}>
          <div>
            <Head styler={styles.vision} h1={"Our Mission"} />
            <Paragraph p={p} />
          </div>
          <div>
            <Image img={img3} />
          </div>
        </div>
        <div>
          <Image styler={styles.move} img={img4} />
        </div>
      </div>
      <div
        style={{
          width: "95%",
          backgroundColor: "white",
          margin: "auto",
        }}
      >
        <div className={styles.midsectionLow}>
          <div>
            <Image img={img5} />
          </div>
          <div>
            <Head styler={styles.vision} h1={"Our Vision"} />
            <Paragraph p={p} />
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <Image styler={styles.move} img={img6} />
        </div>
      </div>

      <div className={styles.erpertArea}>
        <div>
          <Head styler={styles.areaExpert} h1={"Our Area Expertise"} />
        </div>
        <div className={styles.card}>
          <div>
            <Image img={webDevelopment} />{" "}
            <Paragraph styler={styles.para} p={"Web Development"} />
          </div>
          <div>
            <Image img={ecommerce} />{" "}
            <Paragraph styler={styles.para} p={"eCommerce Web Development"} />
          </div>
          <div>
            <Image img={mobile} />{" "}
            <Paragraph
              styler={styles.para}
              p={"Mobile Application Development"}
            />
          </div>
          <div>
            <Image img={ui} />{" "}
            <Paragraph styler={styles.para} p={"UI/UX Designing"} />
          </div>
          <div>
            <Image img={digital} />
            <Paragraph styler={styles.para} p={"Digital Marketing"} />
          </div>
          <div>
            <Image img={service} />{" "}
            <Paragraph styler={styles.para} p={"Website & App Maintenance"} />
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <Image img={project} />
          <Paragraph styler={styles.projectPara} p={"90+"} />
          <Paragraph styler={styles.projectPara2} p={"Project"} />
        </div>
        <div>
          <Image img={Clients} />
          <Paragraph styler={styles.projectPara} p={"85+"} />
          <Paragraph styler={styles.projectPara2} p={"Clients"} />
        </div>
        <div>
          <Image img={coffee} />
          <Paragraph styler={styles.projectPara} p={"300+"} />
          <Paragraph styler={styles.projectPara2} p={"Coffee"} />
        </div>
        <div>
          <Image img={rate} />
          <Paragraph styler={styles.projectPara} p={"93%"} />
          <Paragraph styler={styles.projectPara2} p={"Retention Rate"} />
        </div>
      </div>
      <div className={styles.company}>
        <div>
          <Image img={media} />
        </div>
        <div>
          <Image img={kanvas} />
        </div>
        <div>
          <Image img={olympus} />
        </div>
        <div>
          <Image img={travis} />
        </div>
      </div>
    </div>
  );
};

let p =
  "We believe in serving quality services which can meet customers requirements. Our vision is to bring out the best in people, technology andprocesses with top-notch quality. We build customer experience. Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service.";
