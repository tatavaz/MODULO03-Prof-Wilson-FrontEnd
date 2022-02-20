import { singupComponent } from "./controller/cadastro.js";
import { billingComponent } from "./controller/faturamento.js";
import { clientComponent } from "./controller/lista-clientes.js";

const link = document.getElementById('link');

link.addEventListener('click', (event) => {
  const option = event.path[0].innerText;

  switch(option) {
    case "Cadastro":
      singupComponent();
      break;
    case "Clientes":
      clientComponent();
      break;
    case "Check-in":
      window.location.href = "./checkin.html"
      break;
    case "Faturamento":
      billingComponent();
      break;
  }
})