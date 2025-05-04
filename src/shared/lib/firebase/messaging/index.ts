import { isSupported } from 'firebase/messaging'
import { getToken, getMessaging } from 'firebase/messaging'
import { app } from '../app'

export const messaging = getMessaging(app)
isSupported().then(bool => console.log(bool))

const key = 'BEUGIqjaS0ur6E6SRyOxmVbAmwntK9JGMk7-i-uhNOgISQ6Bixr2i-7RSGhQQPE2z2JRoOl-xcJexkeDLEngBic'

export const requestPermissions = () => {
    const permissions = Notification.permission
    if (permissions === 'granted') {
        getToken(messaging, { vapidKey: key }).then(token => {
            console.log(token)
            sessionStorage.setItem('fbToken', token)
        }).catch(err => {
            console.log("не удалось получить токен: ", err)
        })
    }
}

export const sendEvent = async (obj: { type: string, params: any }) => {
    navigator.serviceWorker.ready.then(register => {
        register.active?.postMessage(JSON.stringify(obj))
    }).catch(err => console.error(err))
}
