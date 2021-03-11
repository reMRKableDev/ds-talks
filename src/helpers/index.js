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

export default {
  isEmptyObject,
  removeFalsyValuesFromTheList,
  findIncomingEpisodeInEpisodeList,
  addCoordinatesToEachEpisodeResult,
};
