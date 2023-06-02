import React from 'react';

const Profile = ({ name, bio, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 ">
        <img className="w-16 h-16 rounded-full mx-auto" src={image} alt={name} />
        <p className="text-gray-600 text-sm  text-center ">{bio}</p>
        <h2 className="text-xl font-bold text-gray-800 mx-auto text-center">{name}</h2>
        
      </div>
    );
  };
  

const ProfileExample = () => {
  return (
    <div className="container mx-auto mt-6">
      <Profile
        name="Aroshi Kuruppu"
        bio="20220001"
        image="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
      />
    </div>
  );
};

export default ProfileExample;
