import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company';

@Component({
    moduleId: module.id,
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    public countries = [{code: 'NLD', name: 'Netherlands'}];
    public company: Company = Company.prefilled();

    constructor(private companyService: CompanyService) {

    }

    ngOnInit(): void {
    }

    get diagnostic() {
        return JSON.stringify(this.company);
    }

    submitForm(): void {
        this.companyService.put(this.company);
    }


}
