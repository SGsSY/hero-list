import React, { useState, useEffect, useContext, createContext } from 'react';
import { FlexContainer, FlexItem } from './styled';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { act } from 'react-dom/test-utils';

const Save = (props: any) => {

    const { handleSaveClick } = props;

    const context = useContext(HeroContext);

    return (
        <>
            <p>剩餘點數: {context.LEFT}</p>
            <Button
                onClick={handleSaveClick}
            >儲存</Button>
        </>
    )
}

const AttributeSetting = (props: any) => {

    const { handleClick } = props;

    const context = useContext(HeroContext);

    const AddButton = (props: any) => {
        return (
            <IconButton
                {...props}
            >
                <Add />
            </IconButton>
        )
    }

    const RemoveButton = (props: any) => {
        return (
            <IconButton
                {...props}
            >
                <Remove />
            </IconButton>
        )
    }

    return (
        <ul>
            <li>
                STR
                <AddButton onClick={handleClick('STR', 'add')} />
                {context.STR}
                <RemoveButton onClick={handleClick('STR', 'remove')} />
            </li>
            <li>
                INT
                <AddButton onClick={handleClick('INT', 'add')} />
                {context.INT}
                <RemoveButton onClick={handleClick('INT', 'remove')} />
            </li>
            <li>
                AGI
                <AddButton onClick={handleClick('AGI', 'add')} />
                {context.AGI}
                <RemoveButton onClick={handleClick('AGI', 'remove')} />
            </li>
            <li>
                LUK
                <AddButton onClick={handleClick('LUK', 'add')} />
                {context.LUK}
                <RemoveButton onClick={handleClick('LUK', 'remove')} />
            </li>
        </ul>
    )
}

const defaultValue = {
    "STR": 0,
    "INT": 0,
    "AGI": 0,
    "LUK": 0,
    "LEFT": 0
};

const HeroContext = createContext(defaultValue);
export const HeroProfile = () => {

    const [heroAttribute, setHeroAttribute] = useState(defaultValue);
    const [requery, setRequery] = useState(0);

    useEffect(() => {

    }, [requery]);

    const isMoreThanZero = (num: number) => num > 0;

    const handleClick = (attr: "STR" | "INT" | "AGI" | "LUK", action: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (action === "add") {

            // check LEFT more than zero
            if (!isMoreThanZero(heroAttribute.LEFT)) {
                alert("You don't have left point to add hero attribute");
                return;
            }

            setHeroAttribute({
                ...heroAttribute,
                [attr]: heroAttribute[attr] + 1,
                LEFT: heroAttribute.LEFT - 1
            })
        } else if (action === "remove") {

            // check attribute more than zero
            if (!isMoreThanZero(heroAttribute[attr])) {
                alert(`You must have one point to hero attribute - ${attr}`);
                return;
            }

            setHeroAttribute({
                ...heroAttribute,
                [attr]: heroAttribute[attr] - 1,
                LEFT: heroAttribute.LEFT + 1
            })
        }
    }

    const handleSaveClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // todo validate
        // todo save api
    }

    return (
        <>
            <HeroContext.Provider value={heroAttribute}>
                <FlexContainer>
                    <FlexItem>
                        <AttributeSetting
                            handleClick={handleClick}
                        />
                    </FlexItem>
                    <FlexItem>
                        <Save
                            handleSaveClick={handleSaveClick}
                        />
                    </FlexItem>
                </FlexContainer>
            </HeroContext.Provider>
        </>
    )
}
