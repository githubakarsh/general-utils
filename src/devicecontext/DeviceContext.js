const DESKTOP = 'Desktop', IOS = 'IOS', ANDROID = 'Android';


const getDeviceContext = () => {
    const androidType = typeof AndroidInterface !== 'undefined' ? ANDROID : null;

    const iosType = webkit !== 'undefined' && window.webkit.messageHandlers.webAppLoaded ? IOS : null;

    const device = androidType || iosType;

    return {
        device: device || DESKTOP,
        isNative : device ? true : false,
    }
}

export default getDeviceContext;
