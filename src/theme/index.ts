import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

// common styling variants and sizes for border colour of selection of input & select
const inputSelectStyles = {
  variants:{
    filled:{
      field:{
        _focus:{
          borderColor:"brand.500"
        },
      },
    },
  },
  sizes:{
    md:{
      field:{
        borderRadius: "none",
      },
    },
  },
};

// focus ccs property object for checkbox and btn
const focusRing = {
  _focus:{
    ring:2,
    ringColor: "brand.500"
  },
}

// extend theme definition for manipulating different properties of the theme
const theme = extendTheme({
  fonts:{
    heading:`Montserrat,${base.fonts?.heading}`,
    body:`Inter,${base.fonts?.body}`,
  },
  colors:{
    brand:{
      50: "#f5fee5",
      100: "#e1fbb2",
      200: "#cdf781",
      300: "#b8ee56",
      400: "#a2e032",
      500: "#8ac919",
      600: "#71ab09",
      700: "#578602",
      800: "#3c5e00",
      900: "#203300",
    },
  },
  components:{
    Button:{
      variants:{
        primary:(props: Record<string, any>) =>({
          rounded:"none",
          ...focusRing,
          color:mode("white","gray.800")(props),
          backgroundColor:mode("brand.500","brand.200")(props),

          _hover:{
            backgroundColor:mode("brand.600", "brand.300")(props),
          },
          _active:{
            backgroundColor: mode("brand.700","brand.400")(props),
          }
        }),
      },
    },
    Input:{...inputSelectStyles},
    Select:{...inputSelectStyles},
    Checkbox: {
      baseStyle:{
        control:{
          borderRadius:"none",
          ...focusRing,
        },
      },
    }
  },
},
withDefaultColorScheme({
  colorScheme: "brand",
  components: ["Checkbox"],
}),
withDefaultVariant({
  variant:"filled",
  components:["Input","Select"]
})
);

export default theme
