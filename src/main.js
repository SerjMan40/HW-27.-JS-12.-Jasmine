function ageClassification(age) {
  return age < 0
    ? null
    : age >= 0 && age <= 24
    ? 'детский возраст'
    : age > 24 && age <= 44
    ? 'молодой возраст'
    : age > 44 && age <= 65
    ? 'средний возраст'
    : age > 65 && age <= 75
    ? 'пожилой возраст'
    : age > 75 && age <= 90
    ? 'старческий возраст'
    : age > 90 && age <= 122
    ? 'долгожители'
    : null;
}

function evenFn(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

  return arr;
}

console.log(evenFn(50));
