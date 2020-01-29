import emotionStyled, { CreateStyled } from '@emotion/styled';

export type MyTheme = {
  color: {
    dummy: string;
    appMenu: string;
  };
};

export const lightTheme: MyTheme = {
  color: {
    dummy: '#ff0000',
    appMenu: '#116688',
  },
};

export const darkTheme: MyTheme = {
  color: {
    dummy: '#00ff00',
    appMenu: '#2185D0',
  },
};

export const styled = emotionStyled as CreateStyled<MyTheme>;
