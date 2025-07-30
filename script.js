const dados = {
  labels: ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"],
  valores: [30, 20, 20, 20, 10]
};

// Gráfico de Pizza
new Chart(document.getElementById("graficoPizza"), {
  type: "pie",
  data: {
    labels: dados.labels,
    datasets: [{
      data: dados.valores,
      backgroundColor: ["#ff00d4ff", "#0099ffff", "#ffb701ff", "#03fc0cff", "#f50f0fff"]
    }]
  },
  options: {
    responsive: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let total = context.dataset.data.reduce((a, b) => a + b, 0);
            let valor = context.raw;
            let porcentagem = ((valor / total) * 100).toFixed(1);
            return `${context.label}: ${porcentagem}%`;
          }
        }
      }
    }
  }
});

// Gráfico de Barras
new Chart(document.getElementById("graficoBarras"), {
  type: "bar",
  data: {
    labels: dados.labels,
    datasets: [{
      label: "Distribuição (%)",
      data: dados.valores,
      backgroundColor: "#36A2EB"
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
