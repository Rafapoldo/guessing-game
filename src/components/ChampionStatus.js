/* eslint-disable no-useless-constructor */
import React from 'react';


class ChampionStatus extends React.Component{
   

   constructor(props){
      super(props)
      this.state = {
         selectedChampion: '',
         options: {}
      }
      // this.checkChamp = this.checkChamp.bind(this); 
      // this.onChangeChampionImput = this.onChangeChampionImput.bind(this);

   }

   render(){
      
      return(
         // <div className='grid grid-cols-8 gap-1'>
         //    <div className='h-50 border-2'>1</div>
         //    <div className='border-2'>2</div>
         //    <div className='border-2'>3</div>
         //    <div className='border-2'>4</div>
         //    <div className='border-2'>5</div>
         //    <div className='border-2'>6</div>
         //    <div className='border-2'>7</div>
         //    <div className='border-2'>8</div>
         // </div>
         <div className="overflow-x-auto my-3">
            <div className="flex flex-nowrap">
               <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
               <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
               <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
               <div className="bg-gray-300 h-16 w-16 border-2 border-gray-500 flex-shrink-0 "></div>
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
