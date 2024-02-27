// درصد پیشرفت پروژه ها

Highcharts.chart('gauge', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '100%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: '',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 25,
            color: '#DB5F1978', // red
            thickness: 20
        }, {
            from: 25,
            to: 70,
            color: '#DB5F19B0', // yellow
            thickness: 20
        }, {
            from: 70,
            to: 100,
            color: '#DB5F19', // green
            thickness: 20
        }]
    },

    series: [{
        name: 'پیشرفت',
        data: [70],
        tooltip: {
            valueSuffix: '%'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '13px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: '#db5f19',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});

setInterval(() => {
    const chart = Highcharts.charts[0];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 3000);


// درصد تحقق کارها


Highcharts.chart('gauge2', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '100%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: '',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 25,
            color: '#DB5F1978', // red
            thickness: 20
        }, {
            from: 25,
            to: 70,
            color: '#DB5F19B0', // yellow
            thickness: 20
        }, {
            from: 70,
            to: 100,
            color: '#DB5F19', // green
            thickness: 20
        }]
    },

    series: [{
        name: 'تحقق',
        data: [90],
        tooltip: {
            valueSuffix: '%'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '13px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: '#db5f19',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});

setInterval(() => {
    const chart = Highcharts.charts[1];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 3000);

// میزان رضایت کارفرما


Highcharts.chart('gauge3', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '100%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '100%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: '',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 25,
            color: '#DB5F1978', // red
            thickness: 20
        }, {
            from: 25,
            to: 70,
            color: '#DB5F19B0', // yellow
            thickness: 20
        }, {
            from: 70,
            to: 100,
            color: '#DB5F19', // green
            thickness: 20
        }]
    },

    series: [{
        name: 'رضایت',
        data: [90],
        tooltip: {
            valueSuffix: '%'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '13px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: '#db5f19',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});

setInterval(() => {
    const chart = Highcharts.charts[2];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 100) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 3000);