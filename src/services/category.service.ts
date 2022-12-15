import { BASE_URL } from "./config/url";
import {Category} from "../models/category";
import {getToken} from "./auth";

export const listCategories = (): Promise<Category[]> => {
    return fetch(BASE_URL + 'category/').then(res => res.json());
}

export const createCategory = ( data : Category): Promise<Category> => {
    const token = "Bearer " + getToken();
    return fetch(BASE_URL + 'category/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(data)
    }).then(res => res.json())

}