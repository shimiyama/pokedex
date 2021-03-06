import React from 'react';
import {Link} from "react-router-dom";

class PokemonDetail extends React.Component {
    render () {
      const {params} = this.props.match
      const id = parseInt(params.id, 10)
      const pokemon = pokemons.filter(e => e.id === id)[0]
      return (
        <div>
          <img src={`${process.env.PUBLIC_URL}/pokemon.json-master/pokemon_dot/` + pokemon.id + `.png`} alt="Logo" />
          <h1>{pokemon.name}</h1>
          <div><Link to='/'>TOP</Link></div>
        </div>
      )
    }
  }

export default PokemonDetail;

const pokemons = [
  {id:1,name:"フシギダネ"},
  {id:2,name:"フシギソウ"},
  {id:3,name:"フシギバナ"},
  {id:4,name:"ヒトカゲ"},
  {id:5,name:"リザード"},
  {id:6,name:"リザードン"},
  {id:7,name:"ゼニガメ"},
  {id:8,name:"カメール"},
  {id:9,name:"カメックス"},
  {id:10,name:"キャタピー"},
  {id:11,name:"トランセル"},
  {id:12,name:"バタフリー"},
  {id:13,name:"ビードル"},
  {id:14,name:"シミズ"},
  {id:15,name:"スピアー"}
];