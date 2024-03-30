export default function componentMenu(){
  const element = document.createElement('div');

  const h1Title = document.createElement('h1');
  h1Title.innerHTML = 'Menu';

  element.append(h1Title);

  const ulList = document.createElement('ul');
  const menuList = ['Pizza', 'Burger', 'Butter', 'Rolls', 'Ribs', 'BBQ'];

  menuList.forEach(food => {
    const item = document.createElement('li');
    item.innerHTML = food;
    ulList.append(item);
  })

  element.append(ulList);

  return element;
}