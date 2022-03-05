import React from 'react';
import { HeroCard } from 'component/HeroCard/HeroCard';
import { HeroProfile } from 'component/HeroProfile/HeroProfile';
import { HeroApi } from 'api/hero';
import { HeroPageWrapper, FlexContainer } from './styled';
import { Routes, Route, Link, Outlet } from "react-router-dom";

const HeroList = () => {

    const [heroList, setHeroList] = React.useState([]);

    React.useEffect(() => {
        HeroApi.getHerolist().then(res => setHeroList(res.data));
    }, []);

    return (
        <>
            <FlexContainer>
                {heroList.map((hero: any) =>
                    <Link to={`${hero.id}`} key={`${hero.id}-${hero.name}`}>
                        <HeroCard
                            id={hero.id}
                            name={hero.name}
                            image={hero.image}
                        ></HeroCard>
                    </Link>
                )}
            </FlexContainer>
            <Outlet />
        </>
    )
}

export const HeroPage = () => {

    return (
        <HeroPageWrapper>
            <Routes>
                <Route path='/heroes' element={<HeroList />}>
                    <Route path='/heroes/:id' element={<HeroProfile />} />
                </Route>
            </Routes>
        </HeroPageWrapper>
    );
}