import React from "react";
import { getColorByType } from "../lib/getColorByType";

type Props = {
  name: string;
  purge: ["./src/**/*.{js,jsx,ts,tsx}"];
  types: string[];
  src: string;
};

export function PokemonCard({ name, types, src }: Props) {
  return (
    <div className="flex flex-col items-center w-[350px] h-[430px] bg-slate-100 rounded-xl gap-3 p-5 shadow-lg">
      <img
        className="w-[300px] h-[300px] bg-white rounded-xl"
        src={src}
        alt={`imgae of Pokemon: ${name}`}
      />
      <p className="text-xl">{name}</p>
      <div className="flex flex-row gap-2">
        {types.map((type: string, index: number) => (
          <div
            key={index}
            className={`w-[75px] h-[35px] flex justify-center items-center rounded-3xl 
            ${getColorByType(type)}`}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}
