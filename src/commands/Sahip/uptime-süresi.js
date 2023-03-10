const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: "uptime-süresi",
    aliases: ["uptime"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Phaelis.OwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        message.reply({ content: `
Botun çalışma süresi: " **${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** "`}) 
    }
}
