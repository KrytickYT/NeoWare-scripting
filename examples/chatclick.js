function getName() {
    return "Click Captcha";
}

function getAuthor() {
    return "KrytickYT";
}

function SPacketChat(bot, packetChat) {
    var component = packetChat.getChatComponent();
    var text = ScriptAPI.stripColor(component.getFormattedText());
    if(text.contains("Нажмите сюда") && component.getStyle() != null) {
        var clickEvent = component.getStyle().getClickEvent();
        if(clickEvent != null && clickEvent.getAction().toString() === "RUN_COMMAND") {
            bot.sendMessage(clickEvent.getValue());
        }
    }
}