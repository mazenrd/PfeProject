import moment from 'moment';
import { DATE_FORMAT } from '../constants';

moment.defaultFormat = DATE_FORMAT;

export const formatDate = ({ date, format }) => moment(date).format(format);

export const timezone = ({ date }) => moment.utc(date).toISOString();

export const currentDate = () => moment().format();
