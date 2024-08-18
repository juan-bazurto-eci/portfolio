import { Aside } from "@/containers/organism/Aside";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const CurriculumPage = () => {
  return (
    <>
      <Head>
        <title>Curriculum - Juan Camilo Bazurto Arias</title>
      </Head>
      <div className="layout">
        <Aside page={"curriculum"} />

        <main className="layout__content">
          <section className="content__page content__resume">
            <header className="resume__header">
              <h1 className="resume__title">Curriculum</h1>
            </header>
            <div className="resume__container">
              <section className="resumen__left">
                <header className="resume__subheader">
                  <h2 className="resume__subtitle">Formación</h2>
                </header>
                <div className="resume__timelines">
                  <article className="timelines__timeline">
                    <header className="timeline__header">
                      <h4 className="timeline__year">2019-2024</h4>
                      <span className="timeline__company">
                        Universidad Escuela Colombiana de Ingeniería Julio
                        Garavito
                      </span>
                    </header>
                    <div className="timeline__divider"></div>
                    <div className="timeline__description">
                      <h3 className="timeline__title">
                        Ingeniería de Sistemas
                      </h3>
                      <p className="timeline__text">Bogotá.</p>
                    </div>
                  </article>
                  <article className="timelines__timeline">
                    <header className="timeline__header">
                      <h4 className="timeline__year">2020-2022</h4>
                      <span className="timeline__company">
                        Universidad Tecnologica de Pereira
                      </span>
                    </header>
                    <div className="timeline__divider"></div>
                    <div className="timeline__description">
                      <h3 className="timeline__title">
                        Programación y Desarrollo Web
                      </h3>
                      <p className="timeline__text">MISION TIC 2022.</p>
                    </div>
                  </article>
                  <article className="timelines__timeline">
                    <header className="timeline__header">
                      <h4 className="timeline__year">2021</h4>
                      <span className="timeline__company">
                        Universidad Escuela Colombiana de Ingeniería Julio
                        Garavito
                      </span>
                    </header>
                    <div className="timeline__divider"></div>
                    <div className="timeline__description">
                      <h3 className="timeline__title">
                        Ingeniería Estadística
                      </h3>
                      <p className="timeline__text">Bogotá.</p>
                    </div>
                  </article>
                </div>
                <header className="resume__subheader">
                  <h2 className="resume__subtitle">Experiencia</h2>
                </header>
                <div className="resume__timelines">
                  <article className="timelines__timeline">
                    <header className="timeline__header">
                      <h4 className="timeline__year">2024</h4>
                      <span className="timeline__company">Inteia</span>
                    </header>
                    <div className="timeline__divider"></div>
                    <div className="timeline__description timeline__description--experience">
                      <h3 className="timeline__title">
                        Desarrollador FrontEnd
                      </h3>
                      <p className="timeline__text">
                        Desarrollé interfaces de usuario avanzadas para una
                        plataforma de gestión de tráfico, utilizando React.js,
                        Redux Toolkit y TypeScript.
                      </p>
                      <p className="timeline__text">
                        Trabajé en la conexión con APIs RESTful para operaciones
                        en tiempo real también integrando el control de cámaras
                        de tráfico y paneles de señalización, realicé pruebas
                        unitarias y aseguré la calidad del código con
                        SonarCloud.
                      </p>
                      <p className="timeline__text">
                        Mi enfoque estuvo en mejorar continuamente la
                        experiencia del usuario y adaptar soluciones a
                        requisitos técnicos complejos en entornos desafiantes.
                      </p>
                    </div>
                  </article>
                  <article className="timelines__timeline">
                    <header className="timeline__header">
                      <h4 className="timeline__year">2021-2024</h4>
                      <span className="timeline__company">Nivelics SAS</span>
                    </header>
                    <div className="timeline__divider"></div>
                    <div className="timeline__description timeline__description--experience">
                      <h3 className="timeline__title">
                        Desarrollador FrontEnd
                      </h3>
                      <p className="timeline__text">
                        A cargo de tareas en áreas Front-end y Back-end en
                        diferentes proyectos utilizando herramientas como React,
                        NextJs, Angular, NodeJs, GraphQL, Apollo GraphQL,
                        GitHub, Jira, Firebase.
                      </p>
                      <p className="timeline__text">
                        Entregando siempre resultados de alta calidad y
                        productos mínimos viables (MVP). También mejorando mis
                        habilidades de comunicación y liderazgo.
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section className="resume__right">
                <header className="resume__subheader">
                  <h2 className="resume__subtitle">
                    Habilidades de{" "}
                    <span className="subtitle__color">Programación</span>
                  </h2>
                </header>
                <div className="resume__skills">
                  <article className="skills__title">
                    <h4 className="skills__text">Python</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">Java</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">R</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">HTML - CSS</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">JavaScript</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">TypeScript</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">React - NextJs</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">NodeJs</h4>
                    <span className="skills__number">60%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--60"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">SQL</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                </div>
                <header className="resume__subheader">
                  <h2 className="resume__subtitle">
                    Habilidades en{" "}
                    <span className="subtitle__color">Servicios Web</span>
                  </h2>
                </header>
                <div className="resume__skills">
                  <article className="skills__title">
                    <h4 className="skills__text">Git - GitHub</h4>
                    <span className="skills__number">90%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--90"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">Docker - DockerHub</h4>
                    <span className="skills__number">70%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--70"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">Azure</h4>
                    <span className="skills__number">70%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--70"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">AWS</h4>
                    <span className="skills__number">60%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--60"></div>
                  </div>
                  <article className="skills__title">
                    <h4 className="skills__text">MongoDB</h4>
                    <span className="skills__number">80%</span>
                  </article>
                  <div className="skills__progressbar">
                    <div className="skills__percentage skills__percentage--80"></div>
                  </div>
                </div>
                <header className="resume__subheader">
                  <h2 className="resume__subtitle">
                    Áreas de{" "}
                    <span className="subtitle__color">Conocimientos</span>
                  </h2>
                </header>
                <div className="resume__knowlegeds">
                  <ul className="knowlegeds__list">
                    <li className="knowlegeds__option">Algoritmos</li>
                    <li className="knowlegeds__option">Estructuras de Datos</li>
                    <li className="knowlegeds__option">
                      Programación Orientada a Objetos
                    </li>
                    <li className="knowlegeds__option">Modelos de Datos</li>
                    <li className="knowlegeds__option">Bases de Datos</li>
                    <li className="knowlegeds__option">Patrones de Diseño</li>
                    <li className="knowlegeds__option">Ciclos de Vida</li>
                    <li className="knowlegeds__option">
                      Desarrollo de Software
                    </li>
                    <li className="knowlegeds__option">Automatización</li>
                    <li className="knowlegeds__option">Análisis de Datos</li>
                    <li className="knowlegeds__option">Estadística</li>
                    <li className="knowlegeds__option">Modelamiento</li>
                    <li className="knowlegeds__option">Optimización</li>
                    <li className="knowlegeds__option">
                      Análisis Multivariado
                    </li>
                    <li className="knowlegeds__option">
                      Arquitecturas de Software
                    </li>
                    <li className="knowlegeds__option">
                      Arquitecturas Empresariales
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="resume__certificates">
              <header className="resume__subheader">
                <h2 className="resume__subtitle">Certificados</h2>
              </header>
              <section className="certificates__container">
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-1.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={30}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">Management 3.0</h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">7 Marzo 2023</span>
                  </div>
                </article>
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-1.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={30}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">
                      Master en CSS3 Avanzado
                    </h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">16 Enero 2023</span>
                  </div>
                </article>
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-1.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={30}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">
                      Curso de Angular 17 - Desde cero hasta profesional
                    </h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">21 Marzo 2023</span>
                  </div>
                </article>
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-2.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">
                      Desarrollo de Aplicaciones Web
                    </h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">4 Noviembre 2021</span>
                  </div>
                </article>
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-2.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">
                      Desarrollo de Software
                    </h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">6 Diciembre 2022</span>
                  </div>
                </article>
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <Image
                      src="/assets/img/certificado-2.png"
                      alt="certificado"
                      className="certificate__image"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="certificate__content">
                    <h4 className="certificate__title">Programación Basica</h4>
                    <span className="certificate__id"></span>
                    <span className="certificate__date">6 Diciembre 2022</span>
                  </div>
                </article>
              </section>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CurriculumPage;
