import UserList from "@/components/UserList/UserList";

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
};


const User = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await response.json()

  return (
    <section className="container mx-auto">
      
      <h4 className="my-4 text-center font-bold text-2xl text-gray-400 mt-5">
        This is user list 
      </h4>
      
      <div className="flex flex-wrap">
        {
          users.map((user) => (
            <UserList key={user.id} user={user}/>
          ))
        }
      </div>
    </section>
  )
}

export default User
