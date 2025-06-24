import { useState } from "react";
import { Blog } from "./components/types"; // Adjust the path to where Blog is defined
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicList from "./components/TopicList";
import TrendList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogFrom"
import ArticalList from "./components/ArticalList";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null); // Reset editingBlog to null for a new blog
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog); // Set the blog to be edited
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingBlog(null); // Clear editingBlog when closing the modal
  };

  return (
    <BlogProvider>
      <div>
        <Navigation />

        <div className="flex justify-center">
          {/* Add Blog Button */}
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add your Blog <IoMdAddCircle className="ml-2" />
              </button>

              <ArticalList onEdit={openModalForEdit}/>

              {/* Modal for Blog Form */}
              {isModalOpen && (
                <Modal onClose={closeModal}>
                  <BlogForm blog={editingBlog} onClose={closeModal} />
                </Modal>
              )}
            </div>
          </section>

          {/* Main Area */}
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicList />
          </div>
        </div>
      </div>
    </BlogProvider>
  );
};

export default App;