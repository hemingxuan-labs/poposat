import service from '@/utils/request.js'
// import { objToUrl } from '@/utils/utils.js'

// 用户签名
export const userDoLong = (data) => {
    return service({
        url: `/api/needex/user/doLong`,
        method: 'post',
        data
    })
}
