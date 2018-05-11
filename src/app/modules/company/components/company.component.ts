import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../company';

@Component({
    moduleId: module.id,
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    // private countries: Map<string, string> = new Map();
    private countries = [{code: 'NLD', name: 'Netherlands'}];
    public model: Company = new Company();

    constructor(private companyService: CompanyService) {

    }

    ngOnInit(): void {


    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }


}
