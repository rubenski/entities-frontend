export class Account {

    public email: string;
    public phone: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public confirmPassword: string;

    constructor() {}


    static prefilled(): Account {
        const account = new Account();
        account.phone = '0653992519';
        account.email = 'rubenski@gmail.com';
        account.confirmPassword = 'kippen1234';
        account.password = 'kippen1234';
        account.firstName = 'Piet';
        account.lastName = 'Kippen';
        return account;
    }

}
