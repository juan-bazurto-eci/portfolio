import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Aside = ({ page = "" }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const handleClick = (url = "") => {
    if (url) router.push(url);
    setVisible(!visible);
  };

  return (
    <>
      {" "}
      <aside
        className={`layout__aside${visible ? " layout__aside--visible" : ""}`}
      >
        {/* <!-- User Info --> */}
        <section className="aside__user-info">
          <div className="user-info__general">
            <div className="user-info__container-image">
              <Image
                className="user-info__image"
                src="/assets/img/default-user.jpg"
                alt="Juan Camilo Bazurto"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="user-info__name">Juan Bazurto</h2>
            <h4 className="user-info__job">Ingeniero de Sistemas</h4>
          </div>
          {/* <!-- Navigation Menu --> */}
          <nav className="layout__menu">
            <ul className="menu__list">
              <li className="menu__option" onClick={() => handleClick("/")}>
                <div
                  className={`menu__link ${
                    page === "" ? "menu__link--active" : ""
                  }`}
                >
                  <i className="menu__icon fa-solid fa-house"></i>
                  <span className="menu__overlay">Inicio</span>
                </div>
              </li>
              <li
                className="menu__option"
                onClick={() => handleClick("/sobre-mi")}
              >
                <div
                  className={`menu__link ${
                    page === "sobre-mi" ? "menu__link--active" : ""
                  }`}
                >
                  <i className="menu__icon fa-solid fa-user"></i>
                  <span className="menu__overlay">Sobre mí</span>
                </div>
              </li>
              <li
                className="menu__option"
                onClick={() => handleClick("/curriculum")}
              >
                <div
                  className={`menu__link ${
                    page === "curriculum" ? "menu__link--active" : ""
                  }`}
                >
                  <i className="menu__icon fa-solid fa-graduation-cap"></i>
                  <span className="menu__overlay">Curriculum</span>
                </div>
              </li>
              <li
                className="menu__option"
                onClick={() => handleClick("/portafolio")}
              >
                <div
                  className={`menu__link ${
                    page === "portafolio" ? "menu__link--active" : ""
                  }`}
                >
                  <i className="menu__icon fa-solid fa-briefcase"></i>
                  <span className="menu__overlay">Portafolio</span>
                </div>
              </li>
              {/* <!-- <li className="menu__option" onClick={handleClick}>
      <Link href="blog" className={`menu__link ${
              page === "" ? "menu__link--active" : ""
            }`}>
        <i className="menu__icon fa-solid fa-book"></i>
        <span className="menu__overlay">Blog</span>
      </Link>
    </li> --> */}
              <li
                className="menu__option"
                onClick={() => handleClick("/contacto")}
              >
                <div
                  className={`menu__link ${
                    page === "contacto" ? "menu__link--active" : ""
                  }`}
                >
                  <i className="menu__icon fa-solid fa-envelope"></i>
                  <span className="menu__overlay">Contacto</span>
                </div>
              </li>
            </ul>
          </nav>
          {/* <!-- Social Networks --> */}
          <div className="user-info__links">
            <ul className="links__social">
              <li className="social__option">
                <Link
                  href="https://www.linkedin.com/in/juan-camilo-b-b65379105/"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-linkedin"></i>
                </Link>
              </li>
              {/* <!-- <li className="social__option">
      <Link href="https://resume.io/r/WAyxTOATv" target="_blank" className="social__link">
        <i className="social__icon fa-regular fa-file"></i>
      </Link>
    </li> --> */}
              <li className="social__option">
                <Link
                  href="https://github.com/juan-bazurto-eci"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-github"></i>
                </Link>
              </li>
              <li className="social__option">
                <Link
                  href="https://hub.docker.com/repositories/juanbazurtoeci"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-docker"></i>
                </Link>
              </li>
              <li className="social__option">
                <Link
                  href="https://wa.me/573214626166"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-whatsapp"></i>
                </Link>
              </li>
              <li className="social__option">
                <Link
                  href="mailto:camilobzt@gmail.com"
                  target="_blank"
                  className="social__link"
                >
                  <i className="social__icon fa-brands fa-google"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="user-info__buttons">
            <Link
              href="assets/file/Juan_Camilo_Bazurto_Arias_-_Ingeniero_de_sistemas.pdf"
              download="Juan_Camilo_Bazurto_Arias_-_Ingeniero_de_sistemas.pdf"
              className="user-info___btn"
            >
              Descargar CV
            </Link>
          </div>

          <footer className="user-info__footer">
            &copy; 2024 Juan Bazurto Web
          </footer>
        </section>
      </aside>{" "}
      <div className="layout__menu-toggle" onClick={() => handleClick()}>
        {!visible ? (
          <i className="menu-toggle__icon fa-solid fa-bars"></i>
        ) : (
          <i className="menu-toggle__icon fa-solid fa-xmark"></i>
        )}
      </div>
    </>
  );
};
