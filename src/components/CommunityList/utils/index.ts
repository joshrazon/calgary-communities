import { Home } from '../../../types';

export function filterHomes(homes: Home[], communityId: string) {
  let filteredHomes = [...homes].filter((home: Home) => home.communityId === communityId);
  return filteredHomes;
}

export function getPrices(homes: Home[]) {
  let prices: number[] = [];
  homes.forEach((home: Home) => prices.push(home.price));
  return prices;
}

export function calculateAveragePrice(prices: number[]) {
  let reducer = (previousValue: number, currentValue: number) =>
    previousValue + currentValue;
  let total = prices.reduce(reducer, 0);
  let average = total / prices.length;
  return average;
}

export function getHomesPriceAverage(homes: Home[], communityId: string) {
  let filteredHomes = filterHomes(homes, communityId);
  let prices = getPrices(filteredHomes);

  if (prices.length !== 0) {
    let averageHomePrice = calculateAveragePrice(prices);
    return `Average home price: $${Math.round(averageHomePrice).toLocaleString('en-US')}`;
  } else {
    return 'No prices found, please check again later.';
  }
}
