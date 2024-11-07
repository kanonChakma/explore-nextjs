import UserList from "@/components/UserList/UserList"


const UserDetails = async({params}:{params: Promise<{id: string}>}) => {
  const userId =  (await params).id
  const userDetails = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const userData = await userDetails.json()

  return (
    <div className="container mx-auto">
      <h1>This is product Details!!!</h1> 
      <UserList user={userData}/>
    </div>
  )
}

export default UserDetails
