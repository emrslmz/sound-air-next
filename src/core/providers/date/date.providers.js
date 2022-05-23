import dayjs from 'dayjs';


import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTimeFormat from 'dayjs/plugin/relativeTime';
import relativeTimeLocal from 'dayjs/locale/tr';


dayjs.extend(customParseFormat);
dayjs.extend(relativeTimeFormat);
dayjs.locale(relativeTimeLocal);

export const formatDate = (date, options = {
  format: 'DD/MM/YYYY',
  currentFormat: undefined,
}) => dayjs(date, options.currentFormat).format(options.format);

export const relativeTime = (date) => dayjs(date).fromNow();

export const setHour = (date, hour) => dayjs(date).hour(hour);
export const setMinute = (date, minute) => dayjs(date).minute(minute);
export const setSecond = (date, second) => dayjs(date).second(second);
export const getHour = (date) => dayjs(date).hour();
export const getMinute = (date) => dayjs(date).minute();
