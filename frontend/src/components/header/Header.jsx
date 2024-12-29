import { Link } from "react-router-dom"

function Header() {
  return (

	<header className="main-header header-style-four">


		<div className="header-lower">
			<div className="auto-container">
				<div className="inner-container">
					<div className="d-flex justify-content-between align-items-center flex-wrap">
							
						<div className="logo-box">
							<div className="logo"><a href="index.html"><img src="/images/logo.svg" alt="" title=""/></a></div>
						</div>
						
						<div className="nav-outer d-flex align-items-center flex-wrap">
				
							<nav className="main-menu navbar-expand-md">
								<div className="navbar-header">
									   	
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								
								<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
									<ul className="navigation clearfix">
										<li className="dropdown"><a href="#">Home</a>
											<ul>
												<li><a href="index.html">Homepage 01</a></li>
												<li><a href="index-2.html">Homepage 02</a></li>
												<li><a href="index-3.html">Homepage 03</a></li>
												<li className="dropdown"><a href="#">Header Styles</a>
													<ul>
														<li><a href="index.html">Header 01</a></li>
														<li><a href="index-2.html">Header 02</a></li>
														<li><a href="index-3.html">Header 03</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="dropdown"><a href="#">About</a>
											<ul>
												<li><a href="about.html">About us</a></li>
												<li><a href="faq.html">Faq</a></li>
												<li className="dropdown"><a href="#">Our Team</a>
													<ul>
														<li><a href="team.html">Team</a></li>
														<li><a href="team-detail.html">Team Detail</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="dropdown"><a href="#">services</a>
											<ul>
												<li><a href="services.html">services</a></li>
												<li><a href="service-detail.html">services detail</a></li>
											</ul>
										</li>
										<li className="dropdown"><a href="#">property</a>
											<ul>
												<li><a href="property.html">property</a></li>
												<li><a href="property-detail.html">property detail</a></li>
											</ul>
										</li>
										<li><Link to='/blog'>Blog</Link></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</div>
							</nav>
						</div>

						<div className="outer-box d-flex align-items-center flex-wrap">
							

							<div className="header-options_box d-flex align-items-center">
							

								<div className="search-box-btn search-box-outer"><span className="icon"><img src="assets/images/icons/search.svg" alt="" /></span></div>
								

								<div className="nav-btn navSidebar-button">
									<i className="flaticon-dots-menu"></i>
								</div>
								
							</div>
							
						
							<div className="header_button-box">
								<a href="event-detail.html" className="theme-btn btn-style-one">
									<span className="btn-wrap">
										<span className="text-one">Get a Quotes</span>
										<span className="text-two">Get a Quotes</span>
									</span>
								</a>
							</div>
	
							<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
						</div>
						
						
					</div>
				</div>
			</div>
		</div>

		<div className="mobile-menu">
			<div className="menu-backdrop"></div>
			<div className="close-btn"><span className="icon flaticon-close-1"></span></div>
			
			<nav className="menu-box">
				<div className="nav-logo"><a href="index.html"><img src="assets/images/logo.svg" alt="" title=""/></a></div>
				<div className="menu-outer"></div>
			</nav>
		</div>

		
	</header>

  )
}

export default Header