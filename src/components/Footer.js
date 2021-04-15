import logo from '../images/logo.jpg';

const Footer = () => {

    
    return (
        <div class="footer">
      <div className="footer-grid">
                <div>
                    <img style={{ width: "50%" }} src={logo} alt=""></img>
                   
                </div>
                <div>
                    <h4 style={{ color:"white"}} >Get To Know Us</h4><br/>
                    <ul style={{ color:"white"}} >Careers</ul>
                    <ul style={{ color:"white"}} >Amazon and Our Planet</ul>
                    <ul style={{ color:"white"}} >Investor Relations</ul>
                    <ul style={{ color:"white"}} >Press Releases</ul>
                </div>
                <div>
                    <h4 style={{ color:"white"}}>Make Money With Us</h4><br/>
                    <ul style={{ color:"white"}} >Sell on Amazon</ul>
                    <ul  style={{ color:"white"}}>Sell under Amazon planet</ul>
                    <ul style={{ color:"white"}} >Sell on Amazon Handmade</ul>
                    <ul style={{ color:"white"}} >Advertise your product</ul>
                </div>
                <div>
                    <h4 style={{ color:"white"}} >Our Payment Products</h4><br/>
                    <ul style={{ color:"white"}} >Shop with points</ul>
                    <ul style={{ color:"white"}} >Reload Your Balance</ul>
                    <ul style={{ color:"white"}}  >Gift Cards</ul>
                    <ul style={{ color:"white"}} >Amazon Cash</ul>
                </div>
                <div>
                    <h4 style={{ color:"white"}} >Let Us Help You</h4><br/>
                    <ul style={{ color:"white"}} >COVID-19 and Amazon</ul>
                    <ul style={{ color:"white"}} >Shipping Rates and policies</ul>
                    <ul style={{ color:"white"}} >Returns are at ease</ul>
                    <ul  style={{ color:"white"}}>Customer Service</ul>
                </div><br />
            </div>
            <br />
            <a > © Amazon. 2021 . All rights reserved</a>
        </div>
    )
}

export default Footer;