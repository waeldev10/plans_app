import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Cplus = () =>{

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

                            <li><Link to="/"><button >الريئسية</button></Link></li>
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
                        لغة c++
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

                                                <h4 className="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                                <p className="line-text">
                                                يجب فهم هذه المصطلحات جيدا وتطبيق المسائل الكثيرة عليها <br/>
                                                اليك بعض الكلمات لزيادة معلوماتك  :
                                                </p>
                                                <span>c++ compiler - </span>
                                                <span>c++ syntax - </span>
                                                <span>c++ varibles use cases - </span>
                                                <span>c++ type convert </span><br/>
                                                <span>c++ cperators - </span>
                                                <span>c++ switch - </span>
                                                <span>c++ control flow</span>

                                            </li>

                                            <li className="line-item">

                                                <h4 className="h4 line-title">المصفوفات والدوال</h4>

                                                <p className="line-text">
                                                    من اهم المواضيع ويجب التركيز عليها جيدا وخاصة موضوع التعامل مع<br/>
                                                    المصفوفات والاستدعاء الذاتي للدوال ودمج المصفوفات مع الحلقات <br/>
                                                    واستخدام الشروط
                                                </p>

                                            </li>


                                            <li className="line-item">

                                                <h4 className="h4 line-title">المؤشرات والملفات</h4>

                                                <p className="line-text">
                                                المؤشرات من المواضيع المهمه في هذه اللغة على وجه التحديد يجب <br/>
                                                يجب الاطلاع عليها وايضا التعاكل مع الملفات مثل :<br/>
                                                فتح الملف والكتابه علية والتعديل واغلاقه والخ..
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
                                            بعد الانتهاء من الاساسيات قم ببناء برامج باستخدام مفاهيم<br/>
                                            ال OOP 
                                        </p>
                                

                                    </li>

                                    <li className="line-item">

                                        <h4 className="h4 line-title">المكاتب والبرمجة المرئية</h4>

                                        <p className="line-text">
                                            المكتبات في ال c++ مثلها مثل اي لغة برمجية <br/>
                                            المكتبة عباره عن مجموعة الدوال الجاهزة المخزنة <br/>
                                            اللتي يتم استدعائها واستخدام الدوال المخزنة 
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
                                <p>كورس c++ للزيرو</p>
                                <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS" target="_blank">اشتراك</a>
                                </li>    
                                <li>
                                <p>c++ في 5 ساعات</p>
                                <a href="https://youtu.be/35qTqtpQMxg" target="_blank">اشتراك</a>
                                </li> 
                                <li>
                                <p>c++ oop الدسوقي</p>
                                <a href="https://youtube.com/playlist?list=PL1DUmTEdeA6KLEvIO0NyrkT91BVle8BOU" target="_blank">اشتراك</a>
                                </li> 
                                <li>
                                <p>الواجهات في c++</p>
                                <a href="https://youtube.com/playlist?list=PLhiFu-f80eo-LeTkYXCfQPN9XbTTZgG5m" target="_blank">اشتراك</a>
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

export default Cplus;