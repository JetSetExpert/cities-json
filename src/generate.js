const csvParser = require("csv-parser");
const fs = require("fs");

// Check for the --source command line argument to override the default source file
const sourceFile = process.argv.includes("--source")
  ? process.argv[process.argv.indexOf("--source") + 1]
  : "./data/worldcities.csv";
const outputFile = "./data/cities.json";

const generateJsonFromCsv = (sourceFile, outputFile) => {
  const parsedData = [];

  // Create a read stream from the source CSV file
  fs.createReadStream(sourceFile)
    .pipe(csvParser()) // Pipe the read stream to the CSV parser
    .on("data", (row) => {
      // For each row of data, add it to the parsedData array
      parsedData.push(row);
    })
    .on("end", () => {
      // Once the read stream ends, write the parsedData array to the output JSON file
      fs.writeFileSync(outputFile, JSON.stringify(parsedData, null, 2));
      console.log(`Generated ${outputFile}`);
    });
};

// Call the generateJsonFromCsv function with the sourceFile and outputFile
generateJsonFromCsv(sourceFile, outputFile);
