import React from 'react';

class GuessForm extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            query: '',
            filteredChampions: [],
            selectedChampion: '',
        }
    }

    onChangeChampionInput = (e) => {
        const value = e.target.value
        this.setState({
            query: value,
            filteredChampions: this.props.possibleChampions.filter(champ => champ.includes(value)),
        });
    }

    onClickSelectChampion(champion) {
        this.inputRef.current.value = champion
        this.setState({
            query: champion,
            filteredChampions: [],
        })
    }

    onSubmitChampion = (event) => {
        event.preventDefault()
        this.setState({
            filteredChampions: [],
        })
        if (this.props.canGuess) {
            this.props.onGuessChampion(this.state.query)
        }
    }

    render() {
        return (
            <div>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                onSubmit={this.onSubmitChampion}>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='col-span-2'>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                   onChange={this.onChangeChampionInput}
                                   ref={this.inputRef}
                                   type="text"
                                   id="champ"
                                   name="champ"
                                   placeholder="Select a Champion"/>
                        </div>
                        <div>
                            <input
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                type="submit"
                                disabled={!this.props.canGuess}
                                value=">"/>
                        </div>
                    </div>
                </form>
                <div style={{
                    position: "absolute",
                    backgroundColor: "white"
                }}>
                    <ul>
                        {(this.state.query === '' ? "" : this.state.filteredChampions.map(champ => {
                            return <li key={champ} onClick={event => this.onClickSelectChampion(champ)}>{champ}</li>
                        }))}
                    </ul>
                </div>
            </div>

        )
    }
}

export default GuessForm;