import { Link } from "react-router-dom";
import Footer from "../content/footer/footer";

const Desctop = () =>{

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
                    تطبيقات سطح المكتب
                    </h2>

                    <article className="row">

                        <div className="col-lg-6">
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-solid fa-code-compare"></i>
                                    </div>
                        
                                    <h3 className="h3">C#</h3>
                                </div>
                        
                                <ol className="line-list">
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">نبذه عن المجال</h4>
                        
                                        <p className="line-text">
                                            تطبيقات سطح المكتب هي التطبيقات اللتي تعمل على انظمه التشغيل windows و mac و <br/>
                                            Linux
                                            وايضا لاتحتاح الى اتصال بالانترنت <br/>
                                            كالانظمه المحاسبة والاداريه والمخازن والعاب الكمبيوتر والخ...<br/>
                                            وهناك برامج تحتاج الاتصال بالانترنت كبرامج تحرير الفيديوهات والتصميم والخ..
                                        </p>    
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">الاساسيات و oop</h4>


                                    <p className="line-text">
                                            دراسة اساسيات اللغة كالمتغيرات والشروط والحلقات<br/>
                                            والمصفوفات والدوال بالاضافة الى oop <br/>
                                            لمعرفة اكثر عن اللغة : <Link to="/lang/c-sharp"><button>C#</button></Link> 
                                    </p>

                                    </li>

                                </ol>
                    
                            </section>
                            
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-solid fa-database"></i>
                                    </div>
                        
                                    <h3 className="h3">VISUAL STUDIO</h3>
                                </div>
                        
                                <ol className="line-list">

                                    <li className="line-item">

                                    <h4 className="h4 line-title">الواجهات</h4>


                                    <p className="line-text">
                                            التعرف على ادوات فيجول استديو وبناء <br/>
                                            الواجهات واضافة الاحداث ...
                                    </p>
                                

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">SQL SERVER</h4>

                                    <p className="line-text">
                                            بعد بناء الواجهات نتعلم قواعد البيانات والتعامل معها <br/>
                                            وافضل قاعدة بيانات للتعامل مع تطبيقات الويندو هي sql server<br/>
                                            اليك كورسات للبدء في هذا المجال 
                                    </p>

                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div className="col-lg-6">
                            <div className="chanl">
                            <h3>كورسات تطبيقات الويندوز</h3>
                            <ul>
                                <li>
                                <p>اساسيات c#</p>
                                <a href="https://youtube.com/playlist?list=PL4K-VuBVuyoXZA53yB5ebiAP_6l0tMAOe" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>oop في ال c#</p>
                                    <a href="https://youtube.com/playlist?list=PL4K-VuBVuyoXvxPD48LjjBEUGxWxHRHQO" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>بناء الواجهات </p>
                                <a href="https://youtube.com/playlist?list=PL4K-VuBVuyoUv-p1AIPDTkaLwlzXxwuxm" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>قواعد البيانات sql server</p>
                                <a href="https://youtube.com/playlist?list=PL4K-VuBVuyoXJ6DVbtoL2ugGaui9nodRN" target="_blank">اشتراك</a>
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

                <div className="offcanvas-body">

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

export default Desctop;