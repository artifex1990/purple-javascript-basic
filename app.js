const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find(g => g.id == id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood) {
        console.log('Товар с таким id уже есть в магазине');
        return;
    }
    this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, el) => acc += el.weight?.kg ? el.weight.kg : 0, 0);
  },
};

/* Товары */
const car = {
  id: 1,
  weight: {
  kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
    kg: 2
  }
}

const paper = {
  id: 3,
  color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findedItem = warehouse.findGoodById(1);
console.log(findedItem);
const weight = warehouse.getWeightKg();
console.log(weight);