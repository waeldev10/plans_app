import { Link } from "react-router-dom";
import Footer from "./footer/footer";

const AllDomin = () =>{

    const height = {
        height: '100px',
    };

    return (

        <>
             <header className="header hh" style={height}>

                <div className="container">

                    <nav className="nav">
                        
                        <a className="logo" href="##">
                            <p>  Plans<span>Learn</span> </p>
                        </a>

                        <ul id="nav" className="navs">
                            <li><Link to="/"><button className="active">الرئيسية</button></Link></li>
                            <li><Link to="/lang"><button> اللغات </button></Link></li>
                            <li><a href="#footer"> تواصل معنا </a></li>
                        </ul>
                        
                        <a className="open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </a>

                    </nav>

                </div>

            </header>

            <section className="plan-cont all-cont">

                <div className="container">
                    <h2>
                        كل المجالات
                    </h2>
                    <div className="top" id="domin">
                            
                        <article>
                            <div>
                                <img src="assets/images/web.png" alt="web" />
                            </div>
                            <p>مسار تطوير المواقع</p>
                            <Link to="/domin/web">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>
                    
                        <article>
                            <div>
                                <img src="assets/images/android.png" alt="android" />
                            </div>
                            <p>مسار تطبيقات الاندرويد</p>
                            <Link to="/domin/android">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>
                        <article>
                            <div>
                                <img src="assets/images/desktop.png" alt="desktop" />
                            </div>
                            <p>مسار سطح المكتب</p>
                            <Link to="/domin/desktop">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>
                    </div>
                    <div className="top">
                        <article>
                            <div>
                                <img src="assets/images/ai.png" alt="Ai" />
                            </div>
                            <p>مسار الذكاء الاصطناعي</p>
                            <Link to="/soon">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>

                        <article>
                            <div>
                                <img src="assets/images/cyber-security.png" alt="cyber-security" />
                            </div>
                            <p>مسار الامن السيبراني</p>
                            <Link to="/domin/syber_security">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>

                        <article>
                            <div>
                                <img src="assets/images/ux-design.png" alt="ui-ux" />
                            </div>
                            <p>مسار ui - ux</p>
                            <Link to="/domin/ui_ux">
                                <button>انطلق</button>
                            </Link>
                            
                        </article>
                    
                    </div>
                    
                </div>

            </section>

            <Footer />

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasScrollingLabel">

            <div className="offcanvas-header" dir="ltr">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                <ul>
                    <li><Link to="/"><button className="active">الرئيسية</button></Link></li>
                    <li><Link to="/lang"><button> اللغات </button></Link></li>
                    <li><a href="#footer"> تواصل معنا </a></li>
                </ul>

            </div>
            </div>

        </>

    )

}

export default AllDomin;