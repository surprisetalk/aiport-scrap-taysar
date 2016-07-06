
var scrap = require('../aiport-dev').scrap;

module.exports = scrap({
    title: "<h1>TAYSAR</h1>",
    subtitle: subtitle => "<h2>" + subtitle + "</h2>",
    body: strings => "<hr/>" + strings.map( string => "<p>" + string + "</p>" ),
    footer: "<hr/>"
});
