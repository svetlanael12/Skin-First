import { makeObservable, observable } from 'mobx';
import { NotificationStore } from './notificationStore';

export const rootStoreObservables = {
    notificationStore: observable,
};

export class RootStore {
    notificationStore: NotificationStore;

    constructor() {
        this.notificationStore = new NotificationStore();
        makeObservable(this, rootStoreObservables);
    }
}
