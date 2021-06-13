export const LoginStart = (userData) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const LoginFailure = ()=>({
    type: 'LOGIN_FAILURE'
})

export const Logout = ()=> ({
    type: 'LOGOUT'
})

export const UpdateStart = (user) => ({
    type: 'UPDATE_START',
    payload: user
})

export const UpdateSuccess = ()=>({
    type: 'UPDATE_SUCCESS'
})

export const UpdateFailure = ()=> ({
    type: 'UPDATE_FAILURE'
})
