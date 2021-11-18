# Calgary Communities

This is my solution for Open House ai's coding excercise.

## Project Goals

Present a collection of geographic communities in alphabetical order. Each geographic community is to be displayed with the minimum following information:

- Community name
- Image for the community
- The average price of all the homes associated with that community

## Installation

    git clone https://github.com/joshrazon/calgary-communities.git

    cd calgary-communities

    npm install

    npm run start

## Comments

Here are some improvements I can add if given more time:

- Take out the sorting logic for communities inside of fetchCommunities() into its own function

- Implement a loading state to CommunityList component so that it renders the view only when the community data is available in state

- Add a "404 image not found" asset and use it as a fallback for when images don't load / aren't available instead of using placeholder

- Create custom hooks that handles data fetching for home and communities

## Libraries & Frameworks Used

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
