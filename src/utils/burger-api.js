const ingridientsApi = 'https://norma.nomoreparties.space/api';

export function getIngredients() {
    return fetch(`${ingridientsApi}/ingredients`)
        .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)));
}