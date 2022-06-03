import { clientServices } from "../assets/service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const name = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(name, email)
    .then(() => {
      window.location.href = "/screens/registro_completado.html"
    })
    .catch((err) => console.log(err));
});
