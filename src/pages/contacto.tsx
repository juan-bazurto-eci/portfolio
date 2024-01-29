import { Aside } from "@/containers/organism/Aside";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Resend } from "resend";

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSendSuccess(true);
        setTimeout(() => {
          setSendSuccess(false);
        }, 2000);
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <Head>
        <title>Contacto - Juan Camilo Bazurto Arias</title>
      </Head>
      <div className="layout">
        <Aside page={"contacto"} />

        <main className="layout__content">
          <section className="content__page content__contact">
            <header className="contact__header">
              <h1 className="contact__title">Contacto</h1>
            </header>
            <div className="contact__container">
              <section className="contact__info">
                <div className="contact__data">
                  <i className="contact__icon fa-solid fa-location-dot"></i>
                  <h2 className="contact__subtitle">Bogotá</h2>
                </div>
                <div className="contact__data">
                  <i className="contact__icon fa-solid fa-phone"></i>
                  <h2 className="contact__subtitle">+57 3214626166</h2>
                </div>
                <div className="contact__data">
                  <i className="contact__icon fa-solid fa-envelope"></i>
                  <h2 className="contact__subtitle">camilobzt@gmail.com</h2>
                </div>
                <div className="contact__data">
                  <i className="contact__icon fa-solid fa-circle-check"></i>
                  <h2 className="contact__subtitle">Ingeniero de Sistemas</h2>
                </div>
              </section>

              <section className="contact__form-box">
                <div className="contact__map" id="iframe-map">
                  {loading ? (
                    <span className="loader"></span>
                  ) : (
                    <iframe
                      className="contact__iframe"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.606691576448!2d-74.08617532545617!3d4.664006695310858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba978e03933%3A0x80e36aa0b17abaf4!2sCl.%2064a%20%2357-23%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1705951983142!5m2!1ses!2sco"
                    ></iframe>
                  )}
                </div>
                <header className="contact__form-header">
                  <h3 className="form-header__subtitle">
                    ¿Cómo Puedo{" "}
                    <span className="subtitle__color">Ayudarte?</span>
                  </h3>
                </header>

                <form className="contact__form" onSubmit={handleSubmmit}>
                  <div className="form__container">
                    <section className="form__left">
                      <div className="form__group">
                        <input
                          type="text"
                          className="form__input"
                          name="name"
                          required
                          placeholder="Nombre"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="name" className="form__label">
                          Nombre
                        </label>
                      </div>
                      <div className="form__group">
                        <input
                          type="email"
                          className="form__input"
                          name="email"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="email" className="form__label">
                          Email
                        </label>
                      </div>
                      <div className="form__group">
                        <input
                          type="text"
                          className="form__input"
                          name="subject"
                          required
                          placeholder="Asunto"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="subject" className="form__label">
                          Asunto
                        </label>
                      </div>
                    </section>
                    <section className="form__right">
                      <div className="form__group form__group--textarea">
                        <textarea
                          name="message"
                          className="form__input form__input--textarea"
                          required
                          placeholder="Mensaje"
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                        <label htmlFor="message" className="form__label">
                          Mensaje
                        </label>
                      </div>
                    </section>
                  </div>
                  {sendSuccess ? (
                    <input
                      disabled={true}
                      type="submit"
                      className="form__button--success"
                      value="Mensaje Enviado"
                    />
                  ) : (
                    <input
                      type="submit"
                      className="form__button"
                      value="Enviar mensaje"
                    />
                  )}
                </form>
              </section>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
