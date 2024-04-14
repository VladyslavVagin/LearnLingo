import React, {useState} from 'react'
import ListFavorites from './ListFavorites/ListFavorites'

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(null);

  return (
    <div>
      <ListFavorites favorites={favorites} setFavorites={setFavorites}/>
    </div>
  )
}

export default FavoritesPage