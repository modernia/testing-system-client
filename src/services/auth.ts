import { Auth, User } from "../models/user";
import { BASE_URL } from "./config/url";

export const signup = (user: User) => {
  const url = BASE_URL + 'users'
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())

}

export const generateToken = (data: Auth) => {
  const url = BASE_URL + 'generate-token'
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const getCurrentUser = (token: string) => {
  const url = BASE_URL + 'current-user'
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res.json())
}


export const loginAuth = (token: string) => {
  localStorage.setItem('token', token)
}

export const isLoggedIn = () => {
  return !!localStorage.getItem('token')
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  return true
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const getUser = () => {
  let user = localStorage.getItem('user')
  return user != null ? JSON.parse(user) : null
}

export const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserRol = () => {
  let user = getUser()
  return user != null ? user.authorities[0].authority : null

}
