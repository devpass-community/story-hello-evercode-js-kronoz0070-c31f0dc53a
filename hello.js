function hello(str) {
    if (str == undefined) {
        str = 'World'
    }

    return  `Hello, ${str}!`
};

module.exports = hello;