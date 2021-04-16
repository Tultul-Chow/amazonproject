import logo from '../images/logo.png';

const Footer = () => {

    
    return (
        <div class="footer">
      <div className="footer-grid">
                <div>
                    <img style={{ width: "50%" }} src={logo} alt=""></img>
                   
                </div>
                <div>
                    <h4 style={{ color:"rgb(197, 170, 15)"}} >Get To Know Us</h4><br/>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Careers</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Amazon and Our Planet</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Investor Relations</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Press Releases</ul>
                </div>
                <div>
                    <h4 style={{ color:"rgb(197, 170, 15)"}}>Make Money With Us</h4><br/>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Sell on Amazon</ul>
                    <ul  style={{ color:"rgb(197, 170, 15)"}}>Sell under Amazon planet</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Sell on Amazon Handmade</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Advertise your product</ul>
                </div>
                <div>
                    <h4 style={{ color:"rgb(197, 170, 15)"}} >Our Payment Products</h4><br/>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Shop with points</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Reload Your Balance</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}}  >Gift Cards</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Amazon Cash</ul>
                </div>
                <div>
                    <h4 style={{ color:"rgb(197, 170, 15)"}} >Let Us Help You</h4><br/>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >COVID-19 and Amazon</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Shipping Rates and policies</ul>
                    <ul style={{ color:"rgb(197, 170, 15)"}} >Returns are at ease</ul>
                    <ul  style={{ color:"rgb(197, 170, 15)"}}>Customer Service</ul>
                </div><br />
            </div>
            <br />
            <a > © Amazon. 2021 . All rights reserved</a>
        </div>
    )
}

export default Footer;