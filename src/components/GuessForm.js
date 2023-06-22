/* eslint-disable no-useless-constructor */
import React from 'react';
import ChampionStatus from './ChampionStatus';

class GuessForm extends React.Component{
   

   constructor(props){
      super(props)
      this.state = {
         selectedChampion: '',
         options: {}
      }
      // this.checkChamp = this.checkChamp.bind(this); 
      // this.onChangeChampionImput = this.onChangeChampionImput.bind(this);

   }

   

   checkChamp = () => {
      console.log(this.state.selectedChampion)
   }

   onChangeChampionImput = (e) =>{
      console.log(e.target.value);
      this.setState({selectedChampion: e.target.value});
   }

   // componentDidMount() {
   //    fetch('http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json')
   //       .then(response => response.json())
   //       .then(data => {
   //          const options = {};
           
   //          Object.keys(data.data).forEach((propriedade, value) => {
   //             options[value] = propriedade;
   //          });
   //          // console.log(options);
   //          this.setState(
   //             { options },
   //             () => {
   //               console.log(this.state.options);
   //             }
   //          );
   //    }).catch(error => {
   //       console.error('Error fetching champions:', error);
   //    });
   //    console.log(this.state.options);   
   // }

   render(){
      
      return(
         <div>
            <div className='grid md:grid-cols-3 p-5'>
               <div className="col-start-2 col-end-3 justify-center items-center">
                  <h1 className='bg-gray-200 py-4'>
                     Guess today’s champion!
                     Start typing one champion name
                  </h1>   
                  <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={this.checkChamp}>
                     <div className='grid grid-cols-3 gap-2'>
                        <div className='col-span-2'>
                           <input onChange={this.onChangeChampionImput} 
                                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                 type="text" 
                                 id="champ" 
                                 options={[{label: 'teemo', value: 'teemo'}]}
                                 name="champ" placeholder="Select a Champion"/>
                        </div>
                        <div>
                           <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value=">" />
                        </div>

                     </div>
                     
                  </form>
               </div>
            </div>
            <div className='grid grid-cols-1 gap-4 justify-center items-center p-5'>
               <div className="grid items-center justify-center">
                  <ChampionStatus selectedChampion="Zilean"/>
                  <ChampionStatus selectedChampion="Vi"/>
                  <ChampionStatus selectedChampion="Yasuo"/>
                  <ChampionStatus selectedChampion="Lux"/>

               </div>
            </div>
         </div>
      )
   }
}

export default GuessForm;

//aprendendo alguns detalhes
