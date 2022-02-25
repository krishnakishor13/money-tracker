import React from 'react';
import income from '../assets/img/income.png';
import card from '../assets/img/card.png';
import summary from '../assets/img/summary.png';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Sidebar1 from '../components/Common/Sidebar1';

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button class="signup">
                {' '}
                <span id="sign" onClick={() => dispatch(push('/signin'))}>
                    Sign in
                </span>{' '}
                | <span onClick={() => dispatch(push('/signup'))}>Sign up</span>{' '}
            </button>

            <Sidebar1 />
            <ul class="container">
                <li class="menu">
                    <div class="paragraphs">
                        <h1 class="welcome">Welcome</h1>
                        <p class="paragraph1">
                            Sign up and Manage <br />
                            Your Budget
                        </p>

                        <p class="paragraph2">
                            Note down your expenditure and income, <br />
                            then check your balance everyday
                        </p>
                    </div>

                    <img class="income" src={income} alt="" />
                    <div class="rightcards">
                        <img class="card" src={card} alt="" />
                        <img class="summary" src={summary} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Home;
