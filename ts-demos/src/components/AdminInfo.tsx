import { AdminInfoList } from "./types"


type AdminInfoProp = {
    admin: AdminInfoList;
}
const AdminInfo : React.FC<AdminInfoProp> = ({admin}) => {

  return (
    <div>
        <h2>Admin Information</h2>
        <p>Name:{admin.name}</p>
        <p>ID:{admin.id}</p>
        <p>email:{admin.email}</p>
        <p>role:{admin.role}</p>
        <p>:{admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo