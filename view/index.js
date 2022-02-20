const getSignup = () => {
    const main = document.getElementById('root');
  const dadosHTML = `
      <form class="cadastro" id="signup-form">
        <h1 class="cadastro__titulo">Novo Cliente</h1>
        <label for="type">Nome do cliente</label>
        <input type="text" id="name" placeholder="Digite aqui">
        <br><br>
        <label>Modelo do veículo</label>
        <input type="text" id="model" placeholder="Digite aqui">
        <br><br>
        <label for="type">Tipo do Veículo</label>
        <select id="type">
          <option value="1">Carro</option>
          <option value="2">Moto</option>
        </select>
        <br><br>
        <label for="label">Placa do Veículo</label>
        <input type="text" id="label" placeholder="Digite aqui">
        <br><br>
        <label for="observation">Observações</label>
        <textarea id="observation" cols="30" rows="10"></textarea>
        <br><br>
        
        <div class="cadastro__item">
          <button id="cancel" type="button">Cancelar</button>
          <button id="save" type="submit">Salvar</button>
        </div>
      </form>
  `

  main.innerHTML = dadosHTML;
}

const getClient = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section class="lista-cliente">
      <h1 class="lista-cliente__title">Lista de Clientes</h1>
      <table class="lista-cliente__table" id="tbody">
        <tr>
          <th class="none">Cliente</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Tipo</th>
          <th>Observações</th>
          <th>
            <a href="#">Novo</a>
          </th>
        </tr>
      </table>
    </section>
  `
  main.innerHTML = dadosHTML;
}

const getUpdate = () => {
  const main = document.getElementById('root');
const dadosHTML = `
    <form class="cadastro" id="signup-form">
      <h1 class="cadastro__titulo">Editar Cliente</h1>
      <label for="type">Nome do cliente</label>
      <input type="text" id="name" placeholder="Digite aqui">
      <br><br>
      <label for="type">Modelo do veículo</label>
      <input type="text" id="model" placeholder="Digite aqui">
      <br><br>
      <label for="type">Tipo do Veículo</label>
      <select id="type">
        <option value="1">Carro</option>
        <option value="2">Moto</option>
      </select>
      <br><br>
      <label for="label">Placa do Veículo</label>
      <input type="text" id="label" placeholder="Digite aqui">
      <br><br>
      <label for="observation">Observações</label>
      <textarea id="observation" cols="30" rows="10"></textarea>
      <br><br>
      <div class="cadastro__item">
      <button id="cancel" type="button">Cancelar</button>
      <button id="save" type="submit">Atualizar</button>
      </div>
      
    </form>
`

main.innerHTML = dadosHTML;
}

const getCheckinHTML = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section class="checkin">
      <h2 class="checkin__title">Lista de Clientes do Estacionamento</h2>
      <br>
      <table id="tbody" class="checkin__table">
        <tr>
        <th>Modelo</th>
        <th>Placa</th>
        <th>Opção</th>
        </tr>
      </table>
      <div class="checkin__item">
        <label for="select">Placa</label>
        <select class="checkin__input" id="select"></select>
        <a type="button" id="adicionar-novo" class="checkin__item__link">Adicionar Novo</a>
        <br>
        <div class="class="checkin__button"">
          <button id="checkin" class="btn-link">Check-in</button>
        </div>
      </div>
    </section>
  `
  main.innerHTML = dadosHTML;
}

const getCheckoutHTML = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section class="checkout">
      <h2 class="checkout__title">Dados do Cliente</h2>
      <br>
      <table class="checkout__table">
        <tr>
          <th>Cliente</th>
          <th>Modelo</th>
          <th>Placa</th>
        </tr>
        <tr id="tbody"></tr>
      </table>
      <div>
        <label>Total de Horas</label>
        <input 
          id="totalHora"
          class="input"
          type="text"
          placeholder="Total de Horas"
          disabled
        />
      </div>
      <br/>
      <div> 
        <label>Valor a pagar</label>
        <input
          id="valorPagar"
          class="input"
          type="text"
          placeholder="Valor a pagar"
          disabled
        />
      </div>
      <br/>
      <div class="btn">
        <button class="btn-link" id="finalizar">Finalizar</button>
      </div>
    </section>
  `
  main.innerHTML = dadosHTML;
}

const getBillingHTML = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
  <section>
    <h1>Lista de Faturamento</h1>
    <table class="tabela">
      <thead>
        <tr>
          <th>Qtd. Veículos</th>
          <th>Total</th>
          <th>Dia</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>
    <div class="grafico">
      <div id="piechart_3d"></div>
    </div>
  </section>
  `
  main.innerHTML = dadosHTML;
}

export const view = {
  getSignup,
  getClient,
  getUpdate,
  getCheckinHTML,
  getCheckoutHTML,
  getBillingHTML,
}