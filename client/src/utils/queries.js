import { gql } from '@apollo/client';


export const MainMenu_Q = gql`
  query GetMainMenu {
  getMainMenu
}
`;

export const SubMenu_Q = gql`
  query GetSubMenu($menuId: Int) {
  getSubMenu(menuID: $menuId) {
    menuList
    menuTitle
    menuIndex
  }
}
`;

export const Item_Q = gql`
query GetItemInfo($itemId: Int) {
  getItemInfo(itemID: $itemId) {
    id
    name
    price
    inStock
    serving
    measurement
    subMenuNumber
  }
}
`;


