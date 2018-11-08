import React, { Component } from "react";
import Header from '../Component/Header';
import {Form,ControlLabel,FormGroup,HelpBlock,FormControl,ButtonToolbar,ButtonGroup,Button,Col, Row, Grid, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Card} from "antd";
import Footer from '../Component/Footer';
import {Navbar} from 'react-bootstrap';
import { fontSize, fontStyle, paddingBottom } from 'reactstrap'

export default class Home extends Component{  

    state = {
        value: ''
      }

    render(){
          return(
            <div>
                <Navbar collapseOnSelect style={{ marginBottom:0, borderColor: "#0000", backgroundColor:"#81ecec ", padding:"5px", fontSize:"20px"}} width="100%" height="100" >
                    <Navbar.Header>
                        <Navbar.Brand style={{color: "#000"}}>
                            Todolist Simple App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <form style={{paddingRight: 300, paddingBottom:20, paddingLeft: 300, paddingTop:20, backgroundColor: "#e2e2e2"}}>
                    <FormGroup
                        controlId="formBasicText">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="todolist title"
                        />

                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Description of todolist"
                        />

                        <ControlLabel>Status</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="status"
                        />
                        <FormControl.Feedback />                    
                    </FormGroup>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>Add</Button>
                            <Button>Edit</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </form>
                <Grid>
                    <Row className="show-grid" style={{padding: 30, backgroundColor: "#ccc"}}>
                        <Col xs={12} md={8}>
                            <div style={{
                                height: "100%",
                                width:"150%",
                                backgroundColor: "#e2e2e2",
                                borderColor:"#000",
                                borderRadius: 10,
                                borderWidth: 1,
                                alignItems: 'center'
                                }}>
                               
                                 <Card
                                    title="Title" 
                                    style={{ width: 800, marginBottom: 20,padding :10 }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    
                                    <ButtonToolbar >
                                        <ButtonGroup>
                                            <Button>1</Button>
                                            <Button>2</Button>
                                            <Button>3</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Card>
                                
                            </div>
                        </Col>

                        <Col xs={12} md={8}>
                            <div style={{
                                height: "100%",
                                width: "150%",
                                backgroundColor: "#e2e2e2",
                                borderColor:"#000",
                                borderRadius: 10,
                                borderWidth: 1,
                                alignItems: 'center'
                            }}>
                               
                                 <Card
                                    title="List"
                                    style={{ width: 800, padding:10 }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    
                                    <ButtonToolbar>
                                        <ButtonGroup>
                                            <Button>1</Button>
                                            <Button>2</Button>
                                            <Button>3</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Card>
                                
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>              
          )
    }
}