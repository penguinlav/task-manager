import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import update from 'react-addons-update';
//import Upload from 'material-ui-upload/Upload';

import { push } from 'react-router-redux';
import { connect } from 'react-redux';


class SignUp extends React.Component {

    state = {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        //avatar: '',
        password: '',
        error: {},
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    onChange = (e) => {
        let err = this.state.error;
        err[e.target.name] = "";
        this.setState(Object.assign(this.state, { [e.target.name]: e.target.value },
            { "error": Object.assign(this.state.error, { [e.target.name]: "" }) }))

    }

    onClick = (e) => {
        e.preventDefault();
        fetch('/api/users/', {
            method: 'POST',
            //credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': "application/json",
            }
        }).then(
            body => {

                if (body.status === 200) {
                    this.props.redirectLogin()
                }
                return body.json()
            },
        ).then(
            (json) => {
                console.log("yeahh");
                console.log(json);


                this.setState({ error: json })
                /*if (this.state.error != true) {
                    localStorage.setItem("token", json.token);
                    console.log(localStorage);
                }*/
                //this.setState({ username: this.state, password: this.password, error: true })

                //this.setState({ isLoading: false });
                //return this.props.onCreate(json);
            },
        ).catch( (ee) => {
            console.log("err")
            console.log(ee)
            this.setState({ error: ee })
        } )

    }

    onFileLoad = (e, file) => {
        //this.setState({ avatar: e.srcElement.result })
        console.log(e, file)

    }

    render() {

        const divStyle = {
            borderWidth: 0.5,
        }
        return (
            <div style={divStyle}>
                <div>
                    <TextField onChange={this.onChange} value={this.state.username} className={"b-form-" + "username" + "-field"}
                        name={"username"} floatingLabelText={"username"} errorText={this.state.error["username"] === "" ? "" : this.state.error["username"]} />
                </div>
                <div>
                    <TextField onChange={this.onChange} value={this.state.email} className={"b-form-" + "email" + "-field"}
                        name={"email"} floatingLabelText={"email"} errorText={this.state.error["email"] === "" ? "" : this.state.error["email"]} />
                </div>
                <div>
                    <TextField onChange={this.onChange} value={this.state.first_name} className={"b-form-" + "first_name" + "-field"}
                        name={"first_name"} floatingLabelText={"first_name"} errorText={this.state.error["first_name"] === "" ? "" : this.state.error["first_name"]} />
                </div>
                <div>
                    <TextField onChange={this.onChange} value={this.state.last_name} className={"b-form-" + "last_name" + "-field"}
                        name={"last_name"} floatingLabelText={"last_name"} errorText={this.state.error["last_name"] === "" ? "" : this.state.error["last_name"]} />
                </div>
                <div>
                    <TextField onChange={this.onChange} value={this.state.password} className={"b-form-" + "password" + "-field"}
                        name={"password"} floatingLabelText={"password"} errorText={this.state.error["password"] === "" ? "" : this.state.error["password"]} />
                </div>
                {/* <div>
                    <Upload label="Add" onClick={() => console.log()} onFileLoad={this.onFileLoad} />
                </div> */}
                <div className="b-form-accept">
                    <RaisedButton onClick={this.onClick} label="Sign in" primary={true} disabled={false} />
                </div>
            </div>)



    }
}



const mapDispatchToProps = (dispatch) => {
    return ({
        redirectLogin: () => dispatch(push('/login'))
    });
};

const mapStateToProps = ({ }) => { return { } };
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

