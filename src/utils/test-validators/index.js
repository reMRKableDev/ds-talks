import { testData } from '../fixtures';

const { dummyText } = testData;

exports.validateNotEmptyData = (data) => {
  expect(data).not.toBeNull();
  expect(data).not.toBeUndefined();
  expect(data).toBeTruthy();
};

exports.validateStringMatches = (receivedStr, expectedStr) => {
  expect(receivedStr).not.toMatch(dummyText);
  expect(receivedStr).toMatch(expectedStr);
};

exports.validateElementContainsDescendant = (
  parentElement,
  descendantElement
) => {
  const dummyElement = document.createElement(dummyText);

  expect(parentElement).not.toContainElement(dummyElement);
  expect(parentElement).toContainElement(descendantElement);
};
