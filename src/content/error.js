import {Link} from 'react-router-dom';

const Error = () =>{

    return (
        <div className="e404 er">
            <article className="text-center">
               
                <video className="img" src="assets/images/error404.mp4">

                </video>
                <h1>عذرا الصفحة غير متوفرة</h1>
                <Link to="/">
                    <button>الانتقال الى الرئيسية</button>
                </Link>
                
            </article>

        </div>

    )

}

export default Error;