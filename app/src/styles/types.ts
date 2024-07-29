export interface IDefaultTheme {
  sizes: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };

  colors: {
    primary: string;

    hover: {
      primary: string;
    };

    background: string;

    text: string;

    white: string;
    black: string;

    success: string;
    error: string;

    grey: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
  };
}

export interface ITheme extends IDefaultTheme {}
