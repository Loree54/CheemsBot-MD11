//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"yMyamiUrNVvTgR/7oo7rsDRVSaX6/+MRSAo+3GdEpkI="},"public":{"type":"Buffer","data":"PIf1FIZkZaIOQbSBc1NFoDymAX/BzGgmL0WWgJjDcls="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eBYdFq97XyyD2YIpF2HZVRVO45wlNvIcYOe43D8tumo="},"public":{"type":"Buffer","data":"pFugYcTPAWQrqAnmsh2XbZzCF3yxWKMW2O/+wK19Dnk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"AGrOpyuWR45FlaoMOeLUMttXZH2aXUuBT6/2QspOQG0="},"public":{"type":"Buffer","data":"4L1c2p+As0up+kryNAIrpIoMd50g2DkMLqzkPvBkJBc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"GF9gXyQadgdmzDDwEAAmXTMoe4ohlbvyIzfhpv3jB1M="},"public":{"type":"Buffer","data":"gjYtCdshoeYMarxnTgnkosnw3Z/n0GRrOW8QOcCI0xg="}},"signature":{"type":"Buffer","data":"e5vMvLZJW41IqQ9F+tXkxceQ0rgzTDAku9/KTlspUTrRyw8NyUp63x1iWIv/eEYZ1p0eILHmHz/7JMBI0Mz9BQ=="},"keyId":1},"registrationId":74,"advSecretKey":"/Uqrf5bWV0dBnxh/x9SAx/fGRFDkAHrqUN/x0H5I50w=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"oVgjvHfzTkGorLcmfrT80g","phoneId":"422223ba-b3a8-4e5a-8b51-5fde7a760463","identityId":{"type":"Buffer","data":"VCqVhu4EyCpexnVHFazD7FQYtOI="},"registered":true,"backupToken":{"type":"Buffer","data":"CPkj9irI5qvXKRSKVPCwrkxHAvw="},"registration":{},"pairingCode":"A3LLSFPQ","me":{"id":"254710665116:62@s.whatsapp.net","lid":"176506311565494:62@lid"},"account":{"details":"CKSy/f0CEJiusLcGGAEgACgA","accountSignatureKey":"iH0Dunn1rDvwz/dAw4gKBEvsrXwUU5gTJyD7UaGDcTc=","accountSignature":"tNVEKV/KgJluyu64EkOexr5t04vLDhWpU7NuvdcUfoSf7dKmj2OU8Hb8IbtNvLBmi0ItnaHFSgV7s4kLqPnvCQ==","deviceSignature":"ByLfniVCBF1UQZYYAngAX4hRyfIl/uK10P8DhBOW2uDnAmrog78PYXVNWcOavo8SK/4Rbh2Bo/pMmJrp6K0yDA=="},"signalIdentities":[{"identifier":{"name":"254710665116:62@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYh9A7p59aw78M/3QMOICgRL7K18FFOYEycg+1Ghg3E3"}}],"platform":"android","lastAccountSyncTimestamp":1726748444,"myAppStateKeyId":"AAAAAK9f"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '254710665116' //ur owner number
global.ownername = 'Loree_🥹' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGxeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254710665116"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
