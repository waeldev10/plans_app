import {React} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Home from './content/home';
import AllLangs from './content/allLangs';
import AllDomin from './content/allDomin';
import Cplus from './content/all_lang/c_plus'
import Java from './content/all_lang/java';
import Error from './content/error';
import Csharp from './content/all_lang/c_sharp';
import Python from './content/all_lang/python';
import Php from './content/all_lang/php';
import Javascript from './content/all_lang/javascript';
import Swift from './content/all_lang/swift';
import Web from './domins/web';
import Android from './domins/android';
import Desctop from './domins/desk_top';
import Ui_Ux from './domins/ui-ux';
import Cyper from './domins/cyper_security';
import Ai from './domins/ai';

const App = () =>{

    return(

       <>

            <BrowserRouter basename={'/plan_app'}>
                <Routes >
                    <Route path="/"  element={<Home />}/>
                    <Route path="/lang/"  element={<AllLangs />}/>
                    <Route path="/domin"  element={<AllDomin />}/>
                    <Route path="/lang/c-plus" element={<Cplus />}/>
                    <Route path="/lang/java" element={<Java />} />
                    <Route path="/lang/c-sharp" element={<Csharp />} />
                    <Route path="/lang/python" element={<Python />} />
                    <Route path="/lang/php" element={<Php />} />
                    <Route path="/lang/javascript" element={<Javascript />} />
                    <Route path="/soon" element={<Swift />} />
                    <Route path="/domin/web" element={<Web />} />
                    <Route path="/domin/android" element={<Android />} />
                    <Route path="/domin/desktop" element={<Desctop />} />
                    <Route path="/domin/ui_ux" element={<Ui_Ux />} />
                    <Route path="/domin/syber_security" element={<Cyper />} />
                    <Route path="/soon" element={<Ai />} />
                    <Route path="*"  element={<Error />}/>
                </Routes>
            </BrowserRouter>
     
       </>
        
    )

}

export default App;