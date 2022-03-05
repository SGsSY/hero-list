import React from 'react';
import { HeroCard } from 'component/HeroCard/HeroCard';
import { HeroProfile } from 'component/HeroProfile/HeroProfile';
import { HeroApi } from 'api/hero';

function App() {

  const [heroList, setHeroList] = React.useState([]);

  React.useEffect(() => {
    HeroApi.getHerolist().then(res => setHeroList(res.data));
  }, []);

  return (
    <div>
      Hello World!
      {heroList.map((hero: any) => <HeroCard
        id={hero.id}
        name={hero.name}
        image={hero.image}
      ></HeroCard>)}
      {/* <HeroCard
        id='1'
        name='Daredevil'
        image='http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg'
      ></HeroCard> */}
      <HeroProfile></HeroProfile>
    </div>
  );
}

export default App;
