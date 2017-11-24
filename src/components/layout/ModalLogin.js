import React, { Component } from 'react';
import Login from '../../api/users/login'
import { connect } from 'react-redux'

class ModalLogin extends Component {
    constructor(props) {
        super(props);
    }
    login(e) {
        e.preventDefault()
        const { dispatch } = this.props
        const { username, password, rememberme } = this.refs;
        Login(username.value, password.value)
            .then(userInfo =>  {
                // if(rememberme.value) 
                // save session
                dispatch({ type: 'USER_LOGIN', item: userInfo })
            })
    }
    render() {
        return (
            <div className="modal fade modal-theme" id="modal-login" tabIndex={-1} role="dialog" aria-labelledby="modal-theme-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="modal-theme-label">
                                <strong>Login</strong>
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div className="loginform-action">
                                <p style={{ textAlign: 'center' }}>Login + Password = Demo + Demo or Demo2 + Demo2</p>
                                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                  .wp-social-login-connect-with {}\n\n                  .wp-social-login-provider-list {}\n\n                  .wp-social-login-provider-list a {}\n\n                  .wp-social-login-provider-list img {}\n\n                  .wsl_connect_with_provider {}\n                " }} />
                                <div className="wp-social-login-widget">
                                    <div className="wp-social-login-connect-with">Connect with:</div>
                                    <div className="wp-social-login-provider-list">
                                        <a rel="nofollow" href="/demo/monarch/wp-login.php?action=wordpress_social_authenticate&mode=login&provider=Facebook&redirect_to=http%3A%2F%2Fthemekitten.com%2Fdemo%2Fmonarch%2F" title="Connect with Facebook" className="wp-social-login-provider wp-social-login-provider-facebook" data-provider="Facebook">
                                            <img alt="Facebook" title="Connect with Facebook" src="plugins/wordpress-social-login/assets/img/32x32/wpzoom//facebook.png" />
                                        </a>
                                        <a rel="nofollow" href="/demo/monarch/wp-login.php?action=wordpress_social_authenticate&mode=login&provider=Google&redirect_to=http%3A%2F%2Fthemekitten.com%2Fdemo%2Fmonarch%2F" title="Connect with Google" className="wp-social-login-provider wp-social-login-provider-google" data-provider="Google">
                                            <img alt="Google" title="Connect with Google" src="plugins/wordpress-social-login/assets/img/32x32/wpzoom//google.png" />
                                        </a>
                                        <a rel="nofollow" href="/demo/monarch/wp-login.php?action=wordpress_social_authenticate&mode=login&provider=WordPress&redirect_to=http%3A%2F%2Fthemekitten.com%2Fdemo%2Fmonarch%2F" title="Connect with WordPress" className="wp-social-login-provider wp-social-login-provider-wordpress" data-provider="WordPress">
                                            <img alt="WordPress" title="Connect with WordPress" src="plugins/wordpress-social-login/assets/img/32x32/wpzoom//wordpress.png" />
                                        </a>
                                        <a rel="nofollow" href="/demo/monarch/wp-login.php?action=wordpress_social_authenticate&mode=login&provider=Instagram&redirect_to=http%3A%2F%2Fthemekitten.com%2Fdemo%2Fmonarch%2F" title="Connect with Instagram" className="wp-social-login-provider wp-social-login-provider-instagram" data-provider="Instagram">
                                            <img alt="Instagram" title="Connect with Instagram" src="plugins/wordpress-social-login/assets/img/32x32/wpzoom//instagram.png" />
                                        </a>
                                        <a rel="nofollow" href="/demo/monarch/wp-login.php?action=wordpress_social_authenticate&mode=login&provider=Vkontakte&redirect_to=http%3A%2F%2Fthemekitten.com%2Fdemo%2Fmonarch%2F" title="Connect with ВКонтакте" className="wp-social-login-provider wp-social-login-provider-vkontakte" data-provider="Vkontakte">
                                            <img alt="ВКонтакте" title="Connect with ВКонтакте" src="plugins/wordpress-social-login/assets/img/32x32/wpzoom//vkontakte.png" />
                                        </a>
                                    </div>
                                    <div className="wp-social-login-widget-clearing" />
                                </div>
                                {/* wsl_render_auth_widget */}
                            </div>
                            <form name="loginform" id="loginform" onSubmit={this.login.bind(this)}>
                                <p className="login-username">
                                    <label htmlFor="user_login">Username or Email Address</label>
                                    <input type="text" name="log" ref="username" id="username" className="input" placeholder="Username or Email" size={20} />
                                </p>
                                <p className="login-password">
                                    <label htmlFor="user_pass">Password</label>
                                    <input type="password" name="pwd" ref="password" id="password" className="input" placeholder="Password" size={20} />
                                </p>
                                <p className="login-remember">
                                    <label>
                                        <input name="rememberme" type="checkbox" ref="rememberme" id="rememberme" /> Remember Me</label>
                                </p>
                                <p className="login-submit">
                                    <input type="submit" name="wp-submit" id="wp-submit" className="button button-primary" defaultValue="Log In" />
                                </p>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p>
                                <a href="/demo/monarch/quote-post-format-example/lost-password/" title="Password Lost and Found">Lost your password?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => ({ userInfo: state.userInfo }))(ModalLogin);