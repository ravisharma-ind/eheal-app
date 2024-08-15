
export default function TopSearchedCard({topSpecialist}){

    return(
        <div className="card">
                      <button className="icon dentist">
                          <img src={topSpecialist.image} alt="Dentist"/>
                      </button>
                      <p>{topSpecialist.name}</p>
        </div>
    )
}