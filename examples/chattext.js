function getName() {
    return "Chat Captcha";
}

function getAuthor() {
    return "KrytickYT";
}

function SPacketChat(bot, packetChat) {
    var cleaned = ScriptAPI.stripColor(packetChat.getChatComponent().getFormattedText());
    if(cleaned.contains(" - ") && cleaned.contains("в чат")) {
        bot.sendMessage(cleaned.split(" - ")[1]);
    }
}