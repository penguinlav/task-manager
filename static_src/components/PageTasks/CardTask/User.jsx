import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';

class User extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        first_name: PropTypes.string,
    }

    static defaultProps = {
        avatar: '',
        first_name: '',
    }

    render() {
        return (
            <Media>
                <Media left href="#">
                    <Media>
                        <img class="d-flex mr-3" width="40px" height="40px" src={this.props.avatar}></img>
                    </Media>
                </Media>
                <Media body>
                    <Media right>{this.props.first_name}</Media>
                </Media>
            </Media>
        );
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return {
        ...users.users[ownProps.id],
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
