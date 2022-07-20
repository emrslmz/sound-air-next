export const addRequest = ({ commit }, data) => {
  commit('ADD_REQUEST', data);
};

export const removeRequest = ({ commit }, data) => {
  commit('REMOVE_REQUEST', data);
};

export const changeTheme = ({ commit }, value) => {
    commit('SET_THEME', value);
};
