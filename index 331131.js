function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
if ((new Date().getTime() - start) > milliseconds){
	return true
break;
}
}
}

var mineflayer = require('mineflayer');

var options = {
host: "servertest3333.aternos.me",
port: 40050,
username: "aternosBot",
verbose: "true"
};

var bot = mineflayer.createBot(options);
bindEvents(bot);

function bindEvents(bot) {
bot.on('error', function(err) {
console.log('Error attempting to reconnect: ' + err.errno + '.');
if (err.code == undefined) {
console.log('Invalid credentials OR bot needs to wait because it relogged too quickly.');
console.log('Will retry to connect in 30 seconds. ');
setTimeout(relog, 30000);
}
});

bot.on('end', function() {
console.log("Bot has ended");
// If set less than 30s you will get an invalid credentials error, which we handle above.
setTimeout(relog, 30000);  
});
bot.once("login", () => {
console.log('Joined! ');
sleep(1000);

while (true == true) {
sleep(1000);
console.log('Firsst')
bot.setControlState('back', true)
sleep(1000);
console.log('Second')
bot.setControlState('back', false)
}


});


}

function relog() {
console.log("Attempting to reconnect...");
bot = mineflayer.createBot(options);
bindEvents(bot);
}