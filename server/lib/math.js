function math (req, res) {
    const {num1, num2} = req.query;
    const sum = +num1 + +num2;
    res.json(sum);
}

module.exports = math;