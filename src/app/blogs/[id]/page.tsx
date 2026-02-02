import { getAllPostIds, getPostData } from '../../../lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
     const paths = getAllPostIds();
     return paths.map((path) => path.params);
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params;
     const postData = await getPostData(id);

     return (
          <div id="holder">
               <div id="left"></div>
               <div id="middle">
                    <article className="prose">
                         <h1>{postData.title}</h1>
                         <div className="muted" style={{ marginBottom: '2em' }}>{postData.date}</div>

                         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
                    </article>

                    <p style={{ marginTop: '3em' }}>
                         <Link href="/blogs">&larr; Back to Blog</Link>
                    </p>
               </div>
               <div id="right"></div>
          </div>
     );
}
