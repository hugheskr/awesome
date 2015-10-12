var programmers = [
{
name: 'Trinity',
occupation: 'programmer',
awesomeIndex: 10
},
{
name: 'Mater',
occupation: 'tow truck'
},
{
name: 'Number 5',
occupation: 'programmer',
awesomeIndex: 7
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
},
{
name: 'Bob Parr',
occupation: 'programmer',
awesomeIndex: 6
}
];

function getAwesomeIndexAverage() {
  var sortedProgrammers = programmers.map(function(obj) {
    awObj = obj.awesomeIndex; 
    return awObj;
  });
  
  var programmersWithAw = {};

  Object.keys(sortedProgrammers).forEach(function(key) {
    if (typeof sortedProgrammers[key] != 'undefined' && sortedProgrammers[key]!=null){
        programmersWithAw[key] = sortedProgrammers[key];
    }
  });
  
  var totalAwesome = 0;
  for(x in programmersWithAw) {
  	totalAwesome+= programmersWithAw[x];
  }

  var average = totalAwesome / Object.keys(programmersWithAw).length;
  return average;
}

document.getElementById("awesome-index").innerHTML = (getAwesomeIndexAverage());