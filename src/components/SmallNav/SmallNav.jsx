import React from 'react'

export default function SmallNav({ children, edit = {}, RoseID, RoseName = "nav" }) {
    return (
        <>
            <nav style={edit} id={RoseID} className={RoseName}>
                <input id="menu" type="checkbox" />
                <label htmlFor="menu">Menu</label>
                <ul className="menu">
                    <li>
                        <a href="#0">
                            <span>About</span>
                            <div className='fas fa-address-card'>A</div>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <span>Projects</span>
                            <div className='fas fa-tasks'>P</div>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <span>Clients</span>
                            <div className='fas fa-users'>C</div>
                        </a>
                    </li>
                    <li>
                        <a href="#0">
                            <span>Contact</span>
                            <div className='fas fa-envelope-open-text'>C</div>
                        </a>
                    </li>
                </ul>
            </nav>
            <p className="notification">Click on the Menu</p>
        </>

    )
}
