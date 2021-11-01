import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default function PokemonIndex({ pageContext: { pokemonIndex } }) {
	return (
		<Layout>
			<div>
				<ul>
					<h4>Page index:</h4>
					<p>
						<Link to="/pokemonindex/page1/">1</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page2/">2</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page3/">3</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page4/">4</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page5/">5</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page6/">6</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page7/">7</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page8/">8</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page9/">9</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page10/">10</Link> &nbsp;&nbsp;
					</p>
					{pokemonIndex.map(pokemon => (
						<li key={pokemon.id}>
						<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						<p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
						</li>
					))}
					<h4>Page index:</h4>
					<p>
						<Link to="/pokemonindex/page1/">1</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page2/">2</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page3/">3</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page4/">4</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page5/">5</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page6/">6</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page7/">7</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page8/">8</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page9/">9</Link> &nbsp;&nbsp;
						<Link to="/pokemonindex/page10/">10</Link> &nbsp;&nbsp;
					</p>
				</ul>
			</div>
		</Layout>
	)
}