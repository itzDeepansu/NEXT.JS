import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/User";
export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h1>Server rendered</h1>
      <pre>
      {JSON.stringify(session)}
      </pre>
      <h1>
        Client side rendered
      </h1>
      <div>
    <User />
      </div>
    </div>
  );
}
