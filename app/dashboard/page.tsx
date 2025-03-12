import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogPostCrad from "@/components/general/BlogPostCrad";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4 mt-[3rem]">
        <h2 className="text-2xl font-semibold ">Your Blog Articles</h2>

        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <BlogPostCrad data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
