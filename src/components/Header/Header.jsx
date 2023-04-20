
import React from 'react'
import './index.css';
// import { Logo } from '../Logo/Logo';

import { ReactComponent as LogoSvg } from '../Logo/logo.svg';
import styles from './style.module.css'
import { Search } from '../Search/Search';
// import { LogoEx } from '../Logo/logoExample';

export const Header = (props) => {

    const setSearchQuery = (path) => {
        // console.log({path});
        props.setSearch(path);
    }

    return <div className="header">
        <div className='container'>
            <div className='header__wrapper'>
                <LogoSvg className='logo' />
                <Search setSearch={setSearchQuery} />
                <div className='header__icons'>
                </div>
            </div>
        </div>
    </div>
}
