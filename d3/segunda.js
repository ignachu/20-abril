//aquí debes trabajar con datos de un JSON
var ciudades = [
    {name: 'Santiago', desempleo:6061185},
    {name: 'Arica', desempleo:169367},
    {name: 'Magallanes', desempleo:162318},
    {name: 'Aysén', desempleo:83380}
  ];


var w = 450;
var h = 450;
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");





 d3.selectAll('circle2')
    .data(ciudades)
    .attr('fill','#399DD6')
    .attr('r', function(d) {
      return d.desempleo / 95000;
    })

 d3.selectAll('text2')
    .data(ciudades)
    .attr('fill','#666666')                      
    .text(function(d) {
      return ". " + d.name;
    });

