// import ApiCoreService from 'api-core-service';
// import router from '../../router';
// import entityController from '../../core/entitites/entityController';
//
// import config from '../../core/config';
//
// export default class CoreService extends ApiCoreService {
//   constructor() {
//     super();
//     this.setApiType('VITE_API_URL');
//     this.setAuthorizationTokenName('VITE_TOKEN_NAME');
//   }
//
//   getAuthorizationToken() {
//     return `Bearer ${localStorage.getItem(config[this.authorizationTokenName])}`;
//   }
//
//   handleErrors(e) {
//     const response = e.response.data;
//
//     if (response.code === 401) {
//       localStorage.removeItem(config.VITE_TOKEN_NAME);
//       router.push({
//         name: 'Login',
//       });
//     }
//
//     const errors = {};
//     if (Object.keys(response.details).length === 0) {
//       errors.general = [
//         {
//           field: 'general',
//           message: response.error,
//           type: 'required',
//         },
//       ];
//     } else {
//       Object.keys(response.details).forEach((key) => {
//         response.details[key].forEach((item) => {
//           if (!errors[key]) {
//             errors[key] = [];
//           }
//           errors[key].push({
//             field: key,
//             message: item,
//             type: 'required',
//           });
//         });
//       });
//     }
//
//     errors.primaryMessage = errors.general && errors.general[0] && errors.general[0].message ? errors.general[0].message : undefined;
//
//     throw errors;
//   }
//
//   headerInterceptor() {
//     return {
//       'Content-Language': 'tr-TR',
//       'Accept-language': 'tr-TR',
//     };
//   }
//
//   makeValidation(entity) {
//     entityController(entity, { ...this.payload });
//   }
// }
