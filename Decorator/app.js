const Product = require ('./Product')
const ProductDecorator = require('./Decorator')


// all the prices are the same to check if the convert() function uses the right JSON value
const prod1 = new Product('iPhone', 1000, 'USD')
const prod2 = new Product('Surface', 1000, 'GBP')
const prod3 = new Product('Car', 1000, 'CHF')
const prod4 = new Product('Computer', 1000, 'JPY')
const prod5 = new Product('TV', 1000, 'CAD')
const prod6 = new Product('Bike', 1000 , 'CNY')

const decorated1 = new ProductDecorator(prod1)
const decorated2 = new ProductDecorator(prod2)
const decorated3 = new ProductDecorator(prod3)
const decorated4 = new ProductDecorator(prod4)
const decorated5 = new ProductDecorator(prod5)
const decorated6 = new ProductDecorator(prod6)

decorated1.convert()
decorated2.convert()
decorated3.convert()
decorated4.convert()
decorated5.convert()
decorated6.convert()