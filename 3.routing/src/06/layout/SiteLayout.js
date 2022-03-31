import React, { Fragment } from 'react'
import Header from './Header';
import Navigaton from './Navigation';
import Footer from './Footer';
import styles from '../assets/scss/layout/Content.scss';


const SiteLayout = (childeren) => {
    return (
        <Fragment>
            <Header />
            <div className={styles.Content}>
                {childeren}
            </div>
            <Navigaton />
            <Footer />
        </Fragment>
    )
}

export default SiteLayout