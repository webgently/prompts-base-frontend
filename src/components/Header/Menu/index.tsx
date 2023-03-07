import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import IconMenu from '../../Icons'
import Logo from '../../../assets/images/logo.svg'
import './menu.scss'

const Menu = (props: any) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [navItems, setNavItems] = useState([
        { label: 'Marketplace', route: '/marketplace', selected: '' },
        { label: 'Generate', route: '/generate', selected: '' },
        { label: 'Hire', route: '/hire', selected: '' },
        { label: 'Sell', route: '/sell', selected: '' },
        { label: 'Login', route: '/login', selected: '' },
    ])

    const getWidth = () => {
        return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        )
    }

    const movePages = (link: string, index: number) => {
        let navList = [...navItems]
        navList.map((item, ind) => {
            return ind === index
                ? (item.selected = 'item-active')
                : (item.selected = '')
        })
        navigate(link)
        props.setOpen(false)
        setNavItems(navList)
    }

    useEffect(() => {
        const index = navItems.map((e) => e.route).indexOf(location.pathname)
        if (index >= 0) {
            navItems[index].selected = 'item-active'
        }
    }, [navItems, location.pathname])

    useEffect(() => {
        const setResponsiveness = () => {
            getWidth() > 1024 && props.setOpen(false)
        }
        setResponsiveness()
        window.addEventListener('resize', setResponsiveness)
    }, [props])

    return (
        <>
            {props.open && (
                <>
                    <div
                        className="fixed inset-0 bg-primary bg-opacity-80 transition-opacity z-[999]"
                        onClick={() => props.setOpen(false)}
                    ></div>
                    <menu>
                        <div className="menu-header">
                            <div className="flex space-x-[15px]">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="user"
                                    width="80px"
                                />
                                <div className="text-white text-[20px]">
                                    <p className="font-[400]">Hello,</p>
                                    <p className="font-[700]">Welcome!</p>
                                </div>
                            </div>
                            <span onClick={() => props.setOpen(false)}>
                                &times;
                            </span>
                        </div>
                        <div className="nav-group">
                            <div className="nav-list">
                                {navItems.map((item: any, ind: number) => {
                                    return (
                                        <div
                                            key={ind}
                                            className={`nav-item ${item.selected}`}
                                            onClick={() =>
                                                movePages(item.route, ind)
                                            }
                                        >
                                            <Link to={item.route}>
                                                {item.label}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </menu>
                </>
            )}
        </>
    )
}

export default Menu
