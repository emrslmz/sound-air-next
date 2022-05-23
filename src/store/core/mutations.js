export default {
  ADD_REQUEST(state, data) {
    state.runningRequests = [...state.runningRequests, data];
  },

  REMOVE_REQUEST(state, data) {
    state.runningRequests = state.runningRequests.filter((request) => request.id !== data.id);
  },
};
