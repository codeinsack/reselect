import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class Users extends Component {
  componentDidUpdate() {
    console.log('[Users] updated!');
  }

  render() {
    const { users } = this.props;

    const outputUsers = users.map(user => (<div key={user.name}>{user.name}</div>));

    return (
      <div>
        {outputUsers}
      </div>
    );
  }
}

const getAdultUsers = createSelector(
  state => state.users,
  users => users.filter(user => user.age > 18),
);

const mapStateToProps = state => ({
  users: getAdultUsers(state),
});

export default connect(mapStateToProps)(Users);
