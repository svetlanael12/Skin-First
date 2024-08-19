export enum ClientRouters {
    startScreen = '/startScreen',
    login = '/auth/login',
    registration = '/auth/registration',
    logout = '/logout',
    forgetPassword = 'forgetPassword',

    home = '/home',

    doctors = '/doctors',
    doctor = '/doctor/$id',
    doctorShedule = '/doctor/$id/shedule',
    doctorSheduleDetails = '/doctor/$id/shedul/$id/details',

    settings = '/settings',
    settingsNotification = '/settingsNotification',
    passwordManager = '/passwordManager',
    privacyPolice = '/helpCenter/privacyPolice',
    FAQ = '/helpCenter/FAQ',

    notification = 'notification',

    chat = 'chat',

    profile = '/profile',
    profileEdit = '/profile/edit',
}
