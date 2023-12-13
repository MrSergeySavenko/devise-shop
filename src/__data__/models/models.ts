export interface IDataInfo {
    id: string;
    name: string;
    cost: number;
    imgUrl: string;
    date: string;
}

export interface IDataEelement {
    title: string;
    info: Array<IDataInfo>;
}

export interface IData {
    notebook: IDataEelement;
    phone: IDataEelement;
    notepad: IDataEelement;
    headphone: IDataEelement;
}

export interface IDataDetails {}

export interface IDataState {
    data: IData | null;
    isLoading: boolean;
    isError: boolean;
}
