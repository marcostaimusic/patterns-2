class Product{
    constructor(name, price, currency){
        this._name = name;
        this._price = price
        this._currency = currency
    }

    get name(){
        return this._name
    }

    get price(){
        return this._price
    }

    get currency(){
        return this._currency
    }
}

module.exports = Product