function counter() {
  console.log("Counter started");
  let time = 1;
  setInterval(() => {
    console.log("Counter ticked", time);
    time += 1;
  }, 1000);
}

counter();

function callTimer(tick) {
  setTimeout(() => {
    console.log("Counter ticked", tick);
    callTimer(tick + 1);
  }, 1000);
}

function newCounter() {
  console.log("Counter started");
  const time = 1;
  callTimer(time);
}

newCounter();

const readContentsOfFile = (fileName) => {
  const fs = require("fs");
  const currentWorkingDirectory = process.cwd();
  const path = require("path");
  const filePath = path.join(currentWorkingDirectory, fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Display the contents of the file
    console.log("File contents:", data);
  });
};

readContentsOfFile("start.js");
for (let i = 0; i < 100000000; i += 1) {
  continue;
}

const writeToFile = (fileName, content) => {
  const fs = require("fs");
  const currentWorkingDirectory = process.cwd();
  const path = require("path");
  const filePath = path.join(currentWorkingDirectory, fileName);

  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Display the contents of the file
    console.log("File is written successfully");
  });
};

writeToFile("start.js", "console.log('Hello')");
