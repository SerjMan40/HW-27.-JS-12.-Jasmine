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
console.log(ageClassification(100));
