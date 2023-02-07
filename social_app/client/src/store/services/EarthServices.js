import axios from 'axios';

const URL = 'https://api.carbonintensity.org.uk/intensity/10years';

export const getCO2Emissions = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const csvToArray = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsText(new Blob(file));
    reader.onload = function() {
      let csvData = reader.result;
      let lines = csvData.split("\n");
      let result = [];
      let headers = lines[0].split(",");
      for (let i = 1; i < lines.length; i++) {
        let obj = {};
        let currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }
        result.push(obj);
      }
      resolve(result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  });
};


