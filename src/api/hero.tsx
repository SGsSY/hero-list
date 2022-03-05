import axios from "axios";

const heroInstance = axios.create({
    baseURL: "https://hahow-recruit.herokuapp.com",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
});

export const getHerolist = () => heroInstance.get('/heroes');
export const getHero = (id: string) => heroInstance.get(`/heroes/${id}`) ;
export const getHeroProfile = (id: string) => heroInstance.get(`/heroes/${id}/profile`);
export const patchHeroProfile = (id: string, attr: any) => heroInstance.patch(`/heroes/${id}/profile`, attr);

export const HeroApi = {
    getHerolist,
    getHero,
    getHeroProfile,
    patchHeroProfile
};