const url = "http://localhost:8000/api"

const postVehicle = (clientObject) => {
  return fetch(url + "/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clientObject)
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      alert('Cadastro feito com sucesso!')
    }
  })
}

const getVehicle = () => {
  return fetch(url + "/vehicles")
  .then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

const putVehicle = (clientObject, id) => {
  return fetch(`${url}/vehicles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clientObject)
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

const deleteVehicle = (id) => {
   return fetch(`${url}/vehicles/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

const getActivities = () => {
  return fetch(url + "/activities")
  .then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

const postCheckin = (label) => {
  return fetch(url + "/activities/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({label})
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

const putCheckout = (object) => {
  return fetch(url + "/activities/checkout", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

export const service = {
  postVehicle,
  getVehicle,
  putVehicle,
  deleteVehicle,
  getActivities,
  postCheckin,
  putCheckout,
}