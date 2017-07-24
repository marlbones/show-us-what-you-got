import Logger from './helpers/logger';
import algorithm from './helpers/algorithm';

let logger = new Logger();

//.log function takes in algorithm function with loop counter as an argument.
for (let i = 1; i <= 100; i++) {
  logger.log(algorithm(i));
};
