import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import { bindActionCreators, useDispatch } from "redux";

export const login = (email, password) => {
	return {
		type: LOGIN,
		user: { email, password },
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const displayNotificationDrawer = () => {
	return {
		type: DISPLAY_NOTIFICATION_DRAWER,
	};
};

export const hideNotificationDrawer = () => {
	return {
		type: HIDE_NOTIFICATION_DRAWER,
	};
};

export const loginSuccess = () => {
	return {
		type: LOGIN_SUCCESS,
	};
};

export const loginFailure = () => {
	return {
		type: LOGIN_FAILURE,
	};
};

export const loginRequest = (email, password) => {
	return (dispatch) => {
		dispatch(login(email, password));
		return fetch("/dist/login-success.json")
			.then((response) => response.json())
			.then(() => dispatch(loginSuccess()))
			.catch(() => dispatch(loginFailure()));
	};
};

const dispatch = useDispatch();

export const boundLogin = bindActionCreators(login, dispatch);
export const boundLogout = bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(
	displayNotificationDrawer,
	dispatch
);
export const boundHideNotificationDrawer = bindActionCreators(
	hideNotificationDrawer,
	dispatch
);


export const boundLoginRequest = (dispatch) => {
	return bindActionCreators({ loginRequest }, dispatch);
};
