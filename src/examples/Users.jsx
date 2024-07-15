import { use } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const PostItems = () => {
  const users = use(fetchPosts());

  return (
    <ul>
      {users.map((user) => (
        <div key={user.id} className="shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};
export default PostItems;
