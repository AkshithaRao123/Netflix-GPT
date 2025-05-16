import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSeach from './GPTSeach';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ?
        <GPTSeach /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
    </div>
  )
}

export default Browse
