var linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 600]);

console.log(linearScale(50));

var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100]);

console.log(timeScale(new Date(2016, 0, 15)));
console.log(timeScale(new Date(2016, 3, 15)));

console.log(timeScale.invert(50));

var quantizeScale = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "white", "green"]);

console.log(quantizeScale(22));
console.log(quantizeScale(50));
console.log(quantizeScale.invertExtent('white'));

var ordinalScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(["red", "white", "green"]);

console.log(ordinalScale("great"));
console.log(ordinalScale("poor"));

d3.json('data/data.json', function (data) {
  console.log(data);
});

d3.csv('data/data.csv', function (data) {
  console.log(data);
});

d3.tsv('data/data.tsv', function (data) {
  console.log(data);
});

d3.json('data/data.json', function (data) {
  var extent = d3.extent(data, function (d) {
    return d.age;
  });

  var min = d3.min(data, function (d) {
    return d.age;
  });

  var max = d3.max(data, function (d) {
    return d.age;
  });

  console.log(extent, min, max);

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0, 600]);

  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages);
});

var div = d3.select('nav');
console.log(div.nodes());

var divLinks = div.selectAll('a');
console.log(divLinks.nodes());

console.log(d3.selectAll('nav a').nodes());

var actionLink = d3.select('.action');
console.log(actionLink.nodes());

var secondLink = d3.selectAll('a:nth-child(2)');
console.log(secondLink.attr('href'));
secondLink.attr('href', 'http://google.com');

secondLink.classed('red', true);

d3.selectAll('a:nth-child(3)').classed('green', true).html('Contact <b>NEW</b>');

d3.select('.title')
  .insert('div', 'a:nth-child(2)')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .text('submit');

d3.select('.action').remove();