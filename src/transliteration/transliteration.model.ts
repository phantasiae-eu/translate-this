interface ToScript {
    code: string
    dir: string
    name: string
    nativeName: string
}

interface Script extends ToScript {
    toScripts: ToScript[]
}

interface TransliterationRawInner {
    name: string
    nativeName: string
    scripts: Script[]
}

export interface Transliteration extends TransliterationRawInner {
    code: string
}

export interface TransliterationRaw {
    0: string
    1: TransliterationRawInner
}
