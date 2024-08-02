import { menuItemsData } from '../menuItemsData.js';
export default function Navbar() {
  return (
    <nav className="topnav">
      <ul className="menus">Nav Items here</ul>
      {menuItemsData.map((menu, index) => {
        return (
          <li className="menu-items" key={index}>
            <a href={menu.url}>{menu.title}</a>
          </li>
        );
      })}
    </nav>
  );
}
