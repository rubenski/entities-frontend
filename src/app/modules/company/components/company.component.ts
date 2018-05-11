import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';

@Component({
    moduleId: module.id,
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    private form$: Object;

    constructor(private companyService: CompanyService) {

    }

    ngOnInit(): void {



    }


}
