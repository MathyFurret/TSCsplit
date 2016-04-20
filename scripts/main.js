//build the list of games
var games = [];
var game_list = $.ajax('http://soniccenter.org/source/utilities/codebot.php?choice=9&site=1')
var matches = mystring.match(/\S+?;/g);
for (var i in matches) {
	var match = game_list[i].match(/(\d+)-([^;]+)/);
	games.push({'id': match[1], 'name': match[2]})
}
