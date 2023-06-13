/* eslint-disable no-useless-constructor */
import React from 'react';


class Carro  extends React.Component{

   constructor(props){
      super(props)
      this.modelo = "Gol"
      this.state = {
         ligado: false,
         velAtual: 0,
         message_retorno: ''
      }
   }

   ligarDesligar(){
      // this.setState({ligado:!this.state.ligado})
      this.setState(
         (state) => ({
            ligado:!state.ligado,
            velAtual: state.ligado === false ? state.velAtual : 0, 
            message_retorno: ''
         })
      )
   }

   acelerar(){
      if(this.state.ligado){
         this.setState(
            (state, props) => ({
               velAtual: state.velAtual + props.fator
            })
         )
      }else{
         this.setState(
            (state, props) => ({
               message_retorno: "Ligue o carro para poder acelerar"
            })
         )
      }
      
   }
   
   render(){
      return(
         <div>
            <h1 className='bg-gray-200 py-4'>Meu carro</h1>   
            <p>Modelo: {this.modelo}</p> 
            <p>Ligado: {this.state.ligado ? 'SIM': 'NAO'}</p> 
            <p>Val. Atual: {this.state.velAtual}</p> 
            <p className='retorno'>{this.state.message_retorno}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={()=> this.ligarDesligar()}>
               {this.state.ligado ? 'Desligar Carro': 'Ligar Carro'}
            </button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2' onClick={()=> this.acelerar()}>
               Acelerar
            </button>
        
         </div>
        
      )
   }
}

export default Carro;

//aprendendo alguns detalhes
