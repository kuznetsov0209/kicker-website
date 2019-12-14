// const API_HOST = "https://kicker.mercdev.com";
const API_HOST = process.env.API_HOST;

/* global fetch */

export function request(path, config = {}) {
  return fetch(`${API_HOST}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    ...config
  }).then(response => response.json());
}

export const GOOGLE_AUTH_URL = `${API_HOST}/auth/google`;
