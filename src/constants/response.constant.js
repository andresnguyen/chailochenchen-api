import { INTERNAL_SERVER } from './httpStatusCode.constant'

export const singleResponse = { data: {} }
export const pluralResponse = { data: [] }
export const failedResponse = {
    code: INTERNAL_SERVER,
    error: 'Server error'
}
