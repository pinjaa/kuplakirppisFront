import React from 'react'
export default function Nav(){
    return(
        
        <nav className ="col-md-12 d-none d-md-block sidebar navbar bg-dark">
        <div className='sidebar-sticky'></div>
        <ul className ="nav navbar-nav">
        <li className ="nav-item">
        <a className ="nav-link" href="#"> Home </a>
        </li>
        <li className ="nav-item">
        <a className ="nav-link" href="#"> Services </a>
        </li>
        <li className ="nav-item">
        <a className ="nav-link" href="#"> Contact </a>
        </li>
        <li className ="nav-item">
        <a className ="nav-link" href="#"> Blogs </a>
        </li>
        </ul>
        </nav>
        
        
        
    )
}