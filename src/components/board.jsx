import React from "react";
import Square from "./square";
import "../App.css"
import { checkTheWinner } from "./util";


class Board extends React.Component{
//setting state for square which will be filled on clicking and set the user to X from first
    state = {
        squares : Array(9).fill(null),
        isPlayerX : true,
    }


    handleClick = (index) =>
    {
        //In order to create a new array without interfearing the original
        const squares = this.state.squares.slice();
        //Two conditions are checked first if the sqaure index is false i.e., it is empty which means user can click in order to prevent clicking on the same button again.... also check if someone has won
        if(squares[index] || checkTheWinner(squares) )
            return;
        //What should the button carry a X or O;
        squares[index] = this.state.isPlayerX ? "X" : "O";

        //setting the state back after performing click on button
        this.setState({squares:squares, isPlayerX:!this.state.isPlayerX})
    }


    render()
    {
        //Displaying the status
        const winner = checkTheWinner(this.state.squares);
        let status = "";
        if(winner)
            status = "Winner is " + winner;
        else if(this.state.isPlayerX) 
            status = "Player X Playing Now" 
        else
            status = "Player O Playing Now";

        return(
            <div>
                <div className = "player-turn">{status}</div>
                <div>
                    ////assingning the indexes manually and providing props 
                    <Square value = {this.state.squares[0]} onClick = {()=>this.handleClick(0)}/>
                    <Square value = {this.state.squares[1]} onClick = {()=>this.handleClick(1)}/>
                    <Square value = {this.state.squares[2]} onClick = {()=>this.handleClick(2)}/>
                </div>
                <div>
                    <Square value = {this.state.squares[3]} onClick = {()=>this.handleClick(3)} />
                    <Square value = {this.state.squares[4]} onClick = {()=>this.handleClick(4)}/>
                    <Square value = {this.state.squares[5]} onClick = {()=>this.handleClick(5)}/>
                </div>
                <div>
                    <Square value = {this.state.squares[6]} onClick = {()=>this.handleClick(6)} />
                    <Square value = {this.state.squares[7]} onClick = {()=>this.handleClick(7)}/>
                    <Square value = {this.state.squares[8]} onClick = {()=>this.handleClick(8)}/>
                </div>
            </div>
        );
    }
}

export default Board;