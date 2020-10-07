import React, {useEffect} from 'react'
import {Card} from 'semantic-ui-react'
import UserCard from "./UserCard/UserCard";
import * as usersActions from '../../actions/users';
import {connect} from 'react-redux';
import Spinner from "../../components/UI/Spinner/Spinner";

const Users = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, [])

    return (
        <div className='ui grid container'>
            <br/>
            {props.fetchingUsers ? <Spinner/> :
                <Card.Group>
                    {props.users.map(user =>
                        <UserCard
                            firstName={user.first_name}
                            lastName={user.last_name}
                            email={user.email}
                            userId={user.id}
                            avatar={user.avatar}
                        />
                        )}
                    <br/>
                </Card.Group>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fetchingUsers: state.users.loading,
        users: state.users.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(usersActions.fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);