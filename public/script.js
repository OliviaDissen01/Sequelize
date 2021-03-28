async function dataHandler() {
  const data = await fetch('apiRoutes.js');
  const json = await data.json();
  DiningHallList = json;
}
window.onload = getData;