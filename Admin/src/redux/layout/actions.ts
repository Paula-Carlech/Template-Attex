import { LayoutActionTypes } from "./constants";

export interface LayoutActionType<TPayload> {
  type:
  | LayoutActionTypes.CHANGE_LAYOUT_TYPE
  | LayoutActionTypes.CHANGE_LAYOUT_THEME
  | LayoutActionTypes.CHANGE_LAYOUT_WIDTH
  | LayoutActionTypes.CHANGE_TOPBAR_THEME
  | LayoutActionTypes.CHANGE_SIDEBAR_THEME
  | LayoutActionTypes.CHANGE_SIDEBAR_TYPE
  | LayoutActionTypes.CHANGE_LAYOUT_POSITION
  | LayoutActionTypes.TOGGLE_SIDEBAR_USER_INFO
  | LayoutActionTypes.SHOW_RIGHT_SIDEBAR
  | LayoutActionTypes.HIDE_RIGHT_SIDEBAR;
  payload?: TPayload;
}

export const changeLayoutType = (type: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_LAYOUT_TYPE,
  payload: type,
});

export const changeLayoutTheme = (theme: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_LAYOUT_THEME,
  payload: theme,
});

export const changeLayoutWidth = (width: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_LAYOUT_WIDTH,
  payload: width,
});

export const changeTopBarTheme = (theme: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_TOPBAR_THEME,
  payload: theme,
});

export const changeSideBarTheme = (theme: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_SIDEBAR_THEME,
  payload: theme,
});

export const changeSideBarType = (type: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_SIDEBAR_TYPE,
  payload: type,
});

export const changeLayoutPosition = (position: string): LayoutActionType<string> => ({
  type: LayoutActionTypes.CHANGE_LAYOUT_POSITION,
  payload: position,
});

export const toggleSideBarUserInfo = (showSideBarUserInfo: boolean): LayoutActionType<boolean> => ({
  type: LayoutActionTypes.TOGGLE_SIDEBAR_USER_INFO,
  payload: showSideBarUserInfo,
})

export const showRightSidebar = (): LayoutActionType<null> => ({
  type: LayoutActionTypes.SHOW_RIGHT_SIDEBAR,
});

export const hideRightSidebar = (): LayoutActionType<null> => ({
  type: LayoutActionTypes.HIDE_RIGHT_SIDEBAR,
});
