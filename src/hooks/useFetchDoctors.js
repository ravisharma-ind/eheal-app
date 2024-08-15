import axios from 'axios';
import { useState } from "react";

const options = {
    method: 'POST',
    url: 'http://localhost:3000/dev/api/v1/doctor/findMe'
};

const optionsGetDoctors = {
  method: 'GET',
  url: 'http://localhost:3000/dev/api/v1/doctor/'
};

const useFetchDoctors = () => {
    const[doctors, setDoctors] = useState(null);

    const fetchDoctors = async(searchTerm) => {
      try {
        const reqParams = {...options, data: {'query' : searchTerm}}
        //TODO fix this
        const response = await axios.request(optionsGetDoctors);
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    return [fetchDoctors, {doctors}];
}

export default useFetchDoctors;