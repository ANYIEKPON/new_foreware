// import Image from "@/node_modules/next/image";
// import blogPost from "../../../public/data/data.json";

// export function generateStaticParams({ id}) {
//   const posts = blogPost;

//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

// export default async function Page({ params }) {
//   const blog = blogPost.find((post) => post.id === params.id);

//   if (!blog) {
//     return <div>Blog post not found</div>;
//   }

//   return (
//     <div className="">
//       <div className="">
//         <h2>{blog.title}</h2>
//         <span>{blog.desc.welTxt}</span>
//         <div className="">
//           <Image src={blog?.img1} width={350} height={200} alt={blog.title} />
//           <span>{blog.imgDesc}</span>
//         </div>
//         <div className="">
//           {blog.desc.subText.map((sub) => (
//             <div className="" key={sub.text}>
//               <h3>{sub.heading}</h3>
//               <p>{sub.text}</p>
//             </div>
//           ))}
//         </div>

//         <span>{blog.desc.last}</span>
//       </div>
//       <div className=""></div>
//     </div>
//   );
// }
