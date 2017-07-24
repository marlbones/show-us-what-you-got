import algorithm from "./algorithm";
import sinon from "sinon";
import { expect } from "chai";

  describe('algorithm', () => {
    it('should return Boss', () => {
      //Arrange
      const numbers = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57]; //All the multiples of 3
      //Act
      numbers.forEach((number) => {
      //Assert
        expect(algorithm(number)).to.equal('Boss'); //Loop through numbers in 'numbers' array. When inserted into algorithm, number should equal 'Boss'
      });
    });

    it('should return Hog', () => {
      const numbers = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];
      numbers.forEach((number) => {
        expect(algorithm(number)).to.equal('Hog');
      });
    });

    it('should return BossHog', () => {
      const numbers = [15, 30, 45, 60, 75, 90, 105];
      numbers.forEach((number) => {
        expect(algorithm(number)).to.equal('BossHog');
      });
    });

    it('should return all other numbers', () => {
      const numbers = [1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28];
      numbers.forEach((number) => {
        expect(algorithm(number)).to.equal(number);
      });
    });

  });
