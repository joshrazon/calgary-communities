import { useState, useEffect } from 'react';
import CommunityList from '../CommunityList/CommunityList';
import { getHomes, getHomesAsync, getCommunitiesAsync, getCommunities } from './data';
import { Home, Community } from '../../types';
import './App.css';

export default function App() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    async function fetchCommunities() {
      let result = await getCommunitiesAsync();

      if (result.error) {
        console.error(result.error.message);
        let data = getCommunities();
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCommunities(data);
      } else {
        result.sort((a: Community, b: Community) => (a.name > b.name ? 1 : -1));
        setCommunities(result);
      }
    }

    if (communities.length === 0) {
      fetchCommunities();
    }
  }, [communities]);

  useEffect(() => {
    async function fetchHomes() {
      let result = await getHomesAsync();

      if (result.error) {
        console.error(result.error.message);
        let data = getHomes();
        setHomes(data);
      } else {
        setHomes(result);
      }
    }

    if (homes.length === 0) {
      fetchHomes();
    }
  }, [homes]);

  return (
    <div className="App">
      <CommunityList communities={communities} homes={homes} />
    </div>
  );
}
