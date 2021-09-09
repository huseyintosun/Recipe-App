import React, { useState } from 'react'
import Header from '../../components/header/Header'
import axios from 'axios';
import { MainContainer, HomeImg, ImgDiv } from './style'
import RecipeCardComp from './RecipeCardComp'
import homeSvg from '../../assets/home.svg';

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = '87c3d343'
const APP_KEY = '885bd820e7c4e0968632ae88cd4c3c93'

function Home() {
    // const [query, setQuery] = useState("apple")
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState()
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    const getData = async () => {
        if (query !== "") {
            const res = await axios.get(url)
            // console.log(`result`, res)
            if (res.status === 200) {
                // console.log(`res.data.hits`, res.data.hits)
                setRecipes(res.data.hits)
            }
        } else {
            alert("Please fill the form")
        }
    }
    // useEffect(() => {
    //     getData();
    //     return () => {

    //     }
    // }, [])
    return (
        <div>
            <Header
                setQuery={setQuery}
                query={query}
                getData={getData}
                mealTypes={mealTypes}
                setMeal={setMeal}
                meal={meal}
            />
            {recipes ? (
                <MainContainer>
                    {recipes?.map((recipe, index) => (
                        <RecipeCardComp key={index} recipe={recipe?.recipe} />
                    ))}
                </MainContainer>
            ) : (
                <ImgDiv>
                    <HomeImg src={homeSvg} />
                </ImgDiv>
            )}

        </div>
    )
}

export default Home
