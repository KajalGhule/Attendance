// Leave Trend (Pie)
const ctxTrend = document.getElementById('leaveTrendChart').getContext('2d');
new Chart(ctxTrend, {
  type: 'pie',
  data: {
    labels: ['Sick Days', 'Working Days'],
    datasets: [{
      data: [9, 180],
      backgroundColor: ['#ff9800', '#4caf50']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});

// Leave Balance (Doughnut)
const ctxBalance = document.getElementById('leaveBalanceChart').getContext('2d');
new Chart(ctxBalance, {
  type: 'doughnut',
  data: {
    labels: ['Casual', 'Earned', 'Sick', 'Others'],
    datasets: [{
      data: [3, 2, 1.5, 0],
      backgroundColor: ['#2196f3', '#9c27b0', '#ff9800', '#9e9e9e']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});
