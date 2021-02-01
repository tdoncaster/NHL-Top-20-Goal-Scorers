import fetchtopscorers from '../actions/topscorers'

export const filterTopScorers = (list, term) => list.filter(topscorer => (
  topscorer.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveTopScorers = async () => {
  const topscorers = await fetchtopscorers()

  return topscorers
}
