var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'line',

   
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: 'Primer Gráfico',
            backgroundColor: 'rgb(100, 255, 170)',
            borderColor: 'rgb(255,255, 170)',
            data: [0, 10, 15, 2, 25, 30, 60]
        }]
    },

    options: {}
});