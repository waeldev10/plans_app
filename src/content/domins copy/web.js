import { Link } from "react-router-dom";
import Footer from "../content/footer/footer";

const Web = () =>{

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
                    تطوير المواقع
                    </h2>

                    <article className="row">

                        <div className="col-lg-6">

                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                        
                                    <h3 className="h3">Front End</h3>
                                </div>
                        
                                <ol className="line-list">
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">نبذه عن المجال</h4>
                        
                                        <p className="line-text">
                                            تطوير الويب من اقدم المجالات واللذي مستمر الى يومنا هذا <br/>
                                            ويتطور باستمرار فالمواقع تقتصر في صفحات الانترنت الثابتة او الديناميكه <br/>
                                            اللتي يتفاعل معها المستخدم ويتكون هذا المجال من جزئين رئيسين : <br/>
                                            هما الواجهات الامامية اي كلما يراه المستخدم<br/>
                                            والواجهات الخلفية من قواعد بيانات وعمليات لايراها المستخدم 
                                        </p>    
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">HTML AND CSS</h4>


                                    <p className="line-text">
                                            ال html هي هيكل الصفحه الخارجي من عنواين وعبارات وصور <br/>
                                            وروابط والخ..<br/>
                                            اما css هي تحسين لعناصر الصفحة وجعلها جذابه للمتسخدمين<br/>
                                            من الوان وخطوط وحدود ومسافات والخ..
                                    </p>

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">JAVASCRIPT</h4>

                                    <p className="line-text">
                                        ال javascript هي اللغه اللتي تضيف التفاعلية للصفحه <br/>
                                        كالتحكم بعناصر واخفاء عناصر واضافه انميشن والخ..<br/>
                                        واشهر مكتبة او اطار عمل لها React<br/>
                                        لتعرف اكثر عن اللغه من هنا : <Link to="/lang/javascript"><button>javascript</button></Link>
                                    </p>

                                    </li>


                                </ol>
                    
                            </section>
                            
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-solid fa-server"></i>
                                    </div>
                        
                                    <h3 className="h3">Back End</h3>
                                </div>
                        
                                <ol className="line-list">

                                    <li className="line-item">

                                    <h4 className="h4 line-title">PHP</h4>


                                    <p className="line-text">
                                            ال php هي لغه تعمل من جانب السيرفر وهي المسؤوله <br/>
                                            عن التعامل مع قواعد البيانات كجلب البيانات وارسالها وجعل <br/>
                                            الصفحات ديناميكية <br/>
                                            واشهر اطار عمل لها Laravel <br/>
                                            لتعرف عن اللغه اكثر من هنا : <Link to="/lang/php"><button>PHP</button></Link>
                                    </p>
                                

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">SQL AND MYSQL</h4>

                                    <p className="line-text">
                                        ال sql هي لغة استعلام هيكلية لانشاء قاعدة البيانات ومعالجتها<br/>
                                        اما ال mysql هي قاعدة بيانات او بيئة عمل تستخدمsql بداخلها للتعامل<br/>
                                        مع البيانات
                                    </p>

                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div className="col-lg-6">
                            <div className="chanl">
                            <h3>كورسات تطوير المواقع</h3>
                            <ul>
                                <li>
                                <p>كورس html </p>
                                <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>كورس css</p>
                                    <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe" target="_blank">اشتراك</a>
                                </li>   

                                <li>
                                <p>كورس javascript</p>
                                <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>كورس php</p>
                                <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq" target="_blank">اشتراك</a>
                                </li>

                                <li>
                                    <p>كورس mysql $ sql</p>
                                    <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9" target="_blank">اشتراك</a>
                                </li>

                                <li>
                                    <p>كورس mysql with php</p>
                                    <a href="https://youtu.be/lmVUMukoXzw" target="_blank">اشتراك</a>
                                </li>

                                <li>
                                    <p>كورس react</p>
                                    <a href="https://youtube.com/playlist?list=PLpr1Lg_f0v3ojNKR4WzZ_SEXhiKBHDQmB" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>كورس larvel 10</p>
                                    <a href="https://youtube.com/playlist?list=PLcfD4HARQRF9BFWK16B4nTeZDn5AoIRws" target="_blank">اشتراك</a>
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

export default Web;