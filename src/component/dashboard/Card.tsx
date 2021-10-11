import React from 'react'
import style from "./Card.module.css"
type item = {
    mIcon: string,
    dIcon: string,
    rating: number,
    header: string
}

function Card(props: item) {

    return (
        <div className={style.dashboard_current_item} draggable="true">
            {/* <!-- desktop icon --> */}
            <img className={style.desktop_icon} style={{ width: '50px', height: "50px" }} src={props.dIcon} alt="Logo" />
            {/* <!-- mobile icon --> */}
            <img className={style.mobile_icon} src={props.mIcon} alt="" />
            {/* <!-- heading --> */}
            <h3 className={style.title}>{props.header}</h3>
        </div>
    )
}

export default Card
