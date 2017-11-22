import React, { Component } from 'react';

export default class ModalSearch extends Component {
    render() {
        return (
            <div className="modal fade modal-theme" id="modal-search" tabIndex={-1} role="dialog" aria-labelledby="modal-theme-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="modal-theme-label">
                                <strong>What you are looking for?</strong>
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="search-box">
                                <div className="icon-box ion-home">
                                    {/* Site Search */}
                                    <form role="search" method="get" className="search-form" action="/demo/monarch/">
                                        <label>
                                            <span className="screen-reader-text">Search for:</span>
                                            <input type="search" className="search-field" placeholder="Search …" defaultValue name="s" />
                                        </label>
                                        <input type="submit" className="search-submit" defaultValue="Search" />
                                    </form>
                                </div>
                                {/* If BuddyPress Members Component activated  */}
                                <div className="icon-box ion-person-stalker">
                                    <div id="members-dir-search" className="dir-search" role="search">
                                        <form action="/demo/monarch/members/" method="get" id="search-members-form">
                                            <label htmlFor="members_search">
                                                <input type="text" name="members_search" id="members_search" placeholder="Search Members..." />
                                            </label>
                                            <input type="submit" id="members_search_submit" name="members_search_submit" defaultValue="Search" />
                                        </form>
                                    </div>
                                    {/* #members-dir-search */}
                                </div>
                                {/* If BuddyPress Groups Component activated */}
                                <div className="icon-box ion-folder">
                                    <div id="group-dir-search" className="dir-search" role="search">
                                        <form action="/demo/monarch/groups/" method="get" id="search-groups-form">
                                            <label htmlFor="groups_search">
                                                <input type="text" name="groups_search" id="groups_search" placeholder="Search Groups..." />
                                            </label>
                                            <input type="submit" id="groups_search_submit" name="groups_search_submit" defaultValue="Search" />
                                        </form>
                                    </div>
                                    {/* #group-dir-search */}
                                </div>
                                {/* If bbPress activated */}
                                <div className="icon-box ion-chatbox-working">
                                    <form role="search" method="get" id="bbp-search-form" action="/demo/monarch/forums/search/">
                                        <div>
                                            <label className="screen-reader-text hidden" htmlFor="bbp_search">Search for:</label>
                                            <input type="hidden" name="action" defaultValue="bbp-search-request" />
                                            <input tabIndex={101} type="text" defaultValue placeholder="Search..." name="bbp_search" id="bbp_search" />
                                            <input tabIndex={102} className="button" type="submit" id="bbp_search_submit" defaultValue="Search" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
