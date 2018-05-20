import {Company} from './company';
import {Account} from './account';

export class SignUpForm {

    constructor(account: Account, company: Company) {
        this.account = account;
        this.company = company;
    }

    public account: Account = new Account();
    public company: Company = new Company();

}
