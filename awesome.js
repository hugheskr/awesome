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
  var sortedProgrammers = _(programmers).map("awesomeIndex").value();
  var programmersWithout = _.remove(sortedProgrammers, _.isUndefined);
  var totalAwesome = 0;
  for (var i = 0; i < sortedProgrammers.length; i++) {
  	totalAwesome = totalAwesome + sortedProgrammers[i]; 
  }
  var average = totalAwesome / sortedProgrammers.length;
  return average;
}

$(function() {
  $("#awesome-index").html(getAwesomeIndexAverage());
});
