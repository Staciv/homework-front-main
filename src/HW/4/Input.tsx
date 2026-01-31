import React from "react";

type InputPropsType = {
    currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
    setCurrentText: React.Dispatch<React.SetStateAction<string>>// НУЖНО ПРОТИПИЗИРОВАТЬ
};


export const Input = ({currentText, setCurrentText}: InputPropsType) => {
    const onChangeHandler = (event: string) => {
        setCurrentText(event)
    };

    return (
        <input id={'hw04-input'} type="text" value={currentText}
               onChange={(e) => onChangeHandler(e.target.value)}/>
    );
};
