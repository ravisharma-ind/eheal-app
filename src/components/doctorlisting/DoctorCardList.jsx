import DoctorCard from './DoctorCard'

export default function DoctorCardList({doctorList}){

    return(
        <>
                {
                    doctorList.map(doctor => (
                        <DoctorCard key={doctor._id} doctor = {doctor}/>
                    ))
                }
        </> 
    )
}