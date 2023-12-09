const fileCleaner = (fileName) => {
  const fs = require("fs");
  const path = require("path");
  const currentWorkingDirectory = process.cwd();
  const filePath = path.join(currentWorkingDirectory, fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const trimmedData = data
      .split(" ")
      .filter((x) => x !== "")
      .join(" ");
    fs.writeFile(filePath, trimmedData, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Data written successfully");
    });
  });
};

// fileCleaner("content.txt");

const showTimer = () => {
  const date = new Date();

  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  const time = `${hour}:${minute}:${second}`;
  console.log("Clock ->", time);
};

setInterval(showTimer, 1000);
