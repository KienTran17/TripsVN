import React, { Component } from 'react';

export default class NavRight extends Component {
    render() {
        return (
            <div className="user-panel">
                <div className="user-panel-wrapper">
                    {/* BuddyPress Navigation */}
                    <nav role="navigation">
                        <div className="menu-buddypress-menu-container">
                            <ul id="menu-buddypress-menu" className="nav nav-buddy">
                                <li id="menu-item-1770" className="ion-ios-home menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1770">
                                    <a className="ion-ios-home menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home" href="/demo/monarch/">Home</a>
                                </li>
                                <li id="menu-item-1768" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1768">
                                    <a className=" menu-item menu-item-type-post_type menu-item-object-page" href="/demo/monarch/activity/">Activity</a>
                                </li>
                                <li id="menu-item-1542" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1542">
                                    <a className=" menu-item menu-item-type-post_type menu-item-object-page" href="/demo/monarch/widgets/">Widgets</a>
                                </li>
                                <li id="menu-item-1766" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1766">
                                    <a className=" menu-item menu-item-type-post_type menu-item-object-page" href="/demo/monarch/groups/">Groups</a>
                                </li>
                                <li id="menu-item-1767" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767">
                                    <a className=" menu-item menu-item-type-post_type menu-item-object-page" href="/demo/monarch/members/">Members</a>
                                </li>
                                <li id="menu-item-2802" className="ion-ios-book menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2802">
                                    <a className="ion-ios-book menu-item menu-item-type-taxonomy menu-item-object-category" href="/demo/monarch/category/posts/">Posts</a>
                                </li>
                                <li id="menu-item-2803" className="ion-ios-cart menu-item menu-item-type-post_type menu-item-object-page menu-item-2803">
                                    <a className="ion-ios-cart menu-item menu-item-type-post_type menu-item-object-page" href="/demo/monarch/home-shop/">Shop</a>
                                </li>
                                <li id="menu-item-1769" className="menu-item menu-item-type-post_type_archive menu-item-object-forum menu-item-1769">
                                    <a className=" menu-item menu-item-type-post_type_archive menu-item-object-forum" href="/demo/monarch/forums/">Forums</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Search button */}
                    <ul className="nav nav-buddy">
                        <li className="search">
                            <a href="#" data-toggle="modal" data-target="#modal-search">Search</a>
                        </li>
                    </ul>
                    {/* If BuddyPress activated */}
                    {/* Avatar */}
                    <div className="buddy-avatar logged-out">
                        <div className="avatar-outline">
                            <div className="avatar" />
                        </div>
                    </div>
                    {/* Logged-out Menu */}
                    <ul className="nav nav-buddy">
                        <li className="login">
                            <a href="#" data-toggle="modal" data-target="#modal-login">Login</a>
                        </li>
                    </ul>
                    {/* End is_buddypress */}
                    {/* End is_user_logged_in */}
                </div>
            </div>
        );
    }
}