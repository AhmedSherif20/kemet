import { Injectable } from '@angular/core';
import * as SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root',
})
export class SecureLsService {
  ls = new SecureLS({ encodingType: 'aes' });
  constructor() {}

  /**
   * Encrypts and stores data in local storage.
   * @param key The key under which the data will be stored.
   * @param data The data to be encrypted and stored.
   */
  encryptData(key: string, data: any): void {
    this.ls.set(key, data);
  }

  /**
   * Retrieves and decrypts data from local storage.
   * @param key The key under which the data is stored.
   * @returns The decrypted data.
   */
  decryptData(key: string): any {
    return this.ls.get(key);
  }

  /**
   * Retrieves all keys stored in local storage.
   * @returns Array of all keys.
   */
  getAllData(): string[] {
    return this.ls.getAllKeys();
  }

  /**
   * Removes all data from local storage.
   */
  removeAllData(): void {
    this.ls.removeAll();
  }
}
