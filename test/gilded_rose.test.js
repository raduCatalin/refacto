const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should return the name when 'sellIn' egal a 'quality'", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should decresse sellIn when update quality'", function () {
    const gildedRose = new Shop([new Item("foo", 13, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(12);
  });

  it("should decresse quality when update sellIn'", function () {
    const gildedRose = new Shop([new Item("foo", 13, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });
});
