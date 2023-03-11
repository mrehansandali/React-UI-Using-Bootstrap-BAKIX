import React from 'react'
import logo from "../../img/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-4">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mrcollapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    HOME
                                </a>
                                <ul className="dropdown-menu mrdropdown">
                                    <li><a className="dropdown-item" href="#">Home Style 1</a></li>
                                    <li><a className="dropdown-item" href="#">Home Style 2</a></li>
                                    <li><a className="dropdown-item" href="#">Home Style 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PAGES
                                </a>
                                <ul className="dropdown-menu mrdropdown">
                                    <li><a className="dropdown-item" href="#">Volunteer</a></li>
                                    <li><a className="dropdown-item" href="#">Volunteer Details</a></li>
                                    <li><a className="dropdown-item" href="#">Progress Explore</a></li>
                                    <li><a className="dropdown-item" href="#">Progress Done</a></li>
                                    <li><a className="dropdown-item" href="#">Fund Details</a></li>
                                    <li><a className="dropdown-item" href="#"> Event</a></li>
                                    <li><a className="dropdown-item" href="#">Event Details</a></li>
                                    <li><a className="dropdown-item" href="#">Portfolio</a></li>
                                    <li><a className="dropdown-item" href="#">Portfolio Details</a></li>
                                    <li><a className="dropdown-item" href="#">Service</a></li>
                                    <li><a className="dropdown-item" href="#">Support</a></li>
                                    <li><a className="dropdown-item" href="#">Contact</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">EXPLORE</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SHOP
                                </a>
                                <ul className="dropdown-menu mrdropdown">
                                    <li><a className="dropdown-item" href="#">Shop Default</a></li>
                                    <li><a className="dropdown-item" href="#">Shop With Category</a></li>
                                    <li><a className="dropdown-item" href="#">Product Details</a></li>
                                    <li><a className="dropdown-item" href="#">Shopping Cart</a></li>
                                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                                    <li><a className="dropdown-item" href="#">Wishlist</a></li>
                                    <li><a className="dropdown-item" href="#">Login</a></li>
                                    <li><a className="dropdown-item" href="#">Register</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BLOG
                                </a>
                                <ul className="dropdown-menu mrdropdown">
                                    <li><a className="dropdown-item" href="#">Blog Right SideBar</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Left SideBar</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Grid SideBar</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Grid Left SideBar</a></li>
                                    <li><a className="dropdown-item" href="#">Blog 2 Column</a></li>
                                    <li><a className="dropdown-item" href="#">Blog 2 Column Masonry</a></li>
                                    <li><a className="dropdown-item" href="#">Blog 3 Column</a></li>
                                    <li><a className="dropdown-item" href="#">Blog 3 Column Masonry</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Details Image</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Details Audio</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Details Video</a></li>
                                    <li><a className="dropdown-item" href="#">Blog Details Gallery</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">CONTACTS</a>
                            </li>
                        </ul>
                                <div className="mrbtn">
                                    <button className='btn btn-success mybtnsc'>START CAMPAIGN</button>
                                    <button className="btn btn-primary mybtn">&</button>
                                </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar