import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import style from "./Dashboard.module.css"
import Summary from './Summary'
import axios from 'axios'
import Card from './Card'

type Current = {
    mIcon: string,
    dIcon: string,
    rating: number,
    header: string
}

function Dashboard() {
    const [currentData, setCurrentData] = useState<Current[]>()
    const [availableData, setAvailableData] = useState<Current[]>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const id = localStorage.getItem("profileId")
        const { data }: any = await axios.get(`http://localhost:4000/registerAccount?id=${id}`);
        setCurrentData(data[0].currentServices)
        setAvailableData(data[0].availableServices)
    }

    return (
        <>
            <Navbar />
            <div className={style.main_container}>
                {/* dashboard heading */}
                <h2 id={style.dashboard} className={style.dashboard}>Dashboard</h2>
                {/* summary and details button */}
                <div className={style.dashboard_container}>
                    <div className={style.dashboard_div}>
                        <button id={style.summary_btn} className={style.dashboard_btn}>Summary</button>
                        <button className={style.dashboard_btn}>Details</button>
                    </div>
                </div>
                {/* summary of account like account no and account balance */}
                <Summary />
                {/* micro bank summary heading  */}
                <h2 id={style.services_heading}>Services <br id={style.br} />
                    <span id={style.services_heading_inner}>Micro bank services
                        for you</span>
                </h2>

                {/* current services */}
                <div id={style.current_services} className={style.dashboard_container}>
                    <div id={style.current_services_outer} className={style.dashboard_current_service_div}>
                        <h2 id={style.current_head} className={style.dashboard_summary}>Current Services</h2>
                        <div id={style.current_services_inner} className={style.inner_item}>
                            {currentData ? currentData.map(({ mIcon, dIcon, header, rating }) => (<Card key={header} mIcon={mIcon} dIcon={dIcon} rating={rating} header={header} />)) : null}
                        </div>
                    </div>
                </div>

                {/* available services */}
                <div id={style.available_services} className={style.dashboard_container}>
                    <div id={style.available_services_outer} className={style.dashboard_current_service_div}>
                        <h2 id={style.available_head} className={style.dashboard_summary}>Available Services</h2>
                        <div id={style.available_services_inner} className={style.inner_item}>
                            {availableData ? availableData.map(({ mIcon, dIcon, header, rating }) => (<Card key={header} mIcon={mIcon} dIcon={dIcon} rating={rating} header={header} />)) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
