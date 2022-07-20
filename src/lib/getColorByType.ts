export function getColorByType(type: string): string {
  if (type === "fire") return "bg-red-600 text-white";
  if (type === "water") return "bg-blue-600 text-white";
  if (type === "grass") return "bg-green-600 text-black";
  if (type === "poison") return "bg-violet-600 text-white";
  return "bg-black text-white";
}
