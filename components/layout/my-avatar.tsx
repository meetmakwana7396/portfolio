import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function MyAvatar({ className }: { className?: string }) {
  return (
    <Avatar
      className={cn(
        "size-14 my-auto ring-[6px] ring-neutral-500/40",
        className
      )}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/77795036?v=4" />
      <AvatarFallback>MM</AvatarFallback>
    </Avatar>
  );
}
