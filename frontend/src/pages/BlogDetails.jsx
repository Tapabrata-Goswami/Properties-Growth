
import { useParams } from 'react-router-dom'
import BlogDetail from '../components/blogDetail/BlogDetail'
import Hero from '../components/hero/Hero'
import Sidebar from '../components/sidebar/Sidebar'

function BlogDetails() {

  const { slug } = useParams();


  return (
    <>
      <Hero />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">

            <BlogDetail slug={slug} />
            <Sidebar />

          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetails