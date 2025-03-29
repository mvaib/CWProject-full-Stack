import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Footer.css'; // 

const Footer = () => {
    return (
        <footer>
            <Link to={"/"}><img src={assets.logo} alt="" className="logo" width={"190px"}/></Link>
            
            <div className="disclaimer">
                © 2023 Dermstore. All Rights Reserved. | Information on this site is for informational purposes only and not meant as a substitute for professional medical advice.
            </div>
        </footer>
    );
};

export default Footer;
