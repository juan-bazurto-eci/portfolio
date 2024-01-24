import { Aside } from "@/containers/organism/Aside";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio - Juan Camilo Bazurto Arias</title>
      </Head>
      <div className="layout">
        <Aside page={"portafolio"} />

        <main className="layout__content">
          <section className="content__page content__portfolio">
            <header className="portfolio__header">
              <a
                href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:f:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EhCBgj2UmLVPvQmDforI4n8B51jxyw16wQ2OxW38csMz6w?e=hqP0kA"
                target="_blank"
              >
                <h1 className="portfolio__title">Portafolio</h1>
              </a>
            </header>

            {/* <!-- <nav className="portfolio__navbar">
            <ul className="portfolio__menu">
              <li className="portfolio__option portfolio__option--active">
                <a href="#" className="portfolio__link portfolio__link--active"
                  >Todo</a
                >
              </li>
              <li className="portfolio__option">
                <a href="#" className="portfolio__link">Cursos</a>
              </li>
              <li className="portfolio__option">
                <a href="#" className="portfolio__link">Web</a>
              </li>
              <li className="portfolio__option">
                <a href="#" className="portfolio__link">Redes Sociales</a>
              </li>
              <li className="portfolio__option">
                <a href="#" className="portfolio__link">Videos</a>
              </li>
              <li className="portfolio__option">
                <a href="#" className="portfolio__link">Proyectos</a>
              </li>
            </ul>
          </nav> --> */}

            <section className="portfolio__gallery">
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:v:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EfIyCiZcnlZPv54jRKJRbEoBTUdUNZVu2QtTbk4H0_TYTQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ExJY8a"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/ml2.png"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">
                  Medical Learning
                </figcaption>
                <i className="gallery__icon fa-brands fa-python"></i>
                <span className="gallery__category">Python</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:v:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EZO7dnHh7VZNhq2qmvUYBW8B1N5oh5b97gEGOwD01fzkOw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hmZ1PJ"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/logo-mentor.webp"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">MentorMagic</figcaption>
                <i className="gallery__icon fa-brands fa-react"></i>
                <span className="gallery__category">React</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:b:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EdYmGhJqIe5BijL0cJmaEBkBh-1TGqSWjR2JNk-RKpGgDA?e=h35uXq"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/ebys.png"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">
                  Modelo de predicción de partidos de la NBA
                </figcaption>
                <i className="gallery__icon fa-brands fa-python"></i>
                <span className="gallery__category">Python</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:v:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EQRAzyOFcfVLsdksUKOqRFwB0hi3lcINNLUbHtCF-eIAMg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=bmEGdc"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/isib.png"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">
                  Sistema de Detección de Sismos
                </figcaption>
                <i className="gallery__icon fa-brands fa-aws"></i>
                <span className="gallery__category">IoT</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://www.instagram.com/p/Cl9KOI0tNT1/?igsh=cmx1MGQ3Zmc3cWFq"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/einf.png"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">
                  Teorema central del límite Shiny App
                </figcaption>
                <i className="gallery__icon fa-brands fa-r-project"></i>
                <span className="gallery__category">R</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:v:/g/personal/juan_bazurto_mail_escuelaing_edu_co/EX5Ju-GCy4hPhkmJ9mrCWTMBJpcJ-m0MdZIhDimehRWXkg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=wlQicS"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/OTP-logo.jpeg"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">OnThePitch</figcaption>
                <i className="gallery__icon fa-brands fa-react"></i>
                <span className="gallery__category">React</span>
              </figure>
              <figure className="gallery__item">
                <div className="gallery__container-image">
                  <a
                    href="https://pruebacorreoescuelaingeduco-my.sharepoint.com/:v:/g/personal/juan_bazurto_mail_escuelaing_edu_co/ERnq3yuZB8FLvbSnVFWLJScB_tqNbsRLnpgkJk7vZu8DSA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=GtPT7z"
                    className="gallery__link"
                    target="_blank"
                  >
                    <Image
                      src="/assets/img/logoAcu.webp"
                      alt="galeria-1"
                      className="gallery__image"
                      width={280}
                      height={180}
                    />
                  </a>
                </div>
                <figcaption className="gallery__title">AcuasesApp</figcaption>
                <i className="gallery__icon fa-brands fa-react"></i>
                <span className="gallery__category">React</span>
              </figure>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
