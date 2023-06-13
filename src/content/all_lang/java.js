import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Java = () =>{

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
                    لغة java
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
                                            لغة عريقة تأتي الثانية بعد c++ بالسرعة وتدعم ايضا البرمجة الكائنية التوجة<br/>
                                            يمكن اعتمادها كمنهج اساسي للجامعات لتعليم اساسيات البرمجة<br/>
                                            وهي لغة سريعه وامنة كانت اساسا مصممة للشبكات ولكنها الان تدخل <br/>
                                            في كثير من المجالات ولعل ابرزها  تطوير تطبيقات الاندرويد والمكتب
                                        </p>
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                    <p className="line-text">
                                    يجب التركيز على المتغيرات في لغة الجافا والتعامل معها واستخدام<br/>
                                    الشروط والحلقات التكراريه والحلقات المتداخلة ورسم الاشكال باستخدام <br/>
                                    الحلقات والشروط
                                    </p>

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المصفوفات والدوال</h4>

                                    <p className="line-text">
                                    المصفوفات من اهم المواضيع في البرمجة ككل ويختلف السينتاكس <br/>
                                    من لغة اخرى فلغة الجافا تتكون المصفوفة الخاصة بها من نوع واحد <br/>
                                    من البيانات على عكس اللغات الاخرى وتتكامل عملها مع الدوال
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
                                        البرمجة كائنية التوجه غنية عن التعريف في لغة الجافا حيث ان الجافا كلها oop  <br/>
                                        ومن المواضيع اللتي يجب 
                                        التركيز عليها :<br/>
                                        الكلاس والاوبجكت - الكونستركتر - التغليف والتجريد - تعدد الاشكال والوراثة
                                </p>
                            

                                </li>

                                <li className="line-item">

                                <h4 className="h4 line-title">المكاتب والبرمجة المرئية</h4>

                                <p className="line-text">
                                    لغة جافا تحتوي على مكتبات شهيرة للتعامل مع الواجهات ومن ابرز ها :<br/>
                                    - swing <br/>
                                    - AWT <br/>
                                    - JavaFX
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
                                <p>كورس اساسيات جافا محمد عيسى</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN817O88GXt4xAPmM2bD7pLN" target="_blank"> اشتراك </a>
                                </li>    
                                <li>
                                <p>كورس جافا راكوان للبرمجه</p>
                                <a href="https://youtu.be/N1WUJe8GgbM" target="_blank">اشتراك</a>
                                </li> 
                                <li>
                                <p>جافا oop محمد الدسوقي</p>
                                <a href="https://youtube.com/playlist?list=PL1DUmTEdeA6Icttz-O9C3RPRF8R8Px5vk" target="_blank">اشتراك</a>
                                </li> 
                                <li>
                                <p>الواجهات في جافا محمد عيسى</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN9myVt8qSDQqhBjGwwLuEzG" target="_blank">اشتراك</a>
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

export default Java;