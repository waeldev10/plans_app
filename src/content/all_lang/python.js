import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Python = () => {

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
                    لغة python
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
                                        من اسهل اللغات تعلما واستخداما حيث نقوم ببناء تطبيقات باستخدامها بسهولة <br/>
                                        بدون جهد وتستخدم على اي نظام تشغيل حيث تستخدم لاغراض معالجة<br/>
                                        النصوص والارقام والصور والبيانات والخ.. وتدخل في كثير من المجالات ولعل اهمها <br/>
                                        الذكاء الاصطناعي والامن السيبراني
                                    </p>
                    
                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                <p className="line-text">
                                        لغة بايثون تتميز بانه لايوجد فيها فاصلة منقوظة نهاية كل سطر <br/>
                                        وايضا لايوجد اقواس في الشروط والحلقات فقد تكون غريبه نوعا <br/>
                                        ما لكن اذا ادمنت هذه اللغه ستجد الامر رائع جدا
                                </p>

                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">المصفوفات والدوال</h4>

                                <p className="line-text">
                                    يوجد انواع كثيره من المصفوفات والدوال الجاهزه في بايثون والتي <br/>
                                    عملك بسهوله وسرعه اليك بعض انواع المصفوفات في بايثون :<br/>
                                    List - Tuple - Set -Dictionary
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
                                    يمكن استخدام ال oop في لغة بايثون مع اختلاف السينتاكس قليلا عن <br/>
                                    اللغات الاخرى 
                                </p>
                            

                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">المكاتب والبرمجة المرئية</h4>

                                <p className="line-text">
                                        المكتبات في بايثون كثيره جدا مقارنة بلغات اخرى مما جعلها تدخل في معظم <br/>
                                        المجالات البرمجية اليوم كالتطبيقات والويب والذكاء الاصطناعي وغيرها ومن هذه المكاتب:<br/>
                                        Scipy - NumPy - Matplotlib - pyTorch
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
                                <p> اساسيات بايثون كودزلا</p>
                                <a href="https://youtube.com/playlist?list=PLuXY3ddo_8nzrO74UeZQVZOb5-wIS6krJ" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>بايثون في 6 ساعات راكوان</p>
                                    <a href="https://youtu.be/smKHKgedkP4" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>بايثون oop كودزلا</p>
                                <a href="https://youtu.be/A9kSngn7254" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>بايثون الواجهات مكتبة تكنتر راكوان</p>
                                <a href="https://youtube.com/playlist?list=PLSiLeKadTQ7nLJxpQo1-944miQKlheu-v" target="_blank">اشتراك</a>
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

export default Python;