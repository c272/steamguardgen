const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity')


const client = new SteamUser();
const config = require('./config.json')
const community = new SteamCommunity();


const logOnOptions = {
	accountName: config.username,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.sharedsecret)
};

client.logOn(logOnOptions);

client.on('loggedOn', () =>{
	console.log("Steam: Logged On");
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
});

function generate() {
	console.log("Guard Code: "+SteamTotp.generateAuthCode(config.sharedsecret));
}

setInterval(generate, 10000);