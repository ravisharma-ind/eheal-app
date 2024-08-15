import axios from 'axios';
import { useState } from "react";

const options = {
    method: 'GET',
    url: 'http://localhost:8092/api/v1/top-searched'
};

const useFetchTopSearchedCategory = () => {
    const[topSearchedCategory, setTopSeachedCategory] = useState(null);

    const fetchTopSearchedCategory = async() => {
      try {
        const reqParams = {...options}
        const response = await axios.request(reqParams);
        console.log(response);
        console.log(response.data.data);
        setTopSeachedCategory(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    return [fetchTopSearchedCategory, {topSearchedCategory}];
}

export default useFetchTopSearchedCategory;