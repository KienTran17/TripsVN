import React, { Component } from 'react'
export default class NavLeft extends Component {
    render() {
        return (
            <div className="header-panel" >
                {/* Logo */}
                <header id="masthead" className="site-header" role="banner" >
                    <div className="site-branding">
                        <h1 className="site-title clearfix">
                            <a href="/demo/monarch/" rel="home" title="Amazing Social Network Theme">Monarch</a>
                        </h1>
                    </div>
                    <button type="button" className="header-panel-toggle mobile">
                        <span className="ion-android-more-horizontal" />
                    </button>
                </header>
                <button type="button" className="layout-button top">
                    <span className="ion-navicon-round" />
                    <div className="border-bottom" />
                </button>
                <ul className="nav nav-social nav-mini-panel top">
                    <li>
                        <a className="layout-button" href="#">
                            <span className="ion-android-more-vertical" />
                        </a>
                    </li>
                </ul>
                <div className="header-panel-scroll">
                    {/* Panel Sidebar */}
                    <div className="sidebar-panel">
                        <aside id="categories-1" className="widget widget-panel widget_categories">
                            <h4 className="widget-title clearfix">
                                <span>Categories</span>
                            </h4>
                            <label className="screen-reader-text" htmlFor="cat">Categories</label>
                            <select name="cat" id="cat" className="postform">
                                <option value={-1}>Select Category</option>
                                <option className="level-0" value={37}>Books</option>
                                <option className="level-0" value={36}>Events</option>
                                <option className="level-0" value={289}>News</option>
                                <option className="level-0" value={38}>Photo</option>
                                <option className="level-0" value={106}>Posts</option>
                                <option className="level-0" value={93}>Professional</option>
                                <option className="level-0" value={1}>Travel</option>
                                <option className="level-0" value={49}>Writing</option>
                            </select>
                        </aside>
                        <div className="scrollbar-inner monarch_menu left">
                            {/* Primary Menu */}
                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <div className="menu-categories-menu-container">
                                    <ul id="menu-categories-menu" className="nav nav-primary">
                                        <li id="menu-item-1806" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1806">
                                            <a href="http://www.themekitten.com/demo/monarch/">Main Page</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1807" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1807">
                                                    <a href="http://www.themekitten.com/demo/monarch/">Default</a>
                                                </li>
                                                <li id="menu-item-1803" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1803">
                                                    <a href="/demo/monarch/masonry/">Masonry</a>
                                                </li>
                                                <li id="menu-item-1802" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1802">
                                                    <a href="/demo/monarch/timeline/">Timeline</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-784" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-784">
                                            <a href="/demo/monarch/category/photo/">Photo
                      <div className="menu-item-description">Sed ante suspendisse pede amet facilisi cras porta pede ullamcorper. Vel dignissim duis ornare volutpat
                        tortor mi sodales magna pharetra posuere praesent netus aenean massa. Condimentum pulvinar imperdiet
                        erat phasellus tincidunt erat.</div>
                                            </a>
                                        </li>
                                        <li id="menu-item-847" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-847">
                                            <a href="/demo/monarch/category/professional/">Professional
                      <div className="menu-item-description">Elit vivendum interesset an eum, mollis imperdiet id vel.</div>
                                            </a>
                                        </li>
                                        <li id="menu-item-2283" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2283">
                                            <a href="/demo/monarch/documentation/">Documentation</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-2298" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2298">
                                                    <a href="/demo/monarch/documentation/">Installation</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-2284" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2284">
                                                            <a href="#Introduction">Introduction</a>
                                                        </li>
                                                        <li id="menu-item-2285" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2285">
                                                            <a href="#Support">Support</a>
                                                        </li>
                                                        <li id="menu-item-2286" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2286">
                                                            <a href="#WhatIsMonarch">What is Monarch?</a>
                                                        </li>
                                                        <li id="menu-item-2287" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2287">
                                                            <a href="#Changelog">Changelog</a>
                                                        </li>
                                                        <li id="menu-item-2288" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2288">
                                                            <a href="#Download">Download Monarch</a>
                                                        </li>
                                                        <li id="menu-item-2290" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2290">
                                                            <a href="#Update">UPDATE</a>
                                                        </li>
                                                        <li id="menu-item-2289" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2289">
                                                            <a href="#Install">Installation</a>
                                                        </li>
                                                        <li id="menu-item-2291" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2291">
                                                            <a href="#BuddyPressInstallation">BP Installation</a>
                                                        </li>
                                                        <li id="menu-item-2292" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2292">
                                                            <a href="#BuddyPressRequirements">BP REQUIREMENTS</a>
                                                        </li>
                                                        <li id="menu-item-2293" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2293">
                                                            <a href="#Widgets">Widgets</a>
                                                        </li>
                                                        <li id="menu-item-2294" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2294">
                                                            <a href="#LiveCustomizer">Live Customizer</a>
                                                        </li>
                                                        <li id="menu-item-2295" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2295">
                                                            <a href="#MenuSettings">Menu Settings</a>
                                                        </li>
                                                        <li id="menu-item-2296" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2296">
                                                            <a href="#DemoContent">DEMO CONTENT</a>
                                                        </li>
                                                        <li id="menu-item-2297" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2297">
                                                            <a href="#FAQ">FAQ</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-2082" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2082">
                                                    <a href="/demo/monarch/plugins/">Plugins</a>
                                                    <ul className="sub-menu">
                                                        <li id="menu-item-2299" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2299">
                                                            <a href="#Important2">Important</a>
                                                        </li>
                                                        <li id="menu-item-2300" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2300">
                                                            <a href="#PluginInstallation">Plugin Installation</a>
                                                        </li>
                                                        <li id="menu-item-2301" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2301">
                                                            <a href="#BuddyPress">BuddyPress</a>
                                                        </li>
                                                        <li id="menu-item-2137" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2137">
                                                            <a href="#WooCommerce">WooCommerce</a>
                                                        </li>
                                                        <li id="menu-item-2302" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2302">
                                                            <a href="#bbPress">bbPress</a>
                                                        </li>
                                                        <li id="menu-item-2303" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2303">
                                                            <a href="#rtMedia">rtMedia</a>
                                                        </li>
                                                        <li id="menu-item-2304" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2304">
                                                            <a href="#WordPressSocialLogin">WordPress Social Login</a>
                                                        </li>
                                                        <li id="menu-item-2305" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2305">
                                                            <a href="#WP-Polls">WP-Polls</a>
                                                        </li>
                                                        <li id="menu-item-2306" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2306">
                                                            <a href="#Like">BuddyPress Like</a>
                                                        </li>
                                                        <li id="menu-item-2307" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2307">
                                                            <a href="#InfiniteScroll">JetPack: Infinite Scroll</a>
                                                        </li>
                                                        <li id="menu-item-2308" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2308">
                                                            <a href="#BuddyDrive">BuddyDrive</a>
                                                        </li>
                                                        <li id="menu-item-2309" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2309">
                                                            <a href="#iFlyChat">iFlyChat</a>
                                                        </li>
                                                        <li id="menu-item-2310" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2310">
                                                            <a href="#GalleryCarouselWithoutJetPack">Carousel</a>
                                                        </li>
                                                        <li id="menu-item-2311" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2311">
                                                            <a href="#ContactForm7">Contact Form 7</a>
                                                        </li>
                                                        <li id="menu-item-2312" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2312">
                                                            <a href="#reCAPTCHA">reCaptcha</a>
                                                        </li>
                                                        <li id="menu-item-2313" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2313">
                                                            <a href="#AddNewDefaultAvatar">DEFAULT AVATAR</a>
                                                        </li>
                                                        <li id="menu-item-2314" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2314">
                                                            <a href="#EnvatoWordPressToolkit">ENVATO WORDPRESS TOOLKIT</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-782" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-782">
                                            <a href="/demo/monarch/category/events/">Events
                      <div className="menu-item-description">Sed ante suspendisse pede amet facilisi cras porta pede ullamcorper. Vel dignissim duis ornare volutpat
                        tortor mi sodales magna pharetra posuere praesent netus aenean massa. Condimentum pulvinar imperdiet
                        erat phasellus tincidunt erat.</div>
                                            </a>
                                        </li>
                                        <li id="menu-item-2093" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2093">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-2094" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2094">
                                                    <a href="/demo/monarch/login/">Login Page (need to log out)</a>
                                                </li>
                                                <li id="menu-item-2095" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2095">
                                                    <a href="/demo/monarch/register/">Register (need to log outt)</a>
                                                </li>
                                                <li id="menu-item-2097" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2097">
                                                    <a href="/demo/monarch/404">Page 404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="menu-item-786" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-786">
                                            <a href="/demo/monarch/category/travel/">Travel
                      <div className="menu-item-description">Sed ante suspendisse pede amet facilisi cras porta pede ullamcorper. Vel dignissim duis ornare volutpat
                        tortor mi sodales magna pharetra posuere praesent netus aenean massa. Condimentum pulvinar imperdiet
                        erat phasellus tincidunt erat.</div>
                                            </a>
                                        </li>
                                        <li id="menu-item-810" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-810">
                                            <a href="/demo/monarch/category/posts/">Posts
                      <div className="menu-item-description">Nec commodo lobortis ea.</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1761" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1761">
                                                    <a href="/demo/monarch/another-standard-format-example/">Standard</a>
                                                </li>
                                                <li id="menu-item-1763" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1763">
                                                    <a href="/demo/monarch/aside-post-format-example/">Aside</a>
                                                </li>
                                                <li id="menu-item-1753" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1753">
                                                    <a href="/demo/monarch/link-post-format-example/">Link</a>
                                                </li>
                                                <li id="menu-item-1754" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1754">
                                                    <a href="/demo/monarch/quote-post-format-example/">Quote</a>
                                                </li>
                                                <li id="menu-item-1755" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1755">
                                                    <a href="/demo/monarch/gallery-post-format-example/">Gallery</a>
                                                </li>
                                                <li id="menu-item-1764" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1764">
                                                    <a href="/demo/monarch/image-post-format-example/">Image</a>
                                                </li>
                                                <li id="menu-item-1756" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1756">
                                                    <a href="/demo/monarch/752-2/">Status</a>
                                                </li>
                                                <li id="menu-item-1757" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1757">
                                                    <a href="/demo/monarch/chat-post-format-example/">Chat</a>
                                                </li>
                                                <li id="menu-item-1760" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1760">
                                                    <a href="/demo/monarch/video-post-format-example/">Video</a>
                                                </li>
                                                <li id="menu-item-1759" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1759">
                                                    <a href="/demo/monarch/lorem-ipsum-dolor-sit-amet-ferri-postulant-3/">Audio</a>
                                                </li>
                                                <li id="menu-item-1752" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1752">
                                                    <a href="/demo/monarch/lorem-ipsum-dolor-sit-amet-ferri-postulant-5/">Post Comments</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <aside id="comments-5" className="widget widget-panel widget_comments">
                            <h4 className="widget-title clearfix">
                                <span>Comments</span>
                            </h4>
                            <ul>
                                <li>
                                    <a href="/demo/monarch/another-standard-format-example/#comments" data-title="Another Standard Format Example" data-toggle="tooltip" data-placement="left" data-animation="true">
                                        <div className="clearfix">
                                            <div className="image">
                                                <img alt src="uploads/avatars/1/230e46bce1852cf64e90c632e3b0dec2-bpthumb.jpg" srcSet="uploads/avatars/1/230e46bce1852cf64e90c632e3b0dec2-bpthumb.jpg 2x" className="avatar avatar-60 photo" height={60} width={60} /> </div>
                                            <div className="text">
                                                <span className="commauth">
                                                    John Doe </span>
                                                <span className="time">
                                                    February 21, 2016
                      </span>
                                            </div>
                                        </div>
                                        <div className="post">
                                            Cum et assum disputationi. Animal luptatum accusata pro at. His et probo vidisse... </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/demo/monarch/lorem-ipsum-dolor-sit-amet-ferri-postulant-ne-sit-4/#comments" data-title="John Doe" data-toggle="tooltip" data-placement="left" data-animation="true">
                                        <div className="clearfix">
                                            <div className="image">
                                                <img alt src="uploads/avatars/23/bc66d63d6e9e7d1d4bf813e2b6cc9e59-bpthumb.jpg" srcSet="uploads/avatars/23/bc66d63d6e9e7d1d4bf813e2b6cc9e59-bpthumb.jpg 2x" className="avatar avatar-60 photo" height={60} width={60} /> </div>
                                            <div className="text">
                                                <span className="commauth">
                                                    Lora Corns </span>
                                                <span className="time">
                                                    February 17, 2016
                      </span>
                                            </div>
                                        </div>
                                        <div className="post">
                                            Habemus propriae deterruisset pri at, aliquip corpora omittantur ea mei. Luptatu... </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/demo/monarch/link-post-format-example/#comments" data-title="Originally founded by three designers, Envato has always been a company by creatives, for creatives." data-toggle="tooltip" data-placement="left" data-animation="true">
                                        <div className="clearfix">
                                            <div className="image">
                                                <img alt src="uploads/avatars/35/7640b8ba3b1e572e78c2bc5907773725-bpthumb.jpg" srcSet="uploads/avatars/35/7640b8ba3b1e572e78c2bc5907773725-bpthumb.jpg 2x" className="avatar avatar-60 photo" height={60} width={60} /> </div>
                                            <div className="text">
                                                <span className="commauth">
                                                    Precious Vela </span>
                                                <span className="time">
                                                    February 17, 2016
                      </span>
                                            </div>
                                        </div>
                                        <div className="post">
                                            Ius graeco contentiones ei. Sanctus temporibus eos at, his melius blandit at, es... </div>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    {/* Sidebar Footer */}
                    <footer className="hp-footer" role="contentinfo" id="footer">
                        {/* Social Links Menu */}
                        <nav role="navigation" className="social">
                            <div className="menu-social-links-menu-container">
                                <ul id="menu-social-links-menu" className="nav nav-social">
                                    <li id="menu-item-13" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13">
                                        <a href="https://instagram.com/">
                                            <span className="hidden">Instagram</span>
                                        </a>
                                    </li>
                                    <li id="menu-item-14" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14">
                                        <a href="http://twitter.com">
                                            <span className="hidden">twitter</span>
                                        </a>
                                    </li>
                                    <li id="menu-item-15" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15">
                                        <a href="https://facebook.com/">
                                            <span className="hidden">facebook</span>
                                        </a>
                                    </li>
                                    <li id="menu-item-16" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                                        <a href="http://www.pinterest.com/">
                                            <span className="hidden">pinterest</span>
                                        </a>
                                    </li>
                                    <li id="menu-item-17" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17">
                                        <a href="http://github.com">
                                            <span className="hidden">github</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* Info Menu */}
                        <nav role="navigation">
                            <div className="menu-info-menu-container">
                                <ul id="menu-info-menu" className="nav nav-info">
                                    <li id="menu-item-130" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130">
                                        <a href="/demo/monarch/about-us/">About Project</a>
                                    </li>
                                    <li id="menu-item-722" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-722">
                                        <a href="/demo/monarch/typography/">Elements &amp; Typography</a>
                                    </li>
                                    <li id="menu-item-127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-127">
                                        <a href="/demo/monarch/contact/">Contacts</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* WordPress Copyright */}
                        <div className="copyright">
                            Proudly powered by
            <strong>WordPress</strong>
                        </div>
                        <ul className="nav nav-social nav-mini-panel">
                            <li>
                                <a className="layout-button" href="#">
                                    <span className="ion-help-buoy" />
                                </a>
                            </li>
                            <li>
                                <a className="layout-button last" href="#">
                                    <span className="ion-information-circled" />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div >
        );
    }
}