// app constants
import { SideBarType, LayoutWidth } from "../constants";

interface ConfigTypes {
  leftSideBarTypes:
  | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT
  | SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED
  | SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT
  | SideBarType.LEFT_SIDEBAR_TYPE_FULL
  | SideBarType.LEFT_SIDEBAR_TYPE_FULLSCREEN
  | SideBarType.LEFT_SIDEBAR_TYPE_HOVER;
}

const getLayoutConfigs = (layoutWidth: string) => {
  // add property to change in particular layoutWidth
  let config: ConfigTypes = {
    leftSideBarTypes: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT,
  };

  switch (layoutWidth) {
    case LayoutWidth.LAYOUT_WIDTH_FLUID:
      config.leftSideBarTypes = SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT;
      break;
    case LayoutWidth.LAYOUT_WIDTH_BOXED:
      config.leftSideBarTypes = SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED
      break;
    default:
      return config;
  }
  return config;
};

/**
 * Changes the body attribute
 */
const changeHTMLAttribute = (attribute: string, value: string): void => {
  if (document.body)
    document.getElementsByTagName("html")[0].setAttribute(attribute, value);
};

export { getLayoutConfigs, changeHTMLAttribute };
