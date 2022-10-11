import React from 'react';

import { ServerButton } from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator/>
            <ServerButton/>
            <ServerButton hasNotifications />
            <ServerButton mentions={15} />
            <ServerButton/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications mentions={15}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={25}/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    )
};

export default ServerList;