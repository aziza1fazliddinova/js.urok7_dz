//второе задание
let students = ['baxtzod', 'xamza', 'islom', 'abdukhafiz', 'xojik', 'aziz'] 
let long= students.filter( (students) => students.length > 8)
console.log(long);


//первое задание
let priceList = [30000, 2000, 11000, 33000, 2000, 100000,57000, 14000, 18000, 8000]
let from = prompt('цена от')
let up = prompt('цена до')
let a = priceList.filter( priceList =>  (priceList > from && priceList < up))
console.log(a);