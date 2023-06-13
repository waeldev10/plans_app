import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Php = () =>{

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
                    لغة php
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
                                        تعد php القلب النابض للمواقع الالكترونية حيث انها تهتم <br/>
                                        بتطوير تطبيقات الويب من جانب السيرفر وهي لغه مفتوحة المصدر  <br/>
                                        وتستخدم في مجالات متعدده منها : <br/>
                                        تطوير تطبيقات الويب وسطح المكتب
                                        </p>
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                    <p className="line-text">
                                            مثلها مثل اي لغة يجب تعلم المتغيرات الخاص بها واللتي تبدأ ب <br/>
                                            ال $ وايضا السينتاكس الخاص بها لايخحتلف على كثير من اللغات 
                                    </p>

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المصفوفات والدوال</h4>

                                    <p className="line-text">
                                        المصفوفات في ال php تحتوي على 3 انواع رئيسية وهي : <br/>
                                        index array مصفوفه عاديه يتم تحديد مفاتيحها بالارقام<br/>
                                        associative arrays تستخدم مفتاح وقيمه لكل عنصر <br/>
                                        المصفوفه المتعدده تتكون من عدة مصفوفات متداخلة
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
                                            لايختلف السينتاكس في oop php كثيرا عن باقي اللغات الا <br/>
                                            في بعض الكلمات المحجوزه واشياء بسيطة 
                                    </p>
                                

                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">المكاتب  في php</h4>

                                    <p className="line-text">
                                            هذا الجزء مهم جدا حيث انه يركز على المكاتب اللتي تتعامل <br/>
                                            مع قواعد البيانات  كالاتصال بقواعد البيانات والاستعلامات والخ..<br/>
                                            واهم هذه المكاتب هي :<br/>
                                            Mysqli - PDO <br/>
                                            وايضا التركيز على هذه الدوال التابعه لل Http كا GET , POST والخ..
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
                                <p> اساسيات php الزيرو</p>
                                <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>كورس php راكوان</p>
                                    <a href="https://youtu.be/Lf406ZnxvQg" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>oop php محمد عيسى</p>
                                <a href="https://youtube.com/playlist?list=PLMYF6NkLrdN8yLmUZT-mLKv5VdYRADURU" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>php with mysql انس</p>
                                <a href="https://youtube.com/playlist?list=PLrCBCI_Do84haqbr9z_m1YVdQzk8NRhCt" target="_blank">اشتراك</a>
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

export default Php;