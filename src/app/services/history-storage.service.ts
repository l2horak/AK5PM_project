import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class HistoryStorageService {

  private _storage: Storage | null = null;

	constructor(private storage: Storage) {
		this.init();
	}
											
	async init() {
	  // If using, define drivers here: await this.storage.defineDriver(/*...*/);
		const storage = await this.storage.create();
		this._storage = storage;
	}
											
	async set(key: string, value: any) {
		this._storage?.set(key, value)
	}
											
	async get(key: string){
		return this._storage?.get(key)
	}
}
