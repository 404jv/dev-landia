import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
