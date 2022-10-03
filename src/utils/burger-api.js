const ingridientsApi = 'https://norma.nomoreparties.space/api';

export function getIngredients() {
    return fetch(`${ingridientsApi}/ingredients`)
        .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)));
}

export function createOrder(ingridientsId) {
    return fetch(`${ingridientsApi}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients: ingridientsId })
    }).then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)));
}