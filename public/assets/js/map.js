document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector("#iframe-map").innerHTML = `                <iframe
        class="contact__iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.606691576448!2d-74.08617532545617!3d4.664006695310858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba978e03933%3A0x80e36aa0b17abaf4!2sCl.%2064a%20%2357-23%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1705951983142!5m2!1ses!2sco"
      ></iframe>`;
  }, 500);
});
