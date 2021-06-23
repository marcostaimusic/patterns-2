const data = require('./currency_conversions.json');


class ProductDecorator{
    constructor(product){
        this._product = product
    }

    get product(){
        return this._product
    }
    convert(){
        switch (this._product.currency){
            case 'USD' : console.log("USD_EUR: " + this._product.price * Object.values(data)[0]); break;
            case 'GBP' : console.log("GBP_EUR: " + this._product.price * Object.values(data)[1]); break;
            case 'CHF' : console.log("CHF_EUR: " + this._product.price * Object.values(data)[2]); break
            case 'JPY' : console.log("JPY_EUR: " + this._product.price * Object.values(data)[3]); break
            case 'CAD' : console.log("CAD_EUR: " + this._product.price * Object.values(data)[4]); break
            case 'CNY' : console.log("CNY_EUR: " + this._product.price * Object.values(data)[5]); break
            default: console.log('invalid price')
        }
    }
}

module.exports = ProductDecorator
