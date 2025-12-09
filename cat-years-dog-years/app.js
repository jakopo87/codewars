const humanYearsCatYearsDogYears = (human) => [
    human,
    15 * (human >= 1) + 9 * (human >= 2) + 4 * (human >= 3) * (human - 2),
    15 * (human >= 1) + 9 * (human >= 2) + 5 * (human >= 3) * (human - 2)
];

export { humanYearsCatYearsDogYears };