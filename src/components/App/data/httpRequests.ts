export function getCommunitiesAsync() {
  return fetch(
    'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities'
  ).then((response) => response.json());
}

export function getHomesAsync() {
  return fetch('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes').then(
    (response) => response.json()
  );
}
