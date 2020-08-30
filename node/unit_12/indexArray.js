module.exports = (a, b) => {
    let obj = {};
    a.forEach(el => {
        obj[el[b]] = el;
    });
    return obj;
}