import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../Redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatus, updateStatus } from './../../Redux/profileReducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 6251;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  

  render() {

    return (
      <div>
        <Profile {... this.props}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status

})


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileContainer)