import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { CardFooter, Media, Modal, ModalHeader, ModalBody, ModalFooter, Button, Navbar, NavbarBrand, NavLink, Nav, NavItem, Grid, NavbarToggler, Collapse, Dropdown, Row, Col, CardTitle, CardText, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';

import CardTask from './CardTask/CardTask';

import { loadTasks } from './../../actions/tasks';

class PageTasks extends React.Component {

    static propTypes = {
        server: PropTypes.bool,
        isLoading: PropTypes.bool,
        taskList: PropTypes.arrayOf(PropTypes.number),
        loadTasks: PropTypes.func.isRequired,
        addToPromises: PropTypes.func,
    }

    static defaultProps = {
        taskList: [],
        isLoading: false,
        server: false,
        addToPromises: () => {}
    }


    componentDidMount() {
        if (!this.props.isServerRendering){
            this.props.loadTasks(SERVER_URL + 'api/tasks/');
        }
    }

    static staticRender(store){
        store.dispatch(loadTasks(SERVER_URL + 'api/tasks/'))
    }

    render() {
        console.log("render PageTasks #1")

        const tasks = this.props.taskList.map(
            item => <CardTask key={ item } id={ item } />,
        );
        console.log("render PageTasks #2")
        return (<div>



            <CardColumns style={{ padding: '20px' }}>

                
            { tasks }
            
                {/*
                
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card body inverse color="info">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button color="secondary">Button</Button>
                </Card>
                <Card>
                    <CardFooter>
                        <Media>
                            <Media left href="#">
                                <Media>
                                    <img class="d-flex mr-3" width="40px" height="40px" src="https://cdn.dribbble.com/users/37217/screenshots/1411094/fs_dbl_penguin_1x.png" alt="Generic placeholder image"></img>
                                </Media>
                            </Media>
                            <Media body>
                                <Media right>
                                    Assign_to
                                    </Media></Media>
                        </Media>
                    </CardFooter>
                    <Card body inverse color="primary">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="secondary">Button</Button>
                    </Card>
                </Card>
                <Card body inverse color="info">
                    <div onClick={this.toggle_modal}>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>YYEeeaahh With supporting text below as a natural lead-in to additional content.</CardText>
                    </div>
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>



                    <Button color="secondary">Button</Button>
                </Card>
                */}
            </CardColumns>

            <Button className='btn float-right' style={{ 'marginRight': '20px' }}>Add task</Button >


        </div>)
    }
}

const mapStateToProps = (store) => {
    return {
        isServerRendering: store.SSR.serverRendering,
        taskList: store.tasks.taskList,
        isLoading: store.tasks.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps PageTask #1")
    var t = bindActionCreators({ loadTasks: loadTasks }, dispatch)
    console.log("mapDispatchToProps PageTask #2")
    return t
}


export default connect(mapStateToProps, mapDispatchToProps)(PageTasks);
