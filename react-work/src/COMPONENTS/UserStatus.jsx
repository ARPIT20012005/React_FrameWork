const UserStatus = (props) => {


    if (props.loggedIn && props.isAdmin ) {
        return <h1>Welcome Admin!</h1>;
    }else {
        return<h1>Welome User!</h1>;
    }


};
export default UserStatus;