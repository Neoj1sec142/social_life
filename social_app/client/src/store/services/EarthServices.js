import axios from 'axios';

const URL = 'https://api.carbonintensity.org.uk/intensity/10years/';

export const getCO2Emissions = async () => {
  try {
    const response = await axios.get(URL, {mode: 'CORS'});
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dataToArray = (datFile) => {
  
}


