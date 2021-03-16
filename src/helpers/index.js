import { css } from 'styled-components';
import breakpointsData from '../data/breakpoints';

const respondToDeviceWidth = Object.keys(breakpointsData).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpointsData[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);

const addCoordinatesToEachEpisodeResult = (
  allEpisodesList,
  guestLocationList
) => {
  return allEpisodesList.map((episodeItem) => {
    let episodeItemWithGuestLocation;

    guestLocationList.forEach((guestItem) => {
      if (episodeItem.artist === guestItem.name) {
        episodeItemWithGuestLocation = {
          ...episodeItem,
          coordinates: guestItem.coordinates,
        };
      }
    });

    return episodeItemWithGuestLocation;
  });
};

const removeFalsyValuesFromTheList = (episodeListWithGuestLocation) =>
  episodeListWithGuestLocation.filter((element) => element != null);

const findIncomingEpisodeInEpisodeList = (episodesList, incomingEpisode) =>
  episodesList.find((episodeItem) => episodeItem.id === incomingEpisode.id);

const isEmptyObject = (incomingObj) => Object.keys(incomingObj).length === 0;

const removeAnyHTMLTagsFromString = (incomingStr) =>
  incomingStr.replace(/(<([^>]+)>)/gi, '');

export default {
  isEmptyObject,
  respondToDeviceWidth,
  removeAnyHTMLTagsFromString,
  removeFalsyValuesFromTheList,
  findIncomingEpisodeInEpisodeList,
  addCoordinatesToEachEpisodeResult,
};
