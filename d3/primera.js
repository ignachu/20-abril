//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
 var ciudades = [
    {name: 'Santiago', population:6061185},
    {name: 'Arica', population:169367},
    {name: 'Magallanes', population:162318},
    {name: 'Aysén', population:83380}
  ];

var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#8F989C");

 d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#399DD6')
    .attr('r', function(d) {
      return d.population / 95000;
    })

 d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#666666')                      
    .text(function(d) {
      return ". " + d.name;
    });

