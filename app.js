const tasks = ['Задача 1'];

function add(task) {
    tasks.push(task);
}

function remove(task) {
    const index = tasks.indexOf(task);

    if (index === -1) {
        return;
    }

    tasks.splice(index, 1);
}

function prioritize(task) {
    const index = tasks.indexOf(task);

    if (index === -1) {
        return;
    }

    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}

add('Задача 2');
add('Задача 3');
console.log(tasks);
remove('Задача 2');
console.log(tasks);
prioritize('Задача 3');
console.log(tasks);