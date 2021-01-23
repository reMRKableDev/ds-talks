import { testData } from '../fixtures';

const { dummyText } = testData;

const validators = {
  validateNotEmptyData: (data) => {
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(data).toBeTruthy();
  },

  validateStringMatches: (receivedStr, expectedStr) => {
    expect(receivedStr).not.toMatch(dummyText);
    expect(receivedStr).toMatch(expectedStr);
  },

  validateElementContainsDescendant: (parentElement, descendantElement) => {
    const dummyElement = document.createElement(dummyText);

    expect(parentElement).not.toContainElement(dummyElement);
    expect(parentElement).toContainElement(descendantElement);
  },
};

export default validators;
