import axios from 'axios';

export const FETCH_ANIMALS = 'fetch_animals'; // define type: FETCH_ANIMALS
export const FETCH_ANIMAL = 'fetch_animal';
export const CREATE_ANIMAL = 'create_animal';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MOR234' //? is for query string

// fetch a list of animals and return to reducer
export function fetchAnimals() {
    //generate a new request using the axios library
    // and pass the particular URL we are trying to make the get request to
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); ///animals

    return {
        type: FETCH_ANIMALS,
        payload: request // assign request to the payload property of the action we are returning
    };
}

export function createAnimal(values, callback) {  //Here values contain name, type, etc.
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback()); //promise // After the API req has been successfully completed call the callback function

    return {
        type: CREATE_ANIMAL,
        payload: request
    };
}

export function fetchAnimal(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

    return {
        type: FETCH_ANIMAL,
        payload: request
    };
}