import styled from 'styled-components/native';

export default styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.sizes.font};
  ${({ h1, theme }) =>
    h1 &&
    `
    font-size: ${theme.fontSizes.h1};
  `}
  ${({ h2, theme }) =>
    h2 &&
    `
    font-size: ${theme.fontSizes.h2};
  `}
  ${({ h3, theme }) =>
    h3 &&
    `
    font-size: ${theme.fontSizes.h3};
  `}
  ${({ title, theme }) =>
    title &&
    `
    font-size: ${theme.fontSizes.title};
  `}
  ${({ body, theme }) =>
    body &&
    `
    font-size: ${theme.fontSizes.body};
  `}
  ${({ caption, theme }) =>
    caption &&
    `
    font-size: ${theme.fontSizes.caption};
  `}
  ${({ small, theme }) =>
    small &&
    `
    font-size: ${theme.fontSizes.small};
  `}
  ${({ size }) =>
    size &&
    `
    font-size: ${size};
  `}
  ${({ transform }) =>
    transform &&
    `
    text-transform: ${transform};
  `}
  ${({ align }) =>
    align &&
    `
    text-align: ${align};
  `}
  ${({ height }) =>
    height &&
    `
    line-height: ${height};
  `}
  ${({ spacing }) =>
    spacing &&
    `
    letter-spacing: ${spacing};
  `}
  ${({ weight }) =>
    weight &&
    `
    font-weight: ${weight};
  `}
  ${({ regular }) =>
    regular &&
    `
    font-weight: normal;
  `}
  ${({ bold }) =>
    bold &&
    `
    font-weight: bold;
  `}
  ${({ semibold }) =>
    semibold &&
    `
    font-weight: 500;
  `}
  ${({ light }) =>
    light &&
    `
    font-weight: 200;
  `}
  ${({ center }) =>
    center &&
    `
    text-align: center
  `}
  ${({ right }) =>
    right &&
    `
    text-align: right
  `}
  ${({ color, theme }) =>
    color &&
    !theme.colors[color] &&
    `
    color: ${color};
  `}

  /* color shortcuts */
  ${({ primary, theme }) =>
    primary &&
    `
    color: ${theme.colors.primary};
  `}
  ${({ secondary, theme }) =>
    secondary &&
    `
    color: ${theme.colors.secondary};
  `}
  ${({ tertiary, theme }) =>
    tertiary &&
    `
    color: ${theme.colors.tertiary};
  `}
  ${({ white, theme }) =>
    white &&
    `
    color: ${theme.colors.white};
  `}
  ${({ gray, theme }) =>
    gray &&
    `
    color: ${theme.colors.gray};
  `}
  ${({ gray2, theme }) =>
    gray2 &&
    `
    color: ${theme.colors.gray2};
  `}
`;
