
function Sidebar() {
  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
        <aside className="sidebar">
            <div className="sidebar-inner">
                

                <div className="sidebar-widget search-box">
                    <div className="widget-content">
                        <h5 className="sidebar-widget_title">Search Here</h5>
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input type="search" name="search-field" value="" placeholder="Search..." required />
                                <button type="submit"><span className="icon fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                

                <div className="sidebar-widget post-widget">
                    <div className="widget-content">
                        <h5 className="sidebar-widget_title">Popular Post</h5>

                        <div className="post">
                            <div className="thumb"><a href="blog-detail.html"><img src="/images/resource/post-thumb-4.jpg" alt="" /></a></div>
                            <h6><a href="blog-detail.html">Unlocking the Market: Trends and  Insights</a></h6>
                            <div className="post-date"><i><img src="/images/icons/calendar.svg" alt="" /></i> Mar 18, 2028</div>
                        </div>

                        <div className="post">
                            <div className="thumb"><a href="blog-detail.html"><img src="assets/images/resource/post-thumb-5.jpg" alt="" /></a></div>
                            <h6><a href="blog-detail.html">Buyer's Blueprint: Navigating Home Ownership</a></h6>
                            <div className="post-date"><i><img src="/images/icons/calendar.svg" alt="" /></i> Mar 18, 2028</div>
                        </div>

                        <div className="post">
                            <div className="thumb"><a href="blog-detail.html"><img src="/images/resource/post-thumb-6.jpg" alt="" /></a></div>
                            <h6><a href="blog-detail.html">Market Maven: News and  Views in Real Estate</a></h6>
                            <div className="post-date"><i><img src="/images/icons/calendar.svg" alt="" /></i> Mar 18, 2028</div>
                        </div>

                    </div>
                </div>
                

                <div className="sidebar-widget category-widget">
                    <div className="widget-content">
                        <h5 className="sidebar-widget_title">Categories</h5>
                        <ul className="service-list">
                            <li><a href="#">Buying <span>(03)</span></a></li>
                            <li><a href="#">Neighborhoods <span>(04)</span></a></li>
                            <li><a href="#">Trends <span>(02)</span></a></li>
                            <li><a href="#">Renovation <span>(05)</span></a></li>
                            <li><a href="#">Selling <span>(02)</span></a></li>
                        </ul>
                    </div>
                </div>
                

                <div className="sidebar-widget popular-tags">
                    <div className="widget-content">
                        <h5 className="sidebar-widget_title">Popular Tags</h5>
                        <a href="#">Investing</a>
                        <a href="#">Legal</a>
                        <a href="#">Design</a>
                        <a href="#">Sustainability</a>
                    </div>
                </div>
                
            </div>
        </aside>
    </div>
  )
}

export default Sidebar