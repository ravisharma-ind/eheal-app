
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import useFetchDoctors from '../hooks/useFetchDoctors';
import DoctorCardList from '../components/doctorlisting/DoctorCardList';
import Nav from '../components/Nav';
import '../css/DoctorList.css';

export default function DoctorList(){
    
    const location = useLocation();
    const searchTerm = location.state.searchTerm; 

    const[fetchDoctors, {doctors}] = useFetchDoctors();
    console.log(location)
    useEffect(() => {
        fetchDoctors(searchTerm);
        console.log(doctors)
    }, []);

    return (
        <>  
            <Nav/>
            {doctors?<DoctorCardList doctorList={doctors}/>:<h1>Loading</h1>}
        </>
        
    )
}