document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('playerChart');

    if (canvas) {
        // Set the canvas size
        canvas.width = 50; // Adjust the width as needed
        canvas.height = 15; // Adjust the height as needed
        const ctx = canvas.getContext('2d');
        const playerData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Registered Players',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [10, 15, 20, 18, 25],
            }],
        };

        // Create a bar chart
        const playerChart = new Chart(ctx, {
            type: 'bar',
            data: playerData,
            options: {
               
                plugins: {
                    legend: {
                        labels: {
                            color: 'white', // Set dataset label font color to white
                        },
                    },
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white', // Set x-axis font color to white
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white', // Set y-axis font color to white
                        },
                    },
                },
            },
        });
    } else {
        console.error('Canvas element not found');
    }
});
