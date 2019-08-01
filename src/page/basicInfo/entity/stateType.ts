export type IBasicInfo = {
    entity: string,
    categopryCd: string,
    name1: string,
    name2: string,
    name3: string,
    errors: {
        entity: string,
        categopryCd: string,
        name1: string,
        name2: string,
        name3: string
    }
};

export const defaultBasicInfo: IBasicInfo = {
    entity : '',
    categopryCd : '',
    name1 : '',
    name2 : '',
    name3 : '',
    errors: {
        entity : '',
        categopryCd : '',
        name1 : '',
        name2 : '',
        name3 : ''
    }
}
