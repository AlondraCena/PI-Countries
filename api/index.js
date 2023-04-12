//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios')
const { cleanArrayMain } = require("./src/utils/utils");
 
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
 server.listen(3001, async () => {
  const allCountries = await Country.findAll();
  // if(allCountries){
  //   console.log('ya estaba creado')
  //   return allCountries}
  
    if(!allCountries.length){
      const apiCountriesRaw = (await axios.get("https://restcountries.com/v3/all")).data;
      var apiCountries = cleanArrayMain(apiCountriesRaw)
        await Country.bulkCreate(apiCountries);
        console.log('creado')
  }
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});
