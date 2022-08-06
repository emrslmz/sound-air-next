import { notify } from '../../../../core/alerts/alerts.service';

export default {
    SET_AUDIOS(state, data) {
        state.sounds = data;
    },
    PLAY_AUDIOS(state, id) {

        const foundSoundById = state.sounds.find(s => s.id === id);


        if (foundSoundById.active === false) {
            foundSoundById.player = new Audio(foundSoundById.audioName);
            foundSoundById.player.play();
            foundSoundById.player.loop = true;
            foundSoundById.showButton = true;
            foundSoundById.active = true;
        } else if (foundSoundById.active === true) {
            foundSoundById.player.pause();
            foundSoundById.showButton = false;
            foundSoundById.active = false;
        } else {
            notify('Bir şeyler ters gitti');
        }

        const a = state.inThePlaylist.find(p => p.id === id);

        if (a) {
            state.inThePlaylist.splice(state.inThePlaylist.findIndex(e => e.id === id),1);
        } else {
            state.inThePlaylist = [
                foundSoundById,
                ...state.inThePlaylist
            ]
        }
    },
    VOLUME_AUDIOS(state, id) {
        const foundSoundById = state.sounds.find(s => s.id === id);

        foundSoundById.player.volume = foundSoundById.volume / 100;
    },
    FORWARD_AUDIO(state) {
        if (state.inThePlaylist.length > 1) {
            const zerothItem = state.inThePlaylist[0];
            const firstItem = state.inThePlaylist[1];

            state.inThePlaylist.splice(0, 2);

            return state.inThePlaylist = [
                firstItem, ...state.inThePlaylist, zerothItem
            ];
        } else {
            notify('Sonraki ses dosyası bulunmuyor.')
        }
    },
    BACK_AUDIO(state) {
        if (state.inThePlaylist.length > 1) {
            const zerothItem = state.inThePlaylist[0];
            const lastItem = state.inThePlaylist[state.inThePlaylist.length - 1];

            state.inThePlaylist.splice(0, 1);
            state.inThePlaylist.splice(state.inThePlaylist.length - 1, 1);

            return state.inThePlaylist = [
                lastItem, zerothItem, ...state.inThePlaylist
            ];
        } else {
            notify('Önceki ses dosyası bulunmuyor.')
        }
    },
    SET_CATEGORIES(state, data) {
        state.categories = data;
    },
};
