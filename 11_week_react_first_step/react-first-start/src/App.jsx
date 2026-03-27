import { Comment } from "./components/Comment";

export default function App() {
  const auther = {
    avatarUrl: "hljlkdjfa",
    name: "User",
    description: "test",
  };
  return <Comment auther={auther} />;
}
