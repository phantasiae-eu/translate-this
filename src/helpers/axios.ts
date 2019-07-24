import { AxiosRequestConfig } from 'axios'

export const initialiseOptions = (
    baseURL: string,
    apiVersion: string
): AxiosRequestConfig => ({
    method: 'get',
    baseURL,
    url: 'languages',
    params: { 'api-version': apiVersion },
})

export const translateOptions = (
    baseURL: string,
    apiVersion: string,
    from: string,
    to: string,
    key: string,
    text: string
): AxiosRequestConfig => ({
    method: 'post',
    baseURL,
    url: 'translate',
    params: {
        'api-version': apiVersion,
        from,
        to,
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
})

export const transliterationOptions = (
    baseURL: string,
    apiVersion: string,
    key: string,
    language: string,
    fromScript: string,
    toScript: string,
    text: string
): AxiosRequestConfig => ({
    method: 'post',
    baseURL,
    url: 'transliterate',
    params: {
        'api-version': apiVersion,
        language,
        fromScript,
        toScript,
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
})
