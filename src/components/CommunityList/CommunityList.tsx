import { Community, Home } from '../App/types';
import './Community.css';
import { getHomesPriceAverage } from './utils';

interface Props {
  communities: Community[];
  homes: Home[];
}

export default function CommunityList({ communities, homes }: Props) {
  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = 'https://via.placeholder.com/500x300';
  };

  return (
    <div className="container">
      {communities.map((community) => (
        <div key={community.id} className="cards-container">
          <div className="card">
            <img
              onError={imageOnErrorHandler}
              src={community.imgUrl}
              alt={community.name}
              className="card-image"
            />
            <div className="card-info">
              <p>{community.name}</p>
              <p>{getHomesPriceAverage(homes, community.id)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
