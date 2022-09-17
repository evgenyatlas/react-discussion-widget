import { declOfNum } from "../str/declOfNum"
import { padNumber } from "../str/padNumber"

const months: Record<number, string> = {
    0: 'янв',
    1: 'фев',
    2: 'мар',
    3: 'апр',
    4: 'мая',
    5: 'июн',
    6: 'июл',
    7: 'авг',
    8: 'сен',
    9: 'окт',
    10: 'ноя',
    11: 'дек'
}

export function timeAgo(date: number | Date) {

    const now = Date.now()
    const timeDiff = new Date(date)
    const diff = now - (date instanceof Date ? date.getTime() : date)
    if (diff < 1000 * 60 * 1.5) {
        return 'только что';
    } else if (diff > 1000 * 5 && diff < 1000 * 60 * 60) {
        const time = Math.round(diff / 1000 / 60)
        return time + ' ' + declOfNum(time, ['минуту', 'минуты', 'минут']) + ' назад'
    } else if (diff > 1000 * 60 * 60 && diff < 1000 * 60 * 60 * 24) {
        const time = Math.round(diff / 1000 / 60 / 60)
        return time + ' ' + declOfNum(time, ['час', 'часа', 'часов']) + ' назад'
    } else if (diff > 1000 * 60 * 60 * 24 && timeDiff.getFullYear() === new Date().getFullYear()) {
        const day = timeDiff.getDate()
        var hours = timeDiff.getHours()
        const minutes = timeDiff.getMinutes()
        return day + ' ' + months[timeDiff.getMonth()] + ' в ' + hours + ':' + padNumber(minutes)
    } else {
        const day = timeDiff.getDate()
        return day + ' ' + months[timeDiff.getMonth()] + ' ' + timeDiff.getFullYear()
    }
}