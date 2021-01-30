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

  validateTypeOf: (received, expected) => {
    expect(typeof received).not.toBe('dummyType');
    expect(typeof received).toEqual(expected);
  },

  validateInstanceOf: (received, expected) => {
    function DummyInstance(dummy) {
      this.dummy = dummy;
    }

    expect(received instanceof DummyInstance).toBe(false);
    expect(received instanceof expected).toBe(true);
  },

  validateToHaveProperty: (received, data) => {
    expect(received).not.toHaveProperty('dummy');
    expect(received).toHaveProperty(data);
  },

  validateArrayContaining: (receivedArray, expectedArray) => {
    expect(receivedArray).not.toEqual(
      expect.arrayContaining(['dummy', 'fake', 'false'])
    );
    expect(receivedArray).toEqual(expect.arrayContaining(expectedArray));
  },

  validateMockCalls: (receivedMock, numberOfCalls) => {
    expect(receivedMock).not.toHaveBeenCalledTimes(1000000);
    expect(receivedMock).toHaveBeenCalledTimes(numberOfCalls);
  },

  validateMockToHaveBeenCalledWith: (receivedMock, apiUrl) => {
    expect(receivedMock).not.toHaveBeenCalledWith(1000000);
    expect(receivedMock).toHaveBeenCalledWith(apiUrl);
  },
};

export default validators;
