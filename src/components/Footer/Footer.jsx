import React from "react";
import footerLogo from "../../assets/hero/offlogo.png";
import Banner from "../../assets/shirt/footer.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepear: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold 
            sm:text-left text-justify mb-3 flex items-center
            gap-3"
            >
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              vitae nihil culpa. Cum aliquid molestiae nulla sed quod tenetur,
              aspernatur, odit impedit culpa officia saepe explicabo
              perferendis. Facilis, dicta maiores.{" "}
            </p>
          </div>
          {/* footer linkds */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3
         col-span-2 md:pl-10 "
          >
            <div className="flex gap-14">
              <div className="py-8 px-4">
                <h1
                  className="sm:text-xl text-xl 
                font-bold sm:text-left text-justify mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-xl text-xl 
                font-bold sm:text-left text-justify mb-3"
                >
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-8 pl-36">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mt-4 pl-36">
                  <FaLocationArrow />
                  <p className="flex">Noida, Utter</p>
                </div>
                <div className="flex items-center gap-3 pl-36">
                  <FaMobileAlt />
                  <p>+92 3488560875</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;