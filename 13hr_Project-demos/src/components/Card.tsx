interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    
}
const Card = ({title, description, image, link}: CardProps) => {

  return <div className="max-w-sm mx-auto m-[1rem] bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title }className="w-full h-48 obj ect-cover" />

    <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2> 
        <p className="text-gray-700 mb-2">{description}</p> 


        <a href={link} className="inline-block px-4 py-2 bg-white font-semibolt rounded-lg shadow text-black transition duration-200">Learn More</a>
    </div>
  </div>
  
}

export default Card