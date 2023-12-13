// action constants
import { LayoutActionTypes, LayoutStateTypes } from "./constants";

// app constants
import {
  LayoutPosition,
  LayoutTheme,
  LayoutType,
  LayoutWidth,
  SideBarTheme,
  SideBarType,
  TopBarTheme,
} from "../../constants";

// actions
import { LayoutActionType } from "./actions";

// utils
import { getLayoutConfigs } from "../../utils";

const INIT_STATE = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return {
    layoutType: (params['layout_type'] === 'horizontal') ? LayoutType.LAYOUT_HORIZONTAL : LayoutType.LAYOUT_VERTICAL,
    layoutTheme: (params['layout_theme'] === 'dark') ? LayoutTheme.THEME_DARK : LayoutTheme.THEME_LIGHT,
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
    topBarTheme: TopBarTheme.TOPBAR_LIGHT,
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_DARK,
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT,
    layoutPosition: LayoutPosition.POSITION_FIXED,
    showSideBarUserInfo: false,
    isOpenRightSideBar: false,
  };
};

const Layout = (
  state: LayoutStateTypes = INIT_STATE(),
  action: LayoutActionType<string>
) => {
  switch (action.type) {

    case LayoutActionTypes.CHANGE_LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_THEME:
      return {
        ...state,
        layoutTheme: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_WIDTH:
      const layoutConfig = getLayoutConfigs(action.payload! && action.payload);
      return {
        ...state,
        layoutWidth: action.payload,
        ...layoutConfig,
      };

    case LayoutActionTypes.CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topBarTheme: action.payload,
      };

    case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        sideBarTheme: action.payload,
      };

    case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        sideBarType: action.payload,
      };

    case LayoutActionTypes.CHANGE_LAYOUT_POSITION:
      return {
        ...state,
        layoutPosition: action.payload,
      };

    case LayoutActionTypes.TOGGLE_SIDEBAR_USER_INFO:
      return {
        ...state,
        showSideBarUserInfo: action.payload,
      };

    case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: true,
      };

    case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
      return {
        ...state,
        isOpenRightSideBar: false,
      };

    default:
      return state;
  }
};

export default Layout;
