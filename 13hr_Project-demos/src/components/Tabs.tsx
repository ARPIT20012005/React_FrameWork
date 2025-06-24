import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import Contant from "./Contant";
import { SiCoursera } from "react-icons/si";
import { useState } from "react";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is an amazing card that you can use to showcase your content."
            image="https://via.placeholder.com/400x300"
            link="https://example.com"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is an amazing card that you can use to showcase your content."
            image="https://via.placeholder.com/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is an amazing card that you can use to showcase your content."
            image="https://via.placeholder.com/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "content",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contant />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-4 px-4 font-medium text-sm ${
              activeTab === tab.id ? "border-b-2" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div> 
  );
};

export default Tabs;