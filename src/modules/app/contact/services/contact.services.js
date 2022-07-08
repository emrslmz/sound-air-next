import ApiService from '../../../../core/api/api.service';

export default class ContactServices extends ApiService {

    async postContact(payload) {
        this.url = 'contacts';
        this.payload = payload;
        return this.post();
    }

}
