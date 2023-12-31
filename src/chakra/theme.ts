import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { radioTheme } from './Radio';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  body: 'Poppins, sans-serif',
};

const colors = {
  secondary: 'blue.900',
  altColor: 'blue.700',
  correctAnswer: 'green.600',
  wrongAnswer: 'red.600',
  proceedButton: 'yellow.300',
  proceedButtonHover: 'yellow.200',
  backButtonBorder: '#FFFFFF66', // white with 40% opacity
};

const SceneContainer = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  variants: {
    playScene: {
      borderRadius: '5px',
      maxWidth: { sm: '500px', md: '600px', lg: '100%' },
    },
    playSceneTrueFalse: {},
    optionsScene: {
      gap: '20px',
      maxWidth: { sm: '500px', md: '600px', lg: '100%' },
    },
    funFact: {
      position: 'absolute',
      bottom: 120,
      textAlign: 'center',
      px: '1rem',
    },
    endScene: {
      gap: '2rem',
    },
  },
});

const SceneCard = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  variants: {
    playCard: {
      bg: colors.secondary,
      maxWidth: { sm: '500px', md: '600px', lg: '100%' },
      borderRadius: '5px',
      padding: { base: '16px', sm: '20px', md: '20px', lg: '30px' },
      gap: { base: '24px', sm: '28px', md: '32px', lg: '40px' },
      _light: {
        bg: 'gray.200',
      },
    },
    optionsCard: {
      bg: colors.secondary,
      maxWidth: '500px',
      borderRadius: '5px',
      padding: '10px',
      gap: '10px',
    },
    playSceneTrueFalse: {},
  },
});

const components = {
  Text: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '20px' },
    },
    variants: {
      invalidInput: {
        color: colors.wrongAnswer,
        position: 'absolute',
        bottom: 0,
        fontWeight: '900',
      },

      optionTitle: {
        color: '#FFF',
        fontSize: {
          base: '20px',
          sm: '22px',
          md: '24px',
          lg: '26px',
        },
      },
      optionText: {
        color: '#FFF',
        fontSize: {
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      },
      loading: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '800',
        fontSize: {
          base: '4xl',
          sm: '5xl',
          md: '6xl',
          lg: '7xl',
        },
      },
      loadSubtitle: {
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
        opacity: '.4',
        fontWeight: '500',
        textAlign: 'center',
      },
      funFactTitle: {
        fontWeight: '800',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
      },
      funFact: {
        fontWeight: '500',
        opacity: '.8',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'medium',
    },
    variants: {
      optionsSceneTitle: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        fontSize: {
          base: '30px',
          sm: '32px',
          md: '36px',
        },
      },
    },
  },
  Input: {
    baseStyle: {
      field: {
        // mt: '.25rem',
        border: 'none',
        py: '1.4rem',
        // pr: '4rem',
        fontSize: {
          base: 'sm',
          sm: 'md',
        },
        _dark: {
          border: 'none',
          boxShadow: 'sm',
          bg: '#2D3748',
          _placeholder: {
            color: '#FFFFFF99',
          },
        },
        _light: {
          bg: 'gray.200',
          _placeholder: {
            color: '#4A556899',
          },
        },
      },
      element: {
        h: 'auto',
      },
    },
  },
  Textarea: {
    baseStyle: {
      resize: 'none',
      height: '15rem',
      pr: '4rem',
      fontSize: {
        base: 'sm',
        sm: 'md',
      },
      _dark: {
        border: 'none',
        boxShadow: 'sm',
        bg: '#2D3748',
        _placeholder: {
          color: '#FFFFFF99',
        },
      },
      _light: {
        bg: '#E2E8EF',
        _placeholder: {
          color: '#4A556899',
        },
      },
    },
  },
  Control: {
    baseStyle: {
      bg: 'red.500',
    },
  },
  Button: {
    baseStyle: {
      fontWeight: '500',
      borderRadius: '5px',
      border: 'none',
      fontSize: { base: '14px', sm: '14px', md: '16px', lg: '16px' },
    },
    variants: {
      proceed: {
        padding: { base: '10px 24px', sm: '10px 26px', md: '10px 28px', lg: '12px 30px' },
        color: '#000',
        bg: colors.proceedButton,
        height: 'auto',
        _hover: {
          bg: 'yellow.200',
        },
        _disabled: {
          _hover: {
            bg: 'yellow.300!important',
          },
        },
      },
      return: {
        border: '.5px solid',
        height: 'auto',
        bg: 'transparent',
        _hover: {
          bg: colors.backButtonBorder,
        },
      },
      searchbarBtn: {
        _dark: {
          bg: '#4A556899',
          color: '#FFFFFF99',
        },
        _light: {
          bg: '#FFFFFF99',
          color: '#4A556899',
        },
      },
    },
  },
  IconButton: {
    baseStyle: {},
    variants: {
      previousQuestion: {
        position: 'absolute',
        left: {
          base: 'calc(50% - 8rem)',
          sm: 'calc(50% - 9rem)',
          md: 'calc(50% - 10rem)',
          lg: 'calc(50% - 11rem)',
        },
      },

      searchbarBtn: {
        _dark: {
          bg: '#4A556899',
          color: '#FFFFFF99',
        },
        _light: {
          bg: '#FFFFFF99',
          color: '#4A556899',
        },
      },
    },
  },
  Radio: radioTheme,
  SceneContainer: SceneContainer,
  SceneCard: SceneCard,
};

export const theme = extendTheme({ config, fonts, colors, components });
