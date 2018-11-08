import React, { Component } from "react";
import {Navbar} from 'react-bootstrap';
import { fontSize, fontStyle, paddingBottom } from 'reactstrap'


export default class header extends Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect style={{ marginBottom:0, borderColor: "#fff", backgroundColor:"#81ecec ", padding:"5px", fontSize:"20px"}} width="100%" height="100" >
                    <p style={{paddingBottom:0, fontSize:25, alignSelf: 'center', paddingBottom:20}}>Simple To Do List</p>
                    <Navbar.Header>
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                </Navbar>
            </div>
            )
        }
    }