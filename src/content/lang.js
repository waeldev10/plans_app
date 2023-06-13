import { Link } from "react-router-dom";

const Lang = () =>{

    return (
        
        <section className="plan-lang">

            <div className="container">

                <aside id="lang">
                    <h2>اللغات</h2>
                    <Link to="/lang">
                        <button>الكل</button>
                    </Link>
                    
                </aside>
            
                <div className="row r" dir="ltr">

                    

                    <div className="col-lg-6 cols d-flex justify-content-center align-items-center">
                        <img className="img" src="assets/images/lang.gif" alt="langs" />
                    </div>

                    <div className="col-lg-6  d-flex justify-content-center align-items-center" dir="rtl">
                        <div className="w-100">
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
                                    <button><i className="fa-sharp fa-regular fa-eye"></i></button>
                                </Link>
                            </article>
                    
                            <article>
                                <aside>
                                    <div>
                                        <img src="assets/images/c-sharp.png" alt="c#" />
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
                        </div>
                    </div>

                </div>
            

            </div>

        </section>

    )
    
}

export default Lang;