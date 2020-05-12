import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>

  </BrowserRouter>
}

export default SamuraiJSApp;