import { HOST } from '../const/host'

export function setRoute(path) {
    sessionStorage.setItem('route', path)
}

export function getRoute() {

    if (sessionStorage.getItem('route').indexOf("collectsonglistdetail") > 0) {
        return `${HOST}/me`
    } else if (sessionStorage.getItem('route').indexOf("ranking") > 0) {
        return `${HOST}/vod`
    } else if (sessionStorage.getItem('route').indexOf("style-songs-list-detail") > 0) {
        return `${HOST}/vod`
    }
    return sessionStorage.getItem('route')
}