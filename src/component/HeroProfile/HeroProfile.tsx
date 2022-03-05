import React, { useState, useEffect, useContext, createContext } from 'react';
import { FlexContainer, FlexItem } from './styled';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { HeroApi } from 'api/hero';

const Save = (props: any) => {

    const { handleSaveClick } = props;

    const context = useContext(HeroContext);

    return (
        <>
            <p>剩餘點數: {context.left}</p>
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
                <AddButton onClick={handleClick('str', 'add')} />
                {context.str}
                <RemoveButton onClick={handleClick('str', 'remove')} />
            </li>
            <li>
                INT
                <AddButton onClick={handleClick('int', 'add')} />
                {context.int}
                <RemoveButton onClick={handleClick('int', 'remove')} />
            </li>
            <li>
                AGI
                <AddButton onClick={handleClick('agi', 'add')} />
                {context.agi}
                <RemoveButton onClick={handleClick('agi', 'remove')} />
            </li>
            <li>
                LUK
                <AddButton onClick={handleClick('luk', 'add')} />
                {context.luk}
                <RemoveButton onClick={handleClick('luk', 'remove')} />
            </li>
        </ul>
    )
}

const defaultValue = {
    "str": 0,
    "int": 0,
    "agi": 0,
    "luk": 0,
    "left": 0
};

const HeroContext = createContext(defaultValue);
export const HeroProfile = () => {

    const [heroAttribute, setHeroAttribute] = useState(defaultValue);
    const [requery, setRequery] = useState(0);

    useEffect(() => {
        HeroApi.getHeroProfile("1").then((res) => setHeroAttribute({
            ...res.data,
            left: 0
        }));
    }, [requery]);

    const isMoreThanZero = (num: number) => num > 0;

    const handleClick = (attr: "str" | "int" | "agi" | "luk", action: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        if (action === "add") {

            // check LEFT more than zero
            if (!isMoreThanZero(heroAttribute.left)) {
                alert("You don't have left point to add hero attribute");
                return;
            }

            setHeroAttribute({
                ...heroAttribute,
                [attr]: heroAttribute[attr] + 1,
                left: heroAttribute.left - 1
            })
        } else if (action === "remove") {

            // check if removed then the attribute is still more than zero
            if (!isMoreThanZero(heroAttribute[attr] - 1)) {
                alert(`You must have one point to hero attribute - ${attr}`);
                return;
            }

            setHeroAttribute({
                ...heroAttribute,
                [attr]: heroAttribute[attr] - 1,
                left: heroAttribute.left + 1
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
