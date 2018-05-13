export class Company {

    public name: string;
    public biography: string;
    public street: string;
    public number: string;
    public zip: string;
    public phone: string;
    public email: string;
    public commerceNumber: string;
    public country: string;
    public website?: string;

    constructor() {}

    static prefilled(): Company {
        const company = new Company();
        company.name = 'Ruben corp';
        company.number = '13b';
        company.street = 'Levantkade';
        company.biography = 'Blablablabla';
        company.commerceNumber = '09380';
        company.email = 'rubenski@gmail.com';
        company.country = 'NLD';
        company.phone = '0653992519';
        company.zip = '1019MG';
        return company;
    }
}
