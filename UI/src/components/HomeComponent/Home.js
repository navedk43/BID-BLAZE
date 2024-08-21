import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

    return (

        <>
        <div >
            

              {/* About Section Start */}
            <div className="about-section py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                            <h2 className="mb-4">Welcome to Bid Blaze</h2>
                            <p className="lead">
                                <b>Bid Blaze is an innovative e-auction platform that transforms the way you buy and sell products. Our mission is to provide sellers with the opportunity to maximize their profits while offering buyers high-quality items at prices below market value. With our user-friendly interface and secure transaction process, Bid Blaze ensures a seamless and enjoyable auction experience for all.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}


             {/* Features Section Start */}
             <div className="features-section py-5 bg-light">
                <div className="container wow fadeInUp" data-wow-delay="0.1s">
                    <h2 className="mb-4 text-center">Why Choose Bid Blaze?</h2>
                    <div className="row g-5">
                        <div className="col-md-4 text-center">
                            <div className="feature">
                                <span role="img" aria-label="Profit" className="feature-icon">💰</span>
                                <h3 className="mt-3">Maximize Your Profits</h3>
                                <p>Sellers can achieve higher profits through competitive bidding.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="feature">
                                <span role="img" aria-label="Deals" className="feature-icon">🛒</span>
                                <h3 className="mt-3">Great Deals for Buyers</h3>
                                <p>Buyers can find top-quality products at prices lower than the market.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="feature">
                                <span role="img" aria-label="Secure" className="feature-icon">🔒</span>
                                <h3 className="mt-3">Secure Transactions</h3>
                                <p>Enjoy a safe and secure bidding environment with our robust security measures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Call to Action Section Start */}
             <div className="call-to-action-section py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Start Bidding?</h2>
                    <p className="lead">Join Bid Blaze today and discover a new way to buy and sell online. Sign up now to get started!</p>
                    <a className="btn btn-secondary rounded-pill py-3 px-5" ><Link style={{"color":"#fff"}} to={`/register`}>Register Now</Link></a>
                </div>
            </div>
            {/* Call to Action Section End */}
            {/* Features Section End */}
        </div>
        {/* About End */}
        </>
    );
}

export default Home;