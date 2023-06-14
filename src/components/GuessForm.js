/* eslint-disable no-useless-constructor */
import React from 'react';


class GuessForm extends React.Component{
   

   constructor(props){
      super(props)
      this.state = {
         selectedChampion: ''
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

   render(){
      
      return(
         <div className='grid grid-cols-3 gap-4'>
            <div></div>
            <div className="justify-center items-center">
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
         
      )
   }
}

export default GuessForm;

//aprendendo alguns detalhes
