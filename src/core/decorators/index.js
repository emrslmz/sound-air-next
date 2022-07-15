// /**
//  * checks whether or not value of field's length is less than given length. If it is not, returns error information.
//  * @param {{verboseMessage: string, name: string, maxLength: number}} field
//  * @param {string} field.name
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @param {int} field.maxLength
//  * @returns class instance of entity
//  */
// export const maxLength = (field) => (Class) => {
//   return function(args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : field.name;
//       message = `${NAME} length must be less than ${field.maxLength} characters.`;
//     }
//     if (args[field.name] && args[field.name].length > field.maxLength) {
//       const error = {
//         field: field.name,
//         type: 'maxLength',
//         message,
//       };
//       errors.push(error);
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
// /**
//  * checks whether or not value of field's length is less than given length. If it is not, returns error information.
//  * @param {{minLength: number, name: string, verboseName: string}} field
//  * @param {string} field.name
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @param {int} field.minLength
//  * @returns class instance of entity
//  */
// export const minLength = (field) => (Class) => {
//   return function (args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : field.name;
//       message = `${NAME} length must be greater than ${field.minLength} characters.`;
//     }
//     if (args[field.name] && args[field.name].length < field.minLength) {
//       const error = {
//         field: field.name,
//         type: 'minLength',
//         message,
//       };
//       errors.push(error);
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
// /**
//  * checks whether or not value of field exist. If it is not, returns error information.
//  * @param {{name: string}} field
//  * @param {string} field.name
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @returns class instance of entity
//  */
// export const required = (field) => {
//   return (Class) => {
//     return function (args, errors) {
//       let message;
//       if (field.verboseMessage) {
//         message = field.verboseMessage;
//       } else {
//         const NAME = field.verboseName ? field.verboseName : field.name;
//         message = `Lütfen ${NAME} girin.`;
//       }
//       if (!args[field.name]) {
//         const error = {
//           field: field.name,
//           type: 'required',
//           message,
//         };
//         errors.push(error);
//       }
//       return new Class({
//         ...args,
//       }, errors);
//     }
//   };
//
// }
//
// /**
//  * checks whether or not value of field exist according to condition. If it is not, returns error information.
//  * @param {{name: string}} field
//  * @param {string} field.name
//  * @param {array<object>} field.conditions
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @returns class instance of entity
//  */
// export const conditionallyRequired = (field) => (Class) => {
//   return function (args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : field.name;
//       message = `Please enter ${NAME}.`;
//     }
//
//     if (field.conditions) {
//       Object.keys(field.conditions).forEach((key) => {
//         if (field.conditions[key].type === 'or') {
//           if (field.conditions[key].values.includes(args[key]) && !args[field.name]) {
//             const error = {
//               field: field.name,
//               type: 'required',
//               message,
//             };
//             errors.push(error);
//           }
//         }
//       });
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
// /**
//  * checks whether or not email is valid. If it is not, returns error information.
//  * @param {Object} field
//  * @param {string} field.name
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @returns class instance of entity
//  */
// export const validEmail = (field) => (Class) => {
//   return function (args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : 'e-posta adresi';
//       message = `Girdiğin ${NAME} geçersiz görünüyor.`;
//     }
//     if (args[field.name]) {
//       // eslint-disable-next-line
//       const EMAIL_REGEX = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//       const valid = EMAIL_REGEX.test(args[field.name]);
//       if (!valid) {
//         const error = {
//           field: field.name,
//           type: 'required',
//           message,
//         };
//         errors.push(error);
//       }
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
// /**
//  * checks whether or not password and password confirmation are equal. If it is not, returns error information.
//  * @param {Object} field
//  * @param {string} field.name
//  * @param {string} field.confirmationName
//  * @param {string} field.verboseName
//  * @param {string} field.verboseNameConfirmation
//  * @param {string} field.verboseMessage
//  * @returns class instance of entity
//  */
// export const passwordMatching = (field) => (Class) => {
//   return function (args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : field.name;
//       const CONFIRMATION_NAME = field.verboseNameConfirmation ? field.verboseNameConfirmation : field.confirmationName;
//       message = `${NAME} and ${CONFIRMATION_NAME} does not match.`;
//     }
//     if (args[field.name] && args[field.confirmationName]) {
//       if (args[field.name] !== args[field.confirmationName]) {
//         const error = {
//           field: field.confirmationName,
//           type: 'required',
//           message,
//         };
//         errors.push(error);
//       }
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
//
// /**
//  * checks whether field has static part or not
//  * @param {{name: string}} field
//  * @param {string} field.name
//  * @param {part} field.part
//  * @param {string} field.verboseName
//  * @param {string} field.verboseMessage
//  * @returns class instance of entity
//  */
// export const isIncluded = (field) => (Class) => {
//   return function (args, errors) {
//     let message;
//     if (field.verboseMessage) {
//       message = field.verboseMessage;
//     } else {
//       const NAME = field.verboseName ? field.verboseName : field.name;
//       message = `Lütfen ${NAME} girin.`;
//     }
//     if (args[field.name].indexOf(field.part) === -1) {
//       const error = {
//         field: field.name,
//         type: 'isIncluded',
//         message,
//       };
//       errors.push(error);
//     }
//     return new Class({
//       ...args,
//     }, errors);
//   };
// }
