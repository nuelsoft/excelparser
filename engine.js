const reader = require("read-excel-file/node");

const run = async (path) => {
  path = path || "res/test.xlsx";

  const data = await reader(path);

  /*
   Removing the the first row, 
   which in most case is the title of each row
   */
  data.shift();

  const serialiazed = [];

  for (let entry of data) {
    serialiazed.push({
      title: entry[0],
      name: entry[1],
      location: entry[2],
      language: entry[3],
    });
  }

  console.log(data);
  console.log(serialiazed);
};

module.exports = { run };
