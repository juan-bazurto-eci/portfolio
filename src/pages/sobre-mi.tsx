import { Aside } from "@/containers/organism/Aside";
import Head from "next/head";
import React from "react";

export default function AboutMePage() {
  return (
    <>
      <Head>
        <title>Sobre mí - Juan Camilo Bazurto Arias</title>
      </Head>
      <div className="layout">
        <Aside page={"sobre-mi"} />

        <main className="layout__content">
          <section className="content__page content__about">
            <header className="about__header">
              <h1 className="about__title">
                Sobre <span className="title__color">Mí</span>
              </h1>
            </header>

            <section className="about__personal-info">
              <article className="personal-info__bio">
                <p className="personal-info__description">
                  Ingeniero de sistemas de la Universidad Escuela Colombiana de
                  Ingeniería Julio Garavito con más de cinco años de experiencia
                  en habilidades de programación, manejo avanzado de diferentes
                  lenguajes de programación, manejo de repositorios en la nube
                  GIT y GITHUB y manejo de servicios como Azure Services y AWS.
                </p>
              </article>
              <div className="personal-info__data">
                <ul className="personal-info__list">
                  <li className="personal-info__option">
                    <span className="personal-info__title">Edad</span>
                    <span className="personal-info__value">23</span>
                  </li>
                  <li className="personal-info__option">
                    <span className="personal-info__title">País</span>
                    <span className="personal-info__value">Colombia</span>
                  </li>
                  <li className="personal-info__option">
                    <span className="personal-info__title">Ciudad</span>
                    <span className="personal-info__value">Bogotá</span>
                  </li>
                  <li className="personal-info__option">
                    <span className="personal-info__title">Correo</span>
                    <span className="personal-info__value">
                      camilobzt@gmail.com
                    </span>
                  </li>
                  <li className="personal-info__option">
                    <span className="personal-info__title">Teléfono</span>
                    <span className="personal-info__value">3214626166</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="about__services">
              <header className="services__header">
                <h2 className="services__title">
                  Lo que <span className="title__color">hago</span>
                </h2>
              </header>
              <div className="services__container">
                <article className="services__service">
                  <div className="service__icon">
                    <i className="service__real-icon fa-solid fa-code"></i>
                  </div>
                  <div className="service__content">
                    <h3 className="service__title">Programación</h3>
                    <p className="service__description">
                      Experiencia en Python, Java, C, C++, gestión de bases de
                      datos SQL y NO-SQL.
                    </p>
                  </div>
                </article>
                <article className="services__service">
                  <div className="service__icon">
                    <i className="service__real-icon fa-solid fa-terminal"></i>
                  </div>
                  <div className="service__content">
                    <h3 className="service__title">Ciencia de Datos</h3>
                    <p className="service__description">
                      Tengo experiencia en proyectos de analítica de datos, R y
                      Python para modelado estadístico, análisis exploratorio de
                      datos (AED), machine learning y optimización.
                    </p>
                  </div>
                </article>
                <article className="services__service">
                  <div className="service__icon">
                    <i className="service__real-icon fa-solid fa-computer"></i>
                  </div>
                  <div className="service__content">
                    <h3 className="service__title">Desarrollo Web</h3>
                    <p className="service__description">
                      Experiencia en HTML, CSS, JavaScript, TypeScript,
                      Front-end con React, NextJs, Angular. Back-end con NodeJs,
                      SpringBoot y GraphQL.
                    </p>
                  </div>
                </article>
                <article className="services__service">
                  <div className="service__icon">
                    <i className="service__real-icon fa-solid fa-chalkboard-teacher"></i>
                  </div>
                  <div className="service__content">
                    <h3 className="service__title">Formación</h3>
                    <p className="service__description">
                      Tengo experiencia como tutor en programación, para todos
                      los niveles y lenguajes.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            {/* <!-- <section className="about__reviews">
          <header className="reviews__header">
            <h3 className="reviews__title">
              Reseñas
            </h3>
          </header>

          <div className="reviews__container">
            <article className="reviews__review">
              <div className="review__image-container">
                <img
                  src="assets/img/testimonio1.jpg"
                  className="review__image"
                  alt="testimonio1"
                />
              </div>
              <div className="review__description">
                <p className="review__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla tempore, nobis natus a ad recusandae delectus tenetur
                  eius expedita ipsum reiciendis inventore sunt iste
                  doloremque. Qui eos veniam maxime quasi.
                </p>
              </div>
              <div className="review__author">
                <div className="review__author-info">
                  <h4 className="review__name">Ana lopez</h4>
                  <h5 className="review__company">Developers S.A</h5>
                </div>
                <div className="review__author-icon">
                  <i className="review__icon fa-solid fa-quote-right"></i>
                </div>
              </div>
            </article>
            <article className="reviews__review">
              <div className="review__image-container">
                <img
                  src="assets/img/testimonio2.jpg"
                  className="review__image"
                  alt="testimonio1"
                />
              </div>
              <div className="review__description">
                <p className="review__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla tempore, nobis natus a ad recusandae delectus tenetur
                  eius expedita ipsum reiciendis inventore sunt iste
                  doloremque. Qui eos veniam maxime quasi.
                </p>
              </div>
              <div className="review__author">
                <div className="review__author-info">
                  <h4 className="review__name">Ana lopez</h4>
                  <h5 className="review__company">Developers S.A</h5>
                </div>
                <div className="review__author-icon">
                  <i className="review__icon fa-solid fa-quote-right"></i>
                </div>
              </div>
            </article>
          </div>
        </section> -->
        <!-- <section className="about__extra">
          <header className="extra__header">
            <h2 className="extra__title">
              Información <span className="title__color">Extra</span>
            </h2>
          </header>
          <div className="extra__container">
            <article className="extra__info">
              <i className="extra__icon fa-solid fa-heart"></i>
              <h4 className="extra__subtitle">Alumnos Contentos</h4>
              <span className="extra__quantity">800</span>
            </article>
          </div>
        </section> --> */}
          </section>
        </main>
      </div>
    </>
  );
}
