 export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.user
    default:
      return state
  }
}
