import { useState } from 'react';

interface ProfileState {
  name: string;
  age: number;
  email: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileState>({
    name: '',
    age: 0,
    email: '',
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };

  const updateAge = (age: number) => {
    setProfile((prevProfile) => ({ ...prevProfile, age }));
  };

  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={profile.age}
        onChange={(e) => updateAge(Number(e.target.value))}
      />

      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h2>Profile Summary</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;