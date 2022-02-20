import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const singupComponent = () => {
  const label = []

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.label != null) {
        label.push(element.label)
      }
    });
  })

  view.getSignup();

  const form = document.getElementById('signup-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const clientSingup = {
      model: document.getElementById('model').value,
      label: document.getElementById('label').value,
      type: document.getElementById('type').value,
      owner: document.getElementById('name').value,
      observation: document.getElementById('observation').value
    }

    if(label.includes(clientSingup.label)) {
      alert(`A placa [${clientSingup.label}] já está cadastrada.`)
    } else {
      service.postVehicle(clientSingup)
    }
  })
};