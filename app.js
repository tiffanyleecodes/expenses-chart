const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
          label: '',
          backgroundColor: ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"],
          data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48 ],
          borderRadius:3,
          hoverBackgroundColor:["hsla(10, 79%, 65%, 0.6)", "hsla(10, 79%, 65%, 0.6)", "hsla(186, 34%, 60%, 0.6)","hsla(10, 79%, 65%, 0.6)","hsla(10, 79%, 65%, 0.6)"],
          barThickness:30,
        }]
      },
      options: {
        plugins: {
        legend: {
            display: false
        }
    },
        scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false
          },
          
        },
       
        y: {
          grid: {
            display: false,  
            drawBorder: false,
            drawOnChartArea: false
          
          },
          ticks : {
            display: false,
            
          },
        },
      
      } 
    },
    
    
  });