import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonCard } from "./PokemonCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pokemon Card",
  component: PokemonCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PokemonCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Charmander = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Charmander.args = {
  name: "Charmander",
  types: ["fire"],
  src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
};

export const Squirtle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Squirtle.args = {
  name: "Squirtle",
  types: ["water"],
  src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
};

export const Bulbasaur = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bulbasaur.args = {
  name: "Bulbasaur",
  types: ["grass", "poison"],
  src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
};
