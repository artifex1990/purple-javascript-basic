const cities = {
    msk: {
        temp: {
            celcius: 25
        }
    },
    spb: {

    }
}

const city = 'spb';
if (cities[city] && cities[city].temp) {
    console.log(cities[city].temp.celcius)
}

console.log(cities[city]?.temp?.celcius);