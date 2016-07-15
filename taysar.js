
var scrap = require('../aiport-dev').scrap;

module.exports = scrap( ( options, query, htmler ) =>
    htmler( { greeting: "world" } )
      .then( html => 
        "<h1 style='color:" + ( "color" in options ? options.color : "black" ) + ";'>TAYSAR</h1>" 
        + "<p>" + ( "greeting" in query ? query.greeting : "nothing" ) + "</p>"
        + "<div style='width:75%;margin:0 auto;border:1px solid blue;'>" + html + "</div>" ) );
