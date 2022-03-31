import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../assets/scss/layout/Header.scss';

export default function Header() {
    return (
        <header>
            <h1><NavLink to={'/'}>Header</NavLink></h1>
            {/*NavLink , Link 차이 -> active 유무 */}
        </header>
    );
}