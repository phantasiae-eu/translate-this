import { AxiosRequestConfig } from 'axios'

export const translateOptions = (
    baseURL: string,
    apiVersion: string,
    from: string,
    to: string,
    key: string,
    text: string
): AxiosRequestConfig => {
    return {
        method: 'post',
        baseURL,
        url: 'translate',
        params: {
            'api-version': apiVersion,
            from,
            to: to,
        },
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            'Content-type': 'application/json',
        },
        data: [
            {
                text,
            },
        ],
    }
}
