(async (bot) => {

    
    // Let's find the nearest oak log, move to it, and jump on it
    const oakLog = bot.findBlock({
        matching: block => block && block.name === 'oak_log',
        maxDistance: 16
    }); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    
    if (oakLog) {
        // Move close to the oak log position
        await bot.pathfinder.goto(new minecraft. Movements(bot).goals.GoalBlock(oakLog.position.x, oakLog.position.y + 1, oakLog.position.z)); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.chat("Jumped to the oak log as commanded!"); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', true); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        await skills.wait(bot, 400); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', false); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    } else {
        // If no oak log found, just jump on the spot to stay obedient
        bot.chat("Can't find the oak log, jumping here instead!"); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', true); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        await skills.wait(bot, 400); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', false); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    }

log(bot, 'Code finished.');

})