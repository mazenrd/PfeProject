const { REACT_APP_ID_URL } = process.env;

export const idUrl = `${REACT_APP_ID_URL}`;
const { REACT_APP_AUTH_WEB, REACT_APP_ID, REACT_APP_API_URL } = process.env;

export const apiUrl = `${REACT_APP_API_URL}/api`;
export const authWeb = `https://${REACT_APP_AUTH_WEB}/#/sign-in`;
export const source = { source: { id: REACT_APP_ID } };
