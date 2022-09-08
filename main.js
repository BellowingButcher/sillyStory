const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    replace('Bob', name);
    return storyText;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+' stones';
    const temperature =  Math.round(5/(9(94-32))+' centigrade';
    replace('94 fahrenheit', document.querySelector(temperature));
    replace('300 pounds'), document.querySelector(weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  const newStory = newStory.replace(('insertX', xItem), ('insertY', yItem), ('insertZ, zitem'));
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  
}