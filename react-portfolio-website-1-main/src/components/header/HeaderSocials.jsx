import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ninad-patil-5703241b8/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/PatilNinad98" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      {/* <a href="http://www.instagram.com/s.a.u.r.a.b.h.p.a.w.a.r/" target="_blank" rel="noreferrer"> */}
      {/* <BsInstagram /> */}
      {/* </a> */}
    </div>
  );
};

export default HeaderSocials;
