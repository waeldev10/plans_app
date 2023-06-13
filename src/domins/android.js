import { Link } from "react-router-dom";
import Footer from "../content/footer/footer";

const Android = () =>{

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
                    تطبيقات االاندرويد
                    </h2>

                    <article className="row">

                    <div className="col-lg-6">
                        <section className="line">

                            <div className="title">

                                <div className="icon-box">
                                    <i className="fa-brands fa-java"></i>
                                </div>
                    
                                <h3 className="h3">JAVA</h3>
                            </div>
                    
                            <ol className="line-list">
                                
                                <li className="line-item">

                                    <h4 className="h4 line-title">نبذه عن المجال</h4>
                    
                                    <p className="line-text">
                                    يعد مجال تطبيقات الاندرويد من اكثر المجالات المطلوبة <br/>
                                    حيث تزداد شعبية مطوري تطبيقات الاندرويد ويتميز نظام الاندرويد انه<br/>
                                    مفتوح المصدر وتنقسم تطيقات الاندرويد الى قسمين :<br/>
                                    التطبيقات الاصلية اللتي تعتمد على لغة النظام نفسها <br/>
                                    التطبيقات الهجينة تعتمد على تقنيات الويب لتطويرها
                                    </p>    
                    
                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">جافا اساسيات</h4>


                                <p className="line-text">
                                        دراسة اساسيات اللغة كالمتغيرات والشروط والحلقات<br/>
                                        والمصفوفات والدوال بالاضافة الى oop <br/>
                                        لمعرفة اكثر عن اللغة :<Link to="/lang/java"><button>JAVA</button></Link> 
                                </p>

                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">جافا متقدم</h4>

                                <p className="line-text">
                                    في هذا الجزء وبعد الانتهاء من جافا اساسيات ننتقل الى المتقدم <br/>
                                    ويركز هذا الجزء على :<br/>
                                    النصوص وتحويلها ودوالها وجافا شبكات وكائنات الادخال والاخراج والخ..
                                </p>

                                </li>


                            </ol>
                
                        </section>
                        
                        <section className="line">

                            <div className="title">

                                <div className="icon-box">
                                    <i className="fa-brands fa-android"></i>
                                </div>
                    
                                <h3 className="h3">ANDROID STUDIO</h3>
                            </div>
                    
                            <ol className="line-list">

                                <li className="line-item">

                                <h4 className="h4 line-title">اساسيات اندرويد استديو</h4>


                                <p className="line-text">
                                        التعرف على بيئة تطوير الاندرويد ستديو ومعماريته وربط <br/>
                                        الواجهات بالاكواد والخ ...<br/>
                                        وايضا تعلم خرائط جوجل وربطها بالتطبيق
                                </p>
                            

                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">REST API</h4>

                                <p className="line-text">
                                    تعلم مفهوم ال api وربطه بالتطبيقات وعمل مشاريع كاملة <br/>
                                    سنقوم بتغطية الكورسات بالترتيب للمهندس محمد عيسى
                                </p>

                                </li>

                            </ol>
                
                        </section>
                    </div>

                    <div className="col-lg-6">
                        <div className="chanl">
                        <h3>كورسات تطبيقات الاندرويد</h3>
                        <ul>
                            <li>
                            <p>اساسيات جافا </p>
                            <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN817O88GXt4xAPmM2bD7pLN" target="_blank">اشتراك</a>
                            </li>
                            <li>
                                <p>جافا متقدم</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN85yXTEQzDcHbmZHCyuCDnK" target="_blank">اشتراك</a>
                            </li>     
                            <li>
                            <p>اساسيات اندرويد ستديو</p>
                            <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN8giOLjGRx81fjEIaE5ef-8" target="_blank">اشتراك</a>
                            </li> 
                    
                            <li>
                            <p>اندرويد استديو متقدم</p>
                            <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN8e0r-6D8Qxy5KT1EdPx0z5" target="_blank">اشتراك</a>
                            </li>

                            <li>
                                <p>خرائط جوجل في الاندرويد</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN_kyMn_02XXNJ3waBzl-jGE" target="_blank">اشتراك</a>
                            </li>
                            <li>
                                <p>Rest API</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN_Q53LbR12vCc2BYOPy1Ncw" target="_blank">اشتراك</a>
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

export default Android;