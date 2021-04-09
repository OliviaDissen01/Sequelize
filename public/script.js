async function dataHandler() {
  const data = await fetch('apiRoutes.js');
  const json = await data.json();
  DiningHallList = json;
}
window.onload = getData;

window.onload = function () {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Olivia Dissens Chart'
    },
    data: [
      {
        type: 'stackedBar',
        name: 'Meals',
        dataPoints: [
          { label: 'apple', y: 10 },
          { label: 'orange', y: 15 },
          { label: 'banana', y: 25 },
          { label: 'mango', y: 30 },
          { label: 'grape', y: 28 }
        ]
      }
    ]
  });
  chart.render();
};