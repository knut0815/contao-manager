import React        from 'react';
import Translation  from '../translation';
import isEqual      from 'lodash/isEqual';

var Link = React.createClass({
    contextTypes: {
        routing: React.PropTypes.object
    },

    shouldComponentUpdate: function(nextProps, nextState) {

        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    },

    handleClick: function(e) {
        e.preventDefault();

        this.context.routing.redirect(this.props.routeName);
    },

    generateLink: function(routeName) {
        return this.context.routing.generateUrl(routeName);
    },

    isRouteActive: function(routeName) {
        return this.context.routing.isCurrentRoute(routeName);
    },

    handleLogout: function(e) {
        e.preventDefault();

        this.context.routing.redirect('logout');
    },

    render: function() {
        return (
            <a onClick={this.handleClick}
               href={this.generateLink(this.props.routeName)}
               className={this.isRouteActive(this.props.routeName) ? 'active' : 'inactive'}
            >{this.props.children}</a>
        )
    }
});

var NavigationComponent = React.createClass({
    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <nav role="navigation">
                <ul>
                    <li><Link routeName="packages"><Translation domain="navigation">Packages</Translation></Link></li>
                    <li><Link routeName="maintenance"><Translation domain="navigation">Maintenance</Translation></Link></li>
                    <li>
                        <a><Translation domain="navigation">Files</Translation></a>
                        <ul>
                            <li><Link routeName="composer-json">composer.json</Link></li>
                        </ul>
                    </li>
                    <li className="icon">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.993 204.993"><path d="M113.711 202.935H92.163c-3.242 0-4.373.007-15.421-27.364l-8.532-3.468c-23.248 10.547-26 10.547-26.92 10.547h-1.779l-1.517-1.303-15.275-14.945c-2.323-2.319-3.128-3.124 8.825-30.137l-3.479-8.231C0 117.977 0 116.81 0 113.496V92.37c0-3.31 0-4.355 27.972-15.171l3.479-8.249c-12.644-26.602-11.774-27.428-9.28-29.776l16.427-16.105 2.04-.064c2.48 0 11.681 3.357 27.371 9.981l8.507-3.454C86.758 2.054 88.015 2.058 91.246 2.058h21.548c3.228 0 4.363.004 15.411 27.382l8.546 3.443c23.212-10.533 26-10.533 26.927-10.533h1.768l1.517 1.281 15.275 14.92c2.323 2.344 3.117 3.146-8.836 30.17l3.489 8.278c28.101 10.014 28.101 11.177 28.101 14.498v21.101c0 3.232 0 4.37-28.008 15.192l-3.457 8.256c12.58 26.487 11.749 27.317 9.394 29.69l-16.552 16.205-2.051.057c-2.469 0-11.649-3.361-27.317-9.992l-8.557 3.457c-10.27 27.472-11.437 27.472-14.733 27.472zm-19.308-8.722h16.996c1.95-3.976 6.166-14.516 9.541-23.595l.68-1.807 15.475-6.249 1.664.705c9.223 3.933 20.124 8.292 24.372 9.631l11.943-11.681c-1.517-4.205-6.116-14.494-10.264-23.173l-.837-1.764 6.403-15.285 1.743-.673c9.316-3.586 20.11-8.013 24.143-10.032V93.88c-4.08-1.918-14.831-6.009-24.096-9.294l-1.814-.648-6.445-15.3.769-1.725c3.965-8.947 8.375-19.501 9.788-23.753l-11.975-11.706c-3.865 1.349-14.688 5.987-23.817 10.153l-1.7.78-15.475-6.238-.691-1.721c-3.658-9.13-8.203-19.716-10.253-23.635H93.569c-1.961 3.965-6.163 14.509-9.53 23.585l-.669 1.797-15.432 6.27-1.664-.712c-9.244-3.926-20.167-8.278-24.429-9.616L29.923 43.805c1.496 4.198 6.109 14.48 10.243 23.159l.848 1.768-6.435 15.278-1.732.669c-9.301 3.582-20.077 8.006-24.111 10.017v16.431c4.08 1.925 14.82 6.027 24.079 9.326l1.8.655 6.446 15.249-.769 1.721c-3.965 8.94-8.371 19.48-9.788 23.724l12 11.742c3.854-1.36 14.663-5.998 23.803-10.168l1.711-.784 15.443 6.277.691 1.721c3.669 9.133 8.2 19.701 10.251 23.623zm8.092-56.56c-19.759 0-35.849-15.772-35.849-35.159 0-19.372 16.087-35.134 35.849-35.134 19.748 0 35.799 15.765 35.799 35.134 0 19.387-16.051 35.159-35.799 35.159zm0-61.563c-14.956 0-27.113 11.846-27.113 26.405 0 14.569 12.154 26.426 27.113 26.426 14.931 0 27.078-11.857 27.078-26.426-.004-14.559-12.147-26.405-27.078-26.405z"/></svg>
                            <span>Advanced</span>
                        </a>
                        <ul>
                            <li><Link routeName="self-test"><Translation domain="navigation">Self test</Translation></Link></li>
                            <li><Link routeName="logout"><Translation domain="navigation">Logout</Translation></Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
});

export default NavigationComponent;
