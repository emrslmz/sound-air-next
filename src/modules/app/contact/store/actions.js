import ContactServices from '../services/contact.services';

export const postContact = async (context, payload) => {
     await new ContactServices().postContact(payload);
};
