import React from 'react'

function PopupCart() {
    return (
        <div id="popup_container">
            <div className="popup_container_inner">
                <button className="popup_crose">X</button>
                <div>
                    <input id="popup_input" type="number" min="1" max="5" placeholder="Enter rating" required />
                    <button style={{ width: "100px" }} className="popup_rating_btn">Add Rating</button>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <button className="popup_rating_btn">Move to Available Services</button>
                </div>
            </div>
        </div>
    )
}

export default PopupCart
