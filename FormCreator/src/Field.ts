export interface Field {
    name: string;
    area: HTMLElement;
    render(): HTMLElement;
    getValue(): any;
}
