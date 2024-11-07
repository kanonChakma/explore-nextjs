
type PostListProps = {
  post: {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
  }
}

const PostList:React.FC<PostListProps> = ({post}) => {
  const {userId, id, title, body} = post
    return (
      <section className="border box-border w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-56 p-5">
        <div>
           <span>{userId}</span>
           <span>{id}</span>
        </div>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>   
        </div>
      </section>
    );
  };
  
export default PostList
