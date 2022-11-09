import React from 'react';

const Footer = () => {

    return (
        <>
        <div className='container'>
            <div className='wrapper-footer'>
                <p className='footer-text'>©2022 Blogolog</p>
                <div className='switcher-wrapper'>
                    <input className='switcher' id='switcher' type = 'checkbox' ></input>
                    <label className='switcher-tex' htmlFor='switcher'>Dark theme</label>                                        
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer; 