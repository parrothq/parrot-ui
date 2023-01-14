## Goals for project

- Minimally styled components to suit my design style for most projects without having to add custom styles
- Components should be easy to restyle. i.e by passing custom css to components, targeting selectors or simply providing a custom theme

## To Figure out

- I am going to setup the library with a theme that has acceptable defaults for most of my projects

  - Radix colors
  - Theme tokens i.e spacing , sizes, border radi
  - Style utils supported by Stitches

- A user consuming the library should be able to amend these defaults at a granular level.

  `import {colors, space} from parrot-ui/theme`

  `const themeOverrides = {colors: {...colors, brand: "#0000"}}`

  `extendTheme(themeOverrides)`
