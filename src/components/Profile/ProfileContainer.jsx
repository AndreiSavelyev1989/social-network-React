import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getStatus, updateStatus, savePhoto, getUserProfile, saveDataProfile} from '../../Redux/profileReducer';


class ProfileContainer extends React.Component {

  updateProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push('/login')
      }
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.updateProfile();
    }
  }
  
  render() {
    return (
      <div>
        <Profile {... this.props}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,

})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveDataProfile }),
  withRouter,
)(ProfileContainer)