const { PythonShell } = require('python-shell');

function getListShape(list) {
  return [list.length, list[0].length]
}

function recommend(preferenceList, userNumber) {
  const shape = getListShape(preferenceList);

  const options = {
    mode: 'text',
    pythonPath: '/opt/anaconda3/envs/tf1/bin/python3',
    pythonOptions: ['-u'],
    scriptPath: __dirname,
    args: [preferenceList, shape, userNumber]
  };

  PythonShell.run('recommend_test01.py',
    options, function(err, result) {
      if(err) throw err;

      // result.forEach(v => console.log(v));
      let result_recommendation = [];
      result.forEach(v => result_recommendation.push(Number(v)));
      console.log(result_recommendation);
    });
}

export default recommend;