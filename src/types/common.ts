export enum SnackbarType {
    Error = 'Error',
    Success = 'Success',
    Info = 'Info',
}

export type NotificationType = {
    id: number;
    message: string;
    type: SnackbarType;
    autoHideDuration?: number;
};

export type IdDescription = {
    id: string | number;
    description?: string;
};
