import axios from "axios";
import { perPage } from "../main";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53372962-e1472c27af09e15e68765cdc2';

export async function getImagesByQuery(query, page) {
    const response = await axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            page: page,
            per_page: perPage,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    });

    return response.data;
}