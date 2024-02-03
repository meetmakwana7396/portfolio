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
      <div className="space-y-4 flex flex-col items-start shrink-0">
        <Image
          src={item.imageURL}
          alt={item.title}
          height={68}
          width={68}
          className="h-12 w-12"
        />
        <h2 className="sm:text-xl tracking-wider hidden sm:block">
          {item.title}
        </h2>
      </div>

      <p className="text-neutral-500 line-clamp-3 sm:line-clamp-5">
        {item.description}
      </p>

      <div className="flex justify-between w-full items-center sm:!mt-auto sm:pt-4">
        <span className="underline underline-offset-2 text-green-500/80 text-sm sm:text-base">
          Learn more
        </span>
        <ArrowUpRight className="w-5 h-5 hidden sm:flex group-hover:translate-x-1 group-hover:-translate-y-1 transition mr-1" />
      </div>
    </Link>
  );
};

export default StackCard;
