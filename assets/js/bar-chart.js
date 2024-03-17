// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'هزینه ها به تومان'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>از کل<br/>'
    },

    series: [
        {
            colorByPoint: true,
            data: [
                {
                    name: 'هزینه',
                    y: 63.06,
                    drilldown: 'هزینه'
                },
                {
                    name: 'سود',
                    y: 19.84,
                    drilldown: 'سود'
                },
                {
                    name: 'درآمد',
                    y: 14.18,
                    drilldown: 'درآمد'
                }
            ]
        }
    ]
});

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'هزینه ها به تومان'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>از کل<br/>'
    },

    series: [
        {
            colorByPoint: true,
            data: [
                {
                    name: 'هزینه',
                    y: 63.06,
                    drilldown: 'هزینه'
                },
                {
                    name: 'سود',
                    y: 19.84,
                    drilldown: 'سود'
                },
                {
                    name: 'درآمد',
                    y: 14.18,
                    drilldown: 'درآمد'
                }
            ]
        }
    ]
});

Highcharts.chart('container3', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'هزینه ها به تومان'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>از کل<br/>'
    },

    series: [
        {
            colorByPoint: true,
            data: [
                {
                    name: 'هزینه',
                    y: 63.06,
                    drilldown: 'هزینه'
                },
                {
                    name: 'سود',
                    y: 19.84,
                    drilldown: 'سود'
                },
                {
                    name: 'درآمد',
                    y: 14.18,
                    drilldown: 'درآمد'
                }
            ]
        }
    ]
});

Highcharts.chart('container4', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'هزینه ها به تومان'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b>از کل<br/>'
    },

    series: [
        {
            colorByPoint: true,
            data: [
                {
                    name: 'هزینه',
                    y: 63.06,
                    drilldown: 'هزینه'
                },
                {
                    name: 'سود',
                    y: 19.84,
                    drilldown: 'سود'
                },
                {
                    name: 'درآمد',
                    y: 14.18,
                    drilldown: 'درآمد'
                }
            ]
        }
    ]
});