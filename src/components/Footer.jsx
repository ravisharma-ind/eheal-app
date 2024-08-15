import logofooter from '../assets/logofooter.png';
import fb from '../assets/fb.png';
import imgtwitter from '../assets/x.png';
import imgtinstagram from '../assets/instagram.png';
import imglinkedin from '../assets/linkedin.png';
import imgindflag from '../assets/india-national-fabric-flag_113767-1933.avif';

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-nav">
                <a href="#">Home</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
                <a href="#">About Us</a>
                <a href="#">Blogs</a>
                <a href="#">e-heal India in news</a>
            </div>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logofooter} alt="e-heal India Logo"/>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/people/Eheal-India/61563425991473/" target="_blank"><img src={fb} alt="Facebook"/></a>
                    <a href="https://x.com/e_healIndia" target="_blank"><img src={imgtwitter} alt="Twitter"/></a>
                    <a href="https://www.instagram.com/eheal_india/" target="_blank"><img src={imgtinstagram} alt="Instagram"/></a>
                    <a href="https://www.linkedin.com/company/ehealindia/" target="_blank"><img src={imglinkedin} alt="LinkedIn"/></a>
                </div>
            </div>
            
            <div className="footer-copy">
                <p>Made with ❤️ in <img src={imgindflag} className="flag"/> for <img src="assets/india-national-fabric-flag_113767-1933.avif" className="flag"/><br></br>Copyright © 2024 e-heal India </p> 
            </div>

            </footer>
    )
}