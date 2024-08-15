import TopSearchedCard from './TopSearchedCard'

export default function TopSearchedCardList({topSpecialistArr}){

    console.log("inside TopSearchedCardList")
    console.log(topSpecialistArr)

    return(
        <div className="container1">
            <h2 className="heading1">Top Searched Specialist</h2>
            <div className="specialists">
                {
                    topSpecialistArr.map(topSpecialist => (
                        <TopSearchedCard key={topSpecialist.id} topSpecialist = {topSpecialist}/>
                    ))
                }
            </div>
        </div>
    )
}