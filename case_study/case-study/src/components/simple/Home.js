import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Header />
            <div>
                <section className="banner_main">
                    <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="first-slide" src="images/banner1.jpg" alt="First slide" />
                                <div className="container">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="second-slide" src="images/banner2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="third-slide" src="images/banner3.jpg" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <div className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="titlepage">
                                    <h2>About Us</h2>
                                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. </p>
                                    <a className="read_more" href="Javascript:void(0)"> Read More</a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="about_img">
                                    <figure><img src="images/about.png" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>gallery</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery1.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery2.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery3.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery4.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery5.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery6.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery7.jpg" alt="#" /></figure>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="gallery_img">
                                    <figure><img src="images/gallery8.jpg" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} 
export default Home;