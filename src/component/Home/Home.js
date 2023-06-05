import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Logout from '../../Logout/Logout';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Logout></Logout>
        </div>
    );
};

export default Home;