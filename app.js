const card = '2456213752319853';

function hideCard(card) {
    const viewNum = 4;
    return card.slice(-viewNum).padStart(card.length, '*');
}

console.log(hideCard(card));
