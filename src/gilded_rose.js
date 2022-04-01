class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality > 0) {
          this.decreaseQualityByOneWhenNameIsSulfuras(i);
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              this.incresseQualityWhenQualityIsLessThen50(i);
            }
            if (this.items[i].sellIn < 6) {
              this.incresseQualityWhenQualityIsLessThen50(i);
            }
          }
        }
      }

      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              this.decreaseQualityByOneWhenNameIsSulfuras(i);
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality;
          }
        } else {
          this.incresseQualityWhenQualityIsLessThen50(i);
        }
      }
    }

    return this.items;
  }

  incresseQualityWhenQualityIsLessThen50(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
  }

  decreaseQualityByOneWhenNameIsSulfuras(i) {
    if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
