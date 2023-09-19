// sortData V-2.0.0

/**
 * A function that sorts an array of objects according to data inside objects
 * @param {{[x:string]:any}[]} data An array of objects to sort
 * @param {string} sortBy The key inside the objects to sort objects by its value
 * @param {'number'|'string'|'boolean'} typeOfSortBy The type of the content to sort by
 * @param {'asc'|'desc'} ascORdesc Sort ascending or descending
 * @returns The same array of objects that was input sorted
 */

export default function sortData(
  data,
  sortBy = "no",
  typeOfSortBy = "number",
  ascORdesc = "desc"
) {
  if (!data) {
    return data;
  }

  if (typeOfSortBy === "number") {
    const result = data.sort(function (a, b) {
      return b[sortBy] - a[sortBy];
    });
    if (ascORdesc === "asc") {
      result.reverse();
    }
    return result;
  }
  if (typeOfSortBy === "string") {
    const result = data.sort(function (a, b) {
      let x = a[sortBy].toLowerCase();
      let y = b[sortBy].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    if (ascORdesc === "desc") {
      result.reverse();
    }
    return result;
  }
  if (typeOfSortBy === "boolean") {
    const result = data.sort(function (a, b) {
      let x = booleanToNumbers(a[sortBy]);
      let y = booleanToNumbers(b[sortBy]);
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    if (ascORdesc === "desc") {
      result.reverse();
    }
    return result;
  }
  return data;
}

/**
 * A function that takes in a boolean and returns 0 if false or 1 if true
 * @param {boolean} boolean The input boolean
 * @returns {number} Returns 0 if false or 1 if true
 */

function booleanToNumbers(boolean) {
  if (boolean === true) {
    return 1;
  }
  if (boolean === false) {
    return 0;
  }
  return boolean;
}
