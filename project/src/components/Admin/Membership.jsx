import React from "react";

function Membership() {
  const churchMembers = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      role: "Member",
      address: "123 Church Street",
      phoneNumber: "+1 (123) 456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      email: "jane@example.com",
      role: "Member",
      address: "456 Faith Avenue",
      phoneNumber: "+1 (987) 654-3210",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 45,
      email: "michael@example.com",
      role: "Elder",
      address: "789 Grace Road",
      phoneNumber: "+1 (555) 123-4567",
    },
    {
      id: 4,
      name: "Ps. Micheal Duah",
      age: 45,
      email: "michael@example.com",
      role: "Elder",
      address: "789 Grace Road",
      phoneNumber: "+1 (555) 123-4567",
    },
    // Add more members as needed...
  ];

  return (
    <div className="w-3/4 mx-auto mt-4 p-4  ">
      <h2 className="w-full text-center text-xl font-semibold text-sky-800 uppercase underline">
        Church Members
      </h2>
      <ul className="grid grid-cols-4 py-2 text-lg border-b-2">
        {churchMembers.map((member) => (
          <div>
            <li key={member.id}>
              <strong>Name:</strong> {member.name}
              <br />
              <strong>Age:</strong> {member.age}
              <br />
              <strong>Email:</strong> {member.email}
              <br />
              <strong>Role:</strong> {member.role}
              <br />
              <strong>Address:</strong> {member.address}
              <br />
              <strong>Phone:</strong> {member.phoneNumber}
            </li>
            <div className="flex gap-4 mt-4">
              <div>Edit</div>
              <div className="text-red-500">Delete</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Membership;
