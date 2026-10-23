(async (bot) => {

    
    // Let's find the nearest oak log and move towards it properly without using undefined minecraft references
    const oakLog = bot.findBlock({
        matching: block => block && block.name === 'oak_log',
        maxDistance: 16
    }); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    
    if (oakLog) {
        bot.chat("Jumping to the oak log!"); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        const p = oakLog.position; if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        const mcData = require('minecraft-data')(bot.version); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        const movements = new (require('mineflayer-pathfinder').Movements)(bot, mcData); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.pathfinder.setMovements(movements); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        await bot.pathfinder.goto(new (require('mineflayer-pathfinder').goals.GoalBlock)(p.x, p.y + 1, p.z)); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', true); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        await skills.wait(bot, 500); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', false); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    } else {
        bot.chat("Can't find any oak logs to jump to!"); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    }

log(bot, 'Code finished.');

})