import axios from 'axios';

const URL = 'https://api.carbonintensity.org.uk/intensity/10years';

const getCO2Emissions = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCO2Emissions;

