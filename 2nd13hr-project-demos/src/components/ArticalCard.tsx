interface ArticalCardProps {
    artical: {
      image: string;
      title: string;
    };
    onDelete: () => void;
    onEdit: () => void;
  }
  
  const ArticalCard: React.FC<ArticalCardProps> = ({ artical, onDelete, onEdit }) => {
    return (
      <div className="flex p-4 bg-white w-[4rem] mb-6 ml-[3rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={artical.image}
          alt={artical.title}
          className="w-36 h-34 object-cover rounded-lg shadow-md"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{artical.title}</h3>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={onEdit}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArticalCard;