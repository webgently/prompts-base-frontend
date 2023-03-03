import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from '../Icons'
import Logo from '../../assets/images/logo.svg'
import TLogo from '../../assets/images/title_logo.svg'

const navList = [
    { label: 'Marketplace', router: '/marketplace' },
    { label: 'Generate', router: '/generate' },
    { label: 'Hire', router: '/hire' },
    { label: 'Sell', router: '/sell' },
    { label: 'Login', router: '/login' },
]

const socialList = [
    { icon: 'Facebook', router: '' },
    { icon: 'Instagram', router: '' },
    { icon: 'Twitter', router: '' },
]

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <div>
                    <img src={Logo} />
                    <img src={TLogo} className="hidden sm:block" />
                </div>
                <span className="borderline"></span>
            </div>
            <div className="navbar-container">
                <div className="search-box">
                    <input type="text" placeholder="Search Prompts..." />
                    <IconMenu
                        icon="Search"
                        size={14}
                        className="text-white cursor-pointer"
                    />
                </div>
                <div className="nav-list">
                    {navList.map((item: any, ind: number) => {
                        return (
                            <Link key={item.label} to={item.router}>
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
                <div className="md:hidden cursor-pointer">
                    <IconMenu
                        icon="Hamburger"
                        size={20}
                        className="text-white"
                    />
                </div>
            </div>
            <div className="social-container">
                <span className="borderline"></span>
                <div>
                    {socialList.map((item: any, ind: number) => {
                        return (
                            <Link key={ind} to={item.router}>
                                <IconMenu
                                    icon={item.icon}
                                    size={23}
                                    className="text-white"
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
