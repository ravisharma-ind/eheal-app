import imgstar4 from '../../assets/star4.png';
import imgstar1 from '../../assets/star1.png';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FreeTextSearchBarCL from './FreeTextSearchBarCL';

export default function FreeTextSearchBar(){
    
    const[searchTerm, setSearchTerm] = useState("");
    
    const handleSearchChange = (value) => {
        setSearchTerm(value)
    }
    
    const handleClick = () => {
      if(searchTerm){
        navigateTo('/doctors', { state: {
            'searchTerm' : searchTerm
        } })
      }
    }

    const navigateTo = useNavigate();

    return (
        <div className="search-bar-container">
            <img src={imgstar4} alt="Stars" id="search-icon" className="star"/>
            <div className="input-wrapper">
              <input 
                type="text" 
                name="query" 
                className="search-bar-input" 
                placeholder=""
                onChange={(e) => handleSearchChange(e.target.value)} 
                value={searchTerm}/>
              {!searchTerm?<FreeTextSearchBarCL/>:null}
            </div>
            <button className="search-bar-button" onClick={handleClick}>
                <img src={imgstar1} alt="Stars" className="star-icon"/>
                <span className="search-text">Search</span>
            </button>
        </div>
    )
}