var s = Snap('#interactive');

var sun = s.circle(400, 300, 20);
sun.attr({
  fill : 'yellow'
});

var planets = {};

function getPlanet(url, name) {
  if(typeof url === 'object') {
    name = url.name;
    url = url.url;
  }
  Snap.load(url, function(f) {
    var g = f.select('g');
    s.append(g);
    planets[name] = g;
  });
}

[
  {url : '../images/planets_Mercury.svg', name : 'mercury'},
  {url : '../images/planets_Venus.svg', name : 'venus'},
  {url : '../images/planets_Earth.svg', name : 'earth'},
  {url : '../images/planets_Mars.svg', name : 'mars'},
  {url : '../images/planets_Jupiter.svg', name : 'jupiter'},
  {url : '../images/planets_Saturn.svg', name : 'saturn'},
  {url : '../images/planets_Uranus.svg', name : 'uranus'},
  {url : '../images/planets_Neptune.svg', name : 'neptune'}
].map(getPlanet);
