import { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom';


function Blogs() {

    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchBlogs = ()=>{
            axios.get('https://sahal.handkrafts.in/art/wp-json/wp/v2/posts')
            .then((response)=>{
                if(response.status === 200){
                    setBlogs(response.data);
                    console.log(response.data[0].title.rendered)
                }
                
            })
            .catch((error)=>{
                console.log(error);
            })
        };

        fetchBlogs();
    },[]);

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">

                    
                    <div className="content-side col-lg-8 col-md-12 col-sm-12">
                        <div className="row clearfix">

                            {
                                blogs.map((blog)=>(
                                    
                                    <div className="news-block_one style-two col-lg-6 col-md-6 col-sm-12" key={blog.id}>
                                    <div className="news-block_one-inner">
                                        <div className="news-block_one-image">
                                            <a href={`/blog/${blog.slug}`}><img src={blog.featured_image} alt="" /></a>
                                        </div>
                                        <div className="news-block_one-content">
                                            <ul className="news-block_one-meta">
                                                <li>{ blog.author_name }</li>
                                                <li>{blog.read_time} min read</li>
                                            </ul>
                                            <h4 className="news-block_one-title"><a href={`/blog/${blog.slug}`}>{blog.title.rendered}</a></h4>
                                            <Link className="news-block_one-more" to={`/blog/${blog.slug}`}>Read More <i className="flaticon-next-1"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                
                                ))
                            }

                        </div>

                        
                        <ul className="styled-pagination">
                            <li><a href="#" className="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li className="next"><a href="#"><span className="fa-solid fa-angle-right fa-fw"></span></a></li>
                        </ul>
                        

                    </div>

                    <Sidebar />

                </div>
            </div>
        </div>
    )
}

export default Blogs