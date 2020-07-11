import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductTable from './components/DashboardTable/ProductTable/ProductTable';
import Layout from './containers/Layout/Layout';
import DashboardHome from './components/DashboardHome/DashboardHome';
import LocationTable from './components/DashboardTable/LocationTable/LocationTable';
import TeamMembersTable from './components/DashboardTable/TeamMembersTable/TeamMembersTable';
import Demo from './components/Demo/Demo';
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'],
        body2: {
            fontWeight: 500
        }
    }

})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/home">
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path="/location">
                                <LocationTable></LocationTable>
                            </Route>
                            <Route path="/product">
                                <ProductTable></ProductTable>
                            </Route>
                            <Route path="/team">
                                <TeamMembersTable></TeamMembersTable>
                                {/* <Demo></Demo> */}
                            </Route>
                        </Switch>
                    </Layout>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
