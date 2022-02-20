import { service } from "../service/index.js";
import { view } from "../view/index.js"
import { singupComponent } from "./cadastro.js";
import { checkoutComponent } from "./checkout.js";

view.getCheckinHTML();

let idCheckin = [];
service.getActivities().then((dados) => {
  dados.forEach(element => {
    if (element.checkout_at == null) {
      idCheckin.push(element.vehicles_id)
    }
  });
  getVehicle()
});

let arrVehicles = []
const getVehicle = () => {
  service.getVehicle().then((dados) => {
    dados.forEach((element) => {
      if (idCheckin.includes(element.id)) {
        createNewLine(element)
      }
      if (element.label != null) {
        arrVehicles.push(element)
      }
    })
    createOptions(arrVehicles)
  });
}

const createNewLine = (object) => {
  const table = document.getElementById('tbody');
  const newLine = document.createElement('tr')

  const dadosHTML = `
    <td>${object.model}</td>
    <td>${object.label}</td>
    <td>
        <a id="${object.id}" class="btn-link">Check-out</a>
    </td>
  `
  newLine.innerHTML = dadosHTML;
  return table.appendChild(newLine);
}

const createOptions = (arrVehicles) => {
  const filterVehicles = []

  arrVehicles.forEach((element) => {
    idCheckin.includes(element.id) ?
      console.log("Já está estacionado") :
      filterVehicles.push(element)
  })
  const select = document.getElementById('select')
  filterVehicles.forEach((element) => {
    const option = new Option(element.label, element.id);
    select.add(option)
  })
}

const main = document.getElementById('root');
main.addEventListener('click', (event) => {
  const button = event.path[0].innerHTML
  const id = event.path[0].id

  if (button == "Check-out") {
    checkoutComponent(id);
  }
  if (button == "Check-in") {
    const select = document.getElementById('select')
    searchID(select.value)
  }
  if (button == "Adicionar Novo") {
    singupComponent()
  }
})

const searchID = (id) => {
  service.getVehicle().then((dados) => {
    dados.forEach((element) => {
      if (element.id == id) {
        checkinAPI(element)
      }
    })
  })
}

const checkinAPI = (object) => {
  service.postCheckin(object.label).then((dados) => {
    alert(dados.message)
    window.location.reload()
  })
}