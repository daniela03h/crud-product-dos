export interface IProduct {
    title: string;
    description: string;
    price: string;
    image?: string
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
    onClick?: () => void;
    id?: string;
    className?: string;
    name?: string;
}

export interface ITextArea {
    placeholder: string;
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string
}