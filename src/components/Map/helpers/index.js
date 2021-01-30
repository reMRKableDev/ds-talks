const addCoordinatesToEachEpisodeResult = (
  allEpisodesList,
  guestLocationList
) => {
  return allEpisodesList.map((episodeItem) => {
    let episodeItemWithGuestLocation;

    for (let counter = 0; counter < guestLocationList.length; counter += 1) {
      const guestItem = guestLocationList[counter];

      if (episodeItem.artist === guestItem.name) {
        episodeItemWithGuestLocation = {
          ...episodeItem,
          coordinates: guestItem.coordinates,
        };
      }
    }

    return episodeItemWithGuestLocation;
  });
};

const removeFalsyValuesFromTheList = (episodeListWithGuestLocation) =>
  episodeListWithGuestLocation.filter((element) => element != null);

export default {
  addCoordinatesToEachEpisodeResult,
  removeFalsyValuesFromTheList,
};
