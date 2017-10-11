import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, FormFeedback, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';


import Login from './Login';
import SignUp from './Signup';



export class PageLogin extends React.Component {
    render() {
        return (
            <Container fluid={false}>
                <Row style={{ marginTop: '100px' }}>
                    <Col sm={{ size: 4, push: 3, pull: 3, offset: 1 }}>
                        <div>
                            <NavLink tag={Link} to="/login"><h1>LogIn</h1></NavLink>
                            <NavLink tag={Link} to="/singup"><h1>SingUp</h1></NavLink>
                        </div>
                        <Switch>
                            <Route exact path="/login" component={() => <Login />} />
                            <Route exact path="/singup" component={() => <SignUp />} />
                        </Switch>
                    </Col>
                </Row>
            </Container>

        )
    }
}


export default PageLogin;
