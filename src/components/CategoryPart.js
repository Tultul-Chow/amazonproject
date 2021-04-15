import React from 'react'
import img from '../images/candle.jpg'
import img1 from '../images/petbed.jpg'
import img2 from '../images/marvelTshirt.jpg'
import img3 from '../images/borax.jpg'
import {Link} from 'react-router-dom'


const CategoryPart = () => {
    return (

        <div class="pageWrap gap">
            <h1 style={{color:"black"}}>Categories</h1>
            <div class="pageInside">
            
                <div className="catgWrap">
                    <div className="box-up ">
                        <img className="img" src={img} alt="" />
                    </div>

                    <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>
                        <Link className="cart" to="/homeDecor" >

                            <span className="showCatg">
                                <span className="txt">Home Decor</span>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
            
            <div className="pageInside grid-img">
                <div className="row">
                    <div className="catgWrap">
                        <div className="box-up ">
                            <img className="img" src={img1} alt="" />
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <Link className="cart" >
                                <span className="showCatg">
                                    <span className="txt">Shop for Your Pet</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageInside grid-img">
                <div className="row">
                    <div className="catgWrap">
                        <div className="box-up ">
                            <img className="img" src={img2} alt="" />
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <Link className="cart" >
                              <span className="showCatg">
                                    <span className="txt">Clothing & Accessories</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pageInside grid-img">
                <div className="row">
                    <div className="catgWrap">
                        <div className="box-up ">
                            <img className="img" src={img3} alt="" />
                        </div>
                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <Link className="cart">
                                <span className="showCatg">
                                    <span className="txt">Your Cleaning Tool</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryPart
