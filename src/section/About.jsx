import React from "react";
import style from "./About.module.css";
import image from "../assets/aboutus.jpg";
import { Image } from "./Image";
import { Head } from "./Head";
import { Paragraph } from "./Paragraph";
const About = () => {
  return (
    <div className={style.overalldiv}>
      <div className={style.head}>
        <Head styler={style.heads_down} h1={"We grow Brands"} />
        <Head styler={style.heads_down} h1={"What is Techerudite?"} />

        <div className={style.context}>
          <Paragraph styler={style.f_context} p={data} />
        </div>
      </div>
      <div className={style.s_context}>
        <Image styler={style.image} img={image} />
        <div className={style.ff_context}>
          <Paragraph styler={style.f_context2} p={data2} />
          <Paragraph styler={style.s_f_context} p={data2} />
        </div>
      </div>
    </div>
  );
};
let data =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, consequuntur magni! Corrupti cupiditate, minima debitis voluptatum voluptate, dolores autem quasi, saepe minus tempora reiciendis impedit omnis qui sed. Aliquid minima illum labore voluptates cumque illo ducimus, vitae beatae minus commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, consequuntur magni! Corrupti cupiditate, minima debitis voluptatum voluptate, dolores autem quasi, saepe minus tempora reiciendis impedit omnis qui sed. Aliquid minima illum labore voluptates cumque illo ducimus, vitae beatae minus commodi!";
let data2 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, consequuntur magni! Corrupti cupiditate, minima debitis voluptatum voluptate, dolores autem quasi, saepe minus tempora reiciendis impedit omnis qui sed. Aliquid minima illum labore voluptates cumque illo ducimus, vitae beatae minus commodi!";

export default About;
