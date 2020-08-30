class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(value) {
        return typeof value == 'number' ? true : false;
    }
    static isInt(value) {
        return typeof value == 'number' && Number.isInteger(value) ? true : false;
    }
    static isFloat(value) {
        return typeof value == 'number' && !Number.isInteger(value) ? true : false;
    }
    static isChar(value) {
        return typeof value == 'string' && value.length == 1 ? true : false;
    }
    static isString(value) {
        return typeof value == 'string' ? true : false;
    }
    static isBoolean(value) {
        return (typeof value == 'boolean' && value) ? true : false;
    }
    static isArray(value) {
        return Array.isArray(value) ? true : false;
    }

    static toMoney(value) {
        let str = '';
        let size = 0;
        let fraction = '.00';
        let partInt = String(value);
        let point = partInt.indexOf('.');
        if (point != -1) {
            fraction = partInt.slice(point);
            partInt = partInt.slice(0, point);
            if (fraction.length == 2) fraction += 0;
        }
        size = partInt.length;
        for (const key in partInt) {
            str += partInt[key];
            if (!((size - key - 1) % 3) && (size - key - 1)) str += ' ';
        }
        return str + fraction;
    }
}