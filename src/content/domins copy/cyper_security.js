import { Link } from "react-router-dom";
import Footer from "../content/footer/footer";

const Cyper = () =>{

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
                    الامن السيبراني
                    </h2>

                    <article className="row">

                        <div className="col-lg-6">
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-sharp fa-solid fa-diagram-project"></i>
                                    </div>
                        
                                    <h3 className="h3">المرحلة الاولى</h3>
                                </div>
                        
                                <ol className="line-list">
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">نبذه عن المجال</h4>
                        
                                        <p className="line-text">
                                            باختصار الامن السيبراني هو عملية حمايه الانظمه والشبكات والبرامج<br/>
                                            ضد الهجمات الرقميه ومن اخطر انواع التهديدات : <br/>
                                            تصيد العمومات وبرامج الفديه والفيروسات والتحايل باستخدام الهندسه<br/>
                                            الاجتماعية وغيرها من الخدمات الخطيره والضاره الاخرى

                                        </p>    
                        
                                    </li>

                                    <li className="line-item">

                                    <h4 className="h4 line-title">الشبكات</h4>

                                    <p className="line-text">
                                            يجب عليك تعلم اساسيات الشبكات وكيف تعمل كيف يتم الربط<br/>
                                            بين اجزاء الشبكة وايضا فهم ال ip و ال osi model والبورتات<br/>
                                            والخ.. من الامور
                                    </p>
                            
                                    </li>

                                    <li className="line-item">

                                        <h4 className="h4 line-title">انظمة التشغيل</h4>

                                        <p className="line-text">
                                            معرفة بانظمة التشغيل كالويندوز واللينكس <br/>
                                            وخاصة الكالي لينكس وفهم اوامره والتعامل معه <br/>
                                            لانة يحتوي على ادوات اختبارات الاختراق
                                    </p>
                            
                                    </li>

                                </ol>
                    
                            </section>
                            
                            <section className="line">

                                <div className="title">

                                    <div className="icon-box">
                                        <i className="fa-sharp fa-solid fa-shield-halved"></i>
                                    </div>
                        
                                    <h3 className="h3">المرحلة الثانية</h3>
                                </div>
                        
                                <ol className="line-list">

                                    <li className="line-item">

                                    <h4 className="h4 line-title">لغة برمجة</h4>


                                    <p className="line-text">
                                        تعلم لغة برمجه على الاقل لتكون خبرتك افضل في المجال <br/>
                                        ولغات البرمجه كثيره كل لغة تختص باختبار اختراق المجال <br/>
                                        التي تم تطويرة بها لكن يفضل تعلم لغة بايثون في البداية <br/>
                                        اعرف اكثر عن اللغة من هنا :<Link to="/lang/python"><button>PYTHON</button></Link> 
                                    </p>
                                

                                    </li>
                                    
                                    <li className="line-item">

                                        <h4 className="h4 line-title">اختبار الاختراق</h4>

                        
                                        <p className="line-text">
                                        التفكير مثل الهاكر عند الاختراق واختبار اختراق <br/>
                                        الانظمة والشبكات والمواقع الالكترونية والهندسة العكسية <br/>
                                        والخ..
                                    </p>
                                
                        
                                    </li>

                                </ol>
                    
                            </section>
                        </div>

                        <div className="col-lg-6">
                            <div className="chanl">
                            <h3>كورسات الامن السيبراني</h3>
                            <ul>
                                <li>
                                <p>انظمة التشغيل</p>
                                <a href="https://youtube.com/playlist?list=PLxIvc-MGOs6ib0oK1z9C46DeKd9rRcSMY" target="_blank">اشتراك</a>
                                </li>
                                <li>
                                    <p>اساسيات الشبكات</p>
                                    <a href="https://youtube.com/playlist?list=PLBEmrZ4G2sReaSpl8WmqDHamesSsWNGku" target="_blank">اشتراك</a>
                                </li>     
                                <li>
                                <p>كورس security + </p>
                                <a href="https://youtube.com/playlist?list=PLky4bd7_03m8o1NB0j96OsxZs0KcKlgMO" target="_blank">اشتراك</a>
                                </li> 
                        
                                <li>
                                <p>اساسيات كالي لينكس</p>
                                <a href="https://youtube.com/playlist?list=PLky4bd7_03m8o1NB0j96OsxZs0KcKlgMO" target="_blank">اشتراك</a>
                                </li>
                                
                                <li>
                                    <p>لغة بايثون في الاختراق</p>
                                    <a href="https://youtube.com/playlist?list=PLky4bd7_03m8o1NB0j96OsxZs0KcKlgMO" target="_blank">اشتراك</a>
                                </li>

                                <li>
                                    <p>اختبار الاختراق</p>
                                    <a href="https://youtu.be/uThOnvh1zJw" target="_blank">اشتراك</a>
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

export default Cyper;