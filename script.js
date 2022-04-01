let ctx = document.getElementById('demoChart');
let ctxTwo = document.getElementById('demoPie');
let ctxThree = document.getElementById('demoLine')

let stars = [135850, 52122, 148825, 16939, 9763];
let frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

let demoChart = new Chart(ctx, {
    type: 'bar',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'Popular JavaScript Frameworks',
           data: stars,
           backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1
        }]
    },
});

let demoPie = new Chart(ctxTwo, {
    type: 'pie',
    data: {
       labels: frameworks,
       datasets: [{
           label: 'Popular JavaScript Frameworks',
           data: stars,
           backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1
        }]
    },
})

let demoLine = new Chart(ctxThree, {
    type: 'line',
    data: {
        labels: frameworks,
        datasets: [
            {
                label: 'Github Stars',
                data: stars,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                fill: false,
                lineTension: 0,
            }
        ]
    }
})