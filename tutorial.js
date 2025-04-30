/*
    Заголовки для информации
    Можно использовать для инициализации данных, т.к. вызывается при запуске
*/
function getName() {
    return "Example";
}

function getAuthor() {
    return "KrytickYT";
}


/*
    Срабатывает при обновлении бота (20 тиков в сек.)
    Код может использоваться и в других событиях где есть bot
*/
function onUpdate(bot) {
    //Получение списка энтити в мире
    var entityList = bot.world.loadedEntityList;
    for(var index = 0; index < entityList.size(); index++) {
        //Экземпляр Entity
        var entity = entityList.get(index);

        var name = entity.getName(); //строка
        var id = entity.getEntityId(); //целое число

        var posX = entity.posX; //число с ','
        var posY = entity.posY; //число с ','
        var posZ = entity.posZ; //число с ','
        var yaw = entity.rotationYaw; //число с ','
        var pitch = entity.rotationPitch; //число с ','

        var ground = = entity.onGround; //значение true/false
        var glowing = entity.isGlowing(); //значение true/false
        var invisible = entity.isInvisible(); //значение true/false
        var dead = entity.isDead; //значение true/false
        var water = entity.isInWater(); //значение true/false
        var sneaking = entity.isSneaking(); //значение true/false

        //Для получения текста с холограм используй entity.getName()
        //Примечание: каждая строка холограмы это отдельный Entity
    }
}

/*
	Срабатывает когда приходит сообщение в чат
*/
function SPacketChat(bot, packetChat) {
	//Получение исходного текста
	var message = packetChat.getChatComponent().getFormattedText();

	//Получение текста без цветовых знаков
	var cln = ScriptAPI.stripColor(message);

	//Очистка текста от всех символов, кроме цифр 
	//Вернет число в виде строки!
	var nums = cln.replace(/[^0-9\+\-\*\/]/g, '');

	//Получение в виде числа
	//var nums = parseInt(cln.replace(/[^0-9\+\-\*\/]/g, ''));

	//Простая вырезка фрагмента из строки
	//Выдаст то, что написано после фразы 'в чат - '
	//Если надо наоборот, (то, что до фразы), меняй [1] на [0]
	var frag = cln.split("в чат - ")[1];

	//Делает все буквы маленькими
	var lowcs = cln.toLowerCase();


	//Проверка содержания выражения в тексте
	if(cln.contains("test")) {

	}

	//Проверка содержания выражения в начале текста
	if(cln.startsWith("test")) {

	}

	//Стравнение строк
	if(cln == 'test' /* 'var1' == 'var2' */) {

	}
}

/*
    Срабатывает когда приходит сообщение на экран
*/
function SPacketTitle(bot, packetTitle) {
    //Тип сообщения: TITLE, SUBTITLE, ACTIONBAR, CLEAR, RESET
    var type = packetTitle.getType().name();

    // || означает 'или'
    if(type == "TITLE" || type == "SUBTITLE" || type == "ACTIONBAR") {
        //Работа с строкой: см. гайд по SPacketChat
        var message = packetTitle.getChatComponent().getFormattedText();

        //Важно! Получение сообщения нужно делать только после проверки на тип, т.к. бывают еще CLEAR и RESET 
        //которые не имеют текста, а при получении будут выдавать ошибку
    }
}

/*
    Срабатывает когда происходит обновление боссбара
*/
function SPacketUpdateBossInfo(bot, packetBossInfo) {
	//Тип пакета: ADD, REMOVE, UPDATE_NAME
	var type = packetBossInfo.getOperation().name();

	if(type == "UPDATE_NAME") {
        //Работа с строкой: см. гайд по SPacketChat
	    var message = packetBossInfo.getName().getFormattedText();

        //Важно! Получение сообщения нужно делать только после проверки на тип!
	}
}

/*
	Срабатывает	когда воспроизводится звук в мире
*/
function SPacketSoundEffect(bot, packetSound) {
	var posX = packetSound.getX();
	var posY = packetSound.getY();
	var posZ = packetSound.getZ();
	var name = packetSound.getSound().getSoundName();
}


/*
	Срабатывает когда бот отключается
*/
function SPacketDisconnect(bot, packetDisconnect) {
	var message = packetDisconnect.getReason().getFormattedText();
}

/*
	Срабатывает когда бот грузит мир
*/
function SPacketJoinGame(bot, packetJoinGame) {
	var max = packetJoinGame.getMaxPlayers();
	var gameType = packetJoinGame.getGameType().getName();
	var difficulty = packetJoinGame.getDifficulty().getTranslationKey();
}

/*
	Срабатывает когда обновлется информация в табе
*/
function SPacketPlayerListHeaderFooter(bot, packetPlayerList) {
    //tabHeader строка
    //tabFooter строка
    ScriptAPI.sendMessage('========================');
    var header = packetPlayerList.getHeader().getFormattedText().split('\n');
    //верхняя часть таба
    //отсчет строк начинается с 0
    ScriptAPI.sendMessage(header[0]);
    ScriptAPI.sendMessage(header[2]);

    ScriptAPI.sendMessage('========================');
    var footer = packetPlayerList.getFooter().getFormattedText().split('\n');
    //нижняя часть таба
    //отсчет строк начинается с 0
    ScriptAPI.sendMessage(footer[0]);
    ScriptAPI.sendMessage(footer[3]);
}


function SPacketParticles(bot, packetParticles) {
	// body...
}

function SPacketTabComplete(bot, packetTabComplete) {
	// body...
}

function SPacketResourcePackSend(bot, packetResourcePack) {
	// body...
}

function onBotCaptcha(bot, botCaptcha) {
	// body...
}



/*
    Работа с параметрами
*/

//key_name - любое удобное Вам значение в формате строки
//Параметр может хранить любой тип данных
if(bot.getParameter("key_name") == null || bot.getParameter("key_name") == false) {
    //Проверка на null обязательна, ведь указанный вами параметр может и не существовать в указанный момент

    if(/*ваше условие*/) {
        bot.setParameter("key_name", true);
    }
    //Данный фрагмент кода (который в if) сработает только 1 раз при успешном 'условии'

    //Запись различных типов в параметр:
    //bot.setParameter("key_name", true);
    //bot.setParameter("key_name", 1234);
    //bot.setParameter("key_name", 1234.5);
    //bot.setParameter("key_name", "test123");

    //Зарезервированные параметры
    //bot.getParameter("authorization"); //значение true/false
    //bot.getParameter("webdetected"); //значение true/false
    //bot.getParameter("gameguardcheck"); //значение true/false
    //bot.getParameter("captchadetected"); //значение true/false
    //bot.getParameter("anvilbypass"); //значение true/false
}

/*
    Герерация рандомной строки
*/
var result = randomString(22, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');

function randomString(length, characters) {
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


/*
    Работа с инвентарем
    Код может использоваться в любых событиях, где есть bot
*/

//Название текущего меню
var title = bot.windowTitle; //строка
if(title != null) { // == null если меню закрыто
    var items = bot.player.openContainer.getInventory();
    for (var slot = 0; slot < items.size(); slot++) {
        var item = items.get(slot);
    
        var name = item.getDisplayName(); //строка
        var translationKey = item.getTranslationKey(); //строка
        var empty = item.isEmpty(); //true/false
        var size = item.getCount(); //целое число
        var maxSize = item.getMaxStackSize() //целое число
    }
}