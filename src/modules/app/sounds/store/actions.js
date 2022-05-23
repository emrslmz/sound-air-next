import SoundsServices from '../services/sounds.services';

export const getAudios = async ({ commit }) => {
    const response = await new SoundsServices().fetchAudios();
    commit('SET_AUDIOS', response.data);
};

export const playSettings = async ({ commit }, id) => {
    commit('PLAY_AUDIOS', id);
};

export const volumeSettings = async ({ commit }, id) => {
    commit('VOLUME_AUDIOS', id);
};
