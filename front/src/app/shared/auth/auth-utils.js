import { API_URL, LOGIN_PAGE_URL } from "./auth-constant.js";

export function checkLogin() {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
       window.location.href = LOGIN_PAGE_URL;
    }
    else {
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then((response) => {
            if (response.status !== 200)
                window.location.href = LOGIN_PAGE_URL;
        })
        .then(error => {
            console.log(error);
            window.location.href = LOGIN_PAGE_URL;
        })
    }
}