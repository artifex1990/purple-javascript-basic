const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    getUserInfo: function () {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Может пить');
            } else {
                console.log('Нельзя пить');
            }
        }

        canDrink();
    },
    getUserInfoArrow: () => {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

user.getUserInfo();
//user.getUserInfoArrow();