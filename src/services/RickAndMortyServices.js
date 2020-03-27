import axios from 'axios'

const https = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const allCharacters = (page) => https.get(`/character?page=${page}`)
const character = (id) => https.get(`/character/${id}`)
const characters = (ids) => https.get(`/character/${ids}`)
const filterCharacters = (filter) => https.get(`/character?${filter}`) 
//Filters: name, status(alive, dead or unknown), species, type, gender(female, male, genderless or unknown)

const allLocations = () => https.get('/location')
const location = (id) => https.get(`/location/${id}`)
const locations = (ids) => https.get(`/location/${ids}`)
const filterLocations = (filter) => https.get(`location?${filter}`)
//Filters: name, type, dimension

const allEpisodes = () => https.get('/episode')
const episode = (id) => https.get(`/episode/${id}`) 
const episodes = (ids) => https.get(`/episode/${ids}`)
const filterEpisodes = (filter) => https.get(`/episode?${filter}`)
//Filters: name, episode

export default {
    allCharacters,
    character,
    characters,
    filterCharacters,
    allLocations,
    location,
    locations,
    filterLocations,
    allEpisodes,
    episode,
    episodes,
    filterEpisodes
}