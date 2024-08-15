import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import TopSearchedCardList from './components/landing/TopSearchedCardList';
import FreeTextSearchBar from './components/landing/FreeTextSearchBar';
import imgbackground from './assets/bggg.png';
import useFetchTopSearchedCategory from './hooks/useFetchTopSearchedCategory';
import { useEffect } from "react";

function App() {

  const[fetchTopSearchedCategory, {topSearchedCategory}] = useFetchTopSearchedCategory();

  useEffect(() => {
    fetchTopSearchedCategory();
    console.log(topSearchedCategory)
  }, []);

  return (
    <div>
      <Nav/>
        <main>
          <section className="main-content">
            <div className="content-box">
                <div className="highlight-box">
              <span className="highlight-red">Search Local Doctors</span> 
                </div>
            </div>
            <div className="content-box1">
                <div className="highlight-box">
                    <span className="highlight-blue">Book Appointment, <span className="highlight-blue-bg">Store medical history</span></span>
                </div>
            </div>
          </section>
          <div className="slider-container">
            <div className="slider">
                <img src={imgbackground} alt="Slider Image"/>
                <img src={imgbackground} alt="Slider Image"/>
            </div>
          </div>
          <div className="search-container">
            <div className="input-group">
              <i className="fas fa-search"></i>
              <input type="text" className="search-input" name="query" placeholder="Doctor, Condition, Procedure"/>
            </div>
            <ul className="dropdown search-dropdown">
                <li>Doctor</li>
                <li>Condition</li>
                <li>Procedure</li>
            </ul>
            <div className="input-group">
                <i className="fas fa-map-marker-alt"></i>
                <input type="text" className="location-input" name="location" placeholder="City, State, Zip code"/>
                <span className="placeholder-text"></span>
            </div>
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <FreeTextSearchBar/>
          {topSearchedCategory?<TopSearchedCardList topSpecialistArr={topSearchedCategory}/>:null}
          
        </main>
      <Footer/>
    </div>
  )
}

export default App
