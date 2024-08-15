import yasra from '../../assets/yasra.png';

export default function DoctorCard({doctor}){
    console.log(doctor)
    return(
        <div className="doctor-list-card">
            <img src={yasra} alt="Dr. Yssra Soliman"/>
            <div class="doctor-list-card-content">
                <div class="doctor-list-card-header">
                    <h2>Dr. Yssra Soliman, MD</h2>  
                </div>
                <div class="doctor-list-card-info">
                    <p1>Dentist</p1>
                    <p>⭐ 4.88</p>
                    <p><i class="fas fa-map-marker-alt" ></i>39 Brodway, state 2011, New...</p>
                    <p>🛡️ See if they're in network</p>
                    <p4>New Patient appointments. Highly recommended.Excellent wait time</p4>
                </div>
            </div>
            <div class="doctor-list-card-availability">
                    
            </div>
        </div>
    )
}