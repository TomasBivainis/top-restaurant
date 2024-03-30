import './style.css';
import imageRestaurant from './image.jpg';
import componentAbout from './about';
import componentMenu from './menu';

const content = document.querySelector('#content');

const btnHome = document.querySelector('#home');
const btnAbout = document.querySelector('#about');
const btnMenu = document.querySelector('#menu');

btnHome.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  content.append(componentHome());
});

btnMenu.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  content.append(componentMenu());
})

btnAbout.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  content.append(componentAbout());
})

function componentHome(){
  const element = document.createElement('div');

  const divContainer = document.createElement('div');
  divContainer.classList.add('container');

  const divText = document.createElement('div');
  divText.classList.add('text');

  const h1Title = document.createElement('h1');
  h1Title.innerHTML = 'Home';

  element.append(h1Title);

  const pText = document.createElement('p');
  pText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et convallis lectus. Nulla pellentesque erat vitae justo hendrerit fermentum. Nunc quis hendrerit tortor. Sed in arcu ultricies, volutpat enim maximus, fermentum mauris. Ut quis tortor nisi. Nulla facilisi. Donec dolor dolor, faucibus nec tincidunt id, hendrerit in sem. Mauris eget mi placerat risus molestie aliquam. Pellentesque tempor massa nunc. Nulla lorem est, pellentesque vitae luctus id, auctor eget libero. Mauris nibh neque, elementum a diam quis, posuere vehicula odio. Sed a aliquet nulla. Vivamus leo lacus, auctor sed tortor vitae, feugiat sodales mi. Duis ac convallis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat ipsum at odio tempor maximus ac eu enim. Cras lobortis, ex at aliquam aliquet, massa lorem semper ligula, id maximus est nulla sit amet massa. Morbi eget tellus non tellus pulvinar congue eu in augue. Integer nec dui arcu. Pellentesque sodales purus sollicitudin ligula maximus aliquet. Sed at sem enim. Quisque orci nisl, efficitur condimentum neque non, gravida auctor nisi. Ut eget tincidunt diam. Maecenas sed condimentum libero. Duis in volutpat sem, ut convallis est. Vestibulum ac ultricies nisl, ut mattis odio. In efficitur bibendum luctus. Quisque sollicitudin hendrerit dolor sed cursus. Vivamus non diam at tellus dignissim pretium. Vestibulum vel tincidunt ex. Aliquam maximus leo eget lacinia convallis. Nulla facilisi. Proin ultricies interdum tempus. Nunc et ligula laoreet, facilisis ipsum ut, commodo mauris. In ipsum sapien, laoreet quis facilisis ac, lobortis sit amet libero. Nulla vitae sollicitudin eros, vel molestie ante. Cras sit amet dui urna. Fusce pretium viverra urna, sit amet tincidunt orci accumsan ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ac metus eget lorem volutpat laoreet. Mauris mattis leo vel dui malesuada aliquam. Sed commodo dignissim lectus, ac luctus ex hendrerit eu. Donec eu sapien id augue gravida auctor. Nunc eu odio posuere, viverra leo a, accumsan tellus. Nunc interdum urna in felis porttitor, vitae interdum elit sollicitudin. Integer semper viverra est ut vestibulum. Cras eu vestibulum justo. Donec vel commodo nisi, in tincidunt felis. Donec eget tortor rhoncus, sagittis nisl id, viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque turpis felis, molestie eget sem ac, consectetur blandit elit. Proin suscipit eget nunc consectetur euismod.';

  divText.append(pText);

  divContainer.append(divText);


  const divImage = document.createElement('div');
  divImage.classList.add('image');

  const myImage = new Image();
  myImage.src = imageRestaurant;

  divImage.append(myImage);

  divContainer.append(divImage);

  element.append(divContainer);

  return element;
}

content.append(componentHome());

