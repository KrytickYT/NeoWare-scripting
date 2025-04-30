function getName() {
    return "Title Captcha";
}

function getAuthor() {
    return "KrytickYT";
}

function SPacketTitle(bot, packetTitle) {
    if(bot.getParameter("title_captcha") == null || bot.getParameter("title_captcha") == false) {
        if(packetTitle.getType().name() == "SUBTITLE") {
            var message = ScriptAPI.stripColor(packetTitle.getMessage().getFormattedText());
            var cleanedString = message.replace(/[^0-9\+\-\*\/]/g, '');
            if(cleanedString.length == 3) {
                bot.sendMessage(eval(cleanedString));
                bot.setParameter("title_captcha", true);
            }
        }
    }
}