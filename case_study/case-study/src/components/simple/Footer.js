import React from 'react';


function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Contact US</h3>
                            <ul className="conta">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                                <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:demo@gmail.com"> demo@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>Menu Link</h3>
                            <ul className="link_menu">
                                <li className="active"><a href="home.html">Home</a></li>
                                <li><a href="about.html"> about</a></li>
                                <li><a href="service.html">Service</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="create.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>News letter</h3>
                            <form className="bottom_form">
                                <input className="enter" placeholder="Enter your email" type="text" name="email" />
                                <button className="sub_btn" type="submit">subscribe</button>
                            </form>
                            <ul className="social_icon">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <p>
                                © 2019 All Rights Reserved. Design by <a href="https://html.design/"> Thanh Thien</a>
                                <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;