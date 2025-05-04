import { getMessaging, getToken } from 'firebase/messaging'
import { app } from '../app'

export const messaging = getMessaging(app)
const key = 'BEUGIqjaS0ur6E6SRyOxmVbAmwntK9JGMk7-i-uhNOgISQ6Bixr2i-7RSGhQQPE2z2JRoOl-xcJexkeDLEngBic'
const requestPermissions = () => {
    Notification.requestPermission().then(perrmissions => {
        if (perrmissions === 'granted') {
            console.log("Получили")
            getToken(messaging, { vapidKey: key }).then(token => {
                console.log(token)
            }).catch(err => {
                console.error(err)
            })
        }
        else if (perrmissions === 'denied') {
            console.log("отказались")
        }
        else {
            console.log("дефолт")
        }
    })
}
export default requestPermissions