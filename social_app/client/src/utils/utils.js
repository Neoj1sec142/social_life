export const delay = ms => new Promise(res => setTimeout(res, ms));

export const resKey = (arr) => arr.map(obj => obj[Object.keys(obj)[0]]);

export const resMap = (arr) => arr.map(obj => obj["Country Name"]);
export const getObjectBySelection = (arr, value) => arr.find(obj => obj[Object.keys(obj)[0]] === value);