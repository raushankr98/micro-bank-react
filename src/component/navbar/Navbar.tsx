import React, { useContext } from 'react'
import style from "./Navbar.module.css"
import { AuthContext } from '../auth/AuthContextProvider'

function Navbar() {

    const { handleLogout } = useContext(AuthContext)

    return (
        <nav className={style.container}>
            <div className={style.menu}>
                <div className={style.line_1}></div>
                <div className={style.line_2}></div>
                <div className={style.line_3}></div>
            </div>
            <div className={style.nav}>
                <div>
                    <h2 className={style.logo}><span className={style.logo_name}>Micro</span> Bank</h2>
                </div>
                <div onClick={handleLogout} className={style.nav_control}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.99989 20.6441C8.87489 20.6441 7.98389 19.7264 7.98389 18.616H11.9679C11.9679 19.815 11.0959 20.6441 9.99889 20.6441H9.99989ZM15.9999 9.34666V14.4649L18.0159 16.5415V17.5551H1.98489V16.5415L4.00089 14.4649V9.34666C4.00089 6.15972 5.64189 3.55268 8.50089 2.82857V2.10445C8.50089 1.23509 9.15689 0.559387 10.0009 0.559387C10.8449 0.559387 11.5009 1.23509 11.5009 2.10445V2.82857C14.3599 3.55268 16.0009 6.20813 16.0009 9.34666H15.9999ZM17.9689 8.81516C17.8279 6.06289 16.4689 3.69689 14.4529 2.20024L15.8589 0.752005C18.2499 2.63492 19.8429 5.53242 19.9839 8.81516H17.9679H17.9689ZM5.59389 2.20024C3.53089 3.69689 2.17189 6.06289 2.03089 8.81516H0.0148926C0.155893 5.53139 1.74889 2.63492 4.13989 0.752005L5.59389 2.20024Z"
                            fill="#1A1A1A" />
                    </svg>
                    <div className={style.logo_pic}>
                        <h3 style={{ fontSize: '14px', color: "#ffffff" }}>RK</h3>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10H7Z" fill="black" fill-opacity="0.26" />
                    </svg>
                </div>
                <span onClick={handleLogout} className={style.logout_btn}>Logout</span>
            </div>
        </nav>
    )
}

export default Navbar
