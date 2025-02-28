import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentEntity } from "@/lib/types/modelTypes";
import { UserIcon } from "@heroicons/react/20/solid";
import { format } from "date-fns";
import { useEffect } from "react";

type Props = {
  comment: CommentEntity;
};

const CommentCard = ({ comment }: Props) => {
  console.log("createdAt:", comment.createdAt);
  console.log("createdAt:", comment.createdAt, typeof comment.createdAt);

  return (
    <div className="p-2 shadow rounded">
      <div className="flex gap-2 text-slate-500 items-center">
        <Avatar className="border-2">
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback>
            <UserIcon className="w-8" />
          </AvatarFallback>
        </Avatar>
        <p>{comment.author.name} | </p>
        <p>{`${new Date(Date.now() - Number(comment.createdAt)).toLocaleDateString()}`}</p>

      </div>
      <p className="mt-4">{comment.content}</p>
    </div>
  );
};

export default CommentCard;
