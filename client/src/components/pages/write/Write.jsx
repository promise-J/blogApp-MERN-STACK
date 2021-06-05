import './write.css'
import Test from '../../../asset/me.jpg'

import React from 'react'

export default function Write() {
    return (
        <>
        <div className='write'>
            <img src={Test} alt="" className="write-form-img" />
            <form className='write-form'>
                <div className="write-form-div">
                    <label htmlFor="dp"><i className="fa fa-plus write-form-icon"></i></label>
                    <input type="file" id='dp' hidden='true' />
                    <input type="text" className="write-form-input" placeholder='Your Title' />
                </div>
                <textarea className='write-form-tx' placeholder='Start Your Post Here' ></textarea>
                <input type="submit" value="Publish" className='write-form-btn' />
            </form>
        </div>
        </>
    )
}
