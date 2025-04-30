# NeoWare Scripting

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![Sublime Text](https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important)

## Документация скриптинга для клиента NeoWare
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/37UVpdX8bnr) [![Discord](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/@krytickyt) 

## Функционал
- Работает на движке Rhino (Java)
- Есть возможность использования Java библиотек для расширения функционала
- Огромное количество функций для управления ботом

## Начало работы
- Скачайте Sublime Text
- Скопируйте все файлы из "docs" репозитория в "/Roaming/Sublime Text/Packages/"
- Перезапустите Sublime Text
- Создайте или откройте нужный вам .js файл

## Заголовок
```js
function getName() {
    return "Example";
}

function getAuthor() {
    return "KrytickYT";
}
```

## События
```js
function onUpdate(bot) {}
function SPacketChat(bot, packetChat) {}
function SPacketTitle(bot, packetTitle) {}
function SPacketUpdateBossInfo(bot, packetBossInfo) {}
function SPacketSoundEffect(bot, packetSound) {}
function SPacketDisconnect(bot, packetDisconnect) {}
function SPacketJoinGame(bot, packetJoinGame) {}
function SPacketPlayerListHeaderFooter(bot, packetPlayerList) {}
function SPacketParticles(bot, packetParticles) {}
function SPacketTabComplete(bot, packetTabComplete) {}
function SPacketResourcePackSend(bot, packetResourcePack) {}
```

## Дополнения (внути кода)
- ScriptAPI
- BotUtil
- ChatUtil
- PlaceholderAPI
- RandomUtil


``Последнее редактирование: 30.04.2025
