const score = [5, 10, 15, 20, 25, 30, 35, 0, 45, 50, 55, 10, 65, 20, 75, 80, 85, 90, 95, 100];

// for (const [i, el] of score.entries()) {
//     console.log(`Раунд ${i + 1}: ${el}`);
// }

score.forEach((el, i) => console.log(`Раунд ${i + 1}: ${el}`));