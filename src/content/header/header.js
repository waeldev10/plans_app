import { Link } from "react-router-dom";

const Header = () =>{

    return (
        
        <>
       
            <header className="header">

                <div className="container">

                    <nav className="nav">
                    
                        <a className="logo" href="##">
                            <p>  Plans<span>Learn</span> </p>
                        </a>

                        <ul id="nav" className="navs">
                            <li><Link to="/"><button>الرئيسية</button></Link></li>
                            <li><Link to="/lang"><button> اللغات </button></Link></li>
                            <li><Link to="/domin"><button> المجالات </button></Link></li>
                            <li><a href="#footer"> تواصل معنا </a></li>
                        </ul>
                    
                        <a className="open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </a>
                    </nav>
                    
            
                    <article>

                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">

                                <video className="img" src="assets/images/home.mp4">

                                </video>

                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <div className="home">
                                    <h1>موقع خطط تعلم</h1>
                                    <p className="mb-3">
                                        موقع يجمع خطط ومسارات تعلم لبعض اللغات البرمجية وبعض المجالات ايضا 
                                        حيث قمنا بتوفير مسارات لبعض اللغات البرمجية والمجالات الاكثر شهرة
                                         وكل التوفيق للجميع
                                    </p>

                                    <a href="#lang">المسارات <i className="fa-solid fa-chevron-down"></i></a>
                                </div>
                            </div>
                        </div>

                    </article>

                </div>

            </header>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasScrollingLabel">

                <div className="offcanvas-header" dir="ltr">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">

                    <ul>
                        <Link to="/">
                            <li><button className="active">الرئيسية</button></li>
                        </Link>
                        <Link to="/lang">
                            <li><button> اللغات </button></li>
                        </Link>
                        <Link to="/domin">
                            <li><button> المجالات </button></li>
                        </Link>
                        <li><a href="#footer"> تواصل معنا </a></li>
                    </ul>

                </div>

            </div>

        </>
    )
}

export default Header;