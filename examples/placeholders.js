function getName() {
    return "Placeholders";
}

function getAuthor() {
    return "KrytickYT";
}

function onClientCommand(command, args) {
    if(command == 'test') {
        if(args[1] == 'reg') { //.bots test reg
            PlaceholderAPI.register("example", "exampleMethod");
        } else if(args[1] == 'unreg') { //.bots test unreg
            PlaceholderAPI.unregister("example");
        } else { //.bots test %example
            ChatUtil.addMessage(PlaceholderAPI.format(args[1]));
        }
    }
}

function exampleMethod() {
    return "hello world";
}
