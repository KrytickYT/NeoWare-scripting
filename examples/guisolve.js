function getName() {
    return "Gui Captcha";
}

function getAuthor() {
    return "KrytickYT";
}

function onUpdate(bot) {
    if (bot.windowTitle != null && bot.stimer1.hasReached(1000)) {
        bot.stimer1.reset();
        var title = ScriptAPI.stripColor(bot.windowTitle);
        if(title.contains(" на ")) {
            for (var slot = 0; slot < bot.player.openContainer.getInventory().size(); slot++) {
                var item = ScriptAPI.stripColor(bot.player.openContainer.getInventory().get(slot).getDisplayName());
                if(title.contains(item)) {
                    bot.windowClick(slot, 0, ScriptAPI.getClickType("PICKUP"));
                }
            }
        }
    }
}