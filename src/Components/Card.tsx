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
      className="max-w-sm rounded-2xl border-neutral-800 overflow-hidden border-2 mx-5 hover:border-neutral-600 transition"
    >
      <img src={cardImage ?? "https://placehold.co/600x335"} alt={cardName} />
      <div className="p-4">
        <div className="font-bold text-xl">{cardName}</div>
        <p className="text-zinc-500 text-base">{cardDescription}</p>
      </div>
    </a>
  );
}
