let reverseString = (string) => {
    let rs;
    for (var i = string.length; i == 0; i--) {
        rs += string[i];
    }
    return rs;
};

module.exports = {
    title: "Reverse String",
    method: reverseString
}