import React from 'react';
import './Layout.css';

const Layout = () => {
    return (
        <div className="page">
            <div className="header"></div>
            <div className="body">
                <div className="menu1">
                    <div className="item">Link 1</div>
                    <div className="item">Link 2</div>
                    <div className="item">Link 3</div>
                </div>
                <div className="content"></div>
            </div>
            <div className="footer"></div>
        </div>
    )
};

export default Layout;