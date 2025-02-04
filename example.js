const SteamUser = require('steam-user');
const csgoCDN = require('./index');

const cred = {
    accountName: 'USERNAME',
    password: 'PASSWORD'
};

const user = new SteamUser({enablePicsCache: true});
const cdn = new csgoCDN(user, {musicKits: true, cases: true, tools: true, statusIcons: true, logLevel: 'debug'});

user.logOn(cred);

user.on('loggedOn', () => {
    console.log('Logged onto Steam');
});

cdn.on('ready', () => {
    console.log(cdn.getStickerURL('cologne2016/astr_gold', false));
    console.log(cdn.getStickerURL('cologne2016/astr_gold', true));
    console.log(cdn.getPatchURL('case01/patch_phoenix', false));
    console.log(cdn.getPatchURL('case01/patch_phoenix', true));
    console.log(cdn.getPatchURL('case01/patch_hydra', true));
    console.log(cdn.getPatchURL('case_skillgroups/patch_supreme', true));
    console.log(cdn.getPatchNameURL('Patch | Phoenix'));
    console.log(cdn.getPatchNameURL('Patch | Hydra'));
    console.log(cdn.getItemNameURL('Patch | Phoenix'));
    console.log(cdn.getItemNameURL('Patch | Sustenance!'));
    console.log(cdn.getItemNameURL('M4A4 | 龍王 (Dragon King) (Field-Tested)'));
    console.log(cdn.getItemNameURL('AWP | Redline (Field-Tested)'));
    console.log(cdn.getItemNameURL('MP7 | Army Recon (Minimal Wear)'));
    console.log(cdn.getItemNameURL('Sticker | Robo'));
    console.log(cdn.getItemNameURL('Chroma 3 Case Key'));
    console.log(cdn.getItemNameURL('Operation Phoenix Weapon Case'));
    console.log(cdn.getItemNameURL('Operation Phoenix Pass'));
    console.log(cdn.getItemNameURL('Music Kit | Kelly Bailey, Hazardous Environments'));
    console.log(cdn.getItemNameURL('StatTrak™ AWP | Redline (Field-Tested)'));
    console.log(cdn.getItemNameURL('StatTrak™ Music Kit | Noisia, Sharpened'));
    console.log(cdn.getItemNameURL('Sealed Graffiti | X-Axes (Tracer Yellow)'));
    console.log(cdn.getItemNameURL('★ Karambit | Gamma Doppler (Factory New)', cdn.phase.phase1));
    console.log(cdn.getItemNameURL('★ Karambit | Gamma Doppler (Factory New)', cdn.phase.emerald));
    console.log(cdn.getItemNameURL('★ Flip Knife | Doppler (Minimal Wear)', cdn.phase.ruby));
    console.log(cdn.getItemNameURL('★ Flip Knife | Doppler (Minimal Wear)', cdn.phase.sapphire));
    console.log(cdn.getItemNameURL('★ Huntsman Knife | Doppler (Factory New)', cdn.phase.blackpearl));
    console.log(cdn.getItemNameURL('AK-47 | Black Laminate (Field-Tested)'));
    console.log(cdn.getItemNameURL('Boston 2018 Inferno Souvenir Package'));
    console.log(cdn.getItemNameURL('CS:GO Case Key'));
    console.log(cdn.getItemNameURL('★ Karambit'));
    console.log(cdn.getItemNameURL('AK-47'));
    console.log(cdn.getItemNameURL('★ Karambit | Forest DDPAT'));
    console.log(cdn.getItemNameURL('AWP | Redline'));

    // Get item via ID
    // Response with the url and the name of the item
    console.log(cdn.getItemNameURL('id874'));
});
