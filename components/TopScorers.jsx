import React, { useEffect, useState } from 'react'
import Topscorer from './TopScorer'
import Search from './Search'
import { retrieveTopScorers, filterTopScorers } from '../utils/topscorers'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [topScorersList, setTopScorersList] = useState([])
  const [filteredTopScorersList, setFilteredTopScorers] = useState([])

  useEffect(() => {
    async function pullData() {
      const topScorers = await retrieveTopScorers()

      setTopScorersList(topScorers)
      setFilteredTopScorers(topScorers)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterTopScorers(topScorersList, searchTerm)

    setFilteredTopScorers(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">NHL ALL TIME TOP GOAL SCORERS</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredTopScorersList.map(topscorers => (
          <Topscorer
            key={topscorers.id}
            id={topscorers.id}
            name={topscorers.name}
            goals={topscorers.goals}
          />
        ))
      }
    </div>
  )
}
