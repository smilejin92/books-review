import axios from 'axios';

const BOOK_URL = 'https://api.marktube.tv/v1/book';

export default class BookService {
  static async getBooks(token) {
    return axios.get(BOOK_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async addBook(token, book) {
    return axios.post(BOOK_URL, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async login(email, password) {
    return axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });
  }

  static async logout(token) {
    return axios.delete('https://api.marktube.tv/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
