import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { CardFooter, Media, Modal, ModalHeader, ModalBody, ModalFooter, Button, Navbar, NavbarBrand, NavLink, Nav, NavItem, Grid, NavbarToggler, Collapse, Dropdown, Row, Col, CardTitle, CardText, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';

class PageMembers extends React.Component {

   

    render() {
       
    }
}

const mapStateToProps = (store) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
}


export default connect(mapStateToProps, mapDispatchToProps)(PageMembers);
