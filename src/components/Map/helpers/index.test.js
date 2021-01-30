import helperFunctions from './index';
import validators from '../../../utils/test-validators';

const {
  removeFalsyValuesFromTheList,
  addCoordinatesToEachEpisodeResult,
} = helperFunctions;

const {
  validateInstanceOf,
  validateNotEmptyData,
  validateArrayContaining,
  validateArrayToHaveLength,
} = validators;

describe('Helper Functions Test Suite', () => {
  test('should validate addCoordinatesToEachEpisodeResult()', () => {
    const dummyOne = 'dummy one';
    const dummyTwo = 'dummy two';
    const dummyThree = 'dummy three';

    const dummyAllEpisodesList = [
      { id: expect.anything(), artist: dummyOne },
      { id: expect.anything(), artist: dummyTwo },
      { id: expect.anything(), artist: dummyThree },
    ];
    const dummyGuestLocationList = [
      { name: dummyThree, coordinates: [10, 30] },
      { name: dummyOne, coordinates: [-3, 3.4] },
      { name: dummyTwo, coordinates: [81, 32.455] },
    ];

    const results = addCoordinatesToEachEpisodeResult(
      dummyAllEpisodesList,
      dummyGuestLocationList
    );

    validateInstanceOf(results, Array);
    validateArrayToHaveLength(results, 3);

    const [
      dummyOneArtistResults,
      dummyTwoArtistResults,
      dummyThreeArtistResults,
    ] = results;

    const [
      expectedDummyThreeResults,
      expectedDummyOneResults,
      expectedDummyTwoResults,
    ] = dummyGuestLocationList;

    validateArrayContaining(
      dummyOneArtistResults.coordinates,
      expectedDummyOneResults.coordinates
    );
    validateArrayContaining(
      dummyTwoArtistResults.coordinates,
      expectedDummyTwoResults.coordinates
    );
    validateArrayContaining(
      dummyThreeArtistResults.coordinates,
      expectedDummyThreeResults.coordinates
    );
  });

  test('should validate removeFalsyValuesFromTheList()', () => {
    const dummyEpisodesListWithGuestLocation = [
      {
        id: expect.anything(),
        artist: expect.anything(),
        coordinates: expect.anything(),
      },
      undefined,
      {
        id: expect.anything(),
        artist: expect.anything(),
        coordinates: expect.anything(),
      },
    ];

    validateArrayToHaveLength(dummyEpisodesListWithGuestLocation, 3);

    const results = removeFalsyValuesFromTheList(
      dummyEpisodesListWithGuestLocation
    );

    validateArrayToHaveLength(results, 2);
    results.forEach((item) => validateNotEmptyData(item));
  });
});
