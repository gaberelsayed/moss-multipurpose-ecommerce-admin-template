$(function() {

    'use strict';

    // The Default colorPalette for this dashboard
    let colorPalette = [themeColors.primary, '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

    let options = {
        chart: {
            type: 'line',
            height: 280,

        },
        colors: colorPalette,
        series: [{
            name: 'Sales',
            data: [15, 60, 40, 91, 10, 0]
        }],
        xaxis: {
            title: {
                text: 'Year',
            },

            categories: [2015, 2016, 2017, 2018, 2019, 2020]
        },
        yaxis: {
            title: {
                text: 'Sales Count',
            },
        }

    };

    let chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    /* Line, Column & Area */
    let option4 = {
        series: [{
            name: 'Profit',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Sales',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            height: 290,
            type: 'area'
        },
        colors: [themeColors.primary,themeColors.pink],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };


    let chart4 = new ApexCharts(document.querySelector('#line-column-area-chart'), option4);
    chart4.render();

    // Bar Chart
    let optionsBar = {
        chart: {
            type: 'bar',
            height: 280,
            width: '100%',
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
            }
        },
        colors: colorPalette,
        series: [{
            name: 'Clothing',
            data: [42, 52, 16, 55, 51, 45],
        }, {
            name: 'Food Products',
            data: [6, 12, 4, 7, 3, 6],
        }],
        labels: [10, 11, 12, 13, 15, 16],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#78909c'
                }
            }
        },

    };

    let chartBar = new ApexCharts(document.querySelector('#bar-chart'), optionsBar);
    chartBar.render();


    let optionDonut = {
        series: [44, 55, 67, 83],
        chart: {
            height: 330,
            type: 'radialBar',
            redrawOnParentResize: true
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function(w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    let donut = new ApexCharts(
        document.querySelector('#chart-donut'),
        optionDonut
    );
    donut.render();


    let randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    let config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),

                ],
                backgroundColor: colorPalette,
                label: 'eCommerce Sales'
            }],
            labels: [
                'Apple',
                'Samsung',
                'Vivo',
                'Oppo',

            ]
        },
        options: {
            responsive: false,
            legend: {
                boxWidth: 10,
                position: 'bottom',
                offsetX: 100,
                offsetY: 30,
                 
            },


            animation: {
                animateScale: true,
                animateRotate: true
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            cutoutPercentage: 70
        }
    };

    window.onload = function() {
        let ctx = document.getElementById('chart-area').getContext('2d');
        window.myDoughnut = new Chart(ctx, config);
        ctx.canvas.parentNode.style.height = '330px';
    };

});