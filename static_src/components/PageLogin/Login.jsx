import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import { push } from 'react-router-redux';



export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        valid: true,
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state)
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);
        fetch('/api/token-auth/', {
            method: 'POST', body: data, credentials: 'same-origin'
        }).then((data) => {
            console.log(data);
            if (data.status >= 200 && data.status < 300) {
                return data.json()
            } else {
                return Promise.resolve({ error: true })
            }
        }).then((json) => {
            if (json.status === 'ok') {
                this.props.redirectDefaultPage()
            } else {
                this.setState({ valid: false })
            }
        })

    }

    render() {
        return (
            <Form >
                <FormGroup className={this.state.valid ? "" : "has-danger"}>
                    <Input id='username' className={this.state.valid ? "" : "form-control-danger"} placeholder="User name" onChange={(e) => this.setState({ username: e.target.value, valid: true })} />
                </FormGroup>
                <FormGroup className={this.state.valid ? "" : "has-danger"}>
                    <Input className={this.state.valid ? "" : "form-control-danger"} id='password' placeholder="Password" type='password' onChange={(e) => this.setState({ password: e.target.value, valid: true })} />
                </FormGroup>
                <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
            </Form>
        )




        /*
                if (this.props.isLoading) {
                    return <div className="b-task-list">Загрузка...</div>;
                }

                return (
                    <div className="b-task-list">
                    <form onSubmit={(e) => this.submitForm(e)}>
                        <div>
                            <label
                                htmlFor="username"
                            >
                                username
                                </label>
                            <input
                                name="username"
                                id='username'
                                value={this.state.username}
                                onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                            >
                                password
                                </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }}
                            />
                        </div>
                        <button>сохранить</button>
                    </form>
                </div>
                );
                */
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        redirectDefaultPage: () => dispatch(push('/tasks'))
    });
};

const mapStateToProps = ({ }) => {  };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
