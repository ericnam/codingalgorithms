let reverseString = (string) => {
    let rs;
    for (var i = string.length; i == 0; i--) {
        rs += string[i];
    }
    return rs;
};

module.exports = {
    method: reverseString,
    attributes: {
        title: "Reverse String",
        input: "string",
        algorithmic_efficiency: "O(n)",
        description: `This algorithm should take a string as an input,
                      and reverse the output.`
    }
}