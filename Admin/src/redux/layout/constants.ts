// constants
import {
  LayoutType,
  LayoutTheme,
  LayoutWidth,
  TopBarTheme,
  SideBarTheme,
  SideBarType,
  LayoutPosition,
} from "../../constants";

enum LayoutActionTypes {
  CHANGE_LAYOUT_TYPE = "@@layout/CHANGE_LAYOUT_TYPE",
  CHANGE_LAYOUT_THEME = "@@layout/CHANGE_LAYOUT_THEME",
  CHANGE_LAYOUT_WIDTH = "@@layout/CHANGE_LAYOUT_WIDTH",
  CHANGE_TOPBAR_THEME = "@@layout/CHANGE_TOPBAR_THEME",
  CHANGE_SIDEBAR_THEME = "@@layout/CHANGE_SIDEBAR_THEME",
  CHANGE_SIDEBAR_TYPE = "@@layout/CHANGE_SIDEBAR_TYPE",
  CHANGE_LAYOUT_POSITION = "@@layout/CHANGE_LAYOUT_POSITION",
  TOGGLE_SIDEBAR_USER_INFO = "@@layout/TOGGLE_SIDEBAR_USER_INFO",
  SHOW_RIGHT_SIDEBAR = "@@layout/SHOW_RIGHT_SIDEBAR",
  HIDE_RIGHT_SIDEBAR = "@@layout/HIDE_RIGHT_SIDEBAR",
}

export interface LayoutStateTypes {
  layoutType: LayoutType.LAYOUT_VERTICAL | LayoutType.LAYOUT_HORIZONTAL;
  layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
  layoutWidth:
  | LayoutWidth.LAYOUT_WIDTH_FLUID
  | LayoutWidth.LAYOUT_WIDTH_BOXED
  | LayoutWidth.LAYOUT_WIDTH_DETACHED;
  topBarTheme:
  | TopBarTheme.TOPBAR_LIGHT
  | TopBarTheme.TOPBAR_DARK
  | TopBarTheme.TOPBAR_BRAND;
  sideBarTheme:
  | SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT
  | SideBarTheme.LEFT_SIDEBAR_THEME_DARK
  | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
  sideBarType:
  | SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT
  | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT
  | SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED
  | SideBarType.LEFT_SIDEBAR_TYPE_HOVER
  | SideBarType.LEFT_SIDEBAR_TYPE_FULL
  | SideBarType.LEFT_SIDEBAR_TYPE_FULLSCREEN;
  layoutPosition:
  | LayoutPosition.POSITION_FIXED
  | LayoutPosition.POSITION_SCROLLABLE;
  showSideBarUserInfo: boolean;
  isOpenRightSideBar: boolean;
}

export { LayoutActionTypes };
