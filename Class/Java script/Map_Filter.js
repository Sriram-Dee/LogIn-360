const cities = [{name: 'chennai', contry: 'India'},
                {name:'London', contry:'UK'},
                {name:'Paris', contry: 'France'},
                {name:'mumbai', contry:'India'}
                ]

let city = cities.map((city) => city.contry)
let filtered = cities.filter((city) => city.contry !== 'India')
console.log(city);
console.log(filtered);