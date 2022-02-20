import { service } from "../service/index.js";
import { view } from "../view/index.js"
import { updateComponent } from "./atualiza.js";

export const clientComponent = () => {
  view.getClient();

  service.getVehicle().then((dados) => {
    dados.forEach((element) => {
      if(element.owner != null && element.label != null) {
        addNewLine(element.owner, element.model, element.label, element.type, element.observation, element.id)
      }
    })
  })

  const table = document.getElementById('tbody');

  table.addEventListener('click', (event) => {
    const button = event.path[0].innerHTML
    const id = event.path[0].id

    if(button == "Editar") {
      updateComponent(id);
    }
    if(button == "Excluir") {
      deleteComponent(id)
    }
    if(button == "Novo") {
      console.log(button)
    }
  })
}

const addNewLine = (cliente, modelo, placa, tipo, observacoes, id) => {
  const table = document.getElementById('tbody');
  const newLine = document.createElement('tr')

  const dadosHTML = `
    <td class="none">${cliente}</td>
    <td>${modelo}</td>
    <td>${placa}</td>
    <td class="none">${tipo}</td>
    <td class="none">${observacoes}</td>
    <td>
      <div class="lista-btn">
        <a id="${id}" class="btn-link editar">Editar</a>
        <a id="${id}" class="btn-link" type="button">Excluir</a>
      </div>
    </td>
  `
  newLine.innerHTML = dadosHTML;
  return table.appendChild(newLine);
}

const deleteComponent = (id) => {
  service.deleteVehicle(id).then(() => {
    clientComponent();
  })
}