import ApiService from '../../../../core/api/api.service.js';

export default class CategoriesServices extends ApiService {

    async fetchCategories() {
        this.url = 'categories';
        return this.get();
    }

}
