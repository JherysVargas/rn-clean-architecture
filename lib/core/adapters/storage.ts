import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorageInstance} from './interfaces';

export class LocalStorageAdapter implements LocalStorageInstance {
  async set(key: string, value: any): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error saving data', error);

      return false;
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);

      return value ? (JSON.parse(value) satisfies T) : null;
    } catch (error) {
      console.error('Error getting data', error);

      return null;
    }
  }

  async update(key: string, value: any): Promise<boolean> {
    try {
      await AsyncStorage.mergeItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error saving data', error);

      return false;
    }
  }

  async removeAll(): Promise<boolean> {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error removing data', error);

      return false;
    }
  }

  async removeItem(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing data', error);

      return false;
    }
  }
}
