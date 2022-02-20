import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { clientComponent } from "./lista-clientes.js";


export const updateComponent = (idParam) => {

  const label = []

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.label != null) {
        label.push(element.label)
      }
    });
  })

  
  view.getUpdate();

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.id == idParam) {
        addParamInput(element)
      }
    })
  })
  const form = document.getElementById('signup-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const clientUpdate = {
      model: document.getElementById('model').value,
      label: document.getElementById('label').value,
      type: document.getElementById('type').value,
      owner: document.getElementById('name').value,
      observation: document.getElementById('observation').value
    }

    if(label.include(clientUpdate.label)) {
      return alert(`A placa [${clientUpdate.label}] já está cadastrada.`)
    } else {
      service.putVehicle(clientUpdate, idParam).then(() => {
        cancelar()
        clientComponent()
      })
    }

    
  })
}

const addParamInput = (object) => {
  document.getElementById('model').value = object.model,
  document.getElementById('label').value = object.label,
  document.getElementById('type').value = object.type,
  document.getElementById('name').value = object.owner,
  document.getElementById('observation').value = object.observation
}

const cancelar = () => {
  const form = document.getElementById('signup-form')
  form.reset()
}