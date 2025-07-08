// Leave Trend Chart (Pie)
const ctxTrend = document.getElementById('leaveTrendChart').getContext('2d');
new Chart(ctxTrend, {
  type: 'pie',
  data: {
    labels: ['Sick Days', 'Working Days'],
    datasets: [{
      data: [9, 180],
      backgroundColor: ['#f39c12', '#2ecc71']
    }]
  }
});

// Leave Balance Chart (Doughnut)
const ctxBalance = document.getElementById('leaveBalanceChart').getContext('2d');
new Chart(ctxBalance, {
  type: 'doughnut',
  data: {
    labels: ['Casual', 'Earned', 'Sick', 'Others'],
    datasets: [{
      data: [3, 2, 1.5, 0],
      backgroundColor: ['#3498db', '#9b59b6', '#e67e22', '#bdc3c7']
    }]
  }
});
