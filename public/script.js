async function dataHandler() {
  const data = await fetch('DiningHall.js');
  const json = await data.json();
  DiningHallList = json;
}
window.onload = getData;