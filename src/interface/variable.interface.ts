export interface InitialStateProps {
    lang: string;
    social: any,
    loadingPage: boolean;
    comments: CommentProps[]
}

export interface CommentProps {
    id: number;
    name: string;
    text: string;
    stars: number
}