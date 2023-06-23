/* eslint-disable no-useless-constructor */
import React from 'react';

class ChampionStatus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedChampion: '',
            options: {}
        }
        // this.checkChamp = this.checkChamp.bind(this);
        // this.onChangeChampionImput = this.onChangeChampionImput.bind(this);

    }

    async componentDidMount() {
        const {selectedChampion} = this.props;
        if (selectedChampion) {
            try {
                const imageModule = await import(`../assets/images/champion-squares/${selectedChampion}.png`);
                this.setState({imageModule: imageModule.default});
            } catch (error) {
                console.error('Erro ao carregar a imagem:', error);
            }
        }
    }

    render() {
        const {imageModule} = this.state;

        if (!imageModule) {
            return null;
        }

        return (


            <div className="overflow-x-auto my-3">
                <div className="flex flex-nowrap">
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 bg-cover bg-center"
                         style={{
                             backgroundImage: `url(${imageModule})`

                         }}></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0"></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0"></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0"></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
                    <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
                </div>
            </div>

        )
    }
}

export default ChampionStatus;

//aprendendo alguns detalhes
