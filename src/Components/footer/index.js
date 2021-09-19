import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className="footer">
            Made with react. <img src={require("../../images/icons/react.png").default} className="footer-icon"/>
        </div>
    )
}

export default Footer
