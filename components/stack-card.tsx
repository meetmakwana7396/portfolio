import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IStackCard {
  imageURL: string;
  title: string;
  description: string;
  link: string;
}

interface IStackCardProps {
  item: IStackCard;
}

const StackCard = ({ item }: IStackCardProps) => {
  return (
    <Link
      href={item.link}
      target="_blank"
      className="stack-card group"
      role="button"
    >
      <Image src={item.imageURL} alt={item.title} height={68} width={68} />
      <h2 className="text-xl tracking-wider">{item.title}</h2>
      <p className="text-neutral-500 line-clamp-5">{item.description}</p>
      <div className="flex justify-between items-center !mt-auto pt-4">
        <span className="underline underline-offset-2 text-green-500/80">
          Learn more
        </span>
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition mr-1" />
      </div>
    </Link>
  );
};

export default StackCard;
