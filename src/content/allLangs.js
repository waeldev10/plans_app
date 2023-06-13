import { Link } from "react-router-dom";
import Footer from "./footer/footer";

const AllLangs = () =>{

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
                        <li><Link to="/"><button>الرئيسية</button></Link></li>
                        <li><Link to="/domin"><a href="##"> المجالات</a></Link></li>
                        <li><a href="#footer"> تواص معنا</a></li>
                    </ul>
                    
                    <a className="open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </a>

                </nav>
                    
            </div>

            </header>

            <section className="plan-lang all-lang">

                <div className="container">
                    <h2>
                        كل اللغات
                    </h2>
                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/c++.png" alt="c++" />
                            </div>
                            <p>مسار تعلم c++</p>
                        </aside>
                        <Link to="/lang/c-plus">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                        
                    </article>

                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/java.png" alt="java" />
                            </div>
                            <p>مسار تعلم java</p>
                        </aside>
                        <Link to="/lang/java">
                            <button ><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                        
                    </article>

                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/c-sharp.png" alt="c-sharp" />
                            </div>
                            <p>مسار تعلم c#</p>
                        </aside>
                        <Link to="/lang/c-sharp">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                     
                    </article>
                
                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/python.png" alt="python" />
                            </div>
                            <p>مسار تعلم python</p>
                        </aside>
                        <Link to="/lang/python">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                        
                    </article>

                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/php.png" alt="php" />
                            </div>
                            <p>مسار تعلم php</p>
                        </aside>
                        <Link to="/lang/php">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                        
                    </article>

                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/java-script.png" alt="java-script" />
                            </div>
                            <p>مسار تعلم javascript</p>
                        </aside>
                        <Link to="/lang/javascript">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                        
                    </article>

                    <article>
                        <aside>
                            <div>
                                <img src="assets/images/swift.png" alt="swift" />
                            </div>
                            <p>مسار تعلم swift</p>
                        </aside>
                        <Link to="/soon">
                            <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                        </Link>
                       
                    </article>

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
                        <li><Link to="/"><a href="##" class="active">الرئيسية</a></Link></li>
                        <li><Link to="/domin"><button> المجالات</button></Link></li>
                        <li><a href="#footer"> تواص معنا</a></li>
                    </ul>

                </div>
            </div>

        </>

    )
}

export default AllLangs;