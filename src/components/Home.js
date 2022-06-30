import React from 'react';
import '../App.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicTable from '../pages/BasicTable';
import FilteringTable from '../pages/Filteringtable';
import PaginationTable from '../pages/PaginationTable';
import SortingTable from '../pages/SortingTable';
import StickyTable from '../pages/StickyTable';
import RowSelection from '../pages/RowSelection';
import OperationsTable from '../pages/OperationsTable'; 
import Content from '../pages/Content';
import HomePage from '../pages/HomePage';

const Home = () => {
    return ( 
        <div>
            <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/BasicTable' exact component={BasicTable} />
                <Route path='/FilteringTable' component={FilteringTable} />
                <Route path='/PaginationTable' component={PaginationTable} />
                <Route path='/SortingTable' component={SortingTable} />
                <Route path='/StickyTable' component={StickyTable} />
                <Route path='/RowSelection' component={RowSelection} />
                <Route path='/OperationsTable' component={OperationsTable} />
                <Route path='/Content' component={Content} />
            </Switch>
            </Router>
        </div>
    );
}

export default Home;
