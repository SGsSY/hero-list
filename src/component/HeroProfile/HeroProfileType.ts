export type SaveProps = {
    handleSaveClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type AttributeSettingProps = {
    handleClick: (attr: "str" | "int" | "agi" | "luk", action: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type IconButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}