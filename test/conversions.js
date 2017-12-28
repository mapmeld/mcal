const assert = require('assert');
const myd = require('../mc')
const toMyanmar = myd.toMyanmar;
const toGregorian = myd.toGregorian;

describe("Gregorian date to Myanmar/Burmese date", () => {
  it("outputs in English", () => {
    assert.equal(toMyanmar(new Date("April 15, 1989"), "en"), "10 Tagu, 1350");
  });

  it("outputs in Myanmar/Burmese", () => {
    assert.equal(toMyanmar(new Date("April 15, 1989")), "၁၀ တန်ခူး ၁၃၅၀");
  });
});

describe("Myanmar/Burmese date to Gregorian date", () => {
  it("accepts US format date", () => {
    assert.equal(toGregorian("Tagu 10, 1350").toISOString().indexOf("1989-04-15"), 0);
  });

  it("accepts UK format date", () => {
    assert.equal(toGregorian("10 Tagu, 1350").toISOString().indexOf("1989-04-15"), 0);
  });
});

describe("quirks to the calendar", () => {
  it("handles moon start and end", () => {
    // WRONG
    assert.equal(toMyanmar(new Date("June 13, 1988"), "en"), "29 Nayon, 1350");
  });

  describe("leap year", () => {
    // probably WRONG too
    it("prints 1st part of leap year month in English", () => {
      assert.equal(toMyanmar(new Date("June 14, 1988"), "en"), "1 LeapWaso, 1350");
    });

    it("prints 2nd part of leap year month in English", () => {
      assert.equal(toMyanmar(new Date("June 29, 1988"), "en"), "16 LeapWaso, 1350");
    });

    it("prints 1st part of leap year month in Burmese / Myanmar", () => {
      assert.equal(toMyanmar(new Date("June 14, 1988")), "၁ ပဝါဆို ၁၃၅၀");
    });

    it("prints 2nd part of leap year month in Burmese / Myanmar", () => {
      assert.equal(toMyanmar(new Date("June 29, 1988")), "၁၆ ပဝါဆို ၁၃၅၀");
    });
  });
});
