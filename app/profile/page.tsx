import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/lib/actions";
import { authConfig } from "@/lib/auth";
import FollowingList from "@/components/FollowingList";

async function ProfilePage() {
  const session = await getServerSession(authConfig);
  const user = session?.user;

  const profile = await getUserByEmail(user?.email || undefined);

  return (
    <div className="p-16 pt-32 w-full relative z-0 text-black ">
      <p className=" text-lg ">
        Hi{" "}
        <span className=" text-xl text-primary font-bold">
          {user?.name || user?.email || "there"}
        </span>{" "}
        !
      </p>

      <p className=" text-lg mt-8 mb-2">You are following this projects</p>
      <FollowingList user={profile || undefined} />
    </div>
  );
}

export default ProfilePage;
