import SoundsServices from '../services/sounds.services';
import { notify } from '../../../../core/alerts/alerts.service';

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

export const forwardBackButton = async ({ commit }, type) => {
    if (type === 2) {
        commit('FORWARD_AUDIO');
    } else if (type === 1) {
        commit('BACK_AUDIO');
    } else {
        notify('çok zararlı hata :D');
    }
};
