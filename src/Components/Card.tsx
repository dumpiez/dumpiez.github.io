type CardProps = {
  cardLink?: string;
  cardImage?: string;
  cardName: string;
  cardDescription: string;
};

export default function Card({
  cardLink,
  cardImage,
  cardName,
  cardDescription,
}: CardProps) {
  return (
    <a
      href={cardLink ?? "#"}
      className="w-full md:max-w-sm max-w-xs rounded-2xl border-neutral-800 overflow-hidden border-2 m-5 hover:border-neutral-600 transition"
    >
      <img
        className="w-full aspect-3/2 object-cover"
        src={cardImage ?? "https://placehold.co/600x400"}
        alt={cardName}
      />
      <div className="p-4">
        <div className="font-bold text-lg md:text-lg">{cardName}</div>
        <p className="text-zinc-500 text-md md:text-base">{cardDescription}</p>
      </div>
    </a>
  );
}
