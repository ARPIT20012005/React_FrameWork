import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
    index: number;
    person: {
        name: string;
        following: boolean;
    };
}


const UserCard = ({index, person}: UserCardProps ) => {
  return <div className="flex item-center justify-between">
    <section className="flex item-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-600" />
        <span>{person.name}</span>
    </section>
    <button className="flex items-center bg-teal-400 hover:bg-amber-500 p-3 my-2 rounded-4xl">{person.following ? "Following" : "Follow" }</button>
  </div>
}

export default UserCard