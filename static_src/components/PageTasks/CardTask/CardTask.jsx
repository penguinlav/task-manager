import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { CardHeader, CardFooter, Media, Modal, ModalHeader, ModalBody, ModalFooter, Button, Navbar, NavbarBrand, NavLink, Nav, NavItem, Grid, NavbarToggler, Collapse, Dropdown, Row, Col, CardTitle, CardText, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';
import User from './User';

class CardTask extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        author: PropTypes.number,
        project: PropTypes.number,
        text: PropTypes.string,
        description: PropTypes.string,
    }

    static defaultProps = {
        author: null,
        project: null,
        text: '',
        description: '',
    }

    constructor(props) {
        console.log("constructor CardTask #2")
        super(props)
        console.log("constructor CardTask #2")
        
    }

    /*
        <div className="b-task">
        <User id={ this.props.author } />
        <div className='b-task-content'>{ this.props.text }</div>
        <div className='b-task-content'>{ this.props.description }</div>
    </div>
    */

    componentDidMount() {
        //this.props.serverFlag()
    }

    render() {
        console.log("render CardTask #1")
        return (
            <Card>
                <CardFooter>
                    <User id={ this.props.author } />
                </CardFooter>
                <Card body inverse color="primary">
                    <CardTitle>{this.props.text}</CardTitle>
                    <CardText>{ this.props.description }</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
            </Card>
        )
    }
}

const mapStateToProps = ({ tasks }, ownProps) => {
    return {
        ...tasks.tasks[ownProps.id],
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardTask);
