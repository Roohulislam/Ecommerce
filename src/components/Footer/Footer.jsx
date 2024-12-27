import React from "react";
import footerLogo from "../../assets/hero/offlogo.png";
import Banner from "../../assets/shirt/footer.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
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
    <div style={BannerImg} className="text-white pt-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Details */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <img src={footerLogo} alt="Shopsy Logo" className="w-12" />
              <h1 className="text-3xl font-bold">Shopsy</h1>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              vitae nihil culpa. Cum aliquid molestiae nulla sed quod tenetur,
              aspernatur, odit impedit culpa officia saepe explicabo
              perferendis. Facilis, dicta maiores.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Important Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="hover:text-primary cursor-pointer">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">More Links</h2>
              <ul className="space-y-2">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="hover:text-primary cursor-pointer">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social and Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-primary" />
              </a>
            </div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="flex items-center gap-3 mb-2">
              <FaLocationArrow />
              <p className="text-sm">Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p className="text-sm">+92 3488560875</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
