(async (bot) => {

    
    // Find nearest oak log and jump on it
    const oakLog = bot.findBlock({
        matching: block => block && block.name === 'oak_log',
        maxDistance: 16
    }); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    
    if (oakLog) {
        bot.chat("Jumping to the oak log!"); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        // Walk close to the log block position using built-in goal/movement if pathfinder is available, or just walk towards player/pos
        await bot.pathfinder.goto(new bot.pathfinder.goals.GoalBlock(oakLog.position.x, oakLog.position.y + 1, oakLog.position.z)); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', true); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        await skills.wait(bot, 500); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
        bot.setControlState('jump', false); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    } else {
        bot.chat("Can't find any oak log to jump to."); if(bot.interrupt_code) {log(bot, "Code interrupted.");return;}
    }

log(bot, 'Code finished.');

})