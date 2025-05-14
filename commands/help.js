const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
    CREATED BY ➣𖤛 ꙰ALPHA-KING ᭡ ꙰𖤛➣
    ONWNED BY ➣𖤛 ꙰ICEBACK-XMD᭡ ꙰𖤛➣
╭───────➻⊷⊷➻────────❍ 
│╔════════✣═════════➻
│╏ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 👑  *Developer:* :ALPHA-KING 
│╏ ▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓ 🖥️ *Host:* :linux
│╏ ▓▓▒▒▒▒▒▒▒▒▒▒▒▓▓ 🧠 *Commands:* 281
│╏ ▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓ ⚙️ *Mode:* Public
│➣𖤛 ꙰MADMAX-BUG-V1᭡ ꙰🧪  *Version:* 2.4.1
│╏ ▓▓▒▒▓▓▓▓▒▒▒▒▒▓▓ 💀 *Owner* ICEBACK-TECHIES 
│╏ ▓▓▒▒▒▒▓▓▒▒▒▒▒▓▓ 📊 *Stars* 2738
│╏ ▓▓▒▒▓▓▓▓▓▒▒▒▒▓▓ ⚡ *Ping:* 287.0386 ms
│╏ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 🧬 *RAM:* [▣□□□□□] 17%
│╚════════✣═════════➻
  
╔══════✣WHAT'SAPP✣═════╗
║ 💀bug
║ 💀crash
║ 💀loccrash
║ 💀amountbug <enter amount>
╚═════════════════════╝

╔═════✣ANDROID BUG✣════╗
║ 💀crashbug 
║ 💀delaybug
║ 💀pmbug
║ 💀docubug
╚═════════════════════╝


╔══════✣✣GC-ULTRA✣✣════╗
║ 💀unlimitedgcbug <gclink>
║ 💀trollygcbug     <gclink>
║ 💀laggcbug       <gclink>
║ 💀delaygcbug     <gclink>
╚═════════════════════╝
╔═════✣💀KILL-ULTRA✣════╗
║ 💀bombug
║ 💀unlimitedbug
╚═════════════════════╝

╔══════✣MADMAX-CMD✣════╗
 *✣✣💀ENJOY OTHER CMDS💀✣✣*
╚══════════✣═══════════╝
╔═════✣MAIN COMMANDS✣═════╗
✣                                       ✣
║ 💀menu
║ 〽️ping. 
║ 👻alive
║ 💀tts       <text>
║ 👻owner
║ 💀joke
║ 👻quote
║ 💀fact
║ 👻weather <city>
║ 💀news
║ 👻attp     <text>
║ 💀lyrics <song_title>
║ 👻8ball <question>
║ 💀groupinfo
║ 👻staff or 
║ 👑admins 
║ 💀vv
║ 👻pair  
║ 💀rent                                ✣
╚═════════✣ICE-BUG✣════════╝ 

╔═════✣ADMIN MAIN CMD✣═════╗
✣                                       ✣
║ 👑 ban @user
║ 👑 promote @user
║ 👑 demote @user
║ 👑 mute <minutes>
║ 👑 unmute
║ 👑 delete or .del
║ 👑 kick @user
║ 👑 warnings @user
║ 👑 warn @user
║ 👑 antilink
║ 👑 antibadword
║ 👑 clear
║ 👑 tag <message>
║ 👑 tagall
║ 👑 chatbot
║ 👑 resetlink
╚═════════✣ICE-BUG✣════════╝ 


╔═════✣OWNERCOMMANDS✣═════╗
✣                                        ✣ 
║ 👑 mode
║ 👑 autostatus
║ 👑 clearsession
║ 👑 antidelete
║ 👑 cleartmp
║ 👑 setpp <reply to image>
╚═════════✣ICE-BUG✣════════╝ 


╔═════✣STICKER COMMANDS✣═════╗
✣                                       ✣
║ 👑 blur <image>
║ 👑 simage <reply to sticker>
║ 👑 sticker <reply to image>
║ 👑 tgsticker <Link>
║ 👑 meme
║ 👑 take <packname> 
║ 👑 emojimix <emj1>+<emj2>
╚═════════✣ICE-BUG✣════════╝ 

╔═══════✣GAME COMMANDS✣═════╗
✣                                       ✣
║ 👑 tictactoe @user
║ 👑 hangman
║ 👑 guess <letter>
║ 👑 trivia
║ 👑 answer <answer>
║ 👑 truth
║ 👑 dare
╚═════════✣ICE-BUG✣════════╝ 

╔═════✣🤖AI COMMANDS✣🤖══════╗
✣                                       ✣

║ 👑 gpt <question>
║ 👑 gemini <question>
╚═════════✣ICE-BUG✣════════╝ 


╔═════✣FUN 😅COMMANDS✣═════╗
✣                                       ✣
║ 👑 compliment @user
║ 👑 insult @user
║ 👑 flirt 
║ 👑 character @user
║ 👑 wasted @user
║ 👑 ship @user
║ 👑 simp @user
║ 👑 stupid @user [text]
╚═════════✣ICE-BUG✣════════╝ 


╔═════✣TEXT EDITOR CMD✣═════╗
✣                                       ✣
║ 👑 metallic <text>
║ 👑 ice <text>
║ 👑 snow <text>
║ 👑 impressive <text>
║ 👑 matrix <text>
║ 👑 light <text>
║ 👑 neon <text>
║ 👑 devil <text>
║ 👑 purple <text>
║ 👑 thunder <text>
║ 👑 leaves <text>
║ 👑 1917 <text>
║ 👑 arena <text>
║ 👑 hacker <text>
║ 👑 sand <text>
║ 👑 blackpink <text>
║ 👑 glitch <text>
║ 👑 fire <text>
╚═════════✣ICE-BUG✣════════╝
 
╔═════✣DOWNLOADER CMD✣═════╗
✣                                       ✣:
║ 👑 play <song_name>
║ 👑 song <song_name>
║ 👑 instagram <link>
║ 👑 facebook <link>
║ 👑 tiktok <link>
╚═════════✣ICE-BUG✣════════╝ 

╔═════✣GITHUBCOMMANDS✣═════╗
✣                                        ✣
║ 👑 git
║ 👑 github
║ 👑 sc
║ 👑 script
║ 👑 repo
║
╚═════════✣ICE-BUG✣════════╝ 

╔═════✣ 🔞ADULT MENU🔞✣═════╗
✣                                       ✣
> 🔞BRAZZERS
> 🔞XXNX
> 🔞THUMBZILLA
> 🔞XVIDEOS                           ✣
╚═════════✣ICE-BUG✣════════╝ 

╔═════✣PANEL N VPS CMD✣═════╗
✣  _COMING SOON ON V2_           ✣
╚═════════✣ICE-BUG✣════════╝ 

KINDLY JOIN AND SUPPORT MY CHANNEL
DONT THINK OF CLONING MY WORK
I WILL HUNT YOU DOWN 💀`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363330180223606@newsletter',
                        newsletterName: 'MADMAX[BUG&CPANEL-V1]',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363330180223606@newsletter',
                        newsletterName: 'MADMAX-BUG-V1',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
