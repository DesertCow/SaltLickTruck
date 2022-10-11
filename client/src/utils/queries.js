import { gql } from '@apollo/client';


export const MainMenu_Q = gql`
  query GetMainMenu {
  getMainMenu
}
`;

export const SubMenu_Q = gql`
  query Query($menuId: Int) {
  getSubMenu(menuID: $menuId)
}
`;

