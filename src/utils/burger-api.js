import { request } from "./utils";

const ingridientsApi = 'https://norma.nomoreparties.space/api';

export function getIngredients() {
    const url = `${ingridientsApi}/ingredients`;
    return request(url);
}

export function createOrder(ingridientsId) {
    const url = `${ingridientsApi}/orders`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredients: ingridientsId })
    }
    return request(url, options);
}