//create a parent class
class car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getCar(){
        return `I own a ${this.brand} model ${this.model}`;
    }
}
//create child class
class hyundai extends car{
    constructor(brand, model, cost, color){
        super(brand,model);
        this.cost = cost;
        this.color = color;
    }
    getHyundai(){
        return `I have Hyundai ${this.model} which cost me ${this.cost} and is of ${this.color} color`;
    }
}
//create instance of the class hyundai
let hyundai1 = new hyundai('Hyundai', 'SG903', '15 lakhs', 'Red');
console.log(hyundai1);
hyundai1.getHyundai();