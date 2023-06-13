import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Csharp = () =>{

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
                    لغة c#
                    </h2>

                    <article className="row">

                        <div className="col-lg-6">
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-sharp fa-solid fa-house"></i>
                                    </div>
                        
                                    <h3 className="h3">الاساسيات</h3>
                                </div>
                        
                                <ol className="line-list">
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">نبذه عن اللغة</h4>
                        
                                        <p className="line-text">
                                            لغة ال سي شارب تعتبر ايضا من اللغات الكائينية التوجه تم تطويرها
                                            من قبل شركة مايكروسوفت تعمل على انظمة مايكروسوفت وهي سهلة الاستخدام مع <br/>
                                            نظام التشغيل ويندوز وتدخل ايضا في كثير من المجالات ولعل اهمها : <br/>
                                            تطبيقات سطح المكتب والالعاب
                                        </p>
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                    <p className="line-text">
                                            في كل لغة لايمكن تعلمها دون المرور لهذه الامور الا وهي المتغيرات <br/>
                                            والشروط والحلقات وانواع البيانات وفهمها جيدا وربطها ببعضها البعض
                                    </p>

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المصفوفات والدوال</h4>

                                    <p className="line-text">
                                            المصفوفات في الc# عباره عن نوع مرجعي reference type وهي ترث من الصنف الاب System.Array
                                    </p>

                                    </li>


                                </ol>
                    
                            </section>
                            
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-sharp fa-solid fa-align-center"></i>
                                    </div>
                        
                                    <h3 className="h3">متوسط الى متقدم</h3>
                                </div>
                        
                                <ol className="line-list">

                                    <li className="line-item">

                                    <h4 className="h4 line-title">برمجة كائنية التوجة (OOP)</h4>


                                    <p className="line-text">
                                            كغيرها من اللغات فان ال c# لغة كائينية التوجه وتركز على مواضيع ال oop 
                                    </p>
                                

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المكاتب والبرمجة المرئية</h4>

                                    <p className="line-text">
                                        من اهم اللغات اللتي تنتج لنا واجهات مرئية هي ال c# نستطيع بناء الواجهات <br/>
                                        من خلال السحب والافلات كما في بيئة عمل vs التابع لمايكروسوفت او من خلال اكواد لغات <br/>
                                        كما في html - xml والخ..
                                    </p>

                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div className="col-lg-6">
                            <div className="chanl">
                            <h3>ابرز الكورسات</h3>
                            <ul>
                                <li>
                                <p> اساسيات c# اكاديمية حسونة</p>
                                <a href="https://youtube.com/playlist?list=PLHIfW1KZRIfm8nQAoJF5u2aV43tMRAAmr" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>c# oop اكاديمية حسونة</p>
                                    <a href="https://youtube.com/playlist?list=PLHIfW1KZRIfl6UP-PlUli03pokSc4af2S" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>الواجهات مع قواعد البيانات</p>
                                <a href="https://youtube.com/playlist?list=PLH4Lyg7lw4ATodHM3W5YKrpCtsubK4mZ4" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>الواجهات المرئية بغداد الجديدة</p>
                                <a href="https://youtube.com/playlist?list=PLF8OvnCBlEY0UU030QzRv506rculmtGQ2" target="_blank">اشتراك</a>
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

export default Csharp;