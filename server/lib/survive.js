function survive (req, res) {
    const things = [
        "You made it to the saloon",
        "You died of a scratch",
        "A snake was in your boot",
        "Your horse made it, you didn't",
        "You found gold",
        "You found oil",
        "You were hangover and get out of bed",
        "You made it, your horse didn't, poor horsey"
    ];

    const randomNum = Math.floor(Math.random() * things.length);
    const outcome = things[randomNum];
    res.json(outcome);
}

module.exports = survive;