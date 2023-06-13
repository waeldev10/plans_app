import { Link } from "react-router-dom";

const Soon = () =>{

    return(

        <div className="e404">

            <article className="text-center">
                <img className="img" src="assets/images/soon.gif" alt="soon" />
                <h1>سيتم نشره قريبا</h1>
                <Link to="/">
                    <button>الانتقال الى الرئيسية</button>
                </Link>
                
            </article>

        </div>
    )

}

export default Soon;