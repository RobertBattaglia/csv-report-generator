const fs = require('fs');

module.exports = (req, res) => {
  try {
    var jsonData = JSON.parse(req.body.data);
    var columns = Object.keys(jsonData[0]);
    var csvData = columns.join(',') + '\n';
    jsonData.map(obj => {
      csvData += Object.values(obj).join(',') + '\n';
    });
    res.set({
      'Content-Disposition': 'attachment; filename=data.csv',
      'Content-Type': 'text/csv'
    });
    res.send(csvData);
  } catch {
    res.status(400).redirect('/');
  }
};
