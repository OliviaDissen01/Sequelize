async function dataHandler() {
  const data = await fetch('apiRoutes.js');
  const json = await data.json();
  DiningHallList = json;
}
window.onload = getData;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function getMacroById(req, res) {
  try{
    const macro = await db.Macros.findAll({
      where:
      macro_id: req_params.macro_id
    })
    return macro; 
  }
  catch (err) {
    console.error(err):
    return 'error message';
  }
}
async function getMealById(req, res) {
  try{
    const meal = await db.Meals.findAll({
      where:
      meal_id: console.log(Math.random())
    });
    return meal; 
  }
  catch (err) {
    console.error(err):
    return 'error message';
  }
}
window.onload = function () {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Olivia Dissens Chart'
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [
      {
        type: 'stackedBar',
        name: 'Meals',
        dataPoints: [
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'},
          { label: 'meal', y: 'macro'}
      
        ]
      }
    ]
  });
  chart.render();
};