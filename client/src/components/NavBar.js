import { Navbar,Nav,Container,Button } from "react-bootstrap";
import {NavLink,useNavigate} from 'react-router-dom'
import {useState} from 'react'



export const NavBar = ({signout,...props})=>{
    const navigate = useNavigate()
    const [token,setToken] =useState(localStorage.token)
    const handleSignOut = ()=>{
        signout()
        setToken(prev=>'')
        localStorage.token = ''
        navigate('/')
    }
    return(
        <Navbar  className="border-bottom " fixed={true} >

            <Navbar.Brand href="/">
                    <div className="" style={{width:'150px'}}>
                        <img  className="h-100 w-100"src={require('../assets/header_logo-WILCP.png')}/> 
                    </div>
                </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Container  className="justify-content-between"fluid>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="gap-3 ">
                            <Nav.Item>
                                <NavLink  style={{textDecoration:'none',color:'black'}} to='/home'>Home</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink style={{textDecoration:'none',color:'black'}} to='/dashboard'>Dashboard</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink style={{textDecoration:'none',color:'black'}} to='/reports'>Reports</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                {token&&<Button onClick={handleSignOut} size="md">sign out</Button>}
        </Navbar>
    )
}