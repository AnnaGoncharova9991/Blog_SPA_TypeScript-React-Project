import React from 'react';

const Footer = () => {

    return (
        <>
            <footer>
                <div className='container-footer'>
                    <div className='wrapper-footer'>
                        <p className='footer-text'> &copy;2022 Blogolog</p>
                        <div className='switcher-wrapper'>
                            <input className='switcher' id='switcher' type = 'checkbox' ></input>
                            <label className='switcher-tex' htmlFor='switcher'>Dark theme</label>                                        
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer; 