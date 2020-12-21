interface IPalette {
  name: string;
  colors?: Array<IPaletteColor>;
}

interface IPaletteColor {
  name: string;
  value?: string;
  contrast?: string;
  variants?: Array<IPaletteColorVariant>;
}

interface IPaletteColorVariant {
  suffix: string;
  value?: string;
  contrast?: string;
}

const palette1: IPalette = {
  name: 'palette-1'
};

const palette2: IPalette = {
  name: 'palette-2'
};

const availablePalettes: Array<IPalette> = [
  palette1,
  palette2
];

// choose the default palette
const defaultPalette: IPalette = availablePalettes.find((palette: IPalette) => {
  // return palette.name === 'palette-2';
  return palette.name === 'palette-1';
});

export { IPalette, IPaletteColor, availablePalettes, defaultPalette };
