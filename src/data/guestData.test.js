import data from './guestData';
import validators from '../utils/test-validators';

const {
  validateTypeOf,
  validateInstanceOf,
  validateNotEmptyData,
  validateToHaveProperty,
} = validators;

describe('Guest Data JSON File Test Suite', () => {
  test('should validate incoming json data not empty', () => {
    validateNotEmptyData(data);
  });

  test('should validate correct typeof for incoming json data', () => {
    validateTypeOf(data, 'object');
  });

  test('should should validate correct instance of for incoming json data', () => {
    validateInstanceOf(data, Array);
  });

  test('should validate expected properties for incoming json data', () => {
    data.forEach((element) => {
      validateToHaveProperty(element, 'name');
      validateToHaveProperty(element, 'coordinates');
    });
  });
});
