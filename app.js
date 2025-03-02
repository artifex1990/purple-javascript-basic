'use strict';

const userInfo = { 
  balance: 0, 
  operations: 0, 
  increase(sum) { 
    this.balance += sum; this.operations++;
  }, 
};

function userInfoClosure() {
    const userObj = {
        ...userInfo
    };

    return function() {
        return userObj;
    }
}

const user1 = userInfoClosure();
user1().increase(100);
console.log(user1());

const user2 = userInfoClosure();
user2().increase(1000);
user2().increase(1000);
console.log(user2());