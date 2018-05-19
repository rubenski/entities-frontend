import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company';
import {Account} from '../account';

@Component({
    moduleId: module.id,
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    public countries = [{code: 'NLD', name: 'Netherlands'}];
    public company: Company = Company.prefilled();
    public account: Account = new Account();
    public step = 1;

    constructor(private companyService: CompanyService) {

    }

    ngOnInit(): void {
    }

    get diagnostic() {
        return JSON.stringify(this.company);
    }

    goToStep(step): void {
       this.step = step;
    }
}
