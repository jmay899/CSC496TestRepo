const fetch = require('node-fetch');require('dotenv').config();async function getData() {	const data = JSON.stringify({		query: `{			allWpPost {				edges {					node {						id						slug					}				}			}		}`,	});  	const postTemplate = path.resolve(`./src/templates/post.js`)	result.data.allWpPost.edges.forEach(edge => {		createPage({			path: edge.node.slug,			component: slash(postTemplate),			context: {				id: edge.node.id,			},		})}	)}/*-----------------------------------------*/const axios = require("axios")const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)const getPokemonData = names =>  Promise.all(    names.map(async name => {      const { data: pokemon } = await get(`/pokemon/${name}`)      return { ...pokemon }    })  )exports.createPages = async ({ actions: { createPage } }) => {  const allPokemon = await getPokemonData(["dragonite","goomy", "abra", "sylveon",])  createPage({    path: `/pokemon`,    component: require.resolve("./src/templates/all-pokemon.js"),    context: { allPokemon },  })    let pokemonIndex = await getPokemonData([1,2,3,4,5,6,7,8,9,10,])  createPage({    path: `/pokemonindex/page1`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([11,12,13,14,15,16,17,18,19,20,])  createPage({    path: `/pokemonindex/page2`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([21,22,23,24,25,26,27,28,29,30,])  createPage({    path: `/pokemonindex/page3`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([31,32,33,34,35,36,37,38,39,30,])  createPage({    path: `/pokemonindex/page4`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([41,42,43,44,45,46,47,48,49,50,])  createPage({    path: `/pokemonindex/page5`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([51,52,53,54,55,56,57,58,59,60,])  createPage({    path: `/pokemonindex/page6`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([61,62,63,64,65,66,67,68,69,70,])  createPage({    path: `/pokemonindex/page7`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([71,72,73,74,75,76,77,78,79,80,])  createPage({    path: `/pokemonindex/page8`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([81,82,83,84,85,86,87,88,89,90,])  createPage({    path: `/pokemonindex/page9`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })  pokemonIndex = await getPokemonData([91,92,93,94,95,96,97,98,99,100,])  createPage({    path: `/pokemonindex/page10`,    component: require.resolve("./src/templates/pokemonindex-template.js"),    context: { pokemonIndex },  })}