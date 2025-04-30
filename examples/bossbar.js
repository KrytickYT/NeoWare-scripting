function getName() {
    return "BossBar Captcha";
}

function getAuthor() {
    return "KrytickYT";
}

function SPacketUpdateBossInfo(bot, packetBossInfo) {
    if(bot.getParameter("bossbar_captcha") == null || bot.getParameter("bossbar_captcha") == false) {
        if(packetBossInfo.getOperation().name() == "UPDATE_NAME") {
            var message = ScriptAPI.stripColor(packetBossInfo.getName().getFormattedText());
            if(message.contains(": ")) {
                bot.sendMessage(message.split(': ')[1]);
                bot.setParameter("bossbar_captcha", true);
            }
        }
    }
}