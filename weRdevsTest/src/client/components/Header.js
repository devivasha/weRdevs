import React from 'react';
import {Link} from 'react-router-dom';

const nav = {
    textTransform:"uppercase",
    height:"130px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign:"center",
}
const li = {
    color:"#3D3D3D",
    fontSize:"28px",
    fontFamily:"Rubik",
    textTransform:"uppercase",
    display:"block",
    paddingTop: "40px",
    paddingRight:"110px",
    marginLeft:"-40px"
}

const Header =()=> {
    return(
                <div style={nav}>
                    <div>
                        <Link to='/'><img style ={{marginTop:"24px",marginLeft:"110px" }} src="/assets/logoSmall.jpeg" alt="logo"/></Link>
                    </div>
                    <div style ={{textAlign:"center"}}>
                        <ul style ={{display:"flex"}}>
                            <li style ={li}><Link style={{color:"#3D3D3D", textDecoration:"none"}} to='/'>Home</Link></li>
                            <li style ={li}><Link style={{color:"#3D3D3D",textDecoration:"none" }}to='/about'>About Us</Link></li>
                        </ul>
                    </div>

                </div>
    );
};

export default (Header);