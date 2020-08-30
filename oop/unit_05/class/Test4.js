class Test4 extends Test2 {
    set testProp(a) {
        this._testProp = a * 10;
    }

    set testValue(b) {
        this._testValue = b;
    }

    gettestValue() {
        if (this._testValue > 100) {
            return this._testValue
        } else {
            return false;
        }
    }
}