import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog() {
     const allPostsData = getSortedPostsData();

     return (
          <div id="holder">
               <div id="left"></div>
               <div id="middle">
                    <h1>Kirill Vasilev</h1>

                    <h2>Blog</h2>

                    <ul className="blog-list">
                         {allPostsData.length > 0 ? (
                              allPostsData.map(({ id, title, description }) => (
                                   <li key={id}>
                                        <Link href={`/blogs/${id}`}>
                                             {title}
                                        </Link>
                                        {description && (
                                             <>
                                                  <br />
                                                  <span className="muted">{description}</span>
                                             </>
                                        )}
                                   </li>
                              ))
                         ) : (
                              <li>No posts yet.</li>
                         )}
                    </ul>

                    <p style={{ marginTop: '2em' }}>
                         <Link href="/">&larr; Home</Link>
                    </p>
               </div>
               <div id="right"></div>
          </div>
     );
}
