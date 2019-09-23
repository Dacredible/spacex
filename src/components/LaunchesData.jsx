import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import testData from '../testdata.json';

const preprocess = (launchesArray) => {
  const processedArray = [...launchesArray];
  processedArray.reverse();
  return processedArray;
};

const LaunchesData = ({ query, name }) => {
  if (process.env.REACT_APP_USE_BACKEND === 'false') {
    const launchesArray = preprocess(testData.data.past);
    return launchesArray;
  }
  console.log('backend enabled');
  const LAUNCHES_QUERY = gql`
    ${query}
  `;
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.error(error);
          console.log(data);
          return (
            <>
              {data[name].map(launch => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default LaunchesData;
