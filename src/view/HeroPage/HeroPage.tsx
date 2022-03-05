import React from 'react';
import { HeroCard } from 'component/HeroCard/HeroCard';
import { HeroProfile } from 'component/HeroProfile/HeroProfile';
import { HeroApi } from 'api/hero';
import { HeroPageWrapper, FlexContainer } from './styled';

export const HeroPage = () => {
    const [heroList, setHeroList] = React.useState([]);

    React.useEffect(() => {
        HeroApi.getHerolist().then(res => setHeroList(res.data));
    }, []);

    return (
        <HeroPageWrapper>
            <FlexContainer>
                {heroList.map((hero: any) => <HeroCard
                    id={hero.id}
                    name={hero.name}
                    image={hero.image}
                ></HeroCard>)}
            </FlexContainer>
            <HeroProfile></HeroProfile>
        </HeroPageWrapper>
    );
}
