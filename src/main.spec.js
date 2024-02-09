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
