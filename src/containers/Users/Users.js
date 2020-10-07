import React from 'react'
import {Card} from 'semantic-ui-react'
import UserCard from "./UserCard/UserCard";

const CardExampleGroups = () => (
    <div className='container'>
            <br />
            <Card.Group>
                <UserCard firstName='Rao'
                          lastName='Mujadad'
                          email='mujadadrao@gmail.com'
                          userId='7'
                          avatar='https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
                />
                <br />
            </Card.Group>
    </div>
)

export default CardExampleGroups;