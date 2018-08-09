const initialState = { user: {}, isLoggedIn: false };

let updateLocalStorageWithUser = (user) => {
  // Save user with 'unique' key being user + username
  let key = 'user' + user.username;
  window.localStorage.setItem(key, JSON.stringify(user));
};

let updateUserProps = (user) => {
  let userKey = 'user' + user.username;
  window.localStorage.setItem(userKey, JSON.stringify(user));
};

let currentUserHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      updateLocalStorageWithUser(action.user);
      for (let userProp in action.user) {
        state.user[userProp] = action.user[userProp];
      }
      console.log('update user now it is user is', state.user);
      return {
        ...state,
        user: state.user
      }
    case 'UPDATE_USER_PROPS':
      for (let userProp in action.userProps) {
        if (userProp == 'userOrders') {
          state.user[userProp].concat(action.userProps[userProp]);
        } else {
          state.user[userProp] = action.userProps[userProp];
        }
      }
      updateUserProps(state.user);
      console.log('set new user props now they are', state.user);
      return {
        ...state,
        user: state.user
      }
    case 'UPDATE_LOGIN_STATUS':
      console.log('updated is logged in with', action.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
  }
  return state;
}

export default currentUserHandler;