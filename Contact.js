import React from 'react';
import {Link} from 'react-router-dom';


const Contact = (props) => {
    
    return(
        <div>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
            <Link to='/Kahar' className='ui header'>Kahar</ Link>
        <p><b>This is ContactUs page</b></p>
        </div>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
            <Link to='/Fahad' className='ui header'>Fahad</ Link >
        <p><b>This is ContactUs page</b></p>
        </div>
            

        </div>
    )
}
export default Contact;