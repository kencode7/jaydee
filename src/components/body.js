import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import bodyStyles from './body.module.scss'

const Body = (checkPropTypes) => {
    return (
        <div className={bodyStyles.container}>
            <div className={bodyStyles.content}>
                <Header/>
                {checkPropTypes.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Body