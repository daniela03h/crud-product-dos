export interface IProduct {
    id?: string
    title: string;
    description: string;
    price: string;
    image: string
}

export interface ILabel {
    name: string;
}

export interface IInput {
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string | number;
}

export interface IButton {
    onClick?: any;
    id?: string;
    className?: string;
    name?: string | React.ReactNode;
    color?: string;
}

export interface ITextArea {
    placeholder: string;
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string
}

export interface IImage {
    src: string,
    alt?: string
}

export interface ITableRowData {
    [key: string]: string;
}

export interface CustomTableProps {
    columns: string[];
    data: ITableRowData[];
}

export interface ITrProps {
    columns: string[];
    row: ITableRowData;
}

export interface ITcProps {
    content: string | React.ReactNode;
}

export interface ITableHeaderProps {
    columns: string[];
}
