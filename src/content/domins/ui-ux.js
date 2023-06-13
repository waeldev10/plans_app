import { Link } from "react-router-dom";
import Footer from "../content/footer/footer";

const Ui_Ux = () =>{

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

                            <li><Link to="/"><button>الريئسية</button></Link></li>
                            <li><Link to="/lang"><button>كل اللغات</button></Link></li>
                            <li><Link to="/domin"><button>كل المجالات</button></Link></li>
                            <li><a href="#footer">تواصل معنا</a></li>

                        </ul>
                    
                        <a className="open" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </a>

                    </nav>
                    

                </div>

            </header>

            <section className="one-lang">

                <div className="container ">
                    <h2 className="h2">
                    UI / UX
                    </h2>

                    <article className="row">

                        <div className="col-lg-6">
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-brands fa-figma"></i>
                                    </div>
                        
                                    <h3 className="h3">Tools</h3>
                                </div>
                        
                                <ol className="line-list">
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">نبذه عن المجال</h4>
                        
                                        <p className="line-text">
                                            ال ui / ux هما اختصار لجملتين مهمين وهما :<br/>
                                            user interface ويقصد به واجهه المستخدم كالالوان <br/>
                                            والخطوط والمسافات والاشكال والخ...<br/>
                                            user experience ويقصد به تجربة المستخدم واللتي تعني كيفيه <br/>
                                            تفاعل المستخدم مع التصميم
                                        </p>    
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">اشهر البرامج</h4>

                                    <p className="line-text">
                                        تعلم البرامج والادوات اللتي تساعدك على بناء تصميم<br/>
                                        جميل ومن افضل البرامج المستخدمة :<br/>
                                        Adobe Photoshop - Adobe Xd - figma وغيرها من الرامج
                                    </p>
                        

                                    </li>

                                </ol>
                    
                            </section>
                            
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-solid fa-pen-ruler"></i>
                                    </div>
                        
                                    <h3 className="h3">UI/UX</h3>
                                </div>
                        
                                <ol className="line-list">

                                    <li className="line-item">

                                    <h4 className="h4 line-title">قواعد التصميم</h4>


                                    <p className="line-text">
                                        تعلم مبادئ التصميم مثل التباين و الانسيابية و التناسق<br/>
                                        والتناسق والتوازن والبساطة والتوظيف والخ..<br/>
                                        وايضا التغذيه البصرية وتقليد تصاميم تساعد على التعلم
                                    </p>
                                

                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div className="col-lg-6">
                            <div className="chanl">
                            <h3>كورسات UI/UX</h3>
                            <ul>
                                <li>
                                <p>مبادئ التصميم</p>
                                <a href="https://youtube.com/playlist?list=PLPTNqXpQ2tbgmAshpoR02QO4BfyWX3Dzs" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>تعلم تطبيق فيجما </p>
                                    <a href="https://youtube.com/playlist?list=PLIW7Uli0gP7h2wvikTq5zMh8PoOQWhlpw" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>تعلم تطبيق ادوبي XD </p>
                                <a href="https://youtu.be/4GyW6bhNcZc" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>اساسيات ui/ux</p>
                                <a href="https://youtube.com/playlist?list=PLSKqCHVeCbX5w8beQy6o0I8Sv7vXSGQbv" target="_blank">اشتراك</a>
                                </li>
                                
                                <li>
                                    <p>تصميم واجهة تطبيق باستخدام فيجما</p>
                                    <a href="https://youtu.be/LABM61CSXeU" target="_blank">اشتراك</a>
                                </li>

                                <li>
                                    <p>تصميم واجهة موقع باستخدام xd</p>
                                    <a href="https://youtu.be/Dg8bbtun8D4" target="_blank">اشتراك</a>
                                </li>
                        
                            </ul>
                    
                            </div>
                        </div>

                    </article>


                </div>

            </section>

            <Footer />

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasScrollingLabel">

                <div className="offcanvas-header" dir="ltr">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div classNameNameName="offcanvas-body">

                    <ul>
                        <li><Link to="/"><button className="active">الريئسية</button></Link></li>
                        <li><Link to="/lang"><button>كل اللغات</button></Link></li>
                        <li><Link to="/domin"><button>كل المجالات</button></Link></li>
                        <li><a href="#footer">تواصل معنا</a></li>
                    </ul>

                </div>

            </div>

        </>

    )

}

export default Ui_Ux;