console.log('This would be the main JS file.');

// And it actually is

// Accurate counter
var count = Math.floor(50+Math.random()*150)
var $count = $('#victime-count');
$count
  .text('Counting the members...')
  .delay(300)
  .text(count - 17)
  .delay(100)
  .text(count - 11)
  .delay(100)
  .text(count - 8)
  .delay(100)
  .text(count - 5)
  .delay(100)
  .text(count - 2)
  .delay(100)
  .text(count);
