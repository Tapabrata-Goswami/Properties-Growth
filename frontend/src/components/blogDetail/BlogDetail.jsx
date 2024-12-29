import axios from "axios";
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react"

function BlogDetail({ slug }) {

    const [blog, setBlog] = useState([]);
    // console.log(slug)
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://sahal.handkrafts.in/art/wp-json/wp/v2/posts?slug=${slug}`);
                setBlog(response.data[0])
            }
            catch (error) {
                setBlog([]);
                console.log(error);
            }

        }
        fetchBlog();
    }, []);

    return (
        <div className="content-side col-lg-8 col-md-12 col-sm-12">
            <div className="blog-detail">
                <div className="blog-detail_inner">
                    <div className="blog-detail_image">
                        <img src={blog.featured_image} alt="" />
                    </div>
                    <div className="blog-detail_content">
                        <div className="blog-detail_author-outer d-flex align-items-center flex-wrap">
                            <div className="blog-detail-author d-flex align-items-center flex-wrap">
                                <div className="blog-detail-author-image">
                                    <img src="/images/resource/author-7.png" alt="" />
                                </div>
                                By {blog.author_name}
                            </div>
                            <ul className="blog-detail-meta d-flex align-items-center flex-wrap">
                                <li><span className="icon fa-regular fa-calendar fa-fw"></span>20 Jan, 2024</li>
                                <li><span className="icon fa-regular fa-comment-dots fa-fw"></span>02 Comments</li>
                            </ul>
                        </div>
                        <h3 className="blog-detail_heading">
                            {blog && blog.title && blog.title.rendered
                                ? blog.title.rendered
                                : "Untitled"
                            }
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam  hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices Maecenas</p>
                        <blockquote style={{ backgroundImage: 'url(/images/background/pattern-6.png)' }}>
                            <i className="flaticon-quote"></i>
                            Buy real estate in areas where the path exists and buy more real estate where there is no path
                            <div className="d-flex justify-content-end">
                                <span>David Waronker</span>
                            </div>
                        </blockquote>
                        <h3>Our Big Differences</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa me. Aliquam  hendrerit urna  vitae mattis tellus ultrices.. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultric Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non our suscipit magna interdum eu. Curabitur pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam  hendrerit urna. Pellentesque sit amet sapien.</p>
                        <div className="middle-image">
                            <img src="assets/images/resource/news-13.jpg" alt="" />
                        </div>
                        <h3>Pro tips for final result</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa me. Aliquam  hendrerit urna  vitae mattis tellus ultrices.. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultric Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non our suscipit magna interdum eu. Curabitur pellentesque sit amet sapien. </p>
                        <ul className="blog-detail_list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Expertise in Patent Protection</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Commitment to Excellence</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Collaborative Partnership</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam  hendrerit urna. Pellentesque sit amet sapien  mattis ligula consectetur, ultrices Maecenas</p>

                        <div className="post-share-options">
                            <div className="post-share-inner d-flex justify-content-between flex-wrap">
                                <div className="post-tags"><a href="#">Investing</a> <a href="#">Legal</a> <a href="#">Design</a></div>
                                <ul className="social-links">
                                    <li><a href="#" className="fa-brands fa-facebook-f fa-fw"></a></li>
                                    <li><a href="#" className="fa-brands fa-twitter fa-fw"></a></li>
                                    <li><a href="#" className="fa-brands fa-google fa-fw"></a></li>
                                    <li><a href="#" className="fa-brands fa-dribbble fa-fw"></a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="blog-more_posts">
                            <div className="blog-more_posts-inner d-flex justify-content-between flex-wrap">
                                <a href="#" className="prev-post">
                                    <i className="flaticon-left-arrow"></i>
                                    Previous post
                                    <span>Eco-Friendly Home Upgrades</span>
                                </a>
                                <a href="#" className="next-post">
                                    <i className="flaticon-next-1"></i>
                                    Next Post
                                    <span>From Fixer-Upper to Dream Home</span>
                                </a>
                            </div>
                        </div>


                        <div className="blog-author_box">
                            <div className="blog-author-box_inner">
                                <div className="blog-author-box_content">
                                    <div className="blog-author-box_image">
                                        <img src="assets/images/resource/author-8.png" alt="" />
                                    </div>
                                    <h5>Ellena M. Ricee</h5>
                                    <div className="blog-author_box-designation">UI/UX Instructor</div>
                                    <div className="blog-author_box-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla.</div>
                                    <ul className="blog-author_socials">
                                        <li><a href="#" className="fa-brands fa-facebook-f fa-fw"></a></li>
                                        <li><a href="#" className="fa-brands fa-twitter fa-fw"></a></li>
                                        <li><a href="#" className="fa-brands fa-google fa-fw"></a></li>
                                        <li><a href="#" className="fa-brands fa-dribbble fa-fw"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="comment-form_outer">
                            <div className="group-title">
                                <h3>Leave a comment</h3>
                            </div>

                            <div className="comment-form">
                                <form method="post" action="blog.html">
                                    <div className="row clearfix">

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <i className="flaticon-user"></i>
                                            <input type="text" name="username" placeholder="Full Name" required="" />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <i className="flaticon-mail"></i>
                                            <input type="text" name="email" placeholder="Email Address" required="" />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea className="" name="message" placeholder="Type Here..."></textarea>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">

                                            <button type="submit" className="theme-btn btn-style-one">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Comment Now</span>
                                                    <span className="text-two">Comment Now</span>
                                                </span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

// BlogDetail.PropTypes = {
//     slug : PropTypes.string.isRequired
// }

export default BlogDetail