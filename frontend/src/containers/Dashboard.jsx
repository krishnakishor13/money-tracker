import React from 'react';
import expenseGraph from '../assets/img/expense-graph.png';
import emailGraph from '../assets/img/email-graph.png';
import profilepicture from '../assets/img/profilepicture.png';
import Profilebar from '../components/Common/Profilebar';
import Sidebar1 from '../components/Common/Sidebar1';

function Dashboard() {
    return (
        <>
            <Sidebar1 />
            <p class="welcomeback">
                Welcome back: <span id="username">Mike Tyson</span>{' '}
            </p>

            <ul class="container">
                <li class="menu"></li>
            </ul>

            <img class="expense-graph" src={expenseGraph} alt="" />
            <img class="email-graph" src={emailGraph} alt="" />
            <Profilebar />
        </>
    );
}

export default Dashboard;
