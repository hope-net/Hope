export default function Footer() {
    return(
        <footer>
            <div className="footerContent">
            <img src="/HopeFooter.jpg"  alt="" />
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Contribute</li>
                <li>Donate</li>
            </ul>
            </div>
            <hr />
            <div className="social-copyright">
            <div className="socials">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook"></i>   
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <p>&copy; All rights reserved Hope@2025</p>
            </div>
        </footer>
    )
}