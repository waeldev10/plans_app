import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Javascript = () =>{

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

            <section class="one-lang">

                <div class="container ">
                    <h2 class="h2">
                    لغة javascript
                    </h2>

                    <article class="row">

                        <div class="col-lg-6">
                            <section class="line">

                                <div class="title">

                                    <div class="icon-box">
                                        <i class="fa-sharp fa-solid fa-house"></i>
                                    </div>
                        
                                    <h3 class="h3">الاساسيات</h3>
                                </div>
                        
                                <ol class="line-list">
                                    
                                    <li class="line-item">

                                        <h4 class="h4 line-title">نبذه عن اللغة</h4>
                        
                                        <p class="line-text">
                                        اولا لغه javascript هي ليست لغه java ولاتربطها بها باي صله <br/>
                                        وهي لغة تعمل من جانب العميل وتستخدم لانشاء صفحات ويب <br/>
                                        تفاعلية لكن مؤخرا تم تطويرها وانشاء اصدارات تتعامل مع السيرفر <br/>
                                        ودخلت في مجالات متعدده 
                                        </p>
                        
                                    </li>

                                    <li class="line-item">

                                    <h4 class="h4 line-title">المتغيرات وانواع البيانات والشروط والحلقات</h4>


                                    <p class="line-text">
                                            تعريف المتغيرات في javascript ديناميكي لايشترط تعريف نوع <br/>
                                            البيانات لكننا نبداء بكلمة محجوزه var او let <br/>
                                            اما الشروط والحلقات فلا تختلف عن باقي اللغات 
                                    </p>

                                    </li>

                                    <li class="line-item">

                                    <h4 class="h4 line-title">المصفوفات والدوال</h4>

                                    <p class="line-text">
                                        يوجد انواع من الدوال في javascript ومن اهمها <br/>
                                        الدوال الاسمية : دوال عاديه لها اسم معين<br/>
                                        دوال مجهولة : تعمل عند تشغيل حدث لعنصر ما<br/>
                                        دوال سهمية : تستبدل طلمة function ب => والخ...
                                    </p>

                                    </li>


                                </ol>
                    
                            </section>
                            
                            <section class="line">

                                <div class="title">

                                    <div class="icon-box">
                                        <i class="fa-sharp fa-solid fa-align-center"></i>
                                    </div>
                        
                                    <h3 class="h3">متوسط الى متقدم</h3>
                                </div>
                        
                                <ol class="line-list">
                                    
                                    
                                    <li class="line-item">

                                        <h4 class="h4 line-title">Dom & Bom</h4>

                        
                                        <p class="line-text">
                                            اولا الdom و الbom هما مصلحان يخصان جافاسكريبت في تعاملها<br/>
                                            مع صفحه الويب فالbom : تمكن ال js التعامل مع المتصفح <br/>
                                            كأغلاق الصفحة مثلا اما ال dom : يمكن ال js الوصل الى جميع <br/>
                                            عناصر الصفحه والتحكم بها
                                        </p>
                                
                        
                                    </li>

                                    <li class="line-item">

                                    <h4 class="h4 line-title">برمجة كائنية التوجة (OOP)</h4>


                                    <p class="line-text">
                                            يوجد بعض الاختلافات البسيطة في oop الخاص ب javascript
                                    </p>
                                

                                    </li>

                                    <li class="line-item">

                                    <h4 class="h4 line-title">المكاتب  في javascript</h4>

                                    <p class="line-text">
                                            لغة الجافا سكريبت لديها العديد من اطر العمر والمكاتب <br/>
                                            مما جعلها مؤخرا تدخل في العديد من المجالات وابرز هذه المكاتب:<br/>
                                            breeze.js - jquery - React - veue.js وغيرها من المكاتب واطر العمر 
                                    </p>

                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div class="col-lg-6">
                            <div class="chanl">
                                <h3>ابرز الكورسات</h3>
                                <ul>
                                    <li>
                                    <p>كورس كامل js الزيرو</p>
                                    <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv" target="_blank">اشتراك</a>
                                    </li>
                                    <li>
                                        <p>كورس js عبدالرحمن جمال</p>
                                        <a href="https://youtube.com/playlist?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE" target="_blank">اشتراك</a>
                                    </li>     
                                    <li>
                                    <p>oop js اكاديمية ترميز</p>
                                    <a href="https://youtu.be/TULpbcbx6qo" target="_blank">اشتراك</a>
                                    </li> 
                            
                                    <li>
                                    <p>كورس jquery الزيرو</p>
                                    <a href="https://youtube.com/playlist?list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB" target="_blank">اشتراك</a>
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

export default Javascript;