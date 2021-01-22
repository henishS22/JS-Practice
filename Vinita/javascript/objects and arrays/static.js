class Company{
    constructor(name,division){
        this.name = name;
        this.division = division;
    }
    static getCompanyDetails(){
        return `${this.name} works in the field of ${this.division}`;
    }
}
class CompBranch extends Company{
    constructor(name,division,location, branchID){
        super(Company);
        this.location = location;
        this.branchID = branchID;
    }
}

let newCompany = new Company('Ford', 'Cars', 'New-Jersey, USA', "F8B709");
//newCompany.getCompanyDetails() --- is invalid since the function is static
//Company.getCompanyDetails() ---- is valid
//but the object can be passed as argument 
class Company2{
    constructor(name,division){
        this.name = name;
        this.division = division;
    }
    static getCompanyDetails(branch){
        return `${branch.name} works in the field of ${branch.division}`;
    }
}
class CompBranch2 extends Company2{
    constructor(name,division,location, branchID){
        super(Company);
        this.location = location;
        this.branchID = branchID;
    }
}

let newCompany2 = new Company('Unilever', 'Goods', 'Delhi, India', "UXX700");
console.log(Company2.getCompanyDetails(newCompany2));