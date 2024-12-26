
function Hero() {
  return (
    <div className="page-title">
    <div className="page-title_cloud" style={{backgroundImage:'url(/images/icons/cloud.png)'}}></div>
    <div className="page-title_cloud-two" style={{backgroundImage:'url(/images/icons/cloud-1.png)'}}></div>
    <div className="page-title_pattern" style={{backgroundImage:'url(/images/background/pattern-3.png)'}}></div>
    <div className="page-title_gradient"></div>
    <div className="auto-container">
        <h2>Blog Sidebar</h2>
        <ul className="bread-crumb clearfix">
            <li><a href="index.html"><i className="fa-solid fa-house fa-fw"></i> Home</a></li>
            <li>Blog Sidebar</li>
        </ul>
    </div>
</div>
  )
}

export default Hero