import { action, makeObservable, observable } from 'mobx';

import { NotificationType, SnackbarType } from '../types/common';

export const notificationStoreObservables = {
    notificates: observable,

    deleteNotification: action.bound,
    addNotification: action.bound,
    setNotificates: action.bound,
};

/***
 * Стор для вывода алертов
 * хранит в себе массив сообщений и показывает их друг за другом по необходимости
 */
export class NotificationStore {
    notificates: NotificationType[] = [];

    constructor() {
        makeObservable(this, notificationStoreObservables);
    }

    deleteNotification(id: number): void {
        const notificates = [...this.notificates];
        const filtersNotificate = notificates.filter((notificate) => notificate.id !== id);
        this.setNotificates(filtersNotificate);
    }

    addNotification(notification: NotificationType): void {
        const notificates = [...this.notificates];
        notificates.push(notification);
        this.setNotificates(notificates);
    }

    setNotificates(notificates: NotificationType[]): void {
        this.notificates = notificates;
    }
}
