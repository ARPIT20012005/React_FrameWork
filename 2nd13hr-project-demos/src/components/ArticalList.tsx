import { useBlogContext } from "../shared/BlogContext";
import { Blog } from "../components/types";
import ArticalCard from "./ArticalCard";

interface ArticalListProps {
  onEdit: (blog: Blog) => void;
}

const ArticalList: React.FC<ArticalListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogContext();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticalCard
          key={blog.id}
          artical={blog} // Changed from `blog` to `artical` to match ArticalCard's props
          onEdit={() => onEdit(blog)}
          onDelete={() => deleteBlog(blog.id)}
        />
      ))}
    </div>
  );
};

export default ArticalList;