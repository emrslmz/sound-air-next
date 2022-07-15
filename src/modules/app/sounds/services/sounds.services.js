import ApiService from '../../../../core/api/api.service.js';

export default class SoundsServices extends ApiService {

    async fetchAudios() {
        this.url = 'audios';
        return this.get();
    }

}
