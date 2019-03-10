const csv = require("csv-parser");
const fs = require("fs");
var LineTransform = require('node-line-reader').LineTransform;  // LineTransform constructor
var transform = new LineTransform();

function groupBy(array, propName) {
    return array.reduce(function(groups, item) {
      var val = item[propName];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
  }
  

const datas = [];

fs
  .createReadStream("./dans-ma-rue.csv")
  .pipe(csv({ separator: ';' }))
  .on("data", data => {
      const geopoint = data['geo_point_2d']
    const entry = {
        type: data['TYPE'],
        subtype: data['SOUSTYPE'],
        lat: geopoint ? geopoint.split(",")[0].trim() : null,
        lon: geopoint ? geopoint.split(",")[1].trim() : null,
        time: data['DATEDECL'],
        year: data['ANNEE DECLARATION'],
        month: data['MOIS DECLARATION'],
        group: data['ANNEE DECLARATION'] + '-' + data['MOIS DECLARATION']
    }
    datas.push(entry);
  })
  .on("end", () => {
    const elements = groupBy(datas, 'group');
    console.log(Object.keys(elements));
    Object.keys(elements).forEach(groupName => {
        const allItems = elements[groupName].map(item => `[${item.lat}, ${item.lon}]`).join(',')
        fs.writeFile("./" + groupName + ".js", `const datas${groupName.replace('-', '_')} = [${allItems}]`, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file " + groupName + " was saved!");
        }); 
    })
  });



