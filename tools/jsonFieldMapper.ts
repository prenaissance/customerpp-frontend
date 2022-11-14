import fs from "fs/promises";
import { exit } from "process";

const keyMapping = [
  { from: "ctc", to: "clicksToConvert" },
  { from: "cts", to: "clicksToShare" },
  { from: "ttc", to: "timeToConvert" },
  { from: "tts", to: "timeToShare" },
];

const keyFiltering = ["person_id", "master_id"];

if (process.argv.length < 4) {
  console.error("Please provide arguments for the input and output files");
  exit(1);
}

const sourcePath = process.argv[2];
const destinationPath = process.argv[3];

const main = async () => {
  const source = JSON.parse(await fs.readFile(sourcePath, "utf-8"));
  const mapped = source.map((record: Record<string, any>) => {
    const mappedRecord: Record<string, any> = {};
    for (const key in record) {
      if (keyFiltering.includes(key)) {
        continue;
      }
      const mapping = keyMapping.find((mapping) => mapping.from === key);
      if (mapping) {
        mappedRecord[mapping.to] = record[key];
      } else {
        mappedRecord[key] = record[key];
      }
    }
    return mappedRecord;
  });

  await fs.writeFile(destinationPath, JSON.stringify(mapped, null, 2));
};

main();
