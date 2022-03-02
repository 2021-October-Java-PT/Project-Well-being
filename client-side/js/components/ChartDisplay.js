export default function Charts() {
 console.log("Chart")
  
//  var barData = {
//   labels : ["January","February","March","April","May","June"],
//   datasets : [
//       {
//           fillColor : "#48A497",
//           strokeColor : "#48A4D1",
//           data : [3,4,5,4,3,2]
//       },
//       {
//           fillColor : "rgba(73,188,170,0.4)",
//           strokeColor : "rgba(72,174,209,0.4)",
//           data :  [4,4,3,5,2,6]
//       }
//   ]
// }
// // get bar chart canvas
// var income = document.getElementById("income").getContext("2d");
// // draw bar chart
// new Chart(income).Bar(barData);
return`  
<div class ="styling-container>
<h1 class="chart">Mood Chart</h1>
<br>
<canvas id="income" width="600" height="400"></canvas>

</div>
`
    
}