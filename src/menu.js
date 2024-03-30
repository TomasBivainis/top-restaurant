export default function componentMenu(){
  const element = document.createElement('div');

  const title = document.createElement('h2');
  title.innerHTML = 'Menu';

  element.append(title);

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