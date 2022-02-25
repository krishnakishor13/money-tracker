import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Addprofile from './containers/Addprofile';
import Dashboard from './containers/Dashboard';
import Addtransaction from './containers/Addtransaction';
import Transaction from './containers/Transaction';
import Transactionlist from './containers/Transactionlist';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/addprofile'} component={Addprofile} />
                <Route exact path={'/dashboard'} component={Dashboard} />
                <Route exact path={'/addtransaction'} component={Addtransaction} />
                <Route exact path={'/transaction'} component={Transaction} />
                <Route exact path={'/transactionlist'} component={Transactionlist} />
            </Switch>
        </>
    );
};
export default Router;
