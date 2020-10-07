import React from 'react'
import {Card, Icon} from 'semantic-ui-react'

const UserCard = (props) => (
    <Card
        image={props.avatar}
        header={`${props.firstName} ${props.lastName}`}
        meta={props.email}
        extra={<div><Icon name='user'/>ID # {props.userId}</div>}
    />
)


export default UserCard;