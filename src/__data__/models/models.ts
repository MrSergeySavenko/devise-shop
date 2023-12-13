export interface IData {
    type: string;
    title: string;
    name: string;
    date: string;
    colors: Array<string>;
    coment: string;
    cost: number;
    url: string;
}

export interface IDataDetails {}

export interface IDataState {
    data: Array<Array<IData>> | null;
}
