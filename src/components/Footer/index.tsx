import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from '../Icons'
import Logo from '../../assets/images/logo.svg'

const privateList = [
    { label: 'FAQs', router: '' },
    { label: 'Contact', router: '' },
    { label: 'Privacy', router: '' },
]
const socialList = [
    { icon: 'Facebook', router: '' },
    { icon: 'Instagram', router: '' },
    { icon: 'Twitter', router: '' },
]

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <img src={Logo} alt="logo" width="150px" />
                <div className="private-container">
                    {privateList.map((item: any, ind: number) => {
                        return (
                            <Link key={ind} to={item.router}>
                                {item.label}
                            </Link>
                        )
                    })}
                </div>
                <div className="social-container">
                    {socialList.map((item: any, ind: number) => {
                        return (
                            <Link key={ind} to={item.router}>
                                <IconMenu
                                    icon={item.icon}
                                    size={25}
                                    className="text-white"
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
            <p className="footer-title">© Prompts 2023</p>
        </footer>
    )
}

export default Footer
