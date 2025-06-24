import { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {

    const [bannerUrl, setBannerUrl] = useState("https://via.placeholder.com/1500x400");
    const [profileUrl, setProfileUrl] = useState("https://via.placeholder.com/100");

    const handleBannerUrl = (event: any) => {
        const file = event.target.files[0];

        if (file) {
            setBannerUrl(URL.createObjectURL(file));
        }
    };

    const handleProfileChange = (event: any) => {
        const file = event.target.files[0];
            
            if (file) {
                setProfileUrl(URL.createObjectURL(file));
            }

    }




  return (
    <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
            <img src={bannerUrl} alt="background image" className="w-full h-60 object-cover"
              />

              <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="banner-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>

                <input type="file" id="banner-upload" className="hidden" onChange={handleBannerUrl} accept="image/*" />


              </button>

        </div>

        <div className="flex item-center ml-4 mt-[2rem]"> 
            <img src={profileUrl} alt="Channel Logo" className="w-40 h-40 object-cover rounded-full border-white relative 6" />
            <button className="abosulte -ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="profile-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>
                
                <input type="file" id="profile-upload" className="hidden" onChange={handleProfileChange} accept="image/*" />


            </button>
        <div className="ml-20 mt-4">
            <h1 className="text-2xl font-bold ">Huxn WedDev</h1>
            <p className="font-bold">1M views</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt explicabo ducimus inventore. Quo explicabo iusto illum voluptate. Fugiat ipsum temporibus nostrum, quo ipsa quis architecto cum earum harum aliquid.
            Id explicabo sapiente illum corporis repellat quis reprehenderit quae dolor vero rem excepturi ea iste quisquam, laboriosam fugit inventore assumenda. Consectetur ipsa eligendi harum nesciunt pariatur 
            </p>

            <button className="mt-4 bg-red-700 text-white py-3 px-4 rounded hover:bg-red-500"> Suscribe</button>

        </div>

        </div>
        <Tabs/>
    </div>
  )
}

export default Profile