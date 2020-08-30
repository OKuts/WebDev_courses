class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emailError = '';
        this.passwordError = '';
    }
    validate() {
        if (this.email) {
            if (this.password.length > 6) this.isValid = true;
        } else {
            this.emailError = 'email empty';
            this.passwordError = 'min length 6';
        }
    }
}