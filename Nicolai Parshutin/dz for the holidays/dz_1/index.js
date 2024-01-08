
const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'Boston',
                street: {
                    name: 'pushkina',
                    number: 2
                }
            }
        },
        region: ['Iowa','Texas','California']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            high: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        },
    
    }
};

//1
const {adress:{
    country:{
        city:{
            name:n
        }
    }
}} = car;
console.log(n);


//2
const [one,two,three,four='Arizona'] = car.adress.region;
console.log(four);


//3
const {specs:{
    price:{
        low,
        mid,
        high
    }
}} = car;
console.log(high);

//4
const {specs:{
    fuelConsumption = { city: 12, mix: 10, country: 8 } 
}} = car;
console.log(fuelConsumption);



// С помощью деструктуризации запишите в отдельны переменные: 
// + 1.1 Название города в котором находится авто 
// + 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
// + 1.3 Поле high, объекта price 
// + 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }