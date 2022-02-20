import { view } from "../view/index.js"
import { service } from "../service/index.js"

export const billingComponent = () => {
  view.getBillingHTML();

  let billingObject = [];
  service.getActivities().then((dados) => {
    dados.forEach(element => {
      if(element.price != null) {
        billingObject.push(element)
      }
    });
    createDateObject()
    createBilling()
  })

  let filterDates = [];
  const createDateObject = () => {
    const dates = []
    billingObject.forEach((element) => {
      dates.push(convertDate(element.checkout_at))
    });
    filterDates = new Set(dates)
  }

  const convertDate = (time) => {
    const date = new Date(time).getDate()
    return date
  }

  const createBilling = () => {
    let countObject = {
      i: 0,
      total: 0,
    }
    billingObject.forEach((element) => {
      if(typeof element.price == "number") {
        countObject.i++;
        countObject.total += element.price;
      }
    })
    createNewLine(countObject)
    createOptions(filterDates)
  }

  const table = document.getElementById('tbody')

  const createNewLine = (countObject) => {
    const newLine = document.createElement('tr');

    const dadosHTML = `
      <td id="qtd">${countObject.i}</td>
      <td id="total">${countObject.total.toFixed(2)}</td>
      <td>
        <select id="dates"></select>
      </td>
    `;

    newLine.innerHTML = dadosHTML;
    chartRender()
    return table.appendChild(newLine);
  }

  const createOptions = (date) => {
    const select = document.getElementById('dates')
    date.forEach((element) => {
      const option = new Option(element, element)
      select.add(option)
    })
  }

  table.addEventListener('click', (event) => {
    if(event.path[0].id == 'dates') {
      dateFilter(event)
    }
  })

  const dateFilter = (event) => {
    const day = event.path[0].value;
    let countObject = {
      i: 0,
      total: 0,
    }

    billingObject.forEach((element) => {
      if(convertDate(element.checkout_at) == day) {
        countObject.i++;
        countObject.total += element.price;
      }
    })
    updateHTML(countObject)
    }
  
  const updateHTML = (countObject) => {
    document.getElementById('qtd').innerText = countObject.i;
    document.getElementById('total').innerText = `R$ ${countObject.total.toFixed(2)}`;
  }

  let pieChartArr = [['Dia', 'Faturamento']]
  const filterPieChartPerDate = (chartDates) => {
    let countObject = {
      i: 0,
      total: 0,
    }  

    chartDates.forEach((elementDates) => {
      countObject.total = 0
      billingObject.forEach((element) => {
        if(convertDate(element.checkout_at) == elementDates) {
          countObject.i++;
          countObject.total += element.price;
        }
      })
      pieChartArr.push([`${elementDates}`, +countObject.total.toFixed(2)])
    })
  }

  function chartRender() {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      filterPieChartPerDate(filterDates)
      var data = google.visualization.arrayToDataTable(pieChartArr);

      var options = {
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);
    }
  }
}