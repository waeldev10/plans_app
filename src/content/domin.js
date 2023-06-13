import { Link } from "react-router-dom";

const Domin = () =>{

    return (

        <section className="plan-cont">

            <div className="container">

                <aside>
                    <h2>المجالات</h2>
                    <Link to="/domin">
                        <button>الكل</button>
                    </Link>
                   
                </aside>
            
                <div className="row r">

                    <div className="col-lg-6 cols d-flex justify-content-center align-items-center">
                        <img className="img" src="assets/images/domin.gif" alt="domins" />
                    </div>

                    <div id="domin" className="col-lg-6  d-flex justify-content-center align-items-center">
                        <div>
                            <div className="top">
                        
                                <article>
                                    <div>
                                        <img src="assets/images/web.png" alt="web"/>
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
                            
                            </div>
                            
                            <div className="top">

                                <article>
                                    <div>
                                        <img src="assets/images/desktop.png" alt="desktop" />
                                    </div>
                                    <p>مسار سطح المكتب</p>
                                    <Link to="/domin/desktop">
                                        <button>انطلق</button>
                                    </Link>
                                </article>
                        
                                <article>
                                    <div>
                                        <img src="assets/images/ai.png" alt="ai" />
                                    </div>
                                    <p>مسار الذكاء الاصطناعي</p>
                                    <Link to="/soon">
                                        <button>انطلق</button>
                                    </Link>
                                </article>

                            </div>
                        </div>
                        
                
                    </div>

                </div>
            

            </div>

        </section>
    )

}

export default Domin;