import React, { useState, useEffect } from "react";
import "./money-rain.css";

/**
 * @type {React.FC<{MoneyItems:any[], rotationRange:number, createEach:number, forDuration:number, appear:boolean}>}
 */
const MoneyRain = ({
  MoneyItems,
  rotationRange,
  createEach,
  forDuration,
  appear,
}) => {
  /**
   * @type {{[x:string]:any}[]}
   */
  const allMoneyItemsDefault = [];
  const [allMoneyItems, setAllMoneyItems] = useState(allMoneyItemsDefault);

  useEffect(() => {
    if (appear) {
      MoneyRain(MoneyItems, rotationRange, createEach, forDuration);
    }
  }, [appear]);

  if (!appear) {
    return null;
  }

  /**
   * A function that creates money rain animation
   * @param {any[]} MoneyItems An array of items of rain
   * @param {number} rotationRange The rotation range
   * @param {number} createEach The timing of creating items
   * @param {number} forDuration The duration for which items will be created
   */
  function MoneyRain(MoneyItems, rotationRange, createEach, forDuration) {
    let interval = setInterval(() => {
      createMoney(MoneyItems, rotationRange);
    }, createEach);
    if (forDuration) {
      setTimeout(() => {
        clearInterval(interval);
      }, forDuration);
    }
  }

  /**
   * A function that creates money
   * @param {any[]} MoneyItems
   * @param {number} rotationRange
   */
  function createMoney(MoneyItems, rotationRange) {
    const Money = {};
    Money.left = Math.random() * 100 + "%";
    Money.animationDuration = Math.random() * 2 + 3 + "s";
    Money.rotation =
      Math.floor(Math.random() * rotationRange) - rotationRange / 2;
    Money.Money = MoneyItems[Math.floor(Math.random() * MoneyItems.length)];
    Money.id = `${new Date()}-${Money.left}-${Money.animationDuration}-${
      Money.rotation
    }-${Money.Money}`;
    setAllMoneyItems((prev) => [...prev, Money]);
    setTimeout(() => {
      const newMoneyItems = allMoneyItems.filter(
        (item) => item.id !== Money.id
      );
      setAllMoneyItems([...newMoneyItems]);
    }, 10000);
  }

  return (
    <>
      {allMoneyItems.map((item) => {
        const { left, animationDuration, rotation, Money, id } = item;
        return (
          <div
            key={id}
            className="money-container"
            style={{
              left: left,
              animationDuration: animationDuration,
            }}
          >
            <img
              src={Money}
              alt="$"
              style={{ transform: `rotateZ(${rotation}deg` }}
            />
          </div>
        );
      })}
    </>
  );
};
export default MoneyRain;
