async function githubCommand(sock, chatId) {
    const repoInfo = `*MADMAX-BUG-V1*

*SCRIPT ON SALE*


CONTACT OWNER FOR DEALS


*📢 Official Channel:*



https://whatsapp.com/channel/0029VarN0780Qeatn8cklB0E


I Hope you liked it

FREE VERSION👇👇👇👇👇👇👇👇👇

https://madmax-bug.onrender.com

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363330180223606@newsletter',
                    newsletterName: 'ICEBACK-XMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 