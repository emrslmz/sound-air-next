import {notify} from '../../../../core/alerts/alerts.service';

export default {
    SET_AUDIOS(state, data) {
        state.sounds = data;

        state.sounds.forEach(sound => {
            sound.player = new Audio(sound.audioName)
        });
    },
    PLAY_AUDIOS(state, id) {

        const foundSoundById = state.sounds.find(s => s.id === id);


        if (foundSoundById.active === false) {
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
};
