import React from 'react';
import GuessForm from "./GuessForm";
import ChampionStatus from "./ChampionStatus";

class Game extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            possibleChampions: ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Belveth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Milio", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renata", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"],
            guessedChampions: []
        }
        this.onGuessChampion=this.onGuessChampion.bind(this)
    }

    onGuessChampion(champion) {
        console.log(this.state)
        let indexOfChampion = this.state.possibleChampions.indexOf(champion)
        delete this.state.possibleChampions[indexOfChampion]
        this.setState({
            possibleChampions: this.state.possibleChampions,
            guessedChampions: this.state.guessedChampions.concat(champion),
        })
    }

    fetchApi() {
        fetch("https://guessing-game-387200.uc.r.appspot.com/v1/games")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    render(){
        return(
            <div>
                <div className='grid md:grid-cols-3 p-5'>
                    <div className="col-start-2 col-end-3 justify-center items-center">
                        <h1 className='bg-gray-200 py-4' onClick={this.fetchApi}>
                            Guess today’s champion!
                            Start typing one champion name
                        </h1>
                        <GuessForm
                            possibleChampions={this.state.possibleChampions}
                            onGuessChampion={this.onGuessChampion}/>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4 justify-center items-center p-5'>
                    <div className="grid items-center justify-center">
                        {(this.state.guessedChampions.length === 0 ? "" :
                            this.state.guessedChampions.map(champ => {
                                return <ChampionStatus key={champ} selectedChampion={champ}/>
                            }))}
                    </div>
                </div>
            </div>
        )
    }

}

export default Game;