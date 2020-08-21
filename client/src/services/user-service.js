const userService = {
    login: async (email, password, csrfToken) => {
        const user = {email, password};
        const response = await fetch(
            'http://localhost:5001/echo-blue/europe-west3/api/users/login', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': `${csrfToken}`
                },
                body: JSON.stringify(user)
            });
        return response.json();
    },
    register: async (email, password, csrfToken) => {
        const user = {email, password, _csrf: csrfToken};
        const response = await fetch(
            'http://localhost:5001/echo-blue/europe-west3/api/users/register', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': `${csrfToken}`
                },
                body: JSON.stringify(user)
            });
        return response.json();
    },
    sessionLogin: async (idToken, csrfToken) => {
        const user = {idToken};
        const response = await fetch(
            'http://localhost:5001/echo-blue/europe-west3/api/users/sessionLogin', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': `${csrfToken}`,
                    'Authorization': `Bearer ${idToken}`
                },
                body: JSON.stringify(user)
            });
        return response.json();
    },
    logout: async (idToken, csrfToken) => {
        const user = {idToken, _csrf: csrfToken};
        const response = await fetch(
            'http://localhost:5001/echo-blue/europe-west3/api/users/sessionLogin', {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': `${csrfToken}`,
                    'Authorization': `Bearer ${idToken}`
                },
                body: JSON.stringify(user)
            });
        return response.json();
    }
}


export default userService