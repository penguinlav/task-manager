import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
//import TaskList from './TaskList';
//import TaskForm from './TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//import { Login } from './Login.jsx';
//import '../styles/base.scss';
import { CardHeader, CardFooter, Media, Modal, ModalHeader, ModalBody, ModalFooter, Button, Navbar, NavbarBrand, NavLink, Nav, NavItem, Grid, NavbarToggler, Collapse, Dropdown, Row, Col, CardTitle, CardText, Card, CardBody, CardColumns, CardImg, CardSubtitle } from 'reactstrap';

import PageTasks from './../PageTasks';
import PageLogin from './../PageLogin';

class App extends React.Component {

    static propTypes = {
        server: PropTypes.bool,
        addToPromises: PropTypes.func,
    };

    static defaultProps = {
        server: false,
        addToPromises: () => { },
    };

    state = {
        taskList: [],
        isLoading: false,
    };

    componentDidMount() {
        //this.props.serverFlag()
    }

    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            modal: false,
        };
    }
    /* toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggle_modal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
*/

    onTaskCreate = (task) => {
        this.setState({
            taskList: [task, ...this.state.taskList],
        });
    }

    render() {
        console.log("render App")
        return (
            <div >
                <Navbar className="navbar-toggleable-md navbar-inverse bg-primary">
                    <NavbarBrand tag={Link} to='/' style={{ /*padding: '20px'*/ }}>Task manager</NavbarBrand>
                    <NavLink tag={Link} to='/counters'>Projects</NavLink>
                    <NavLink tag={Link} to='/tasks'>Tasks</NavLink>
                    <NavLink tag={Link} to='/components'>Projects</NavLink>
                    <NavLink tag={Link} to='/components'>Tasks</NavLink>
                    <NavLink tag={Link} to='/manager_members'>Members of manager</NavLink>
                    <Nav className="ml-auto float-right" navbar>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/counters" component={() => <h2>Projects</h2>} />
                    <Route exact path="/tasks" render={props => <PageTasks
                        { ...props }
                        addToPromises={this.props.addToPromises}
                    />} />
                    <Route exact path="/login" component={() => <PageLogin />} />
                    <Route exact path="/singup" component={() => <PageLogin />} />
                </Switch>


            </div >
        );
    }
}

/* 
 <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Hello World</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              {this.props.userSignedIn && (
                <LinkContainer to='/time'>
                  <NavItem>Время</NavItem>
                </LinkContainer>
              )}
              <LinkContainer to='/counters'>
                <NavItem>Счетчики</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          {this.props.children}
        </Grid>
*/



/* class App extends React.Component {
    static propTypes = {
        server: PropTypes.bool,
        addToPromises: PropTypes.func,
    };
 
    static defaultProps = {
        server: false,
        addToPromises: () => {},
    };
 
    state = {
        taskList: [],
        isLoading: false,
    };
 
    componentDidMount(){
        this.props.serverFlag()
    }
 
    onTaskCreate = (task) => {
        this.setState({
            taskList: [task, ...this.state.taskList],
        });
    }
 
    render() {
        return (
            <div className="b-wrapper" style={
            {
                width: '600px',
                margin: 'auto',
                marginTop: '20px',
                padding: '10px',
                border: '1px solid black',
            } }>
                <Link to="/create/">Создать</Link>
                <Link to="/tasklist/">Список</Link>
                <h1>TaskTracker</h1>
                <Switch>
                    <Route exact path="/" component={ () => <h2>aaaaa</h2> } />
                    <Route
                        exact
                        path="/create/"
                        render={ props => <TaskForm { ...props } onCreate={ this.onTaskCreate } /> }
                    />
                    <Route
                        exact
                        path="/login/"
                        render={ props => <Login { ...props } /> }
                    />
                    <Route
                        exact
                        path="/tasklist/"
                        render={ props => <TaskList
                            { ...props }
                            server={ this.props.server }
                            addToPromises={ this.props.addToPromises }
                        />} />
                </Switch>
            </div>
        );
    }
} */


export default App;
