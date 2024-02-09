describe('ageClassification', function () {
  it('вернуть null', function () {
    expect(ageClassification(-1)).toBe(null);
  });

  it('вернуть: детский возраст', function () {
    expect(ageClassification(15)).toBe('детский возраст');
  });

  it('вернуть: молодой возраст', function () {
    expect(ageClassification(30)).toBe('молодой возраст');
  });

  it('вернуть: средний возраст', function () {
    expect(ageClassification(50)).toBe('средний возраст');
  });

  it('вернуть: пожилой возраст', function () {
    expect(ageClassification(68)).toBe('пожилой возраст');
  });
  it('вернуть: старческий возраст', function () {
    expect(ageClassification(80)).toBe('старческий возраст');
  });
  it('вернуть: долгожители', function () {
    expect(ageClassification(102)).toBe('долгожители');
  });
  it('вернуть: null', function () {
    expect(ageClassification(130)).toBe(null);
  });
});

describe('evenFn', function () {
  it('вернуть правильный массив', function () {
    expect(evenFn(10)).toEqual([2, 4, 6, 8, 10]);
  });
  it('вернуть правильный массив', function () {
    expect(evenFn(15)).toEqual([2, 4, 6, 8, 10, 12, 14]);
  });
  it('вернуть правильный массив', function () {
    expect(evenFn(20)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
  it('вернуть правильный массив', function () {
    expect(evenFn(30)).toEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
    ]);
  });
  it('вернуть правильный массив', function () {
    expect(evenFn(40)).toEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
      40,
    ]);
  });
  it('вернуть правильный массив', function () {
    expect(evenFn(50)).toEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
      40, 42, 44, 46, 48, 50,
    ]);
  });
});
