'use strict';

const company = {
    name: 'Company',
    employees: [
        {
            name: 'Ivan',
            getName: function () {
                return this.name;
            }
        }
    ],
    ceo: {
        name: 'Vasya',
        getName: function () {
            return this.name;
        }
    },
    getNameCompany: function () {
        return this.name;
    },
}


console.log(company.getNameCompany());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));