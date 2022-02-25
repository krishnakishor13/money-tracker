import React from 'react';
import logo from '../../assets/img/Money-Count-Logo.png';
import dashboard from '../../assets/img/dashboard.png';
import transaction from '../../assets/img/transactionlist.png';
import account from '../../assets/img/account.png';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function Sidebar1() {
    const dispatch = useDispatch();
    return (
        <>
            <div class="sidebar">
                <img class="logo" src={logo} alt="" />
                <img class="dashboard" src={dashboard} alt="" />
                <img class="transaction" src={transaction} alt="" />
                <img class="account" src={account} alt="" onClick={() => dispatch(push('/addprofile'))} />
            </div>
        </>
    );
}

export default Sidebar1;
