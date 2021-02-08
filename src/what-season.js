module.exports = function getSeason(date) {
      if (date === undefined) {
        return 'Unable to determine the time of year!';
      } else if ( Object.prototype.toString.call(date) != '[object Date]') {
          throw new Error('error'); 
      } else if (Date.parse(date)) {

        if (date.getMonth() + 1 === 12 ||
            date.getMonth() + 1 === 1 ||
            date.getMonth() + 1 === 2
            ) {
          return 'winter';
        } else if (date.getMonth() +1 === 3 ||
                  date.getMonth() +1 === 4 ||
                  date.getMonth() +1 === 5
                  ) {
          return 'spring';
        } else if (date.getMonth() + 1 === 6 ||
                  date.getMonth() + 1 === 7 ||
                  date.getMonth() + 1 === 8
                  ) {
          return 'summer';
        } else if (date.getMonth() + 1 === 9 ||
                  date.getMonth() + 1 === 10 ||
                  date.getMonth() + 1 === 11
                  ) {
          return 'autumn';
        }
      } else {
        throw new Error ('Error')
      }
    };