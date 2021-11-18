import CommunityList from '../CommunityList/CommunityList';
import { getHomes } from './data/getHomes';
import { getCommunities } from './data/getCommunities';
import { useState, useEffect } from 'react';
import { Home, Community } from './types';
import './index.css';

export default function App() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    if (communities.length === 0) {
      let communitiesData = getCommunities();
      return setCommunities(communitiesData);
    }
  }, [communities]);

  useEffect(() => {
    if (homes.length === 0) {
      let homesData = getHomes();
      return setHomes(homesData);
    }
  }, [homes]);

  return (
    <div className="App">
      <CommunityList communities={communities} homes={homes} />
    </div>
  );
}
