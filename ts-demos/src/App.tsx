// import { useState } from "react";
// import Counter from "./Counter";
// import AdminInfo from "./components/AdminInfo"
// import UserInfo from "./components/UserInfo"
// import { Info , AdminInfoList} from "./components/types"
// import { preconnect } from "react-dom";
// import Profile from "./components/Profile";
import Form from "./components/Form";

const App = () => {

  // const [count, setCount] = useState<number>(0);


  // const increment = () => {
  //   setCount(prevCount => prevCount + 1);
  // }

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1);
  // }
//   const user : Info ={
//     id : 1,
//     name : "Arpit",
//     email : "arpit@gmail.com",
//   };

//   const admin : AdminInfoList ={
//     id :2,
//     name:"jane",
//     email:"jane@gmail.com",
//     role:"admin",
//     lastLogin : new Date(),

//   };


  return (
    <div>
      {/* <h1>Count:{count}</h1>
      <button onClick={increment} >Increment</button> */}

    
        {/* <User name="Arpit" age ={30} isStudent={true} /> */}
        {/* <Button lable ="click" onClick={()=> console.log("clicked")} disabled={false}/> */}
        {/* <UserInfo user={user}/>
        <AdminInfo admin={admin}/> */}
        {/* <Counter/> */}
        {/* <Profile/> */}

        <Form />
    </div>
  )
};

export default App  