import { HeroCard } from 'component/HeroCard/HeroCard';
import { HeroProfile } from 'component/HeroProfile/HeroProfile';

function App() {
  return (
    <div>
      Hello World!
      <HeroCard
        id='1'
        name='Daredevil'
        image='http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg'
      ></HeroCard>
      <HeroProfile></HeroProfile>
    </div>
  );
}

export default App;
