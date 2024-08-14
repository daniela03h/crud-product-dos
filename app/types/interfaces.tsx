export interface ILabel {
    name: string;
}

export interface IInput {
    type: string;
    placeholder: string;
    id?: string;
    onChange?: () => void;
    className?: string;
    name?: string;
}

export interface IButton {
    onClick?: () => void;
    id?: string;
    className?: string;
    name?: string;
}

export interface ITextArea{
    placeholder: string;
    id?: string;
    name?: string;
}