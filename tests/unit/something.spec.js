function areThereDonuts(donutsTotal) {
  if (donutsTotal > 0) {
    return true;
  }
  return false;
}

describe("Donuts", () => {
  it("there should be some", () => {
    // Given
    // that there are 4 donuts
    const donutsTotal = 4;

    // When
    // I check if I have donuts
    const actual = areThereDonuts(donutsTotal);

    // Then
    // there should be some donuts
    expect(actual).toBe(true);
  });

  it("should work if there aren't any donuts", () => {
    expect(areThereDonuts(0)).toBe(false);
  });

  it("should be able to eat a donut", () => {
    // Given:
    // 4 donuts

    // When:
    const actual = eatADonut(4);

    // Then:
    expect(actual).toBe(3);
  });
});

function eatADonut(donutsTotal) {
  return --donutsTotal;
}
