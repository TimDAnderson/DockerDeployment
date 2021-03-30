var db = require('./index.js');

var read = (gameID, cb) => {

  db.query(`select * from reviews inner join users on users.ID = reviews.userID where reviews.game = ${gameID} order by reviews.creationDate DESC`, (error, results, fields) => {
    if (error) {
      throw error;
    } else {
      var returnArray = [];

      for (let i = 0; i < results.length; i++) {
        returnArray.push({
          gameID: results[i].game,
          userName: results[i].userName,
          reviewText: results[i].reviewText,
          creationDate: results[i].creationDate,
          recommended: results[i].recommended,
          helpfulCount: results[i].helpfulCount,
          notHelpfulCount: results[i].notHelpfulCount,
          helpfulScore: results[i].helpfulScore,
          funnyCount: results[i].funnyCount,
          earlyAccess: results[i].earlyAccess,
          awards: results[i].awards,
          comments: results[i].comments,
          profilePicture: results[i].profilePicture,
          userTheme: results[i].userTheme,
          steamLevel: results[i].steamLevel,
          reviewsGiven: results[i].reviewsGiven,
          playtime: results[i].playtime,
          productActivation: results[i].productActivation,
          gamesOwned: results[i].gamesOwned
        });
      }

      cb(null, returnArray);
      
    }
  });
};

module.exports.read = read;