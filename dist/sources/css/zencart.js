/*!
 *   AdminLTE v2.3.3
 *   Author: Almsaeed Studio
 *	 Website: Almsaeed Studio <http://almsaeedstudio.com>
 *   License: Open source - MIT
 *           Please visit http://opensource.org/licenses/MIT for more information
!*/
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic);
/*
 * Core: General Layout Style
 * -------------------------
 */
html,
body {
  min-height: 100%; }
  .layout-boxed html, .layout-boxed
  body {
    height: 100%; }

body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  overflow-y: auto; }

/* Layout */
.wrapper {
  min-height: 100%;
  overflow: hidden;
  position: relative; }
  .wrapper:before, .wrapper:after {
    content: " ";
    display: table; }
  .wrapper:after {
    clear: both; }
  .layout-boxed .wrapper {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    max-width: 1250px;
    min-height: 100%;
    position: relative; }

.layout-boxed {
  background: url("${boxed-layout-bg-image-path}") repeat fixed; }

/*
 * Content Wrapper - contains the main content
 * ```.right-side has been deprecated as of v2.0.0 in favor of .content-wrapper  ```
 */
.content-wrapper,
.right-side,
.main-footer {
  margin-left: 230px;
  transition: transform 0.3s ease-in-out,margin 0.3s ease-in-out;
  z-index: 820; }
  .layout-top-nav .content-wrapper, .layout-top-nav
  .right-side, .layout-top-nav
  .main-footer {
    margin-left: 0; }
  @media (max-width: 767px) {
    .content-wrapper,
    .right-side,
    .main-footer {
      margin-left: 0; } }
  @media (min-width: 768px) {
    .sidebar-collapse .content-wrapper, .sidebar-collapse
    .right-side, .sidebar-collapse
    .main-footer {
      margin-left: 0; } }
  @media (max-width: 767px) {
    .sidebar-open .content-wrapper, .sidebar-open
    .right-side, .sidebar-open
    .main-footer {
      -ms-transform: translate(230px, 0);
          transform: translate(230px, 0); } }

.content-wrapper,
.right-side {
  background-color: #ecf0f5;
  min-height: 100%;
  z-index: 800; }

.main-footer {
  background: #fff;
  border-top: 1px solid #d2d6de;
  color: #444;
  padding: 15px; }

/* Fixed layout */
.fixed .main-header,
.fixed .main-sidebar,
.fixed .left-side {
  position: fixed; }

.fixed .main-header {
  left: 0;
  right: 0;
  top: 0; }

.fixed .content-wrapper,
.fixed .right-side {
  padding-top: 50px; }
  @media (max-width: 767px) {
    .fixed .content-wrapper,
    .fixed .right-side {
      padding-top: 100px; } }

.fixed.layout-boxed .wrapper {
  max-width: 100%; }

body.hold-transition .content-wrapper,
body.hold-transition .right-side,
body.hold-transition .main-footer,
body.hold-transition .main-sidebar,
body.hold-transition .left-side,
body.hold-transition .main-header > .navbar,
body.hold-transition .main-header .logo {
  transition: none; }

/* Content */
.content {
  margin-left: auto;
  margin-right: auto;
  min-height: 250px;
  padding: 15px;
  padding-left: 15px;
  padding-right: 15px; }
  .content:before, .content:after {
    content: " ";
    display: table; }
  .content:after {
    clear: both; }

/* H1 - H6 font */
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: 'Source Sans Pro', sans-serif; }

/* General Links */
a {
  color: #3c8dbc; }

a:hover,
a:active,
a:focus {
  color: #72afd2;
  outline: none;
  text-decoration: none; }

/* Page Header */
.page-header {
  font-size: 22px;
  margin: 10px 0 20px 0; }
  .page-header > small {
    color: #666;
    display: block;
    margin-top: 5px; }

/*
 * Component: Main Header
 * ----------------------
 */
.main-header {
  max-height: 100px;
  position: relative;
  z-index: 1030; }
  .main-header > .navbar {
    border: none;
    border-radius: 0;
    margin-bottom: 0;
    margin-left: 230px;
    min-height: 50px;
    transition: margin-left 0.3s ease-in-out; }
    .layout-top-nav .main-header > .navbar {
      margin-left: 0; }
  .main-header [id="navbar-search-input"].form-control{
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent; }
    .main-header [id="navbar-search-input"].form-control:focus, .main-header [id="navbar-search-input"].form-control:active{
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(0, 0, 0, 0.1); }
    .main-header [id="navbar-search-input"].form-control::-moz-placeholder{
      color: #ccc;
      opacity: 1; }
    .main-header [id="navbar-search-input"].form-control:-ms-input-placeholder{
      color: #ccc; }
    .main-header [id="navbar-search-input"].form-control::-webkit-input-placeholder{
      color: #ccc; }
  .main-header .navbar-custom-menu,
  .main-header .navbar-right {
    float: right; }
    @media (max-width: 991px) {
      .main-header .navbar-custom-menu a,
      .main-header .navbar-right a {
        background: transparent;
        color: inherit; } }
  @media (max-width: 767px) {
    .main-header .navbar-right {
      float: none; }
      .navbar-collapse .main-header .navbar-right {
        margin: 7.5px -15px; }
      .main-header .navbar-right > li {
        border: 0;
        color: inherit; } }
  .main-header .sidebar-toggle {
    background-color: transparent;
    background-image: none;
    float: left;
    font-family: fontAwesome;
    padding: 15px 15px; }
    .main-header .sidebar-toggle:before {
      content: "\f0c9"; }
    .main-header .sidebar-toggle:hover {
      color: #fff; }
    .main-header .sidebar-toggle:focus, .main-header .sidebar-toggle:active {
      background: transparent; }
  .main-header .sidebar-toggle .icon-bar {
    display: none; }
  .main-header .navbar .nav > li.user > a > .fa,
  .main-header .navbar .nav > li.user > a > .glyphicon,
  .main-header .navbar .nav > li.user > a > .ion {
    margin-right: 5px; }
  .main-header .navbar .nav > li > a > .label {
    font-size: 9px;
    line-height: .9;
    padding: 2px 3px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 9px; }
  .main-header .logo {
    float: left;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 300;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 15px;
    text-align: center;
    transition: width 0.3s ease-in-out;
    width: 230px; }
    .main-header .logo,.main-header .logo .logo-lg {
    display: block; }
    .main-header .logo .logo-mini {
      display: none; }
  .main-header .navbar-brand {
    color: #fff; }

.content-header {
  padding: 15px 15px 0 15px;
  position: relative; }
  .content-header > h1 {
    font-size: 24px;
    margin: 0; }
    .content-header > h1 > small {
      display: inline-block;
      font-size: 15px;
      font-weight: 300;
      padding-left: 4px; }
  .content-header > .breadcrumb {
    background: transparent;
    border-radius: 2px;
    float: right;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
    padding: 7px 5px;
    position: absolute;
    right: 10px;
    top: 15px; }
    .content-header > .breadcrumb > li > a {
      color: #444;
      display: inline-block;
      text-decoration: none; }
      .content-header > .breadcrumb > li > a > .fa, .content-header > .breadcrumb > li > a > .glyphicon, .content-header > .breadcrumb > li > a > .ion {
        margin-right: 5px; }
    .content-header > .breadcrumb > li + li:before {
      content: '>\00a0'; }
  @media (max-width: 991px) {
    .content-header > .breadcrumb {
      background: #d2d6de;
      float: none;
      margin-top: 5px;
      padding-left: 10px;
      position: relative;
      right: 0;
      top: 0; }
      .content-header > .breadcrumb li:before {
        color: #97a0b3; } }

.navbar-toggle {
  border: 0;
  color: #fff;
  margin: 0;
  padding: 15px 15px; }

@media (max-width: 991px) {
  .navbar-custom-menu .navbar-nav > li {
    float: left; }
  .navbar-custom-menu .navbar-nav {
    float: left;
    margin: 0; }
  .navbar-custom-menu .navbar-nav > li > a {
    line-height: 20px;
    padding-bottom: 15px;
    padding-top: 15px; } }

@media (max-width: 767px) {
  .main-header {
    position: relative; }
    .main-header .logo,
    .main-header .navbar {
      float: none;
      width: 100%; }
    .main-header .navbar {
      margin: 0; }
    .main-header .navbar-custom-menu {
      float: right; } }

@media (max-width: 991px) {
  .navbar-collapse.pull-left {
    float: none !important; }
    .navbar-collapse.pull-left + .navbar-custom-menu {
      display: block;
      position: absolute;
      right: 40px;
      top: 0; } }

/*
 * Component: Sidebar
 * ------------------
 */
.main-sidebar,
.left-side {
  left: 0;
  min-height: 100%;
  padding-top: 50px;
  position: absolute;
  top: 0;
  transition: transform 0.3s ease-in-out,width 0.3s ease-in-out;
  width: 230px;
  z-index: 810; }
  @media (max-width: 767px) {
    .main-sidebar,
    .left-side {
      padding-top: 100px;
      -ms-transform: translate(-230px, 0);
          transform: translate(-230px, 0); } }
  @media (max-width: 767px) { }
  @media (min-width: 768px) {
    .sidebar-collapse .main-sidebar, .sidebar-collapse
    .left-side {
      -ms-transform: translate(-230px, 0);
          transform: translate(-230px, 0); } }
  @media (max-width: 767px) {
    .sidebar-open .main-sidebar, .sidebar-open
    .left-side {
      -ms-transform: translate(0, 0);
          transform: translate(0, 0); } }

.sidebar {
  padding-bottom: 10px; }

.sidebar-form input:focus {
  border-color: transparent; }

.user-panel {
  overflow: hidden;
  padding: 10px;
  position: relative;
  width: 100%; }
  .user-panel:before, .user-panel:after {
    content: " ";
    display: table; }
  .user-panel:after {
    clear: both; }
  .user-panel > .image > img {
    height: auto;
    max-width: 45px;
    width: 100%; }
  .user-panel > .info {
    left: 55px;
    line-height: 1;
    padding: 5px 5px 5px 15px;
    position: absolute; }
    .user-panel > .info > p {
      font-weight: 600;
      margin-bottom: 9px; }
    .user-panel > .info > a {
      font-size: 11px;
      margin-top: 3px;
      padding-right: 5px;
      text-decoration: none; }
      .user-panel > .info > a > .fa,
      .user-panel > .info > a > .ion,
      .user-panel > .info > a > .glyphicon {
        margin-right: 3px; }

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0; }
  .sidebar-menu > li {
    margin: 0;
    padding: 0;
    position: relative; }
    .sidebar-menu > li > a {
      display: block;
      padding: 12px 5px 12px 15px; }
      .sidebar-menu > li > a > .fa,
      .sidebar-menu > li > a > .glyphicon,
      .sidebar-menu > li > a > .ion {
        width: 20px; }
    .sidebar-menu > li .label,
    .sidebar-menu > li .badge {
      margin-right: 5px;
      margin-top: 3px; }
  .sidebar-menu li.header {
    font-size: 12px;
    padding: 10px 25px 10px 15px; }
  .sidebar-menu li > a > .fa-angle-left {
    height: auto;
    margin-right: 10px;
    margin-top: 3px;
    padding: 0;
    width: auto; }
  .sidebar-menu li.active > a > .fa-angle-left {
    -ms-transform: rotate(-90deg);
        transform: rotate(-90deg); }
  .sidebar-menu li.active > .treeview-menu {
    display: block; }
  .sidebar-menu .treeview-menu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 5px; }
    .sidebar-menu .treeview-menu .treeview-menu {
      padding-left: 20px; }
    .sidebar-menu .treeview-menu > li {
      margin: 0; }
      .sidebar-menu .treeview-menu > li > a {
        display: block;
        font-size: 14px;
        padding: 5px 5px 5px 15px; }
        .sidebar-menu .treeview-menu > li > a > .fa,
        .sidebar-menu .treeview-menu > li > a > .glyphicon,
        .sidebar-menu .treeview-menu > li > a > .ion {
          width: 20px; }
        .sidebar-menu .treeview-menu > li > a > .fa-angle-left,
        .sidebar-menu .treeview-menu > li > a > .fa-angle-down {
          width: auto; }

/*
 * Component: Sidebar Mini
 */
@media (min-width: 768px) {
  .sidebar-mini.sidebar-collapse .content-wrapper,
  .sidebar-mini.sidebar-collapse .right-side,
  .sidebar-mini.sidebar-collapse .main-footer {
    margin-left: 50px !important;
    z-index: 840; }
  .sidebar-mini.sidebar-collapse .main-sidebar {
    -ms-transform: translate(0, 0);
        transform: translate(0, 0);
    width: 50px !important;
    z-index: 850; }
  .sidebar-mini.sidebar-collapse .sidebar-menu > li {
    position: relative; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li > a {
      margin-right: 0; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span {
      border-top-right-radius: 4px; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li:not(.treeview) > a > span {
      border-bottom-right-radius: 4px; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu {
      border-bottom-right-radius: 4px;
      padding-bottom: 5px;
      padding-top: 5px; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span:not(.pull-right),
    .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {
      display: block !important;
      left: 50px;
      position: absolute;
      width: 180px; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > a > span {
      background-color: inherit;
      margin-left: -3px;
      padding: 12px 5px 12px 20px;
      top: 0; }
    .sidebar-mini.sidebar-collapse .sidebar-menu > li:hover > .treeview-menu {
      margin-left: 0;
      top: 44px; }
  .sidebar-mini.sidebar-collapse .main-sidebar .user-panel > .info,
  .sidebar-mini.sidebar-collapse .sidebar-form,
  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > span,
  .sidebar-mini.sidebar-collapse .sidebar-menu > li > .treeview-menu,
  .sidebar-mini.sidebar-collapse .sidebar-menu > li > a > .pull-right,
  .sidebar-mini.sidebar-collapse .sidebar-menu li.header {
    display: none !important; }
  .sidebar-mini.sidebar-collapse .main-header .logo {
    width: 50px; }
    .sidebar-mini.sidebar-collapse .main-header .logo > .logo-mini {
      display: block;
      font-size: 18px;
      margin-left: -15px;
      margin-right: -15px; }
    .sidebar-mini.sidebar-collapse .main-header .logo > .logo-lg {
      display: none; }
  .sidebar-mini.sidebar-collapse .main-header .navbar {
    margin-left: 50px; } }

.sidebar-menu,
.main-sidebar .user-panel,
.sidebar-menu > li.header {
  overflow: hidden;
  white-space: nowrap; }

.sidebar-menu:hover {
  overflow: visible; }

.sidebar-form,
.sidebar-menu > li.header {
  overflow: hidden;
  text-overflow: clip; }

.sidebar-menu li > a {
  position: relative; }
  .sidebar-menu li > a > .pull-right {
    margin-top: -7px;
    position: absolute;
    right: 10px;
    top: 50%; }

/*
 * Component: Control sidebar. By default, this is the right sidebar.
 */
.control-sidebar-bg {
  bottom: 0;
  position: fixed;
  z-index: 1000; }

.control-sidebar-bg,
.control-sidebar {
  right: -230px;
  top: 0;
  transition: right 0.3s ease-in-out;
  width: 230px; }

.control-sidebar {
  padding-top: 50px;
  position: absolute;
  z-index: 1010; }
  @media (max-width: 768px) {
    .control-sidebar {
      padding-top: 100px; } }
  .control-sidebar > .tab-content {
    padding: 10px 15px; }

.control-sidebar.control-sidebar-open,
  .control-sidebar.control-sidebar-open + .control-sidebar-bg,.control-sidebar-open .control-sidebar-bg,
.control-sidebar-open .control-sidebar {
  right: 0; }

@media (min-width: 768px) {
  .control-sidebar-open .content-wrapper,
  .control-sidebar-open .right-side,
  .control-sidebar-open .main-footer {
    margin-right: 230px; } }

.nav-tabs.control-sidebar-tabs > li:first-of-type > a, .nav-tabs.control-sidebar-tabs > li:first-of-type > a:hover, .nav-tabs.control-sidebar-tabs > li:first-of-type > a:focus {
  border-left-width: 0; }

.nav-tabs.control-sidebar-tabs > li > a {
  border-radius: 0; }
  .nav-tabs.control-sidebar-tabs > li > a, .nav-tabs.control-sidebar-tabs > li > a:hover {
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: none;
    border-top: none; }
  .nav-tabs.control-sidebar-tabs > li > a .icon {
    font-size: 16px; }

.nav-tabs.control-sidebar-tabs > li.active > a, .nav-tabs.control-sidebar-tabs > li.active > a:hover, .nav-tabs.control-sidebar-tabs > li.active > a:focus, .nav-tabs.control-sidebar-tabs > li.active > a:active {
  border-bottom: none;
  border-right: none;
  border-top: none; }

@media (max-width: 768px) {
  .nav-tabs.control-sidebar-tabs {
    display: table; }
    .nav-tabs.control-sidebar-tabs > li {
      display: table-cell; } }

.control-sidebar-heading {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  padding: 10px 0; }

.control-sidebar-subheading {
  display: block;
  font-size: 14px;
  font-weight: 400; }

.control-sidebar-menu {
  list-style: none;
  margin: 0 -15px;
  padding: 0; }
  .control-sidebar-menu > li > a {
    display: block;
    padding: 10px 15px; }
    .control-sidebar-menu > li > a:before, .control-sidebar-menu > li > a:after {
      content: " ";
      display: table; }
    .control-sidebar-menu > li > a:after {
      clear: both; }
    .control-sidebar-menu > li > a > .control-sidebar-subheading {
      margin-top: 0; }
  .control-sidebar-menu .menu-icon {
    border-radius: 50%;
    float: left;
    height: 35px;
    line-height: 35px;
    text-align: center;
    width: 35px; }
  .control-sidebar-menu .menu-info {
    margin-left: 45px;
    margin-top: 3px; }
    .control-sidebar-menu .menu-info > .control-sidebar-subheading {
      margin: 0; }
    .control-sidebar-menu .menu-info > p {
      font-size: 11px;
      margin: 0; }
  .control-sidebar-menu .progress {
    margin: 0; }

.control-sidebar-dark {
  color: #b8c7ce; }
  .control-sidebar-dark,
  .control-sidebar-dark + .control-sidebar-bg {
    background: #222d32; }
  .control-sidebar-dark .nav-tabs.control-sidebar-tabs {
    border-bottom: #1c2529; }
    .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a {
      background: #181f23;
      color: #b8c7ce; }
      .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:hover, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:focus {
        border-bottom-color: #141a1d;
        border-left-color: #141a1d; }
      .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:hover, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:focus, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:active {
        background: #1c2529; }
      .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li > a:hover {
        color: #fff; }
    .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li.active > a, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li.active > a:hover, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li.active > a:focus, .control-sidebar-dark .nav-tabs.control-sidebar-tabs > li.active > a:active {
      background: #222d32;
      color: #fff; }
  .control-sidebar-dark .control-sidebar-heading,
  .control-sidebar-dark .control-sidebar-subheading {
    color: #fff; }
  .control-sidebar-dark .control-sidebar-menu > li > a:hover {
    background: #1e282c; }
  .control-sidebar-dark .control-sidebar-menu > li > a .menu-info > p {
    color: #b8c7ce; }

.control-sidebar-light {
  color: #5e5e5e; }
  .control-sidebar-light,
  .control-sidebar-light + .control-sidebar-bg {
    background: #f9fafc;
    border-left: 1px solid #d2d6de; }
  .control-sidebar-light .nav-tabs.control-sidebar-tabs {
    border-bottom: #d2d6de; }
    .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a {
      background: #e8ecf4;
      color: #444; }
      .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a:hover, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a:focus {
        border-bottom-color: #d2d6de;
        border-left-color: #d2d6de; }
      .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a:hover, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a:focus, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li > a:active {
        background: #eff2f7; }
    .control-sidebar-light .nav-tabs.control-sidebar-tabs > li.active > a, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li.active > a:hover, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li.active > a:focus, .control-sidebar-light .nav-tabs.control-sidebar-tabs > li.active > a:active {
      background: #f9fafc;
      color: #111; }
  .control-sidebar-light .control-sidebar-heading,
  .control-sidebar-light .control-sidebar-subheading {
    color: #111; }
  .control-sidebar-light .control-sidebar-menu {
    margin-left: -14px; }
    .control-sidebar-light .control-sidebar-menu > li > a:hover {
      background: #f4f4f5; }
    .control-sidebar-light .control-sidebar-menu > li > a .menu-info > p {
      color: #5e5e5e; }

/*
 * Component: Dropdown menus
 * -------------------------
 */
/*Dropdowns in general*/
.dropdown-menu {
  border-color: #eee;
  box-shadow: none; }
  .dropdown-menu > li > a {
    color: #777; }
  .dropdown-menu > li > a > .glyphicon,
  .dropdown-menu > li > a > .fa,
  .dropdown-menu > li > a > .ion {
    margin-right: 10px; }
  .dropdown-menu > li > a:hover {
    background-color: #e1e3e9;
    color: #333; }
  .dropdown-menu > .divider {
    background-color: #eee; }

.navbar-nav > .notifications-menu > .dropdown-menu,
.navbar-nav > .messages-menu > .dropdown-menu,
.navbar-nav > .tasks-menu > .dropdown-menu {
  margin: 0;
  padding: 0 0 0 0;
  top: 100%;
  width: 280px; }
  .navbar-nav > .notifications-menu > .dropdown-menu > li,
  .navbar-nav > .messages-menu > .dropdown-menu > li,
  .navbar-nav > .tasks-menu > .dropdown-menu > li {
    position: relative; }

.navbar-nav > .notifications-menu > .dropdown-menu > li.header,
.navbar-nav > .messages-menu > .dropdown-menu > li.header,
.navbar-nav > .tasks-menu > .dropdown-menu > li.header {
  background-color: #ffffff;
  border-bottom: 1px solid #f4f4f4;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #444444;
  font-size: 14px;
  padding: 7px 10px; }

.navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,
.navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,
.navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  color: #444 !important;
  font-size: 12px;
  padding: 7px 10px;
  text-align: center; }
  @media (max-width: 991px) {
    .navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a,
    .navbar-nav > .messages-menu > .dropdown-menu > li.footer > a,
    .navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a {
      background: #fff !important;
      color: #444 !important; } }
  .navbar-nav > .notifications-menu > .dropdown-menu > li.footer > a:hover,
  .navbar-nav > .messages-menu > .dropdown-menu > li.footer > a:hover,
  .navbar-nav > .tasks-menu > .dropdown-menu > li.footer > a:hover {
    font-weight: normal;
    text-decoration: none; }

.navbar-nav > .notifications-menu > .dropdown-menu > li .menu,
.navbar-nav > .messages-menu > .dropdown-menu > li .menu,
.navbar-nav > .tasks-menu > .dropdown-menu > li .menu {
  list-style: none;
  margin: 0;
  max-height: 200px;
  overflow-x: hidden;
  padding: 0; }
  .navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a,
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a,
  .navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {
    border-bottom: 1px solid #f4f4f4;
    display: block;
    white-space: nowrap; }
    .navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a:hover,
    .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:hover,
    .navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a:hover {
      background: #f4f4f4;
      text-decoration: none; }

.navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a {
  color: #444444;
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis; }
  .navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .glyphicon,
  .navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .fa,
  .navbar-nav > .notifications-menu > .dropdown-menu > li .menu > li > a > .ion {
    width: 20px; }

.navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a {
  margin: 0;
  padding: 10px 10px; }
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > div > img {
    height: 40px;
    margin: auto 10px auto auto;
    width: 40px; }
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 {
    color: #444444;
    font-size: 15px;
    margin: 0 0 0 45px;
    padding: 0;
    position: relative; }
    .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > h4 > small {
      color: #999999;
      font-size: 10px;
      position: absolute;
      right: 0;
      top: 0; }
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a > p {
    color: #888888;
    font-size: 12px;
    margin: 0 0 0 45px; }
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:before, .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {
    content: " ";
    display: table; }
  .navbar-nav > .messages-menu > .dropdown-menu > li .menu > li > a:after {
    clear: both; }

.navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a {
  padding: 10px; }
  .navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > h3 {
    color: #666666;
    font-size: 14px;
    margin: 0 0 10px 0;
    padding: 0; }
  .navbar-nav > .tasks-menu > .dropdown-menu > li .menu > li > a > .progress {
    margin: 0;
    padding: 0; }

.navbar-nav > .user-menu > .dropdown-menu {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-width: 0;
  padding: 1px 0 0 0;
  width: 280px; }
  .navbar-nav > .user-menu > .dropdown-menu,
  .navbar-nav > .user-menu > .dropdown-menu > .user-body {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px; }
  .navbar-nav > .user-menu > .dropdown-menu > li.user-header {
    height: 175px;
    padding: 10px;
    text-align: center; }
    .navbar-nav > .user-menu > .dropdown-menu > li.user-header > img {
      border: 3px solid;
      border-color: transparent;
      border-color: rgba(255, 255, 255, 0.2);
      height: 90px;
      width: 90px;
      z-index: 5; }
    .navbar-nav > .user-menu > .dropdown-menu > li.user-header > p {
      color: #fff;
      color: rgba(255, 255, 255, 0.8);
      font-size: 17px;
      margin-top: 10px;
      z-index: 5; }
      .navbar-nav > .user-menu > .dropdown-menu > li.user-header > p > small {
        display: block;
        font-size: 12px; }
  .navbar-nav > .user-menu > .dropdown-menu > .user-body {
    border-bottom: 1px solid #f4f4f4;
    border-top: 1px solid #dddddd;
    padding: 15px; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-body:before, .navbar-nav > .user-menu > .dropdown-menu > .user-body:after {
      content: " ";
      display: table; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-body:after {
      clear: both; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-body a {
      color: #444 !important; }
      @media (max-width: 991px) {
        .navbar-nav > .user-menu > .dropdown-menu > .user-body a {
          background: #fff !important;
          color: #444 !important; } }
  .navbar-nav > .user-menu > .dropdown-menu > .user-footer {
    background-color: #f9f9f9;
    padding: 10px; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-footer:before, .navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {
      content: " ";
      display: table; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-footer:after {
      clear: both; }
    .navbar-nav > .user-menu > .dropdown-menu > .user-footer .btn-default {
      color: #666666; }
      @media (max-width: 991px) {
        .navbar-nav > .user-menu > .dropdown-menu > .user-footer .btn-default:hover {
          background-color: #f9f9f9; } }

.navbar-nav > .user-menu .user-image {
  border-radius: 50%;
  float: left;
  height: 25px;
  margin-right: 10px;
  margin-top: -2px;
  width: 25px; }
  @media (max-width: 767px) {
    .navbar-nav > .user-menu .user-image {
      float: none;
      line-height: 10px;
      margin-right: 0;
      margin-top: -8px; } }

/* Add fade animation to dropdown menus by appending
 the class .animated-dropdown-menu to the .dropdown-menu ul (or ol)*/
.open:not(.dropup) > .animated-dropdown-menu {
  animation: flipInX 0.7s both;
  backface-visibility: visible !important; }

@keyframes flipInX {
  0% {
    opacity: 0;
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transition-timing-function: ease-in; }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transition-timing-function: ease-in; }
  60% {
    opacity: 1;
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg); }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }
  100% {
    transform: perspective(400px); } }

/* Fix dropdown menu in navbars */
.navbar-custom-menu > .navbar-nav > li {
  position: relative; }
  .navbar-custom-menu > .navbar-nav > li > .dropdown-menu {
    left: auto;
    position: absolute;
    right: 0; }

@media (max-width: 991px) {
  .navbar-custom-menu > .navbar-nav {
    float: right; }
    .navbar-custom-menu > .navbar-nav > li {
      position: static; }
      .navbar-custom-menu > .navbar-nav > li > .dropdown-menu {
        background: #fff;
        border: 1px solid #ddd;
        left: auto;
        position: absolute;
        right: 5%; } }

/*
 * Component: Form
 * ---------------
 */
.form-control {
  border-color: #d2d6de;
  border-radius: 0;
  box-shadow: none; }
  .form-control:focus {
    border-color: #3c8dbc;
    box-shadow: none; }
  .form-control::-moz-placeholder, .form-control:-ms-input-placeholder, .form-control::-webkit-input-placeholder {
    color: #bbb;
    opacity: 1; }
  .form-control:not(select) {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none; }

.form-group.has-success label {
  color: #00a65a; }

.form-group.has-success .form-control {
  border-color: #00a65a;
  box-shadow: none; }

.form-group.has-success .help-block {
  color: #00a65a; }

.form-group.has-warning label {
  color: #f39c12; }

.form-group.has-warning .form-control {
  border-color: #f39c12;
  box-shadow: none; }

.form-group.has-warning .help-block {
  color: #f39c12; }

.form-group.has-error label {
  color: #dd4b39; }

.form-group.has-error .form-control {
  border-color: #dd4b39;
  box-shadow: none; }

.form-group.has-error .help-block {
  color: #dd4b39; }

/* Input group */
.input-group .input-group-addon {
  background-color: #fff;
  border-color: #d2d6de;
  border-radius: 0; }

/* button groups */
.btn-group-vertical .btn.btn-flat:first-of-type, .btn-group-vertical .btn.btn-flat:last-of-type {
  border-radius: 0; }

.icheck > label {
  padding-left: 0; }

/* support Font Awesome icons in form-control */
.form-control-feedback.fa {
  line-height: 34px; }

.input-lg + .form-control-feedback.fa,
.input-group-lg + .form-control-feedback.fa,
.form-group-lg .form-control + .form-control-feedback.fa {
  line-height: 46px; }

.input-sm + .form-control-feedback.fa,
.input-group-sm + .form-control-feedback.fa,
.form-group-sm .form-control + .form-control-feedback.fa {
  line-height: 30px; }

/*
 * Component: Progress Bar
 * -----------------------
 */
.progress,
.progress > .progress-bar {
  box-shadow: none; }
  .progress, .progress .progress-bar,
  .progress > .progress-bar,
  .progress > .progress-bar .progress-bar {
    border-radius: 1px; }

/* size variation */
.progress.sm,
.progress-sm {
  height: 10px; }
  .progress.sm, .progress.sm .progress-bar,
  .progress-sm,
  .progress-sm .progress-bar {
    border-radius: 1px; }

.progress.xs,
.progress-xs {
  height: 7px; }
  .progress.xs, .progress.xs .progress-bar,
  .progress-xs,
  .progress-xs .progress-bar {
    border-radius: 1px; }

.progress.xxs,
.progress-xxs {
  height: 3px; }
  .progress.xxs, .progress.xxs .progress-bar,
  .progress-xxs,
  .progress-xxs .progress-bar {
    border-radius: 1px; }

/* Vertical bars */
.progress.vertical {
  display: inline-block;
  height: 200px;
  margin-right: 10px;
  position: relative;
  width: 30px; }
  .progress.vertical > .progress-bar {
    bottom: 0;
    position: absolute;
    width: 100%; }
  .progress.vertical.sm, .progress.vertical.progress-sm {
    width: 20px; }
  .progress.vertical.xs, .progress.vertical.progress-xs {
    width: 10px; }
  .progress.vertical.xxs, .progress.vertical.progress-xxs {
    width: 3px; }

.progress-group .progress-text {
  font-weight: 600; }

.progress-group .progress-number {
  float: right; }

/* Remove margins from progress bars when put in a table */
.table tr > td .progress {
  margin: 0; }

.progress-bar-light-blue,
.progress-bar-primary {
  background-color: #3c8dbc; }
  .progress-striped .progress-bar-light-blue, .progress-striped
  .progress-bar-primary {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-green,
.progress-bar-success {
  background-color: #00a65a; }
  .progress-striped .progress-bar-green, .progress-striped
  .progress-bar-success {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-aqua,
.progress-bar-info {
  background-color: #00c0ef; }
  .progress-striped .progress-bar-aqua, .progress-striped
  .progress-bar-info {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-yellow,
.progress-bar-warning {
  background-color: #f39c12; }
  .progress-striped .progress-bar-yellow, .progress-striped
  .progress-bar-warning {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

.progress-bar-red,
.progress-bar-danger {
  background-color: #dd4b39; }
  .progress-striped .progress-bar-red, .progress-striped
  .progress-bar-danger {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }

/*
 * Component: Small Box
 * --------------------
 */
.small-box {
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 20px;
  position: relative; }
  .small-box > .inner {
    padding: 10px; }
  .small-box > .small-box-footer {
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    padding: 3px 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 10; }
    .small-box > .small-box-footer:hover {
      background: rgba(0, 0, 0, 0.15);
      color: #fff; }
  .small-box h3 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 0 10px 0;
    padding: 0;
    white-space: nowrap; }
  .small-box p {
    font-size: 15px; }
    .small-box p > small {
      color: #f9f9f9;
      display: block;
      font-size: 13px;
      margin-top: 5px; }
  .small-box h3, .small-box p {
    z-index: 5; }
  .small-box .icon {
    color: rgba(0, 0, 0, 0.15);
    font-size: 90px;
    position: absolute;
    right: 10px;
    top: -10px;
    transition: all 0.3s linear;
    z-index: 0; }
  .small-box:hover {
    color: #f9f9f9;
    text-decoration: none; }
    .small-box:hover .icon {
      font-size: 95px; }

@media (max-width: 767px) {
  .small-box {
    text-align: center; }
    .small-box .icon {
      display: none; }
    .small-box p {
      font-size: 12px; } }

/*
 * Component: Box
 * --------------
 */
.box {
  background: #ffffff;
  border-radius: 3px;
  border-top: 3px solid #d2d6de;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  position: relative;
  width: 100%; }
  .box.box-primary {
    border-top-color: #3c8dbc; }
  .box.box-info {
    border-top-color: #00c0ef; }
  .box.box-danger {
    border-top-color: #dd4b39; }
  .box.box-warning {
    border-top-color: #f39c12; }
  .box.box-success {
    border-top-color: #00a65a; }
  .box.box-default {
    border-top-color: #d2d6de; }
  .box.collapsed-box .box-body,
  .box.collapsed-box .box-footer {
    display: none; }
  .box .nav-stacked > li {
    border-bottom: 1px solid #f4f4f4;
    margin: 0; }
    .box .nav-stacked > li:last-of-type {
      border-bottom: none; }
  .box.height-control .box-body {
    max-height: 300px;
    overflow: auto; }
  .box .border-right {
    border-right: 1px solid #f4f4f4; }
  .box .border-left {
    border-left: 1px solid #f4f4f4; }
  .box.box-solid {
    border-top: 0; }
    .box.box-solid > .box-header .btn.btn-default {
      background: transparent; }
    .box.box-solid > .box-header .btn:hover,
    .box.box-solid > .box-header a:hover {
      background: rgba(0, 0, 0, 0.1); }
    .box.box-solid.box-default {
      border: 1px solid #d2d6de; }
      .box.box-solid.box-default > .box-header {
        background: #d2d6de;
        background-color: #d2d6de;
        color: #444; }
        .box.box-solid.box-default > .box-header a,
        .box.box-solid.box-default > .box-header .btn {
          color: #444; }
    .box.box-solid.box-primary {
      border: 1px solid #3c8dbc; }
      .box.box-solid.box-primary > .box-header {
        background: #3c8dbc;
        background-color: #3c8dbc;
        color: #fff; }
        .box.box-solid.box-primary > .box-header a,
        .box.box-solid.box-primary > .box-header .btn {
          color: #fff; }
    .box.box-solid.box-info {
      border: 1px solid #00c0ef; }
      .box.box-solid.box-info > .box-header {
        background: #00c0ef;
        background-color: #00c0ef;
        color: #fff; }
        .box.box-solid.box-info > .box-header a,
        .box.box-solid.box-info > .box-header .btn {
          color: #fff; }
    .box.box-solid.box-danger {
      border: 1px solid #dd4b39; }
      .box.box-solid.box-danger > .box-header {
        background: #dd4b39;
        background-color: #dd4b39;
        color: #fff; }
        .box.box-solid.box-danger > .box-header a,
        .box.box-solid.box-danger > .box-header .btn {
          color: #fff; }
    .box.box-solid.box-warning {
      border: 1px solid #f39c12; }
      .box.box-solid.box-warning > .box-header {
        background: #f39c12;
        background-color: #f39c12;
        color: #fff; }
        .box.box-solid.box-warning > .box-header a,
        .box.box-solid.box-warning > .box-header .btn {
          color: #fff; }
    .box.box-solid.box-success {
      border: 1px solid #00a65a; }
      .box.box-solid.box-success > .box-header {
        background: #00a65a;
        background-color: #00a65a;
        color: #fff; }
        .box.box-solid.box-success > .box-header a,
        .box.box-solid.box-success > .box-header .btn {
          color: #fff; }
    .box.box-solid > .box-header > .box-tools .btn {
      border: 0;
      box-shadow: none; }
    .box.box-solid[class*='bg'] > .box-header {
      color: #fff; }
  .box .box-group > .box {
    margin-bottom: 5px; }
  .box .knob-label {
    color: #333;
    font-size: 12px;
    font-weight: 100;
    margin-bottom: 0.3em;
    text-align: center; }

.box > .overlay,
.box > .loading-img,
.overlay-wrapper > .overlay,
.overlay-wrapper > .loading-img {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%; }

.box .overlay,
.overlay-wrapper .overlay {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  z-index: 50; }
  .box .overlay > .fa,
  .overlay-wrapper .overlay > .fa {
    color: #000;
    font-size: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
    position: absolute;
    top: 50%; }

.box .overlay.dark,
.overlay-wrapper .overlay.dark {
  background: rgba(0, 0, 0, 0.5); }

.box-header:before, .box-header:after,
.box-body:before,
.box-body:after,
.box-footer:before,
.box-footer:after {
  content: " ";
  display: table; }

.box-header:after,
.box-body:after,
.box-footer:after {
  clear: both; }

.box-header {
  color: #444;
  display: block;
  padding: 10px;
  position: relative; }
  .box-header.with-border {
    border-bottom: 1px solid #f4f4f4; }
    .collapsed-box .box-header.with-border {
      border-bottom: none; }
  .box-header > .fa,
  .box-header > .glyphicon,
  .box-header > .ion,
  .box-header .box-title {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    margin: 0; }
  .box-header > .fa,
  .box-header > .glyphicon,
  .box-header > .ion {
    margin-right: 5px; }
  .box-header > .box-tools {
    position: absolute;
    right: 10px;
    top: 5px; }
    .box-header > .box-tools [data-toggle="tooltip"] {
      position: relative; }
    .box-header > .box-tools.pull-right .dropdown-menu {
      left: auto;
      right: 0; }

.btn-box-tool {
  background: transparent;
  color: #97a0b3;
  font-size: 12px;
  padding: 5px; }
  .open .btn-box-tool, .btn-box-tool:hover {
    color: #606c84; }
  .btn-box-tool.btn:active {
    box-shadow: none; }

.box-body {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 10px; }
  .no-header .box-body {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; }
  .box-body > .table {
    margin-bottom: 0; }
  .box-body .fc {
    margin-top: 5px; }
  .box-body .full-width-chart {
    margin: -19px; }
  .box-body.no-padding .full-width-chart {
    margin: -9px; }
  .box-body .box-pane {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0; }
  .box-body .box-pane-right {
    border-bottom-left-radius: 0; }

.box-body .box-pane-right,.box-footer {
    border-bottom-right-radius: 3px;
    border-top-left-radius: 0;
    border-top-right-radius: 0; }

.box-footer {
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-top: 1px solid #f4f4f4;
  padding: 10px; }

.chart-legend {
  margin: 10px 0; }
  @media (max-width: 991px) {
    .chart-legend > li {
      float: left;
      margin-right: 10px; } }

.box-comments {
  background: #f7f7f7; }
  .box-comments .box-comment {
    border-bottom: 1px solid #eee;
    padding: 8px 0; }
    .box-comments .box-comment:before, .box-comments .box-comment:after {
      content: " ";
      display: table; }
    .box-comments .box-comment:after {
      clear: both; }
    .box-comments .box-comment:last-of-type {
      border-bottom: 0; }
    .box-comments .box-comment:first-of-type {
      padding-top: 0; }
    .box-comments .box-comment img {
      float: left; }
  .box-comments .comment-text {
    color: #555;
    margin-left: 40px; }
  .box-comments .username {
    color: #444;
    display: block;
    font-weight: 600; }
  .box-comments .text-muted {
    font-size: 12px;
    font-weight: 400; }

/* Widget: TODO LIST */
.todo-list {
  list-style: none;
  margin: 0;
  overflow: auto;
  padding: 0; }
  .todo-list > li {
    background: #f4f4f4;
    border-left: 2px solid #e6e7e8;
    border-radius: 2px;
    color: #444;
    margin-bottom: 2px;
    padding: 10px; }
    .todo-list > li:last-of-type {
      margin-bottom: 0; }
    .todo-list > li > input[type='checkbox'] {
      margin: 0 10px 0 5px; }
    .todo-list > li .text {
      display: inline-block;
      font-weight: 600;
      margin-left: 5px; }
    .todo-list > li .label {
      font-size: 9px;
      margin-left: 10px; }
    .todo-list > li .tools {
      color: #dd4b39;
      display: none;
      float: right; }
      .todo-list > li .tools > .fa, .todo-list > li .tools > .glyphicon, .todo-list > li .tools > .ion {
        cursor: pointer;
        margin-right: 5px; }
    .todo-list > li:hover .tools {
      display: inline-block; }
    .todo-list > li.done {
      color: #999; }
      .todo-list > li.done .text {
        font-weight: 500;
        text-decoration: line-through; }
      .todo-list > li.done .label {
        background: #d2d6de !important; }
  .todo-list .danger {
    border-left-color: #dd4b39; }
  .todo-list .warning {
    border-left-color: #f39c12; }
  .todo-list .info {
    border-left-color: #00c0ef; }
  .todo-list .success {
    border-left-color: #00a65a; }
  .todo-list .primary {
    border-left-color: #3c8dbc; }
  .todo-list .handle {
    cursor: move;
    display: inline-block;
    margin: 0 5px; }

/* Chat widget (DEPRECATED - this will be removed in the next major release. Use Direct Chat instead)*/
.chat {
  padding: 5px 20px 5px 10px; }
  .chat .item {
    margin-bottom: 10px; }
    .chat .item:before, .chat .item:after {
      content: " ";
      display: table; }
    .chat .item:after {
      clear: both; }
    .chat .item > img {
      border: 2px solid transparent;
      border-radius: 50%;
      height: 40px;
      width: 40px; }
    .chat .item > .online {
      border: 2px solid #00a65a; }
    .chat .item > .offline {
      border: 2px solid #dd4b39; }
    .chat .item > .message {
      margin-left: 55px;
      margin-top: -40px; }
      .chat .item > .message > .name {
        display: block;
        font-weight: 600; }
    .chat .item > .attachment {
      background: #f4f4f4;
      border-radius: 3px;
      margin-left: 65px;
      margin-right: 15px;
      padding: 10px; }
      .chat .item > .attachment > h4 {
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 5px 0; }
      .chat .item > .attachment > p, .chat .item > .attachment > .filename {
        font-size: 13px;
        font-style: italic;
        font-weight: 600;
        margin: 0; }
      .chat .item > .attachment:before, .chat .item > .attachment:after {
        content: " ";
        display: table; }
      .chat .item > .attachment:after {
        clear: both; }

.box-input {
  max-width: 200px; }

.modal .panel-body {
  color: #444; }

/*
 * Component: Info Box
 * -------------------
 */
.info-box {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 15px;
  min-height: 90px;
  width: 100%; }
  .info-box small {
    font-size: 14px; }
  .info-box .progress {
    background: rgba(0, 0, 0, 0.2);
    height: 2px;
    margin: 5px -10px 5px -10px; }
    .info-box .progress,
    .info-box .progress .progress-bar {
      border-radius: 0; }
    .info-box .progress .progress-bar {
      background: #fff; }

.info-box-icon {
  background: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 0;
  display: block;
  float: left;
  font-size: 45px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  width: 90px; }
  .info-box-icon > img {
    max-width: 100%; }

.info-box-content {
  margin-left: 90px;
  padding: 5px 10px; }

.info-box-number {
  display: block;
  font-size: 18px;
  font-weight: bold; }

.progress-description,
.info-box-text {
  display: block;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.info-box-text {
  text-transform: uppercase; }

.info-box-more {
  display: block; }

.progress-description {
  margin: 0; }

/*
 * Component: Timeline
 * -------------------
 */
.timeline {
  list-style: none;
  margin: 0 0 30px 0;
  padding: 0;
  position: relative; }
  .timeline:before {
    background: #ddd;
    border-radius: 2px;
    bottom: 0;
    content: '';
    left: 31px;
    margin: 0;
    position: absolute;
    top: 0;
    width: 4px; }
  .timeline > li {
    margin-bottom: 15px;
    margin-right: 10px;
    position: relative; }
    .timeline > li:before, .timeline > li:after {
      content: " ";
      display: table; }
    .timeline > li:after {
      clear: both; }
    .timeline > li > .timeline-item {
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      color: #444;
      margin-left: 60px;
      margin-right: 15px;
      margin-top: 0;
      padding: 0;
      position: relative; }
      .timeline > li > .timeline-item > .time {
        color: #999;
        float: right;
        font-size: 12px;
        padding: 10px; }
      .timeline > li > .timeline-item > .timeline-header {
        border-bottom: 1px solid #f4f4f4;
        color: #555;
        font-size: 16px;
        line-height: 1.1;
        margin: 0;
        padding: 10px; }
        .timeline > li > .timeline-item > .timeline-header > a {
          font-weight: 600; }
      .timeline > li > .timeline-item > .timeline-body, .timeline > li > .timeline-item > .timeline-footer {
        padding: 10px; }
    .timeline > li > .fa,
    .timeline > li > .glyphicon,
    .timeline > li > .ion {
      background: #d2d6de;
      border-radius: 50%;
      color: #666;
      font-size: 15px;
      height: 30px;
      left: 18px;
      line-height: 30px;
      position: absolute;
      text-align: center;
      top: 0;
      width: 30px; }
  .timeline > .time-label > span {
    background-color: #fff;
    border-radius: 4px;
    display: inline-block;
    font-weight: 600;
    padding: 5px; }

.timeline-inverse > li > .timeline-item {
  background: #f0f0f0;
  border: 1px solid #ddd;
  box-shadow: none; }
  .timeline-inverse > li > .timeline-item > .timeline-header {
    border-bottom-color: #ddd; }

/*
 * Component: Button
 * -----------------
 */
.btn {
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none; }
  .btn.uppercase {
    text-transform: uppercase; }
  .btn.btn-flat {
    border-radius: 0;
    border-width: 1px;
    box-shadow: none; }
  .btn:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }
  .btn:focus {
    outline: none; }
  .btn.btn-file {
    overflow: hidden;
    position: relative; }
    .btn.btn-file > input[type='file'] {
      background: white;
      cursor: inherit;
      display: block;
      filter: alpha(opacity=0);
      font-size: 100px;
      min-height: 100%;
      min-width: 100%;
      opacity: 0;
      outline: none;
      position: absolute;
      right: 0;
      text-align: right;
      top: 0; }

.btn-default {
  background-color: #f4f4f4;
  border-color: #ddd;
  color: #444; }
  .btn-default:hover, .btn-default:active, .btn-default.hover {
    background-color: #e7e7e7; }

.btn-primary {
  background-color: #3c8dbc;
  border-color: #367fa9; }
  .btn-primary:hover, .btn-primary:active, .btn-primary.hover {
    background-color: #367fa9; }

.btn-success {
  background-color: #00a65a;
  border-color: #008d4c; }
  .btn-success:hover, .btn-success:active, .btn-success.hover {
    background-color: #008d4c; }

.btn-info {
  background-color: #00c0ef;
  border-color: #00acd6; }
  .btn-info:hover, .btn-info:active, .btn-info.hover {
    background-color: #00acd6; }

.btn-danger {
  background-color: #dd4b39;
  border-color: #d73925; }
  .btn-danger:hover, .btn-danger:active, .btn-danger.hover {
    background-color: #d73925; }

.btn-warning {
  background-color: #f39c12;
  border-color: #e08e0b; }
  .btn-warning:hover, .btn-warning:active, .btn-warning.hover {
    background-color: #e08e0b; }

.btn-outline {
  background: transparent;
  border: 1px solid #fff;
  color: #fff; }
  .btn-outline:hover, .btn-outline:focus, .btn-outline:active {
    border-color: rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7); }

.btn-link {
  box-shadow: none; }

.btn[class*='bg-']:hover {
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2); }

.btn-app {
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #666;
  font-size: 12px;
  height: 60px;
  margin: 0 0 10px 10px;
  min-width: 80px;
  padding: 15px 5px;
  position: relative;
  text-align: center; }
  .btn-app > .fa, .btn-app > .glyphicon, .btn-app > .ion {
    display: block;
    font-size: 20px; }
  .btn-app:hover {
    background: #f4f4f4;
    border-color: #aaa;
    color: #444; }
  .btn-app:active, .btn-app:focus {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }
  .btn-app > .badge {
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    right: -10px;
    top: -3px; }

/*
 * Component: Callout
 * ------------------
 */
.callout {
  border-left: 5px solid #eee;
  border-radius: 3px;
  margin: 0 0 20px 0;
  padding: 15px 30px 15px 15px; }
  .callout a {
    color: #fff;
    text-decoration: underline; }
    .callout a:hover {
      color: #eee; }
  .callout h4 {
    font-weight: 600;
    margin-top: 0; }
  .callout p:last-child {
    margin-bottom: 0; }
  .callout code,
  .callout .highlight {
    background-color: #fff; }
  .callout.callout-danger {
    border-color: #c23321; }
  .callout.callout-warning {
    border-color: #c87f0a; }
  .callout.callout-info {
    border-color: #0097bc; }
  .callout.callout-success {
    border-color: #00733e; }

/*
 * Component: alert
 * ----------------
 */
.alert {
  border-radius: 3px; }
  .alert h4 {
    font-weight: 600; }
  .alert .icon {
    margin-right: 10px; }
  .alert .close, .alert .mailbox-attachment-close {
    color: #111;
    filter: alpha(opacity=20);
    opacity: 0.2; }
    .alert .close:hover, .alert .mailbox-attachment-close:hover {
      filter: alpha(opacity=50);
      opacity: 0.5; }
  .alert a {
    color: #fff;
    text-decoration: underline; }

.alert-success {
  border-color: #008d4c; }

.alert-danger,
.alert-error {
  border-color: #d73925; }

.alert-warning {
  border-color: #e08e0b; }

.alert-info {
  border-color: #00acd6; }

/*
 * Component: Nav
 * --------------
 */
.nav > li > a:hover,
.nav > li > a:active,
.nav > li > a:focus {
  background: #f7f7f7;
  color: #444; }

/* NAV PILLS */
.nav-pills > li > a {
  border-radius: 0;
  border-top: 3px solid transparent;
  color: #444; }
  .nav-pills > li > a > .fa,
  .nav-pills > li > a > .glyphicon,
  .nav-pills > li > a > .ion {
    margin-right: 5px; }

.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  border-top-color: #3c8dbc; }

.nav-pills > li.active > a {
  font-weight: 600; }

/* NAV STACKED */
.nav-stacked > li > a {
  border-left: 3px solid transparent;
  border-radius: 0;
  border-top: 0;
  color: #444; }

.nav-stacked > li.active > a,
.nav-stacked > li.active > a:hover {
  background: transparent;
  border-left-color: #3c8dbc;
  border-top: 0;
  color: #444; }

.nav-stacked > li.header {
  border-bottom: 1px solid #ddd;
  color: #777;
  margin-bottom: 10px;
  padding: 5px 10px;
  text-transform: uppercase; }

/* NAV TABS */
.nav-tabs-custom {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; }
  .nav-tabs-custom > .nav-tabs {
    border-bottom-color: #f4f4f4;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin: 0; }
    .nav-tabs-custom > .nav-tabs > li {
      border-top: 3px solid transparent;
      margin-bottom: -2px;
      margin-right: 5px; }
      .nav-tabs-custom > .nav-tabs > li > a {
        border-radius: 0;
        color: #444; }
        .nav-tabs-custom > .nav-tabs > li > a.text-muted {
          color: #999; }
        .nav-tabs-custom > .nav-tabs > li > a, .nav-tabs-custom > .nav-tabs > li > a:hover {
          background: transparent;
          margin: 0; }
        .nav-tabs-custom > .nav-tabs > li > a:hover {
          color: #999; }
      .nav-tabs-custom > .nav-tabs > li:not(.active) > a:hover,
      .nav-tabs-custom > .nav-tabs > li:not(.active) > a:focus,
      .nav-tabs-custom > .nav-tabs > li:not(.active) > a:active {
        border-color: transparent; }
    .nav-tabs-custom > .nav-tabs > li.active {
      border-top-color: #3c8dbc; }
      .nav-tabs-custom > .nav-tabs > li.active > a,
      .nav-tabs-custom > .nav-tabs > li.active:hover > a {
        background-color: #fff;
        color: #444; }
      .nav-tabs-custom > .nav-tabs > li.active > a {
        border-left-color: #f4f4f4;
        border-right-color: #f4f4f4;
        border-top-color: transparent; }
    .nav-tabs-custom > .nav-tabs > li:first-of-type {
      margin-left: 0; }
      .nav-tabs-custom > .nav-tabs > li:first-of-type.active > a {
        border-left-color: transparent; }
    .nav-tabs-custom > .nav-tabs.pull-right {
      float: none !important; }
      .nav-tabs-custom > .nav-tabs.pull-right > li {
        float: right; }
      .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type {
        margin-right: 0; }
        .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type > a {
          border-left-width: 1px; }
        .nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type.active > a {
          border-left-color: #f4f4f4;
          border-right-color: transparent; }
    .nav-tabs-custom > .nav-tabs > li.header {
      color: #444;
      font-size: 20px;
      line-height: 35px;
      padding: 0 10px; }
      .nav-tabs-custom > .nav-tabs > li.header > .fa,
      .nav-tabs-custom > .nav-tabs > li.header > .glyphicon,
      .nav-tabs-custom > .nav-tabs > li.header > .ion {
        margin-right: 5px; }
  .nav-tabs-custom > .tab-content {
    background: #fff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 10px; }
  .nav-tabs-custom .dropdown.open > a:active, .nav-tabs-custom .dropdown.open > a:focus {
    background: transparent;
    color: #999; }
  .nav-tabs-custom.tab-primary > .nav-tabs > li.active {
    border-top-color: #3c8dbc; }
  .nav-tabs-custom.tab-info > .nav-tabs > li.active {
    border-top-color: #00c0ef; }
  .nav-tabs-custom.tab-danger > .nav-tabs > li.active {
    border-top-color: #dd4b39; }
  .nav-tabs-custom.tab-warning > .nav-tabs > li.active {
    border-top-color: #f39c12; }
  .nav-tabs-custom.tab-success > .nav-tabs > li.active {
    border-top-color: #00a65a; }
  .nav-tabs-custom.tab-default > .nav-tabs > li.active {
    border-top-color: #d2d6de; }

/* PAGINATION */
.pagination > li > a {
  background: #fafafa;
  color: #666; }

.pagination.pagination-flat > li > a {
  border-radius: 0 !important; }

/*
 * Component: Products List
 * ------------------------
 */
.products-list {
  list-style: none;
  margin: 0;
  padding: 0; }
  .products-list > .item {
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    padding: 10px 0; }
    .products-list > .item:before, .products-list > .item:after {
      content: " ";
      display: table; }
    .products-list > .item:after {
      clear: both; }
  .products-list .product-img {
    float: left; }
    .products-list .product-img img {
      height: 50px;
      width: 50px; }
  .products-list .product-info {
    margin-left: 60px; }
  .products-list .product-title {
    font-weight: 600; }
  .products-list .product-description {
    color: #999;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }

.product-list-in-box > .item {
  border-bottom: 1px solid #f4f4f4;
  border-radius: 0;
  box-shadow: none; }
  .product-list-in-box > .item:last-of-type {
    border-bottom-width: 0; }

/*
 * Component: Table
 * ----------------
 */
.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  border-top: 1px solid #f4f4f4; }

.table > thead > tr > th {
  border-bottom: 2px solid #f4f4f4; }

.table tr td .progress {
  margin-top: 5px; }
  .table-bordered,.table-bordered > thead > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > th,
  .table-bordered > tbody > tr > td,
  .table-bordered > tfoot > tr > th,
  .table-bordered > tfoot > tr > td {
    border: 1px solid #f4f4f4; }
  .table-bordered > thead > tr > th,
  .table-bordered > thead > tr > td {
    border-bottom-width: 2px; }

.table.no-border,
.table.no-border td,
.table.no-border th {
  border: 0; }

/* .text-center in tables */
table.text-center, table.text-center td, table.text-center th {
  text-align: center; }

.table.align th {
  text-align: left; }

.table.align td {
  text-align: right; }

/*
 * Component: Label
 * ----------------
 */
.label-default {
  background-color: #d2d6de;
  color: #444; }

/*
 * Component: Direct Chat
 * ----------------------
 */
.direct-chat .box-body {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow-x: hidden;
  padding: 0;
  position: relative; }

.direct-chat.chat-pane-open .direct-chat-contacts,.direct-chat-messages {
  -ms-transform: translate(0, 0);
      transform: translate(0, 0); }

.direct-chat-messages {
  height: 250px;
  overflow: auto;
  padding: 10px; }

.direct-chat-msg,
.direct-chat-text {
  display: block; }

.direct-chat-msg {
  margin-bottom: 10px; }
  .direct-chat-msg:before, .direct-chat-msg:after {
    content: " ";
    display: table; }
  .direct-chat-msg:after {
    clear: both; }

.direct-chat-messages,
.direct-chat-contacts {
  transition: transform 0.5s ease-in-out; }

.direct-chat-text {
  background: #d2d6de;
  border: 1px solid #d2d6de;
  border-radius: 5px;
  color: #444;
  margin: 5px 0 0 50px;
  padding: 5px 10px;
  position: relative; }
  .direct-chat-text:after, .direct-chat-text:before {
    border: solid transparent;
    border-right-color: #d2d6de;
    content: ' ';
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 100%;
    top: 15px;
    width: 0; }
  .direct-chat-text:after {
    border-width: 5px;
    margin-top: -5px; }
  .direct-chat-text:before {
    border-width: 6px;
    margin-top: -6px; }
  .right .direct-chat-text {
    margin-left: 0;
    margin-right: 50px; }
    .right .direct-chat-text:after, .right .direct-chat-text:before {
      border-left-color: #d2d6de;
      border-right-color: transparent;
      left: 100%;
      right: auto; }

.direct-chat-img {
  border-radius: 50%;
  float: left;
  height: 40px;
  width: 40px; }
  .right .direct-chat-img {
    float: right; }

.direct-chat-info {
  display: block;
  font-size: 12px;
  margin-bottom: 2px; }

.direct-chat-name {
  font-weight: 600; }

.direct-chat-timestamp {
  color: #999; }

.direct-chat-contacts-open .direct-chat-contacts {
  -ms-transform: translate(0, 0);
      transform: translate(0, 0); }

.direct-chat-contacts {
  background: #222d32;
  bottom: 0;
  color: #fff;
  height: 250px;
  overflow: auto;
  position: absolute;
  top: 0;
  -ms-transform: translate(101%, 0);
      transform: translate(101%, 0);
  width: 100%; }

.contacts-list > li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 10px; }
  .contacts-list > li:before, .contacts-list > li:after {
    content: " ";
    display: table; }
  .contacts-list > li:after {
    clear: both; }
  .contacts-list > li:last-of-type {
    border-bottom: none; }

.contacts-list-img {
  border-radius: 50%;
  float: left;
  width: 40px; }

.contacts-list-info {
  color: #fff;
  margin-left: 45px; }

.contacts-list-name,
.contacts-list-status {
  display: block; }

.contacts-list-name {
  font-weight: 600; }

.contacts-list-status {
  font-size: 12px; }

.contacts-list-date {
  color: #aaa;
  font-weight: normal; }

.contacts-list-msg {
  color: #999; }

.direct-chat-danger .right > .direct-chat-text {
  background: #dd4b39;
  border-color: #dd4b39;
  color: #fff; }
  .direct-chat-danger .right > .direct-chat-text:after, .direct-chat-danger .right > .direct-chat-text:before {
    border-left-color: #dd4b39; }

.direct-chat-primary .right > .direct-chat-text {
  background: #3c8dbc;
  border-color: #3c8dbc;
  color: #fff; }
  .direct-chat-primary .right > .direct-chat-text:after, .direct-chat-primary .right > .direct-chat-text:before {
    border-left-color: #3c8dbc; }

.direct-chat-warning .right > .direct-chat-text {
  background: #f39c12;
  border-color: #f39c12;
  color: #fff; }
  .direct-chat-warning .right > .direct-chat-text:after, .direct-chat-warning .right > .direct-chat-text:before {
    border-left-color: #f39c12; }

.direct-chat-info .right > .direct-chat-text {
  background: #00c0ef;
  border-color: #00c0ef;
  color: #fff; }
  .direct-chat-info .right > .direct-chat-text:after, .direct-chat-info .right > .direct-chat-text:before {
    border-left-color: #00c0ef; }

.direct-chat-success .right > .direct-chat-text {
  background: #00a65a;
  border-color: #00a65a;
  color: #fff; }
  .direct-chat-success .right > .direct-chat-text:after, .direct-chat-success .right > .direct-chat-text:before {
    border-left-color: #00a65a; }

/*
 * Component: Users List
 * ---------------------
 */
.users-list > li {
  float: left;
  padding: 10px;
  text-align: center;
  width: 25%; }
  .users-list > li img {
    border-radius: 50%;
    height: auto;
    max-width: 100%; }
  .users-list > li > a:hover,
  .users-list > li > a:hover .users-list-name {
    color: #999; }

.users-list-name,
.users-list-date {
  display: block; }

.users-list-name {
  color: #444;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.users-list-date {
  color: #999;
  font-size: 12px; }

/*
 * Component: Carousel
 * -------------------
 */
.carousel-control.left, .carousel-control.right {
  background-image: none; }

.carousel-control > .fa {
  display: inline-block;
  font-size: 40px;
  margin-top: -20px;
  position: absolute;
  top: 50%;
  z-index: 5; }

/*
 * Component: modal
 * ----------------
 */
.modal {
  background: rgba(0, 0, 0, 0.3); }

.modal-content {
  border: 0;
  border-radius: 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125); }
  @media (min-width: 768px) {
    .modal-content {
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125); } }

.modal-header {
  border-bottom-color: #f4f4f4; }

.modal-footer {
  border-top-color: #f4f4f4; }

.modal-primary .modal-header,
.modal-primary .modal-footer {
  border-color: #307095; }

.modal-warning .modal-header,
.modal-warning .modal-footer {
  border-color: #c87f0a; }

.modal-info .modal-header,
.modal-info .modal-footer {
  border-color: #0097bc; }

.modal-success .modal-header,
.modal-success .modal-footer {
  border-color: #00733e; }

.modal-danger .modal-header,
.modal-danger .modal-footer {
  border-color: #c23321; }

/*
 * Component: Social Widgets
 * -------------------------
 */
.box-widget {
  border: none;
  position: relative; }

.widget-user .widget-user-header {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 120px;
  padding: 20px; }

.widget-user .widget-user-username {
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 5px;
  margin-top: 0;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }

.widget-user .widget-user-desc {
  margin-top: 0; }

.widget-user .widget-user-image {
  left: 50%;
  margin-left: -45px;
  position: absolute;
  top: 65px; }
  .widget-user .widget-user-image > img {
    border: 3px solid #fff;
    height: auto;
    width: 90px; }

.widget-user .box-footer {
  padding-top: 30px; }

.widget-user-2 .widget-user-header {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 20px; }

.widget-user-2 .widget-user-username {
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 5px;
  margin-top: 5px; }

.widget-user-2 .widget-user-desc {
  margin-top: 0; }

.widget-user-2 .widget-user-username,
.widget-user-2 .widget-user-desc {
  margin-left: 75px; }

.widget-user-2 .widget-user-image > img {
  float: left;
  height: auto;
  width: 65px; }

/*
 * Page: Mailbox
 * -------------
 */
.mailbox-messages > .table {
  margin: 0; }

.mailbox-controls {
  padding: 5px; }

.mailbox-controls.with-border,.mailbox-read-info {
    border-bottom: 1px solid #f4f4f4; }

.mailbox-read-info {
  padding: 10px; }
  .mailbox-read-info h3 {
    font-size: 20px;
    margin: 0; }
  .mailbox-read-info h5 {
    margin: 0;
    padding: 5px 0 0 0; }

.mailbox-read-time {
  color: #999;
  font-size: 13px; }

.mailbox-read-message {
  padding: 10px; }

.mailbox-attachments li {
  border: 1px solid #eee;
  float: left;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 200px; }

.mailbox-attachment-name {
  color: #666;
  font-weight: bold; }

.mailbox-attachment-icon,
.mailbox-attachment-info,
.mailbox-attachment-size {
  display: block; }

.mailbox-attachment-info {
  background: #f4f4f4;
  padding: 10px; }

.mailbox-attachment-size {
  color: #999;
  font-size: 12px; }

.mailbox-attachment-icon {
  color: #666;
  font-size: 65px;
  padding: 20px 10px;
  text-align: center; }
  .mailbox-attachment-icon.has-img {
    padding: 0; }
    .mailbox-attachment-icon.has-img > img {
      height: auto;
      max-width: 100%; }

/*
 * Page: Lock Screen
 * -----------------
 */
/* ADD THIS CLASS TO THE <BODY> TAG */
.lockscreen {
  background: #d2d6de; }

.lockscreen-logo {
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 25px;
  text-align: center; }
  .lockscreen-logo a {
    color: #444; }

.lockscreen-wrapper {
  margin: 0 auto;
  margin-top: 10%;
  max-width: 400px; }

/* User name [optional] */
.lockscreen .lockscreen-name {
  font-weight: 600;
  text-align: center; }

/* Will contain the image and the sign in form */
.lockscreen-item {
  background: #fff;
  border-radius: 4px;
  margin: 10px auto 30px auto;
  padding: 0;
  position: relative;
  width: 290px; }

/* User image */
.lockscreen-image {
  background: #fff;
  border-radius: 50%;
  left: -10px;
  padding: 5px;
  position: absolute;
  top: -25px;
  z-index: 10; }
  .lockscreen-image > img {
    border-radius: 50%;
    height: 70px;
    width: 70px; }

/* Contains the password input and the login button */
.lockscreen-credentials {
  margin-left: 70px; }
  .lockscreen-credentials .form-control {
    border: 0; }
  .lockscreen-credentials .btn {
    background-color: #fff;
    border: 0;
    padding: 0 10px; }

.lockscreen-footer {
  margin-top: 10px; }

/*
 * Page: Login & Register
 * ----------------------
 */
.login-logo,
.register-logo {
  font-size: 35px;
  font-weight: 300;
  margin-bottom: 25px;
  text-align: center; }
  .login-logo a,
  .register-logo a {
    color: #444; }

.login-page,
.register-page {
  background: #d2d6de; }

.login-box,
.register-box {
  margin: 7% auto;
  width: 360px; }
  @media (max-width: 768px) {
    .login-box,
    .register-box {
      margin-top: 20px;
      width: 90%; } }

.login-box-body,
.register-box-body {
  background: #fff;
  border-top: 0;
  color: #666;
  padding: 20px; }
  .login-box-body .form-control-feedback,
  .register-box-body .form-control-feedback {
    color: #777; }

.login-box-msg,
.register-box-msg {
  margin: 0;
  padding: 0 20px 20px 20px;
  text-align: center; }

.social-auth-links {
  margin: 10px 0; }

/*
 * Page: 400 and 500 error pages
 * ------------------------------
 */
.error-page {
  margin: 20px auto 0 auto;
  width: 600px; }
  @media (max-width: 991px) {
    .error-page {
      width: 100%; } }
  .error-page > .headline {
    float: left;
    font-size: 100px;
    font-weight: 300; }
    @media (max-width: 991px) {
      .error-page > .headline {
        float: none;
        text-align: center; } }
  .error-page > .error-content {
    display: block;
    margin-left: 190px; }
    @media (max-width: 991px) {
      .error-page > .error-content {
        margin-left: 0; } }
    .error-page > .error-content > h3 {
      font-size: 25px;
      font-weight: 300; }
      @media (max-width: 991px) {
        .error-page > .error-content > h3 {
          text-align: center; } }

/*
 * Page: Invoice
 * -------------
 */
.invoice {
  background: #fff;
  border: 1px solid #f4f4f4;
  margin: 10px 25px;
  padding: 20px;
  position: relative; }

.invoice-title {
  margin-top: 0; }

/*
 * Page: Profile
 * -------------
 */
.profile-user-img {
  border: 3px solid #d2d6de;
  margin: 0 auto;
  padding: 3px;
  width: 100px; }

.profile-username {
  font-size: 21px;
  margin-top: 5px; }

.post {
  border-bottom: 1px solid #d2d6de;
  color: #666;
  margin-bottom: 15px;
  padding-bottom: 15px; }
  .post:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0; }
  .post .user-block {
    margin-bottom: 15px; }

/*!
 * Stylesheet for the Date Range Picker, for use with Bootstrap 3.x
 *
 * Copyright 2013-2015 Dan Grossman ( http://www.dangrossman.info )
 * Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 *
 * Built for http://www.improvely.com
 */
.daterangepicker.dropdown-menu {
  max-width: none;
  z-index: 3000; }

.daterangepicker.opensleft .ranges, .daterangepicker.opensleft .calendar {
  float: left;
  margin: 4px; }

.daterangepicker.opensright .ranges, .daterangepicker.opensright .calendar,
.daterangepicker.openscenter .ranges, .daterangepicker.openscenter .calendar {
  float: right;
  margin: 4px; }

.daterangepicker.single .ranges, .daterangepicker.single .calendar {
  float: none; }

.daterangepicker .ranges {
  text-align: left;
  width: 160px; }

.daterangepicker .ranges .range_inputs > div {
  float: left; }

.daterangepicker .ranges .range_inputs > div:nth-child(2) {
  padding-left: 11px; }

.daterangepicker .calendar {
  display: none;
  max-width: 270px; }

.daterangepicker.show-calendar .calendar {
  display: block; }

.daterangepicker .calendar.single .calendar-date {
  border: none; }

.daterangepicker .calendar th, .daterangepicker .calendar td {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  min-width: 32px;
  text-align: center;
  white-space: nowrap; }

.daterangepicker .daterangepicker_start_input label,
.daterangepicker .daterangepicker_end_input label {
  color: #333;
  display: block;
  font-size: 11px;
  font-weight: normal;
  height: 20px;
  line-height: 20px;
  margin-bottom: 2px;
  text-shadow: #fff 1px 1px 0px;
  text-transform: uppercase;
  width: 74px; }

.daterangepicker .ranges input {
  font-size: 11px; }

.daterangepicker .ranges .input-mini {
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #555;
  display: block;
  font-size: 11px;
  height: 30px;
  line-height: 30px;
  margin: 0 0 10px 0;
  padding: 0 6px;
  vertical-align: middle;
  width: 74px; }

.daterangepicker .ranges ul {
  list-style: none;
  margin: 0;
  padding: 0; }

.daterangepicker .ranges li {
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  color: #08c;
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 8px;
  padding: 3px 12px; }

.daterangepicker .ranges li.active, .daterangepicker .ranges li:hover {
  background: #08c;
  border: 1px solid #08c;
  color: #fff; }

.daterangepicker .calendar-date {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px; }

.daterangepicker .calendar-time {
  line-height: 30px;
  margin: 8px auto 0 auto;
  text-align: center; }

.daterangepicker {
  background: #fff;
  border-radius: 4px;
  left: 20px;
  margin-top: 1px;
  padding: 4px;
  position: absolute;
  top: 100px; }

.daterangepicker.opensleft:before {
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  content: '';
  display: inline-block;
  position: absolute;
  right: 9px;
  top: -7px; }

.daterangepicker.opensleft:after {
  border-bottom: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  content: '';
  display: inline-block;
  position: absolute;
  right: 10px;
  top: -6px; }

.daterangepicker.openscenter:before {
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  top: -7px; }

.daterangepicker.openscenter:before,.daterangepicker.openscenter:after {
  content: '';
  display: inline-block;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  width: 0; }

.daterangepicker.openscenter:after {
  border-bottom: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  top: -6px; }

.daterangepicker.opensright:before {
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  content: '';
  display: inline-block;
  left: 9px;
  position: absolute;
  top: -7px; }

.daterangepicker.opensright:after {
  border-bottom: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  content: '';
  display: inline-block;
  left: 10px;
  position: absolute;
  top: -6px; }

.daterangepicker.dropup {
  margin-top: -5px; }

.daterangepicker.dropup:before {
  border-bottom: initial;
  border-top: 7px solid #ccc;
  bottom: -7px;
  top: initial; }

.daterangepicker.dropup:after {
  border-bottom: initial;
  border-top: 6px solid #fff;
  bottom: -6px;
  top: initial; }

.daterangepicker table {
  margin: 0;
  width: 100%; }

.daterangepicker td, .daterangepicker th {
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  text-align: center;
  white-space: nowrap;
  width: 20px; }

.daterangepicker td.off,.daterangepicker td.disabled, .daterangepicker option.disabled {
  color: #999; }

.daterangepicker td.available:hover, .daterangepicker th.available:hover {
  background: #eee; }

.daterangepicker td.in-range {
  background: #ebf4f8;
  border-radius: 0; }

.daterangepicker td.start-date {
  border-radius: 4px 0 0 4px; }

.daterangepicker td.end-date {
  border-radius: 0 4px 4px 0; }

.daterangepicker td.start-date.end-date {
  border-radius: 4px; }

.daterangepicker td.active, .daterangepicker td.active:hover {
  background-color: #357ebd;
  border-color: #3071a9;
  color: #fff; }

.daterangepicker td.week, .daterangepicker th.week {
  color: #ccc;
  font-size: 80%; }

.daterangepicker select.monthselect, .daterangepicker select.yearselect {
  cursor: default;
  font-size: 12px;
  height: auto;
  margin: 0;
  padding: 1px; }

.daterangepicker select.monthselect {
  margin-right: 2%;
  width: 56%; }

.daterangepicker select.yearselect {
  width: 40%; }

.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {
  margin-bottom: 0;
  width: 50px; }

.daterangepicker_start_input {
  float: left; }

.daterangepicker_end_input {
  float: left;
  padding-left: 11px; }

.daterangepicker th.month {
  width: auto; }

/*
 * Plugin: Select2
 * ---------------
 */
.select2-container--default.select2-container--focus, .select2-container--default:focus, .select2-container--default:active,
.select2-selection.select2-container--focus,
.select2-selection:focus,
.select2-selection:active {
  outline: none; }

.select2-container--default .select2-selection--single,
.select2-selection .select2-selection--single {
  border: 1px solid #d2d6de;
  border-radius: 0;
  height: 34px;
  padding: 6px 12px; }

.select2-container--default.select2-container--open {
  border-color: #3c8dbc; }

.select2-dropdown {
  border: 1px solid #d2d6de;
  border-radius: 0; }

.select2-container--default .select2-results__option--highlighted[aria-selected] {
  background-color: #3c8dbc;
  color: white; }

.select2-results__option {
  padding: 6px 12px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none; }

.select2-container .select2-selection--single .select2-selection__rendered {
  height: auto;
  margin-top: -4px;
  padding-left: 0;
  padding-right: 0; }

.select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
  padding-left: 20px;
  padding-right: 6px; }

.select2-container--default .select2-selection--single .select2-selection__arrow {
  height: 28px;
  right: 3px; }

.select2-container--default .select2-selection--single .select2-selection__arrow b {
  margin-top: 0; }

.select2-dropdown .select2-search__field,
.select2-search--inline .select2-search__field {
  border: 1px solid #d2d6de; }
  .select2-dropdown .select2-search__field:focus,
  .select2-search--inline .select2-search__field:focus {
    border: 1px solid #3c8dbc;
    outline: none; }

.select2-container--default .select2-results__option[aria-disabled=true] {
  color: #999; }

.select2-container--default .select2-results__option[aria-selected=true] {
  background-color: #ddd; }
  .select2-container--default .select2-results__option[aria-selected=true], .select2-container--default .select2-results__option[aria-selected=true]:hover {
    color: #444; }

.select2-container--default .select2-selection--multiple {
  border: 1px solid #d2d6de;
  border-radius: 0; }
  .select2-container--default .select2-selection--multiple:focus {
    border-color: #3c8dbc; }

.select2-container--default.select2-container--focus .select2-selection--multiple {
  border-color: #d2d6de; }

.select2-container--default .select2-selection--multiple .select2-selection__choice {
  background-color: #3c8dbc;
  border-color: #367fa9;
  color: #fff;
  padding: 1px 10px; }

.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  color: rgba(255, 255, 255, 0.7);
  margin-right: 5px; }
  .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
    color: #fff; }

.select2-container .select2-selection--single .select2-selection__rendered {
  padding-right: 10px; }

/*
 * General: Miscellaneous
 * ----------------------
 */
.pad {
  padding: 10px; }

.margin {
  margin: 10px; }

.margin-bottom {
  margin-bottom: 20px; }

.margin-bottom-none {
  margin-bottom: 0; }

.margin-r-5 {
  margin-right: 5px; }

.inline {
  display: inline; }

.description-block {
  display: block;
  margin: 10px 0;
  text-align: center; }
  .description-block.margin-bottom {
    margin-bottom: 25px; }
  .description-block > .description-header {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0; }
  .description-block > .description-text {
    text-transform: uppercase; }

.bg-red, .callout.callout-danger, .alert-danger,
.alert-error, .label-danger, .modal-danger .modal-body,
.bg-yellow,
.callout.callout-warning,
.alert-warning,
.label-warning,
.modal-warning .modal-body,
.bg-aqua,
.callout.callout-info,
.alert-info,
.label-info,
.modal-info .modal-body,
.bg-blue,
.bg-light-blue,
.label-primary,
.modal-primary .modal-body,
.bg-green,
.callout.callout-success,
.alert-success,
.label-success,
.modal-success .modal-body,
.bg-navy,
.bg-teal,
.bg-olive,
.bg-lime,
.bg-orange,
.bg-fuchsia,
.bg-purple,
.bg-maroon,
.bg-black,
.bg-red-active,
.modal-danger .modal-header,
.modal-danger .modal-footer,
.bg-yellow-active,
.modal-warning .modal-header,
.modal-warning .modal-footer,
.bg-aqua-active,
.modal-info .modal-header,
.modal-info .modal-footer,
.bg-blue-active,
.bg-light-blue-active,
.modal-primary .modal-header,
.modal-primary .modal-footer,
.bg-green-active,
.modal-success .modal-header,
.modal-success .modal-footer,
.bg-navy-active,
.bg-teal-active,
.bg-olive-active,
.bg-lime-active,
.bg-orange-active,
.bg-fuchsia-active,
.bg-purple-active,
.bg-maroon-active,
.bg-black-active {
  color: #fff !important; }

.bg-gray {
  background-color: #d2d6de !important;
  color: #000; }

.bg-gray-light {
  background-color: #f7f7f7; }

.bg-black {
  background-color: #111 !important; }

.bg-red, .callout.callout-danger, .alert-danger,
.alert-error, .label-danger, .modal-danger .modal-body {
  background-color: #dd4b39 !important; }

.bg-yellow, .callout.callout-warning, .alert-warning, .label-warning, .modal-warning .modal-body {
  background-color: #f39c12 !important; }

.bg-aqua, .callout.callout-info, .alert-info, .label-info, .modal-info .modal-body {
  background-color: #00c0ef !important; }

.bg-blue {
  background-color: #0073b7 !important; }

.bg-light-blue, .label-primary, .modal-primary .modal-body {
  background-color: #3c8dbc !important; }

.bg-green, .callout.callout-success, .alert-success, .label-success, .modal-success .modal-body {
  background-color: #00a65a !important; }

.bg-navy {
  background-color: #001F3F !important; }

.bg-teal {
  background-color: #39CCCC !important; }

.bg-olive {
  background-color: #3D9970 !important; }

.bg-lime {
  background-color: #01FF70 !important; }

.bg-orange {
  background-color: #FF851B !important; }

.bg-fuchsia {
  background-color: #F012BE !important; }

.bg-purple {
  background-color: #605ca8 !important; }

.bg-maroon {
  background-color: #D81B60 !important; }

.bg-gray-active {
  background-color: #b5bbc8 !important;
  color: #000; }

.bg-black-active {
  background-color: black !important; }

.bg-red-active, .modal-danger .modal-header,
.modal-danger .modal-footer {
  background-color: #d33724 !important; }

.bg-yellow-active, .modal-warning .modal-header,
.modal-warning .modal-footer {
  background-color: #db8b0b !important; }

.bg-aqua-active, .modal-info .modal-header,
.modal-info .modal-footer {
  background-color: #00a7d0 !important; }

.bg-blue-active {
  background-color: #005384 !important; }

.bg-light-blue-active, .modal-primary .modal-header,
.modal-primary .modal-footer {
  background-color: #357ca5 !important; }

.bg-green-active, .modal-success .modal-header,
.modal-success .modal-footer {
  background-color: #008d4c !important; }

.bg-navy-active {
  background-color: #001a35 !important; }

.bg-teal-active {
  background-color: #30bbbb !important; }

.bg-olive-active {
  background-color: #368763 !important; }

.bg-lime-active {
  background-color: #00e765 !important; }

.bg-orange-active {
  background-color: #ff7702 !important; }

.bg-fuchsia-active {
  background-color: #db0ead !important; }

.bg-purple-active {
  background-color: #555299 !important; }

.bg-maroon-active {
  background-color: #ca195a !important; }

[class^="bg-"].disabled {
  filter: alpha(opacity=65);
  opacity: 0.65; }

.text-red {
  color: #dd4b39 !important; }

.text-yellow {
  color: #f39c12 !important; }

.text-aqua {
  color: #00c0ef !important; }

.text-blue {
  color: #0073b7 !important; }

.text-black {
  color: #111 !important; }

.text-light-blue {
  color: #3c8dbc !important; }

.text-green {
  color: #00a65a !important; }

.text-gray {
  color: #d2d6de !important; }

.text-navy {
  color: #001F3F !important; }

.text-teal {
  color: #39CCCC !important; }

.text-olive {
  color: #3D9970 !important; }

.text-lime {
  color: #01FF70 !important; }

.text-orange {
  color: #FF851B !important; }

.text-fuchsia {
  color: #F012BE !important; }

.text-purple {
  color: #605ca8 !important; }

.text-maroon {
  color: #D81B60 !important; }

.link-muted {
  color: #7a869d; }
  .link-muted:hover, .link-muted:focus {
    color: #606c84; }

.link-black {
  color: #666; }
  .link-black:hover, .link-black:focus {
    color: #999; }

.hide {
  display: none !important; }

.no-border {
  border: 0 !important; }

.no-padding {
  padding: 0 !important; }

.no-margin {
  margin: 0 !important; }

.no-shadow {
  box-shadow: none !important; }

.list-unstyled, .chart-legend, .contacts-list, .users-list, .mailbox-attachments {
  list-style: none;
  margin: 0;
  padding: 0; }

.list-group-unbordered > .list-group-item {
  border-left: 0;
  border-radius: 0;
  border-right: 0;
  padding-left: 0;
  padding-right: 0; }

.flat {
  border-radius: 0 !important; }

.text-bold, .text-bold.table td, .text-bold.table th {
  font-weight: 700; }

.text-sm {
  font-size: 12px; }

.jqstooltip {
  height: auto !important;
  padding: 5px !important;
  width: auto !important; }

.bg-teal-gradient {
  background: #39CCCC "!important";
  background: -o-linear-gradient(#7adddd, #39CCCC) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #7adddd, #39CCCC); }

.bg-light-blue-gradient {
  background: #3c8dbc "!important";
  background: -o-linear-gradient(#67a8ce, #3c8dbc) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #67a8ce, #3c8dbc); }

.bg-blue-gradient {
  background: #0073b7 "!important";
  background: -o-linear-gradient(#0089db, #0073b7) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #0089db, #0073b7); }

.bg-aqua-gradient {
  background: #00c0ef "!important";
  background: -o-linear-gradient(#14d1ff, #00c0ef) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #14d1ff, #00c0ef); }

.bg-yellow-gradient {
  background: #f39c12 "!important";
  background: -o-linear-gradient(#f7bc60, #f39c12) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #f7bc60, #f39c12); }

.bg-purple-gradient {
  background: #605ca8 "!important";
  background: -o-linear-gradient(#9491c4, #605ca8) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #9491c4, #605ca8); }

.bg-green-gradient {
  background: #00a65a "!important";
  background: -o-linear-gradient(#00ca6d, #00a65a) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #00ca6d, #00a65a); }

.bg-red-gradient {
  background: #dd4b39 "!important";
  background: -o-linear-gradient(#e47365, #dd4b39) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #e47365, #dd4b39); }

.bg-black-gradient {
  background: #111 "!important";
  background: -o-linear-gradient(#2b2b2b, #111) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #2b2b2b, #111); }

.bg-maroon-gradient {
  background: #D81B60 "!important";
  background: -o-linear-gradient(#e73f7c, #D81B60) "!important";
  color: #fff;
  filter: e(% "progid:DXImageTransform.Microsoft@include gradient(startColorstr='%d', endColorstr='%d', GradientType=0)", #e73f7c, #D81B60); }

.description-block .description-icon {
  font-size: 16px; }

.no-pad-top {
  padding-top: 0; }

.position-static {
  position: static !important; }

.list-header {
  color: #666;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 4px; }

.list-seperator {
  background: #f4f4f4;
  height: 1px;
  margin: 15px 0 9px 0; }

.list-link > a {
  color: #777;
  padding: 4px; }
  .list-link > a:hover {
    color: #222; }

.font-light {
  font-weight: 300; }

.user-block:before, .user-block:after {
  content: " ";
  display: table; }

.user-block:after {
  clear: both; }

.user-block img {
  float: left;
  height: 40px;
  width: 40px; }

.user-block .username,
.user-block .description,
.user-block .comment {
  display: block;
  margin-left: 50px; }

.user-block .username {
  font-size: 16px;
  font-weight: 600; }

.user-block .description {
  color: #999;
  font-size: 13px; }

.user-block.user-block-sm .username,
.user-block.user-block-sm .description,
.user-block.user-block-sm .comment {
  margin-left: 40px; }

.user-block.user-block-sm .username {
  font-size: 14px; }

.img-sm, .box-comments .box-comment img, .user-block.user-block-sm img,
.img-md,
.img-lg {
  float: left; }

.img-sm, .box-comments .box-comment img, .user-block.user-block-sm img {
  height: 30px !important;
  width: 30px !important; }
  .img-sm + .img-push, .box-comments .box-comment img + .img-push, .user-block.user-block-sm img + .img-push {
    margin-left: 40px; }

.img-md {
  height: 60px;
  width: 60px; }
  .img-md + .img-push {
    margin-left: 70px; }

.img-lg {
  height: 100px;
  width: 100px; }
  .img-lg + .img-push {
    margin-left: 110px; }

.img-bordered {
  border: 3px solid #d2d6de;
  padding: 3px; }

.img-bordered-sm {
  border: 2px solid #d2d6de;
  padding: 2px; }

.attachment-block {
  background: #f7f7f7;
  border: 1px solid #f4f4f4;
  margin-bottom: 10px;
  padding: 5px; }
  .attachment-block .attachment-img {
    float: left;
    height: auto;
    max-height: 100px;
    max-width: 100px; }
  .attachment-block .attachment-pushed {
    margin-left: 110px; }
  .attachment-block .attachment-heading {
    margin: 0; }
  .attachment-block .attachment-text {
    color: #555; }

.connectedSortable {
  min-height: 100px; }

.ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.sort-highlight {
  background: #f4f4f4;
  border: 1px dashed #ddd;
  margin-bottom: 10px; }

.full-opacity-hover {
  filter: alpha(opacity=65);
  opacity: 0.65; }
  .full-opacity-hover:hover {
    filter: alpha(opacity=100);
    opacity: 1; }

.chart {
  overflow: hidden;
  position: relative;
  width: 100%; }
  .chart svg,
  .chart canvas {
    width: 100% !important; }

/*
 * Misc: print
 * -----------
 */
@media print {
  .no-print, .main-sidebar,
  .left-side,
  .main-header,
  .content-header {
    display: none !important; }
  .content-wrapper,
  .right-side,
  .main-footer {
    margin-left: 0 !important;
    min-height: 0 !important;
    -ms-transform: translate(0, 0);
        transform: translate(0, 0); }
  .fixed .content-wrapper,
  .fixed .right-side {
    padding-top: 0 !important; }
  .invoice {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%; }
  .invoice-col {
    float: left;
    width: 33.3333333%; }
  .table-responsive {
    overflow: auto; }
    .table-responsive > .table tr th,
    .table-responsive > .table tr td {
      white-space: normal !important; } }

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFkbWluTFRFLnNjc3MiLCJfY29yZS5zY3NzIiwiLi4vLi4vLi4vY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fY2xlYXJmaXguc2NzcyIsIl92YXJpYWJsZXMuc2NzcyIsIi4uLy4uLy4uL2NvbXBvbmVudHMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3ZlbmRvci1wcmVmaXhlcy5zY3NzIiwiLi4vLi4vLi4vY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JpZC5zY3NzIiwiX2hlYWRlci5zY3NzIiwiLi4vLi4vLi4vY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL192YXJpYWJsZXMuc2NzcyIsIkFkbWluTFRFLmNzcyIsIl9taXhpbnMuc2NzcyIsIl9zaWRlYmFyLnNjc3MiLCJfc2lkZWJhci1taW5pLnNjc3MiLCJfY29udHJvbC1zaWRlYmFyLnNjc3MiLCJfZHJvcGRvd24uc2NzcyIsIi4uLy4uLy4uL2NvbXBvbmVudHMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2JvcmRlci1yYWRpdXMuc2NzcyIsIl9mb3Jtcy5zY3NzIiwiX3Byb2dyZXNzLWJhcnMuc2NzcyIsIi4uLy4uLy4uL2NvbXBvbmVudHMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Byb2dyZXNzLWJhci5zY3NzIiwiLi4vLi4vLi4vY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JhZGllbnRzLnNjc3MiLCJfc21hbGwtYm94LnNjc3MiLCJfYm94ZXMuc2NzcyIsIl9pbmZvLWJveC5zY3NzIiwiX3RpbWVsaW5lLnNjc3MiLCJfYnV0dG9ucy5zY3NzIiwiLi4vLi4vLi4vY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fb3BhY2l0eS5zY3NzIiwiX2NhbGxvdXQuc2NzcyIsIl9hbGVydHMuc2NzcyIsIl9uYXZzLnNjc3MiLCJfcHJvZHVjdHMuc2NzcyIsIl90YWJsZS5zY3NzIiwiX2xhYmVscy5zY3NzIiwiX2RpcmVjdC1jaGF0LnNjc3MiLCJfdXNlcnMtbGlzdC5zY3NzIiwiX2Nhcm91c2VsLnNjc3MiLCJfbW9kYWwuc2NzcyIsIl9zb2NpYWwtd2lkZ2V0cy5zY3NzIiwiX21haWxib3guc2NzcyIsIl9sb2Nrc2NyZWVuLnNjc3MiLCJfbG9naW5fYW5kX3JlZ2lzdGVyLnNjc3MiLCJfNDA0XzUwMF9lcnJvcnMuc2NzcyIsIl9pbnZvaWNlLnNjc3MiLCJfcHJvZmlsZS5zY3NzIiwicGx1Z2lucy9fZGF0ZXJhbmdlcGlja2VyLnNjc3MiLCJwbHVnaW5zL19zZWxlY3QyLnNjc3MiLCJfbWlzY2VsbGFuZW91cy5zY3NzIiwiX3ByaW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsbUhBQVk7QUNSWjs7O0dBR0c7QUFDSDs7RUFFRSxpQkFBaUIsRUFJbEI7RUFORDs7SUFJSSxhQUFhLEVBQ2Q7O0FBR0g7RUFHRSwrRUFBK0U7RUFDL0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFDbEI7O0FBRUQsWUFBWTtBQUNaO0VBRUUsaUJBQWlCO0VBRWpCLGlCQUFpQjtFQURqQixtQkFBbUIsRUFTcEI7RUFaRDtJQ1BJLGFBQWE7SUFDYixlQUFlLEVBQ2hCO0VES0g7SUNISSxZQUFZLEVBQ2I7RURFSDtJQVNJLHVDQUF3QjtJQUZ4QixlQUFlO0lBRGYsa0JBQWtCO0lBRWxCLGlCQUFpQjtJQUVqQixtQkFBbUIsRUFDcEI7O0FBR0g7RUFDRSw4REFBNkQsRUFDOUQ7O0FBRUQ7OztH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QUFXO0lBSFgsWUFBWSxFQUliO0VBRUQ7SUFDRSxZQUFZO0lBQ1osbUJBQW1CLEVBQ3BCO0VBR0Q7SUFDRSxlQUFlLEVBS2hCO0lBTkQ7O01BSUksK0JBQStCLEVBQ2hDLEVBQUEiLCJmaWxlIjoiQWRtaW5MVEUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAgIEFkbWluTFRFIHYyLjMuM1xuICogICBBdXRob3I6IEFsbXNhZWVkIFN0dWRpb1xuICpcdCBXZWJzaXRlOiBBbG1zYWVlZCBTdHVkaW8gPGh0dHA6Ly9hbG1zYWVlZHN0dWRpby5jb20+XG4gKiAgIExpY2Vuc2U6IE9wZW4gc291cmNlIC0gTUlUXG4gKiAgICAgICAgICAgUGxlYXNlIHZpc2l0IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiEqL1xuLy9nb29nbGUgZm9udHNcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86MzAwLDQwMCw2MDAsNzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNjAwaXRhbGljKTtcblxuLy9Cb290c3RyYXAgMy4zLjYgVmFyaWFibGVzICYgTWl4aW5zXG5AaW1wb3J0IFwic3JjL2NvbXBvbmVudHMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnNcIjtcbkBpbXBvcnQgXCJzcmMvY29tcG9uZW50cy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL3ZhcmlhYmxlc1wiO1xuXG4vL01JU0Ncbi8vLS0tLVxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcImNvcmVcIjtcblxuLy9DT01QT05FTlRTXG4vLy0tLS0tLS0tLS0tXG5AaW1wb3J0IFwiaGVhZGVyXCI7XG5AaW1wb3J0IFwic2lkZWJhclwiO1xuQGltcG9ydCBcInNpZGViYXItbWluaVwiO1xuQGltcG9ydCBcImNvbnRyb2wtc2lkZWJhclwiO1xuQGltcG9ydCBcImRyb3Bkb3duXCI7XG5AaW1wb3J0IFwiZm9ybXNcIjtcbkBpbXBvcnQgXCJwcm9ncmVzcy1iYXJzXCI7XG5AaW1wb3J0IFwic21hbGwtYm94XCI7XG5AaW1wb3J0IFwiYm94ZXNcIjtcbkBpbXBvcnQgXCJpbmZvLWJveFwiO1xuQGltcG9ydCBcInRpbWVsaW5lXCI7XG5AaW1wb3J0IFwiYnV0dG9uc1wiO1xuQGltcG9ydCBcImNhbGxvdXRcIjtcbkBpbXBvcnQgXCJhbGVydHNcIjtcbkBpbXBvcnQgXCJuYXZzXCI7XG5AaW1wb3J0IFwicHJvZHVjdHNcIjtcbkBpbXBvcnQgXCJ0YWJsZVwiO1xuQGltcG9ydCBcImxhYmVsc1wiO1xuQGltcG9ydCBcImRpcmVjdC1jaGF0XCI7XG5AaW1wb3J0IFwidXNlcnMtbGlzdFwiO1xuQGltcG9ydCBcImNhcm91c2VsXCI7XG5AaW1wb3J0IFwibW9kYWxcIjtcbkBpbXBvcnQgXCJzb2NpYWwtd2lkZ2V0c1wiO1xuXG4vL1BBR0VTXG4vLy0tLS0tLVxuQGltcG9ydCBcIm1haWxib3hcIjtcbkBpbXBvcnQgXCJsb2Nrc2NyZWVuXCI7XG5AaW1wb3J0IFwibG9naW5fYW5kX3JlZ2lzdGVyXCI7XG5AaW1wb3J0IFwiNDA0XzUwMF9lcnJvcnNcIjtcbkBpbXBvcnQgXCJpbnZvaWNlXCI7XG5AaW1wb3J0IFwicHJvZmlsZVwiO1xuXG4vL1BsdWdpbnNcbi8vLS0tLS0tLS1cbkBpbXBvcnQgXCJwbHVnaW5zL2RhdGVyYW5nZXBpY2tlclwiO1xuQGltcG9ydCBcInBsdWdpbnMvc2VsZWN0MlwiO1xuXG4vL01pc2NlbGxhbmVvdXNcbi8vLS0tLS0tLS0tLS0tLVxuQGltcG9ydCBcIm1pc2NlbGxhbmVvdXNcIjtcbkBpbXBvcnQgXCJwcmludFwiO1xuIiwiLypcbiAqIENvcmU6IEdlbmVyYWwgTGF5b3V0IFN0eWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgLmxheW91dC1ib3hlZCAmIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogTGF5b3V0ICovXG4ud3JhcHBlciB7XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLmxheW91dC1ib3hlZCAmIHtcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4ubGF5b3V0LWJveGVkIHtcbiAgYmFja2dyb3VuZDogdXJsKCcke2JveGVkLWxheW91dC1iZy1pbWFnZS1wYXRofScpIHJlcGVhdCBmaXhlZDtcbn1cblxuLypcbiAqIENvbnRlbnQgV3JhcHBlciAtIGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnRcbiAqIGBgYC5yaWdodC1zaWRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgdjIuMC4wIGluIGZhdm9yIG9mIC5jb250ZW50LXdyYXBwZXIgIGBgYFxuICovXG4uY29udGVudC13cmFwcGVyLFxuLnJpZ2h0LXNpZGUsXG4ubWFpbi1mb290ZXIge1xuICAvL1VzaW5nIGRpc3Bvc2FibGUgdmFyaWFibGUgdG8gam9pbiBzdGF0ZW1lbnRzIHdpdGggYSBjb21tYVxuICAkdHJhbnNpdGlvbi1ydWxlOiAkdHJhbnNpdGlvbi1zcGVlZCAkdHJhbnNpdGlvbi1mbixcbiAgbWFyZ2luICR0cmFuc2l0aW9uLXNwZWVkICR0cmFuc2l0aW9uLWZuO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSgkdHJhbnNpdGlvbi1ydWxlKTtcbiAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLXdpZHRoO1xuICB6LWluZGV4OiA4MjA7XG4gIC8vVG9wIG5hdiBsYXlvdXRcbiAgLmxheW91dC10b3AtbmF2ICYge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC8vV2hlbiBvcGVuaW5nIHRoZSBzaWRlYmFyIG9uIGxhcmdlIHNjcmVlbnNcbiAgLnNpZGViYXItY29sbGFwc2UgJiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20pIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAvL1doZW4gb3BlbmluZyB0aGUgc2lkZWJhciBvbiBzbWFsbCBzY3JlZW5zXG4gIC5zaWRlYmFyLW9wZW4gJiB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2xhdGUoJHNpZGViYXItd2lkdGgsIDApO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudC13cmFwcGVyLFxuLnJpZ2h0LXNpZGUge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcbiAgei1pbmRleDogODAwO1xufVxuXG4ubWFpbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmF5O1xufVxuXG4vKiBGaXhlZCBsYXlvdXQgKi9cbi5maXhlZCB7XG4gIC5tYWluLWhlYWRlcixcbiAgLm1haW4tc2lkZWJhcixcbiAgLmxlZnQtc2lkZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIC5tYWluLWhlYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLmNvbnRlbnQtd3JhcHBlcixcbiAgLnJpZ2h0LXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLWhlYWRlci1jb2xsYXBzZSkge1xuICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAmLmxheW91dC1ib3hlZCB7XG4gICAgLndyYXBwZXIge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5ib2R5LmhvbGQtdHJhbnNpdGlvbiB7XG4gIC5jb250ZW50LXdyYXBwZXIsXG4gIC5yaWdodC1zaWRlLFxuICAubWFpbi1mb290ZXIsXG4gIC5tYWluLXNpZGViYXIsXG4gIC5sZWZ0LXNpZGUsXG4gIC5tYWluLWhlYWRlciA+IC5uYXZiYXIsXG4gIC5tYWluLWhlYWRlciAubG9nbyB7XG4gICAgLyogRml4IGZvciBJRSAqL1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24obm9uZSk7XG4gIH1cbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgQGluY2x1ZGUgY29udGFpbmVyLWZpeGVkKCRncmlkLWd1dHRlci13aWR0aCk7XG59XG5cbi8qIEgxIC0gSDYgZm9udCAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuLmgxLFxuLmgyLFxuLmgzLFxuLmg0LFxuLmg1LFxuLmg2IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBHZW5lcmFsIExpbmtzICovXG5hIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xufVxuXG5hOmhvdmVyLFxuYTphY3RpdmUsXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7XG59XG5cbi8qIFBhZ2UgSGVhZGVyICovXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcblxuICA+IHNtYWxsIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbiIsIi8vIENsZWFyZml4XG4vL1xuLy8gRm9yIG1vZGVybiBicm93c2Vyc1xuLy8gMS4gVGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcbi8vICAgIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG4vLyAgICBPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcbi8vICAgIHRoYXQgYXJlIGNsZWFyZml4ZWQuXG4vLyAyLiBUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuLy8gICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuLy9cbi8vIFNvdXJjZTogaHR0cDovL25pY29sYXNnYWxsYWdoZXIuY29tL21pY3JvLWNsZWFyZml4LWhhY2svXG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvLyAxXG4gICAgZGlzcGxheTogdGFibGU7IC8vIDJcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuIiwiLy9BZG1pbkxURSAyIFZhcmlhYmxlcy5zY3NzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9QQVRIU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4kYm94ZWQtbGF5b3V0LWJnLWltYWdlLXBhdGg6IFwiLi4vaW1nL2JveGVkLWJnLmpwZ1wiO1xuXG4vL0NPTE9SU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9QcmltYXJ5XG4kbGlnaHQtYmx1ZTogIzNjOGRiYztcblxuLy9EYW5nZXJcbiRyZWQ6ICNkZDRiMzk7XG5cbi8vU3VjY2Vzc1xuJGdyZWVuOiAjMDBhNjVhO1xuXG4vL0luZm9cbiRhcXVhOiAjMDBjMGVmO1xuXG4vL1dhcm5pbmdcbiR5ZWxsb3c6ICNmMzljMTI7XG5cbi8vT3RoZXJzXG4kYmx1ZTogIzAwNzNiNztcbiRuYXZ5OiAjMDAxRjNGO1xuJHRlYWw6ICMzOUNDQ0M7XG4kb2xpdmU6ICMzRDk5NzA7XG4kbGltZTogIzAxRkY3MDtcbiRvcmFuZ2U6ICNGRjg1MUI7XG4kZnVjaHNpYTogI0YwMTJCRTtcbiRwdXJwbGU6ICM2MDVjYTg7XG4kbWFyb29uOiAjRDgxQjYwO1xuJGJsYWNrOiAjMTExO1xuJGdyYXk6ICNkMmQ2ZGU7XG5cbi8vTEFZT1VUXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vU2lkZSBiYXIgYW5kIGxvZ28gd2lkdGhcbiRzaWRlYmFyLXdpZHRoOiAyMzBweDtcbi8vQm94ZWQgbGF5b3V0IG1heGltdW0gd2lkdGhcbiRib3hlZC1sYXlvdXQtbWF4LXdpZHRoOiAxMDI0cHg7XG4vL1doZW4gdGhlIGxvZ28gc2hvdWxkIGdvIHRvIHRoZSB0b3Agb2YgdGhlIHNjcmVlblxuJHNjcmVlbi1oZWFkZXItY29sbGFwc2U6ICRzY3JlZW4teHMtbWF4O1xuXG4vL0xpbmsgY29sb3JzIChBa2E6IDxhPiB0YWdzKVxuJGxpbmstY29sb3I6ICRsaWdodC1ibHVlO1xuJGxpbmstaG92ZXItY29sb3I6IGxpZ2h0ZW4oJGxpbmstY29sb3IsIDE1JSk7XG5cbi8vQm9keSBiYWNrZ3JvdW5kIChBZmZlY3RzIG1haW4gY29udGVudCBiYWNrZ3JvdW5kIG9ubHkpXG4kYm9keS1iZzogI2VjZjBmNTtcblxuLy9TSURFQkFSIFNLSU5TXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vRGFyayBzaWRlYmFyXG4kc2lkZWJhci1kYXJrLWJnOiAjMjIyZDMyO1xuJHNpZGViYXItZGFyay1ob3Zlci1iZzogZGFya2VuKCRzaWRlYmFyLWRhcmstYmcsIDIlKTtcbiRzaWRlYmFyLWRhcmstY29sb3I6IGxpZ2h0ZW4oJHNpZGViYXItZGFyay1iZywgNjAlKTtcbiRzaWRlYmFyLWRhcmstaG92ZXItY29sb3I6ICNmZmY7XG4kc2lkZWJhci1kYXJrLXN1Ym1lbnUtYmc6IGxpZ2h0ZW4oJHNpZGViYXItZGFyay1iZywgNSUpO1xuJHNpZGViYXItZGFyay1zdWJtZW51LWNvbG9yOiBsaWdodGVuKCRzaWRlYmFyLWRhcmstc3VibWVudS1iZywgNDAlKTtcbiRzaWRlYmFyLWRhcmstc3VibWVudS1ob3Zlci1jb2xvcjogI2ZmZjtcblxuLy9MaWdodCBzaWRlYmFyXG4kc2lkZWJhci1saWdodC1iZzogI2Y5ZmFmYztcbiRzaWRlYmFyLWxpZ2h0LWhvdmVyLWJnOiBsaWdodGVuKCNmMGYwZjEsIDEuNSUpO1xuJHNpZGViYXItbGlnaHQtY29sb3I6ICM0NDQ7XG4kc2lkZWJhci1saWdodC1ob3Zlci1jb2xvcjogIzAwMDtcbiRzaWRlYmFyLWxpZ2h0LXN1Ym1lbnUtYmc6ICRzaWRlYmFyLWxpZ2h0LWhvdmVyLWJnO1xuJHNpZGViYXItbGlnaHQtc3VibWVudS1jb2xvcjogIzc3NztcbiRzaWRlYmFyLWxpZ2h0LXN1Ym1lbnUtaG92ZXItY29sb3I6ICMwMDA7XG5cbi8vQ09OVFJPTCBTSURFQkFSXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kY29udHJvbC1zaWRlYmFyLXdpZHRoOiAkc2lkZWJhci13aWR0aDtcblxuLy9CT1hFU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGJveC1ib3JkZXItY29sb3I6ICNmNGY0ZjQ7XG4kYm94LWJvcmRlci1yYWRpdXM6IDNweDtcbiRib3gtZm9vdGVyLWJnOiAjZmZmO1xuJGJveC1ib3hzaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiRib3gtcGFkZGluZzogMTBweDtcblxuLy9Cb3ggdmFyaWFudHNcbiRib3gtZGVmYXVsdC1ib3JkZXItdG9wLWNvbG9yOiAjZDJkNmRlO1xuXG4vL0JVVFRPTlNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRidG4tYm94c2hhZG93OiBub25lO1xuXG4vL1BST0dSRVNTIEJBUlNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogMXB4O1xuJHByb2dyZXNzLWJhci1zbS1ib3JkZXItcmFkaXVzOiAxcHg7XG4kcHJvZ3Jlc3MtYmFyLXhzLWJvcmRlci1yYWRpdXM6IDFweDtcblxuLy9GT1JNU1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGlucHV0LXJhZGl1czogMDtcblxuLy9CVVRUT05TXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vQm9yZGVyIHJhZGl1cyBmb3Igbm9uIGZsYXQgYnV0dG9uc1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAzcHg7XG5cbi8vRElSRUNUIENIQVRcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRkaXJlY3QtY2hhdC1oZWlnaHQ6IDI1MHB4O1xuJGRpcmVjdC1jaGF0LWRlZmF1bHQtbXNnLWJnOiAkZ3JheTtcbiRkaXJlY3QtY2hhdC1kZWZhdWx0LWZvbnQtY29sb3I6ICM0NDQ7XG4kZGlyZWN0LWNoYXQtZGVmYXVsdC1tc2ctYm9yZGVyLWNvbG9yOiAkZ3JheTtcblxuLy9DSEFUIFdJREdFVFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJGF0dGFjaG1lbnQtYm9yZGVyLXJhZGl1czogM3B4O1xuXG4vL1RSQU5TSVRJT05TIFNFVFRJTkdTXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vVHJhbnNpdGlvbiBnbG9iYWwgb3B0aW9uc1xuJHRyYW5zaXRpb24tc3BlZWQ6IC4zcztcbiR0cmFuc2l0aW9uLWZuOiBlYXNlLWluLW91dDtcbi8vY3ViaWMtYmV6aWVyKDAuMzIsMS4yNSwwLjM3NSwxLjE1KTtcbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgaGF2ZSBiZWVuIHJlbW92ZWQgaW4gdjQuXG5cbi8vIC0gQW5pbWF0aW9uc1xuLy8gLSBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyAtIEJveCBzaGFkb3dcbi8vIC0gQm94IHNpemluZ1xuLy8gLSBDb250ZW50IGNvbHVtbnNcbi8vIC0gSHlwaGVuc1xuLy8gLSBQbGFjZWhvbGRlciB0ZXh0XG4vLyAtIFRyYW5zZm9ybWF0aW9uc1xuLy8gLSBUcmFuc2l0aW9uc1xuLy8gLSBVc2VyIFNlbGVjdFxuXG5cbi8vIEFuaW1hdGlvbnNcbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAtby1hbmltYXRpb246ICRhbmltYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1uYW1lKCRuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcbn1cbkBtaXhpbiBhbmltYXRpb24tZHVyYXRpb24oJGR1cmF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbn1cbkBtaXhpbiBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50KCRpdGVyYXRpb24tY291bnQpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAkaXRlcmF0aW9uLWNvdW50O1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1maWxsLW1vZGUoJGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZpc2liaWxpdHkpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmlzaWJpbGl0eTtcbn1cblxuLy8gRHJvcCBzaGFkb3dzXG4vL1xuLy8gTm90ZTogRGVwcmVjYXRlZCBgLmJveC1zaGFkb3coKWAgYXMgb2YgdjMuMS4wIHNpbmNlIGFsbCBvZiBCb290c3RyYXAnc1xuLy8gc3VwcG9ydGVkIGJyb3dzZXJzIHRoYXQgaGF2ZSBib3ggc2hhZG93IGNhcGFiaWxpdGllcyBub3cgc3VwcG9ydCBpdC5cblxuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdy4uLikge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRzaGFkb3c7IC8vIGlPUyA8NC4zICYgQW5kcm9pZCA8NC4xXG4gICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuLy8gQm94IHNpemluZ1xuQG1peGluIGJveC1zaXppbmcoJGJveG1vZGVsKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAtbW96LWJveC1zaXppbmc6ICRib3htb2RlbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiAkYm94bW9kZWw7XG59XG5cbi8vIENTUzMgQ29udGVudCBDb2x1bW5zXG5AbWl4aW4gY29udGVudC1jb2x1bW5zKCRjb2x1bW4tY291bnQsICRjb2x1bW4tZ2FwOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLXdlYmtpdC1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAgICAgICAgIGNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgLW1vei1jb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAkY29sdW1uLWdhcDtcbn1cblxuLy8gT3B0aW9uYWwgaHlwaGVuYXRpb25cbkBtaXhpbiBoeXBoZW5zKCRtb2RlOiBhdXRvKSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLXdlYmtpdC1oeXBoZW5zOiAkbW9kZTtcbiAgICAgLW1vei1oeXBoZW5zOiAkbW9kZTtcbiAgICAgIC1tcy1oeXBoZW5zOiAkbW9kZTsgLy8gSUUxMCtcbiAgICAgICAtby1oeXBoZW5zOiAkbW9kZTtcbiAgICAgICAgICBoeXBoZW5zOiAkbW9kZTtcbn1cblxuLy8gUGxhY2Vob2xkZXIgdGV4dFxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XG4gIC8vIEZpcmVmb3hcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICB9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICRjb2xvcjsgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyBjb2xvcjogJGNvbG9yOyB9IC8vIFNhZmFyaSBhbmQgQ2hyb21lXG59XG5cbi8vIFRyYW5zZm9ybWF0aW9uc1xuQG1peGluIHNjYWxlKCRyYXRpby4uLikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTtcbn1cblxuQG1peGluIHNjYWxlWCgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xufVxuQG1peGluIHNjYWxlWSgkcmF0aW8pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xufVxuQG1peGluIHNrZXcoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlKCR4LCAkeSkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG59XG5AbWl4aW4gdHJhbnNsYXRlM2QoJHgsICR5LCAkeikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbn1cbkBtaXhpbiByb3RhdGUoJGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWCgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG59XG5AbWl4aW4gcm90YXRlWSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gcGVyc3BlY3RpdmUtb3JpZ2luKCRwZXJzcGVjdGl2ZSkge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogJHBlcnNwZWN0aXZlO1xufVxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJG9yaWdpbikge1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG4gICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luOyAvLyBJRTkgb25seVxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XG59XG5cblxuLy8gVHJhbnNpdGlvbnNcblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXByb3BlcnR5KCR0cmFuc2l0aW9uLXByb3BlcnR5Li4uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kZWxheSgkdHJhbnNpdGlvbi1kZWxheSkge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICR0cmFuc2l0aW9uLWRlbGF5O1xufVxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJHRyYW5zaXRpb24tZHVyYXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gdHJhbnNpdGlvbi10cmFuc2Zvcm0oJHRyYW5zaXRpb24uLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gJHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xufVxuXG5cbi8vIFVzZXIgc2VsZWN0XG4vLyBGb3Igc2VsZWN0aW5nIHRleHQgb24gdGhlIHBhZ2VcblxuQG1peGluIHVzZXItc2VsZWN0KCRzZWxlY3QpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogJHNlbGVjdDtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogJHNlbGVjdDsgLy8gSUUxMCtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogJHNlbGVjdDtcbn1cbiIsIi8vIEdyaWQgc3lzdGVtXG4vL1xuLy8gR2VuZXJhdGUgc2VtYW50aWMgZ3JpZCBjb2x1bW5zIHdpdGggdGhlc2UgbWl4aW5zLlxuXG4vLyBDZW50ZXJlZCBjb250YWluZXIgZWxlbWVudFxuQG1peGluIGNvbnRhaW5lci1maXhlZCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAgZmxvb3IoKCRndXR0ZXIgLyAyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNlaWwoKCRndXR0ZXIgLyAyKSk7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG4vLyBDcmVhdGVzIGEgd3JhcHBlciBmb3IgYSBzZXJpZXMgb2YgY29sdW1uc1xuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogIGNlaWwoKCRndXR0ZXIgLyAtMikpO1xuICBtYXJnaW4tcmlnaHQ6IGZsb29yKCgkZ3V0dGVyIC8gLTIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBleHRyYSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS14cy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBzbWFsbCBjb2x1bW5zXG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBtZWRpdW0gY29sdW1uc1xuQG1peGluIG1ha2UtbWQtY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZSB0aGUgbGFyZ2UgY29sdW1uc1xuQG1peGluIG1ha2UtbGctY29sdW1uKCRjb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogICgkZ3V0dGVyIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tb2Zmc2V0KCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1c2goJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogTWFpbiBIZWFkZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4ubWFpbi1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiAxMDMwO1xuICAvL05hdmJhclxuICA+IC5uYXZiYXIge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24obWFyZ2luLWxlZnQgJHRyYW5zaXRpb24tc3BlZWQgJHRyYW5zaXRpb24tZm4pO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLXdpZHRoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC5sYXlvdXQtdG9wLW5hdiAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAvL05hdmJhciBzZWFyY2ggdGV4dCBpbnB1dFxuICAjbmF2YmFyLXNlYXJjaC1pbnB1dC5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XG4gICAgfVxuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gIH1cbiAgLy9OYXZiYXIgUmlnaHQgTWVudVxuICAubmF2YmFyLWN1c3RvbS1tZW51LFxuICAubmF2YmFyLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubmF2YmFyLXJpZ2h0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1oZWFkZXItY29sbGFwc2UpIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgLm5hdmJhci1jb2xsYXBzZSAmIHtcbiAgICAgICAgbWFyZ2luOiA3LjVweCAtMTVweDtcbiAgICAgIH1cblxuICAgICAgPiBsaSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vTmF2YmFyIHRvZ2dsZSBidXR0b25cbiAgLnNpZGViYXItdG9nZ2xlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6ICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICAvL0FkZCB0aGUgZm9udGF3ZXNvbWUgYmFycyBpY29uXG4gICAgZm9udC1mYW1pbHk6IGZvbnRBd2Vzb21lO1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMGM5XCI7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIC5zaWRlYmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLy9OYXZiYXIgVXNlciBNZW51XG4gIC5uYXZiYXIgLm5hdiA+IGxpLnVzZXIgPiBhIHtcbiAgICA+IC5mYSxcbiAgICA+IC5nbHlwaGljb24sXG4gICAgPiAuaW9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC8vTGFiZWxzIGluIG5hdmJhclxuICAubmF2YmFyIC5uYXYgPiBsaSA+IGEgPiAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDlweDtcbiAgICByaWdodDogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBwYWRkaW5nOiAycHggM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAuOTtcbiAgfVxuXG4gIC8vTG9nbyBiYXJcbiAgLmxvZ28ge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24od2lkdGggJHRyYW5zaXRpb24tc3BlZWQgJHRyYW5zaXRpb24tZm4pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogJG5hdmJhci1oZWlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGg7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vQWRkIHN1cHBvcnQgdG8gc2lkZWJhciBtaW5pIGJ5IGFsbG93aW5nIHRoZSB1c2VyIHRvIGNyZWF0ZVxuICAgIC8vMiBsb2dvIGRlc2lnbnMuIG1pbmkgYW5kIGxnXG4gICAgLmxvZ28tbGcge1xuICAgICAgLy9zaG91bGQgYmUgdmlzaWJpbGUgd2hlbiBzaWRlYmFyIGlzbid0IGNvbGxhcHNlZFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5sb2dvLW1pbmkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLy9OYXZiYXIgQnJhbmQuIEFsdGVybmF0aXZlIGxvZ28gd2l0aCBsYXlvdXQtdG9wLW5hdlxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4vLyBDb250ZW50IEhlYWRlclxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xuICAvLyBIZWFkZXIgVGV4dFxuICA+IGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgID4gc21hbGwge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgfVxuXG4gID4gLmJyZWFkY3J1bWIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDdweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTBweDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgycHgpO1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgPiAuZmEsID4gLmdseXBoaWNvbiwgPiAuaW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgID4gbGkgKyBsaTpiZWZvcmUge1xuICAgICAgY29udGVudDogJz5cXDAwYTAnO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgID4gLmJyZWFkY3J1bWIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgbGk6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbigkZ3JheSwgMjAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5hdmJhci10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6ICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbn1cblxuLy9Db250cm9sIG5hdmJhciBzY2FmZm9sZGluZyBvbiB4LXNtYWxsIHNjcmVlbnNcbkBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAubmF2YmFyLWN1c3RvbS1tZW51IC5uYXZiYXItbmF2ID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLy9Eb250J3QgbGV0IGxpbmtzIGdldCBmdWxsIHdpZHRoXG4gIC5uYXZiYXItY3VzdG9tLW1lbnUgLm5hdmJhci1uYXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXZiYXItY3VzdG9tLW1lbnUgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi8vIENvbGxhcHNlIGhlYWRlclxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4taGVhZGVyLWNvbGxhcHNlKSB7XG4gIC5tYWluLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5sb2dvLFxuICAgIC5uYXZiYXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdmJhciB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5uYXZiYXItY3VzdG9tLW1lbnUge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG4ubmF2YmFyLWNvbGxhcHNlLnB1bGwtbGVmdCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgKyAubmF2YmFyLWN1c3RvbS1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iLCIkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyOiBmYWxzZSAhZGVmYXVsdDtcbi8vXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy89PSBDb2xvcnNcbi8vXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBCb290c3RyYXAuXG5cbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAyMCUpICFkZWZhdWx0OyAgIC8vICMzMzNcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA5My41JSkgIWRlZmF1bHQ7IC8vICNlZWVcblxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vPT0gU2NhZmZvbGRpbmdcbi8vXG4vLyMjIFNldHRpbmdzIGZvciBzb21lIG9mIHRoZSBtb3N0IGdsb2JhbCBzdHlsZXMuXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYDxib2R5PmAuXG4kYm9keS1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgdGV4dCBjb2xvciBvbiBgPGJvZHk+YC5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIHRleHR1YWwgbGluayBjb2xvci5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBMaW5rIGhvdmVyIGNvbG9yIHNldCB2aWEgYGRhcmtlbigpYCBmdW5jdGlvbi5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBkZWNvcmF0aW9uLlxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vPT0gVHlwb2dyYXBoeVxuLy9cbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4vLyoqIERlZmF1bHQgbW9ub3NwYWNlIGZvbnRzIGZvciBgPGNvZGU+YCwgYDxrYmQ+YCwgYW5kIGA8cHJlPmAuXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNikpICFkZWZhdWx0OyAvLyB+MzZweFxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4xNSkpICFkZWZhdWx0OyAvLyB+MzBweFxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjcpKSAhZGVmYXVsdDsgLy8gfjI0cHhcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDsgLy8gfjEycHhcblxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAxLjQyODU3MTQyOSAhZGVmYXVsdDsgLy8gMjAvMTRcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxuXG4vLyoqIEJ5IGRlZmF1bHQsIHRoaXMgaW5oZXJpdHMgZnJvbSB0aGUgYDxib2R5PmAuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuXG5cbi8vPT0gSWNvbm9ncmFwaHlcbi8vXG4vLyMjIFNwZWNpZnkgY3VzdG9tIGxvY2F0aW9uIGFuZCBmaWxlbmFtZSBvZiB0aGUgaW5jbHVkZWQgR2x5cGhpY29ucyBpY29uIGZvbnQuIFVzZWZ1bCBmb3IgdGhvc2UgaW5jbHVkaW5nIEJvb3RzdHJhcCB2aWEgQm93ZXIuXG5cbi8vKiogTG9hZCBmb250cyBmcm9tIHRoaXMgZGlyZWN0b3J5LlxuXG4vLyBbY29udmVydGVyXSBJZiAkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyIGlmIHVzZWQsIHByb3ZpZGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgYXNzZXRzIGxvYWQgcGF0aC5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgYmVjYXVzZSBzb21lIGFzc2V0IGhlbHBlcnMsIHN1Y2ggYXMgU3Byb2NrZXRzLCBkbyBub3Qgd29yayB3aXRoIGZpbGUtcmVsYXRpdmUgcGF0aHMuXG4kaWNvbi1mb250LXBhdGg6IGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIFwiYm9vdHN0cmFwL1wiLCBcIi4uL2ZvbnRzL2Jvb3RzdHJhcC9cIikgIWRlZmF1bHQ7XG5cbi8vKiogRmlsZSBuYW1lIGZvciBhbGwgZm9udCBmaWxlcy5cbiRpY29uLWZvbnQtbmFtZTogICAgICAgICAgXCJnbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyXCIgIWRlZmF1bHQ7XG4vLyoqIEVsZW1lbnQgSUQgd2l0aGluIFNWRyBpY29uIGZpbGUuXG4kaWNvbi1mb250LXN2Zy1pZDogICAgICAgIFwiZ2x5cGhpY29uc19oYWxmbGluZ3NyZWd1bGFyXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuLy8jIyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuIFZhbHVlcyBiYXNlZCBvbiAxNHB4IHRleHQgYW5kIDEuNDI4IGxpbmUtaGVpZ2h0ICh+MjBweCB0byBzdGFydCkuXG5cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICA2cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgMTJweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgMTZweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgIDVweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgIDVweCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgICAgIDEuMzMzMzMzMyAhZGVmYXVsdDsgLy8gZXh0cmEgZGVjaW1hbHMgZm9yIFdpbiA4LjEgQ2hyb21lXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAzcHggIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIGNvbG9yIGZvciBhY3RpdmUgaXRlbXMgKGUuZy4sIG5hdnMgb3IgZHJvcGRvd25zKS5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgYmFja2dyb3VuZCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiogV2lkdGggb2YgdGhlIGBib3JkZXJgIGZvciBnZW5lcmF0aW5nIGNhcmV0cyB0aGF0IGluZGljYXRvciBkcm9wZG93bnMuXG4kY2FyZXQtd2lkdGgtYmFzZTogICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBDYXJldHMgaW5jcmVhc2Ugc2xpZ2h0bHkgaW4gc2l6ZSBmb3IgbGFyZ2VyIGNvbXBvbmVudHMuXG4kY2FyZXQtd2lkdGgtbGFyZ2U6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gVGFibGVzXG4vL1xuLy8jIyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vKiogUGFkZGluZyBmb3IgYDx0aD5gcyBhbmQgYDx0ZD5gcy5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgICAgOHB4ICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGZvciBjZWxscyBpbiBgLnRhYmxlLWNvbmRlbnNlZGAuXG4kdGFibGUtY29uZGVuc2VkLWNlbGwtcGFkZGluZzogIDVweCAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYWxsIHRhYmxlcy5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4vLyoqIEJhY2tncm91bmQgY29sb3IgdXNlZCBmb3IgYC50YWJsZS1zdHJpcGVkYC5cbiR0YWJsZS1iZy1hY2NlbnQ6ICAgICAgICAgICAgICAgI2Y5ZjlmOSAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLWhvdmVyYC5cbiR0YWJsZS1iZy1ob3ZlcjogICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR0YWJsZS1iZy1hY3RpdmU6ICAgICAgICAgICAgICAgJHRhYmxlLWJnLWhvdmVyICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGFibGUgYW5kIGNlbGwgYm9yZGVycy5cbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IEJ1dHRvbnNcbi8vXG4vLyMjIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG5vcm1hbCAhZGVmYXVsdDtcblxuJGJ0bi1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4kYnRuLXByaW1hcnktY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1wcmltYXJ5LWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tc3VjY2Vzcy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXN1Y2Nlc3MtYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1pbmZvLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4taW5mby1iZzogICAgICAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJvcmRlcjogICAgICAgICAgICAgICAgZGFya2VuKCRidG4taW5mby1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLXdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgICBkYXJrZW4oJGJ0bi13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1iZzogICAgICAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKCRidG4tZGFuZ2VyLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXMtYmFzZTogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm1zXG4vL1xuLy8jI1xuXG4vLyoqIGA8aW5wdXQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0IGRpc2FibGVkPmAgYmFja2dyb3VuZCBjb2xvclxuJGlucHV0LWJnLWRpc2FibGVkOiAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBgPGlucHV0PmBzXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbi8vKiogYDxpbnB1dD5gIGJvcmRlciBjb2xvclxuJGlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8gVE9ETzogUmVuYW1lIGAkaW5wdXQtYm9yZGVyLXJhZGl1c2AgdG8gYCRpbnB1dC1ib3JkZXItcmFkaXVzLWJhc2VgIGluIHY0XG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbi8vIFRoaXMgaGFzIG5vIGVmZmVjdCBvbiBgPHNlbGVjdD5gcyBpbiBzb21lIGJyb3dzZXJzLCBkdWUgdG8gdGhlIGxpbWl0ZWQgc3R5bGFiaWxpdHkgb2YgYDxzZWxlY3Q+YHMgaW4gQ1NTLlxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGJvcmRlciByYWRpdXNcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlOiAgICAgICRib3JkZXItcmFkaXVzLWxhcmdlICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGw6ICAgICAgJGJvcmRlci1yYWRpdXMtc21hbGwgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBpbnB1dHMgb24gZm9jdXNcbiRpbnB1dC1ib3JkZXItZm9jdXM6ICAgICAgICAgICAgICM2NmFmZTkgIWRlZmF1bHQ7XG5cbi8vKiogUGxhY2Vob2xkZXIgdGV4dCBjb2xvclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtYmFzZTogICAgICAgICAgICAgICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAqIDIpICsgMikgIWRlZmF1bHQ7XG4vLyoqIExhcmdlIGAuZm9ybS1jb250cm9sYCBoZWlnaHRcbiRpbnB1dC1oZWlnaHQtbGFyZ2U6ICAgICAgICAgICAgIChjZWlsKCRmb250LXNpemUtbGFyZ2UgKiAkbGluZS1oZWlnaHQtbGFyZ2UpICsgKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogU21hbGwgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1zbWFsbDogICAgICAgICAgICAgKGZsb29yKCRmb250LXNpemUtc21hbGwgKiAkbGluZS1oZWlnaHQtc21hbGwpICsgKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcblxuLy8qKiBgLmZvcm0tZ3JvdXBgIG1hcmdpblxuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgMTVweCAhZGVmYXVsdDtcblxuJGxlZ2VuZC1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRsZWdlbmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNlNWU1ZTUgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIEJvcmRlciBjb2xvciBmb3IgdGV4dHVhbCBpbnB1dCBhZGRvbnNcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgY3Vyc29yIGZvciBmb3JtIGNvbnRyb2xzIGFuZCBidXR0b25zLlxuJGN1cnNvci1kaXNhYmxlZDogICAgICAgICAgICAgICAgbm90LWFsbG93ZWQgIWRlZmF1bHQ7XG5cblxuLy89PSBEcm9wZG93bnNcbi8vXG4vLyMjIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuLy8qKiBCYWNrZ3JvdW5kIGZvciB0aGUgZHJvcGRvd24gbWVudS5cbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAuXG4kZHJvcGRvd24tYm9yZGVyOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG4vLyoqIERyb3Bkb3duIG1lbnUgYGJvcmRlci1jb2xvcmAgKipmb3IgSUU4KiouXG4kZHJvcGRvd24tZmFsbGJhY2stYm9yZGVyOiAgICAgICAjY2NjICFkZWZhdWx0O1xuLy8qKiBEaXZpZGVyIGNvbG9yIGZvciBiZXR3ZWVuIGRyb3Bkb3duIGl0ZW1zLlxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBEcm9wZG93biBsaW5rIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBjb2xvciBmb3IgZHJvcGRvd24gbGlua3MuXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICBkYXJrZW4oJGdyYXktZGFyaywgNSUpICFkZWZhdWx0O1xuLy8qKiBIb3ZlciBiYWNrZ3JvdW5kIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSB0ZXh0IGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEFjdGl2ZSBkcm9wZG93biBtZW51IGl0ZW0gYmFja2dyb3VuZCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4vLyoqIERpc2FibGVkIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBmb3IgaGVhZGVycyB3aXRoaW4gZHJvcGRvd24gbWVudXMuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBEZXByZWNhdGVkIGAkZHJvcGRvd24tY2FyZXQtY29sb3JgIGFzIG9mIHYzLjEuMFxuJGRyb3Bkb3duLWNhcmV0LWNvbG9yOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcblxuXG4vLy0tIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cbi8vXG4vLyBOb3RlOiBUaGVzZSB2YXJpYWJsZXMgYXJlIG5vdCBnZW5lcmF0ZWQgaW50byB0aGUgQ3VzdG9taXplci5cblxuJHppbmRleC1uYXZiYXI6ICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLWZpeGVkOiAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tncm91bmQ6ICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcblxuXG4vLz09IE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcbi8vXG4vLyMjIERlZmluZSB0aGUgYnJlYWtwb2ludHMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbi8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4teHNgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi14czogICAgICAgICAgICAgICAgICA0ODBweCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14cy1taW5gIGFzIG9mIHYzLjIuMFxuJHNjcmVlbi14cy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXhzICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXBob25lYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tcGhvbmU6ICAgICAgICAgICAgICAgJHNjcmVlbi14cy1taW4gIWRlZmF1bHQ7XG5cbi8vIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXNtYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tc206ICAgICAgICAgICAgICAgICAgNzY4cHggIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tc20gIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tdGFibGV0YCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tdGFibGV0OiAgICAgICAgICAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbWRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweCAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1tZCAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tZGVza3RvcDogICAgICAgICAgICAgJHNjcmVlbi1tZC1taW4gIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4ICFkZWZhdWx0O1xuJHNjcmVlbi1sZy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLWxnICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLW1pbiAhZGVmYXVsdDtcblxuLy8gU28gbWVkaWEgcXVlcmllcyBkb24ndCBvdmVybGFwIHdoZW4gcmVxdWlyZWQsIHByb3ZpZGUgYSBtYXhpbXVtXG4kc2NyZWVuLXhzLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLXNtLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1zbS1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1tZC1taW4gLSAxKSAhZGVmYXVsdDtcbiRzY3JlZW4tbWQtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbGctbWluIC0gMSkgIWRlZmF1bHQ7XG5cblxuLy89PSBHcmlkIHN5c3RlbVxuLy9cbi8vIyMgRGVmaW5lIHlvdXIgY3VzdG9tIHJlc3BvbnNpdmUgZ3JpZC5cblxuLy8qKiBOdW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZC5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbi8vKiogUGFkZGluZyBiZXR3ZWVuIGNvbHVtbnMuIEdldHMgZGl2aWRlZCBpbiBoYWxmIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgMzBweCAhZGVmYXVsdDtcbi8vIE5hdmJhciBjb2xsYXBzZVxuLy8qKiBQb2ludCBhdCB3aGljaCB0aGUgbmF2YmFyIGJlY29tZXMgdW5jb2xsYXBzZWQuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50OiAgICAgJHNjcmVlbi1zbS1taW4gIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVnaW5zIGNvbGxhcHNpbmcuXG4kZ3JpZC1mbG9hdC1icmVha3BvaW50LW1heDogKCRncmlkLWZsb2F0LWJyZWFrcG9pbnQgLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IENvbnRhaW5lciBzaXplc1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4kY29udGFpbmVyLXRhYmxldDogICAgICAgICAgICAgKDcyMHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLXNtLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1zbTogICAgICAgICAgICAgICAgICRjb250YWluZXItdGFibGV0ICFkZWZhdWx0O1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuJGNvbnRhaW5lci1kZXNrdG9wOiAgICAgICAgICAgICg5NDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1tZC1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbWQ6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWRlc2t0b3AgIWRlZmF1bHQ7XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wOiAgICAgICgxMTQwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tbGctbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLWxnOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1sYXJnZS1kZXNrdG9wICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2YmFyXG4vL1xuLy8jI1xuXG4vLyBCYXNpY3Mgb2YgYSBuYXZiYXJcbiRuYXZiYXItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgNTBweCAhZGVmYXVsdDtcbiRuYXZiYXItbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICFkZWZhdWx0O1xuJG5hdmJhci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw6ICAgICAgICBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsOiAgICAgICAgICAoKCRuYXZiYXItaGVpZ2h0IC0gJGxpbmUtaGVpZ2h0LWNvbXB1dGVkKSAvIDIpICFkZWZhdWx0O1xuJG5hdmJhci1jb2xsYXBzZS1tYXgtaGVpZ2h0OiAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuJG5hdmJhci1kZWZhdWx0LWNvbG9yOiAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAjZjhmOGY4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGxpbmtzXG4kbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgIzc3NyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1iZywgNi41JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWJnOiAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvciwgMTAlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1iZzogICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gTmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgIzg4OCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtYm9yZGVyLWNvbG9yOiAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT09IEludmVydGVkIG5hdmJhclxuLy8gUmVzZXQgaW52ZXJ0ZWQgbmF2YmFyIGJhc2ljc1xuJG5hdmJhci1pbnZlcnNlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJvcmRlcjogICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgbGlua3NcbiRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1saWdodCwgMTUlKSAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIGJyYW5kIGxhYmVsXG4kbmF2YmFyLWludmVyc2UtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItaW52ZXJzZS1saW5rLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gSW52ZXJ0ZWQgbmF2YmFyIHRvZ2dsZVxuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ob3Zlci1iZzogICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1pY29uLWJhci1iZzogICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gTmF2c1xuLy9cbi8vIyNcblxuLy89PT0gU2hhcmVkIG5hdiBzdHlsZXNcbiRuYXYtbGluay1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LWRpc2FibGVkLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy89PSBUYWJzXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICNkZGQgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1qdXN0aWZpZWQtbGluay1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXYtdGFicy1qdXN0aWZpZWQtYWN0aXZlLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG5cbi8vPT0gUGlsbHNcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFnaW5hdGlvblxuLy9cbi8vIyNcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyOiAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlcjogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlcjogICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdlclxuLy9cbi8vIyNcblxuJHBhZ2VyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYmcgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFnZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kcGFnZXItaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHBhZ2VyLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG4kcGFnZXItZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuXG4vLz09IEp1bWJvdHJvblxuLy9cbi8vIyNcblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWNvbG9yOiAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tZm9udC1zaXplOiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1oZWFkaW5nLWZvbnQtc2l6ZTogICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogNC41KSkgIWRlZmF1bHQ7XG5cblxuLy89PSBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXG4vL1xuLy8jIyBEZWZpbmUgY29sb3JzIGZvciBmb3JtIGZlZWRiYWNrIHN0YXRlcyBhbmQsIGJ5IGRlZmF1bHQsIGFsZXJ0cy5cblxuJHN0YXRlLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgICAgIzNjNzYzZCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJnOiAgICAgICAgICAgICAgICNkZmYwZDggIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtc3VjY2Vzcy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtaW5mby10ZXh0OiAgICAgICAgICAgICAgICAjMzE3MDhmICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgI2Q5ZWRmNyAhZGVmYXVsdDtcbiRzdGF0ZS1pbmZvLWJvcmRlcjogICAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1pbmZvLWJnLCAtMTApLCA3JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICAgICAgICAgICAgICM4YTZkM2IgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1iZzogICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLXdhcm5pbmctYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuJHN0YXRlLWRhbmdlci10ZXh0OiAgICAgICAgICAgICAgI2E5NDQ0MiAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYmc6ICAgICAgICAgICAgICAgICNmMmRlZGUgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJvcmRlcjogICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtZGFuZ2VyLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBUb29sdGlwc1xuLy9cbi8vIyNcblxuLy8qKiBUb29sdGlwIG1heCB3aWR0aFxuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgdGV4dCBjb2xvclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG5cbi8vKiogVG9vbHRpcCBhcnJvdyB3aWR0aFxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgNXB4ICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGFycm93IGNvbG9yXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFBvcG92ZXJzXG4vL1xuLy8jI1xuXG4vLyoqIFBvcG92ZXIgYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgZmFsbGJhY2sgYm9yZGVyIGNvbG9yXG4kcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciB0aXRsZSBiYWNrZ3JvdW5kIGNvbG9yXG4kcG9wb3Zlci10aXRsZS1iZzogICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBhcnJvdyBjb2xvclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IHdpZHRoXG4kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDogICAgICAgICAgICgkcG9wb3Zlci1hcnJvdy13aWR0aCArIDEpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICAgIGZhZGVfaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAwLjA1KSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBvdXRlciBhcnJvdyBmYWxsYmFjayBjb2xvclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I6ICBkYXJrZW4oJHBvcG92ZXItZmFsbGJhY2stYm9yZGVyLWNvbG9yLCAyMCUpICFkZWZhdWx0O1xuXG5cbi8vPT0gTGFiZWxzXG4vL1xuLy8jI1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWRlZmF1bHQtYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFByaW1hcnkgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXByaW1hcnktYmc6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIEluZm8gbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLWluZm8tYmc6ICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgbGFiZWwgYmFja2dyb3VuZCBjb2xvclxuJGxhYmVsLXdhcm5pbmctYmc6ICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4vLyoqIERhbmdlciBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgbGFiZWwgdGV4dCBjb2xvclxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRGVmYXVsdCB0ZXh0IGNvbG9yIG9mIGEgbGlua2VkIGxhYmVsXG4kbGFiZWwtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gTW9kYWxzXG4vL1xuLy8jI1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuLy8qKiBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIHRpdGxlXG4kbW9kYWwtdGl0bGUtcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuLy8qKiBNb2RhbCB0aXRsZSBsaW5lLWhlaWdodFxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBtb2RhbCBjb250ZW50IGFyZWFcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3JcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwuMikgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGNvbnRlbnQgYm9yZGVyIGNvbG9yICoqZm9yIElFOCoqXG4kbW9kYWwtY29udGVudC1mYWxsYmFjay1ib3JkZXItY29sb3I6ICAgICAgICAgICM5OTkgIWRlZmF1bHQ7XG5cbi8vKiogTW9kYWwgYmFja2Ryb3AgYmFja2dyb3VuZCBjb2xvclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbi8vKiogTW9kYWwgYmFja2Ryb3Agb3BhY2l0eVxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgLjUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGhlYWRlciBib3JkZXIgY29sb3JcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICNlNWU1ZTUgIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIGZvb3RlciBib3JkZXIgY29sb3JcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICA5MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgIDYwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBBbGVydHNcbi8vXG4vLyMjIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZzogICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRhbGVydC1zdWNjZXNzLWJnOiAgICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWluZm8tYmc6ICAgICAgICAgICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtd2FybmluZy1iZzogICAgICAgICAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1kYW5nZXItYmc6ICAgICAgICAgICAgICRzdGF0ZS1kYW5nZXItYmcgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtZGFuZ2VyLWJvcmRlcjogICAgICAgICAkc3RhdGUtZGFuZ2VyLWJvcmRlciAhZGVmYXVsdDtcblxuXG4vLz09IFByb2dyZXNzIGJhcnNcbi8vXG4vLyMjXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgd2hvbGUgcHJvZ3Jlc3MgY29tcG9uZW50XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBQcm9ncmVzcyBiYXIgdGV4dCBjb2xvclxuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogVmFyaWFibGUgZm9yIHNldHRpbmcgcm91bmRlZCBjb3JuZXJzIG9uIHByb2dyZXNzIGJhci5cbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBTdWNjZXNzIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1zdWNjZXNzLWJnOiAgICAgJGJyYW5kLXN1Y2Nlc3MgIWRlZmF1bHQ7XG4vLyoqIFdhcm5pbmcgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmc6ICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1kYW5nZXItYmc6ICAgICAgJGJyYW5kLWRhbmdlciAhZGVmYXVsdDtcbi8vKiogSW5mbyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItaW5mby1iZzogICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuXG5cbi8vPT0gTGlzdCBncm91cFxuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9uIGAubGlzdC1ncm91cC1pdGVtYFxuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBgLmxpc3QtZ3JvdXAtaXRlbWAgYm9yZGVyIGNvbG9yXG4kbGlzdC1ncm91cC1ib3JkZXI6ICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIExpc3QgZ3JvdXAgYm9yZGVyIHJhZGl1c1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb2Ygc2luZ2xlIGxpc3QgaXRlbXMgb24gaG92ZXJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGVsZW1lbnRzXG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyOiAgICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBmb3IgY29udGVudCB3aXRoaW4gYWN0aXZlIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yOiAgbGlnaHRlbigkbGlzdC1ncm91cC1hY3RpdmUtYmcsIDQwJSkgIWRlZmF1bHQ7XG5cbi8vKiogVGV4dCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBkaXNhYmxlZCBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1kaXNhYmxlZC10ZXh0LWNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtbGluay1jb2xvcjogICAgICAgICAjNTU1ICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1ob3Zlci1jb2xvcjogICAkbGlzdC1ncm91cC1saW5rLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtbGluay1oZWFkaW5nLWNvbG9yOiAjMzMzICFkZWZhdWx0O1xuXG5cbi8vPT0gUGFuZWxzXG4vL1xuLy8jI1xuXG4kcGFuZWwtYmc6ICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLWJvZHktcGFkZGluZzogICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1oZWFkaW5nLXBhZGRpbmc6ICAgICAgIDEwcHggMTVweCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItcGFkZGluZzogICAgICAgICRwYW5lbC1oZWFkaW5nLXBhZGRpbmcgIWRlZmF1bHQ7XG4kcGFuZWwtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEJvcmRlciBjb2xvciBmb3IgZWxlbWVudHMgd2l0aGluIHBhbmVsc1xuJHBhbmVsLWlubmVyLWJvcmRlcjogICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRwYW5lbC1mb290ZXItYmc6ICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kZWZhdWx0LXRleHQ6ICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1ib3JkZXI6ICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZzogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLXByaW1hcnktdGV4dDogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwYW5lbC1wcmltYXJ5LWJvcmRlcjogICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktaGVhZGluZy1iZzogICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbiRwYW5lbC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtc3VjY2Vzcy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1pbmZvLWhlYWRpbmctYmc6ICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLXdhcm5pbmctaGVhZGluZy1iZzogICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1oZWFkaW5nLWJnOiAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcblxuXG4vLz09IFRodW1ibmFpbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcm91bmQgdGhlIHRodW1ibmFpbCBpbWFnZVxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuLy8qKiBUaHVtYm5haWwgYmFja2dyb3VuZCBjb2xvclxuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgY29sb3JcbiR0aHVtYm5haWwtYm9yZGVyOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBib3JkZXIgcmFkaXVzXG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuXG4vLyoqIEN1c3RvbSB0ZXh0IGNvbG9yIGZvciB0aHVtYm5haWwgY2FwdGlvbnNcbiR0aHVtYm5haWwtY2FwdGlvbi1jb2xvcjogICAgICR0ZXh0LWNvbG9yICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGNhcHRpb25cbiR0aHVtYm5haWwtY2FwdGlvbi1wYWRkaW5nOiAgIDlweCAhZGVmYXVsdDtcblxuXG4vLz09IFdlbGxzXG4vL1xuLy8jI1xuXG4kd2VsbC1iZzogICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHdlbGwtYm9yZGVyOiAgICAgICAgICAgICAgICAgZGFya2VuKCR3ZWxsLWJnLCA3JSkgIWRlZmF1bHQ7XG5cblxuLy89PSBCYWRnZXNcbi8vXG4vLyMjXG5cbiRiYWRnZS1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIExpbmtlZCBiYWRnZSB0ZXh0IGNvbG9yIG9uIGhvdmVyXG4kYmFkZ2UtbGluay1ob3Zlci1jb2xvcjogICAgICAjZmZmICFkZWZhdWx0O1xuJGJhZGdlLWJnOiAgICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vKiogQmFkZ2UgdGV4dCBjb2xvciBpbiBhY3RpdmUgbmF2IGxpbmtcbiRiYWRnZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWRnZSBiYWNrZ3JvdW5kIGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1iZzogICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1saW5lLWhlaWdodDogICAgICAgICAgIDEgIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAxMHB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gQnJlYWRjcnVtYnNcbi8vXG4vLyMjXG5cbiRicmVhZGNydW1iLXBhZGRpbmctdmVydGljYWw6ICAgOHB4ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy1ob3Jpem9udGFsOiAxNXB4ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIGJhY2tncm91bmQgY29sb3JcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbi8vKiogQnJlYWRjcnVtYiB0ZXh0IGNvbG9yXG4kYnJlYWRjcnVtYi1jb2xvcjogICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3Igb2YgY3VycmVudCBwYWdlIGluIHRoZSBicmVhZGNydW1iXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBUZXh0dWFsIHNlcGFyYXRvciBmb3IgYmV0d2VlbiBicmVhZGNydW1iIGVsZW1lbnRzXG4kYnJlYWRjcnVtYi1zZXBhcmF0b3I6ICAgICAgICAgIFwiL1wiICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2Fyb3VzZWxcbi8vXG4vLyMjXG5cbiRjYXJvdXNlbC10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLDAsMCwuNikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENsb3NlXG4vL1xuLy8jI1xuXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgIDAgMXB4IDAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLz09IENvZGVcbi8vXG4vLyMjXG5cbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICNjNzI1NGUgIWRlZmF1bHQ7XG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAjZjlmMmY0ICFkZWZhdWx0O1xuXG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuJHByZS1iZzogICAgICAgICAgICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcHJlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBUeXBlXG4vL1xuLy8jI1xuXG4vLyoqIEhvcml6b250YWwgb2Zmc2V0IGZvciBmb3JtcyBhbmQgbGlzdHMuXG4kY29tcG9uZW50LW9mZnNldC1ob3Jpem9udGFsOiAxODBweCAhZGVmYXVsdDtcbi8vKiogVGV4dCBtdXRlZCBjb2xvclxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEFiYnJldmlhdGlvbnMgYW5kIGFjcm9ueW1zIGJvcmRlciBjb2xvclxuJGFiYnItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEhlYWRpbmdzIHNtYWxsIGNvbG9yXG4kaGVhZGluZ3Mtc21hbGwtY29sb3I6ICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBzbWFsbCBjb2xvclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgZm9udCBzaXplXG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4vLyoqIEJsb2NrcXVvdGUgYm9yZGVyIGNvbG9yXG4kYmxvY2txdW90ZS1ib3JkZXItY29sb3I6ICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuLy8qKiBQYWdlIGhlYWRlciBib3JkZXIgY29sb3JcbiRwYWdlLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFdpZHRoIG9mIGhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdCB0aXRsZXNcbiRkbC1ob3Jpem9udGFsLW9mZnNldDogICAgICAgICRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWwgIWRlZmF1bHQ7XG4vLyoqIFBvaW50IGF0IHdoaWNoIC5kbC1ob3Jpem9udGFsIGJlY29tZXMgaG9yaXpvbnRhbFxuJGRsLWhvcml6b250YWwtYnJlYWtwb2ludDogICAgJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAhZGVmYXVsdDtcbi8vKiogSG9yaXpvbnRhbCBsaW5lIGNvbG9yLlxuJGhyLWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiIsIi8qIVxuICogICBBZG1pbkxURSB2Mi4zLjNcbiAqICAgQXV0aG9yOiBBbG1zYWVlZCBTdHVkaW9cbiAqXHQgV2Vic2l0ZTogQWxtc2FlZWQgU3R1ZGlvIDxodHRwOi8vYWxtc2FlZWRzdHVkaW8uY29tPlxuICogICBMaWNlbnNlOiBPcGVuIHNvdXJjZSAtIE1JVFxuICogICAgICAgICAgIFBsZWFzZSB2aXNpdCBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUIGZvciBtb3JlIGluZm9ybWF0aW9uXG4hKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86MzAwLDQwMCw2MDAsNzAwLDMwMGl0YWxpYyw0MDBpdGFsaWMsNjAwaXRhbGljKTtcbi8qXG4gKiBDb3JlOiBHZW5lcmFsIExheW91dCBTdHlsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5odG1sLFxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cbiAgLmxheW91dC1ib3hlZCBodG1sLCAubGF5b3V0LWJveGVkXG4gIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTsgfVxuXG5ib2R5IHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvOyB9XG5cbi8qIExheW91dCAqL1xuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLndyYXBwZXI6YmVmb3JlLCAud3JhcHBlcjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7IH1cbiAgLndyYXBwZXI6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoOyB9XG4gIC5sYXlvdXQtYm94ZWQgLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMTI1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5sYXlvdXQtYm94ZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIke2JveGVkLWxheW91dC1iZy1pbWFnZS1wYXRofVwiKSByZXBlYXQgZml4ZWQ7IH1cblxuLypcbiAqIENvbnRlbnQgV3JhcHBlciAtIGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnRcbiAqIGBgYC5yaWdodC1zaWRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgdjIuMC4wIGluIGZhdm9yIG9mIC5jb250ZW50LXdyYXBwZXIgIGBgYFxuICovXG4uY29udGVudC13cmFwcGVyLFxuLnJpZ2h0LXNpZGUsXG4ubWFpbi1mb290ZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIG1hcmdpbiAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIG1hcmdpbiAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgbWFyZ2luIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCBtYXJnaW4gMC4zcyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICB6LWluZGV4OiA4MjA7IH1cbiAgLmxheW91dC10b3AtbmF2IC5jb250ZW50LXdyYXBwZXIsIC5sYXlvdXQtdG9wLW5hdlxuICAucmlnaHQtc2lkZSwgLmxheW91dC10b3AtbmF2XG4gIC5tYWluLWZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRlbnQtd3JhcHBlcixcbiAgICAucmlnaHQtc2lkZSxcbiAgICAubWFpbi1mb290ZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZWJhci1jb2xsYXBzZSAuY29udGVudC13cmFwcGVyLCAuc2lkZWJhci1jb2xsYXBzZVxuICAgIC5yaWdodC1zaWRlLCAuc2lkZWJhci1jb2xsYXBzZVxuICAgIC5tYWluLWZvb3RlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5zaWRlYmFyLW9wZW4gLmNvbnRlbnQtd3JhcHBlciwgLnNpZGViYXItb3BlblxuICAgIC5yaWdodC1zaWRlLCAuc2lkZWJhci1vcGVuXG4gICAgLm1haW4tZm9vdGVyIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjMwcHgsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMHB4LCAwKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMHB4LCAwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMHB4LCAwKTsgfSB9XG5cbi5jb250ZW50LXdyYXBwZXIsXG4ucmlnaHQtc2lkZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjU7XG4gIHotaW5kZXg6IDgwMDsgfVxuXG4ubWFpbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMmQ2ZGU7IH1cblxuLyogRml4ZWQgbGF5b3V0ICovXG4uZml4ZWQgLm1haW4taGVhZGVyLFxuLmZpeGVkIC5tYWluLXNpZGViYXIsXG4uZml4ZWQgLmxlZnQtc2lkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgfVxuXG4uZml4ZWQgLm1haW4taGVhZGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDsgfVxuXG4uZml4ZWQgLmNvbnRlbnQtd3JhcHBlcixcbi5maXhlZCAucmlnaHQtc2lkZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4OyB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5maXhlZCAuY29udGVudC13cmFwcGVyLFxuICAgIC5maXhlZCAucmlnaHQtc2lkZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7IH0gfVxuXG4uZml4ZWQubGF5b3V0LWJveGVkIC53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbmJvZHkuaG9sZC10cmFuc2l0aW9uIC5jb250ZW50LXdyYXBwZXIsXG5ib2R5LmhvbGQtdHJhbnNpdGlvbiAucmlnaHQtc2lkZSxcbmJvZHkuaG9sZC10cmFuc2l0aW9uIC5tYWluLWZvb3RlcixcbmJvZHkuaG9sZC10cmFuc2l0aW9uIC5tYWluLXNpZGViYXIsXG5ib2R5LmhvbGQtdHJhbnNpdGlvbiAubGVmdC1zaWRlLFxuYm9keS5ob2xkLXRyYW5zaXRpb24gLm1haW4taGVhZGVyID4gLm5hdmJhcixcbmJvZHkuaG9sZC10cmFuc2l0aW9uIC5tYWluLWhlYWRlciAubG9nbyB7XG4gIC8qIEZpeCBmb3IgSUUgKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICAtby10cmFuc2l0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBub25lOyB9XG5cbi8qIENvbnRlbnQgKi9cbi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDsgfVxuICAuY29udGVudDpiZWZvcmUsIC5jb250ZW50OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAuY29udGVudDphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7IH1cblxuLyogSDEgLSBINiBmb250ICovXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG4uaDEsXG4uaDIsXG4uaDMsXG4uaDQsXG4uaDUsXG4uaDYge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IH1cblxuLyogR2VuZXJhbCBMaW5rcyAqL1xuYSB7XG4gIGNvbG9yOiAjM2M4ZGJjOyB9XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSxcbmE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzJhZmQyOyB9XG5cbi8qIFBhZ2UgSGVhZGVyICovXG4ucGFnZS1oZWFkZXIge1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMjJweDsgfVxuICAucGFnZS1oZWFkZXIgPiBzbWFsbCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IE1haW4gSGVhZGVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tYWluLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IDEwMzA7IH1cbiAgLm1haW4taGVhZGVyID4gLm5hdmJhciB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gICAgLmxheW91dC10b3AtbmF2IC5tYWluLWhlYWRlciA+IC5uYXZiYXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLm1haW4taGVhZGVyICNuYXZiYXItc2VhcmNoLWlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAubWFpbi1oZWFkZXIgI25hdmJhci1zZWFyY2gtaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCAubWFpbi1oZWFkZXIgI25hdmJhci1zZWFyY2gtaW5wdXQuZm9ybS1jb250cm9sOmFjdGl2ZSB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgfVxuICAgIC5tYWluLWhlYWRlciAjbmF2YmFyLXNlYXJjaC1pbnB1dC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgICBvcGFjaXR5OiAxOyB9XG4gICAgLm1haW4taGVhZGVyICNuYXZiYXItc2VhcmNoLWlucHV0LmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNjY2M7IH1cbiAgICAubWFpbi1oZWFkZXIgI25hdmJhci1zZWFyY2gtaW5wdXQuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjY2NjOyB9XG4gIC5tYWluLWhlYWRlciAubmF2YmFyLWN1c3RvbS1tZW51LFxuICAubWFpbi1oZWFkZXIgLm5hdmJhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAubWFpbi1oZWFkZXIgLm5hdmJhci1jdXN0b20tbWVudSBhLFxuICAgICAgLm1haW4taGVhZGVyIC5uYXZiYXItcmlnaHQgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5tYWluLWhlYWRlciAubmF2YmFyLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiBub25lOyB9XG4gICAgICAubmF2YmFyLWNvbGxhcHNlIC5tYWluLWhlYWRlciAubmF2YmFyLXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luOiA3LjVweCAtMTVweDsgfVxuICAgICAgLm1haW4taGVhZGVyIC5uYXZiYXItcmlnaHQgPiBsaSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBib3JkZXI6IDA7IH0gfVxuICAubWFpbi1oZWFkZXIgLnNpZGViYXItdG9nZ2xlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7IH1cbiAgICAubWFpbi1oZWFkZXIgLnNpZGViYXItdG9nZ2xlOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlxcZjBjOVwiOyB9XG4gICAgLm1haW4taGVhZGVyIC5zaWRlYmFyLXRvZ2dsZTpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5tYWluLWhlYWRlciAuc2lkZWJhci10b2dnbGU6Zm9jdXMsIC5tYWluLWhlYWRlciAuc2lkZWJhci10b2dnbGU6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gIC5tYWluLWhlYWRlciAuc2lkZWJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5tYWluLWhlYWRlciAubmF2YmFyIC5uYXYgPiBsaS51c2VyID4gYSA+IC5mYSxcbiAgLm1haW4taGVhZGVyIC5uYXZiYXIgLm5hdiA+IGxpLnVzZXIgPiBhID4gLmdseXBoaWNvbixcbiAgLm1haW4taGVhZGVyIC5uYXZiYXIgLm5hdiA+IGxpLnVzZXIgPiBhID4gLmlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgLm1haW4taGVhZGVyIC5uYXZiYXIgLm5hdiA+IGxpID4gYSA+IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXB4O1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgbGluZS1oZWlnaHQ6IC45OyB9XG4gIC5tYWluLWhlYWRlciAubG9nbyB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm1haW4taGVhZGVyIC5sb2dvIC5sb2dvLWxnIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1haW4taGVhZGVyIC5sb2dvIC5sb2dvLW1pbmkge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAubWFpbi1oZWFkZXIgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmY7IH1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4OyB9XG4gIC5jb250ZW50LWhlYWRlciA+IGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAyNHB4OyB9XG4gICAgLmNvbnRlbnQtaGVhZGVyID4gaDEgPiBzbWFsbCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgLmNvbnRlbnQtaGVhZGVyID4gLmJyZWFkY3J1bWIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDdweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgICAuY29udGVudC1oZWFkZXIgPiAuYnJlYWRjcnVtYiA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLmNvbnRlbnQtaGVhZGVyID4gLmJyZWFkY3J1bWIgPiBsaSA+IGEgPiAuZmEsIC5jb250ZW50LWhlYWRlciA+IC5icmVhZGNydW1iID4gbGkgPiBhID4gLmdseXBoaWNvbiwgLmNvbnRlbnQtaGVhZGVyID4gLmJyZWFkY3J1bWIgPiBsaSA+IGEgPiAuaW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgICAuY29udGVudC1oZWFkZXIgPiAuYnJlYWRjcnVtYiA+IGxpICsgbGk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICc+XFwwMGEwJzsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY29udGVudC1oZWFkZXIgPiAuYnJlYWRjcnVtYiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgYmFja2dyb3VuZDogI2QyZDZkZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDsgfVxuICAgICAgLmNvbnRlbnQtaGVhZGVyID4gLmJyZWFkY3J1bWIgbGk6YmVmb3JlIHtcbiAgICAgICAgY29sb3I6ICM5N2EwYjM7IH0gfVxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAxNXB4OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLWN1c3RvbS1tZW51IC5uYXZiYXItbmF2ID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5uYXZiYXItY3VzdG9tLW1lbnUgLm5hdmJhci1uYXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAubmF2YmFyLWN1c3RvbS1tZW51IC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5tYWluLWhlYWRlciAubG9nbyxcbiAgICAubWFpbi1oZWFkZXIgLm5hdmJhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsb2F0OiBub25lOyB9XG4gICAgLm1haW4taGVhZGVyIC5uYXZiYXIge1xuICAgICAgbWFyZ2luOiAwOyB9XG4gICAgLm1haW4taGVhZGVyIC5uYXZiYXItY3VzdG9tLW1lbnUge1xuICAgICAgZmxvYXQ6IHJpZ2h0OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXItY29sbGFwc2UucHVsbC1sZWZ0IHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLm5hdmJhci1jb2xsYXBzZS5wdWxsLWxlZnQgKyAubmF2YmFyLWN1c3RvbS1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDQwcHg7IH0gfVxuXG4vKlxuICogQ29tcG9uZW50OiBTaWRlYmFyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1haW4tc2lkZWJhcixcbi5sZWZ0LXNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMzBweDtcbiAgei1pbmRleDogODEwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0OyB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5tYWluLXNpZGViYXIsXG4gICAgLmxlZnQtc2lkZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubWFpbi1zaWRlYmFyLFxuICAgIC5sZWZ0LXNpZGUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjMwcHgsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzBweCwgMCk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjMwcHgsIDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzMHB4LCAwKTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLXNpZGViYXIsIC5zaWRlYmFyLWNvbGxhcHNlXG4gICAgLmxlZnQtc2lkZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzBweCwgMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzMHB4LCAwKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzBweCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjMwcHgsIDApOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnNpZGViYXItb3BlbiAubWFpbi1zaWRlYmFyLCAuc2lkZWJhci1vcGVuXG4gICAgLmxlZnQtc2lkZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfSB9XG5cbi5zaWRlYmFyIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cblxuLnNpZGViYXItZm9ybSBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLnVzZXItcGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC51c2VyLXBhbmVsOmJlZm9yZSwgLnVzZXItcGFuZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gIC51c2VyLXBhbmVsOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDsgfVxuICAudXNlci1wYW5lbCA+IC5pbWFnZSA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogYXV0bzsgfVxuICAudXNlci1wYW5lbCA+IC5pbmZvIHtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1NXB4OyB9XG4gICAgLnVzZXItcGFuZWwgPiAuaW5mbyA+IHAge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDlweDsgfVxuICAgIC51c2VyLXBhbmVsID4gLmluZm8gPiBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDsgfVxuICAgICAgLnVzZXItcGFuZWwgPiAuaW5mbyA+IGEgPiAuZmEsXG4gICAgICAudXNlci1wYW5lbCA+IC5pbmZvID4gYSA+IC5pb24sXG4gICAgICAudXNlci1wYW5lbCA+IC5pbmZvID4gYSA+IC5nbHlwaGljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgfVxuXG4uc2lkZWJhci1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG4gIC5zaWRlYmFyLW1lbnUgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgLnNpZGViYXItbWVudSA+IGxpID4gYSB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDVweCAxMnB4IDE1cHg7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgICAgLnNpZGViYXItbWVudSA+IGxpID4gYSA+IC5mYSxcbiAgICAgIC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEgPiAuZ2x5cGhpY29uLFxuICAgICAgLnNpZGViYXItbWVudSA+IGxpID4gYSA+IC5pb24ge1xuICAgICAgICB3aWR0aDogMjBweDsgfVxuICAgIC5zaWRlYmFyLW1lbnUgPiBsaSAubGFiZWwsXG4gICAgLnNpZGViYXItbWVudSA+IGxpIC5iYWRnZSB7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICAuc2lkZWJhci1tZW51IGxpLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7IH1cbiAgLnNpZGViYXItbWVudSBsaSA+IGEgPiAuZmEtYW5nbGUtbGVmdCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDsgfVxuICAuc2lkZWJhci1tZW51IGxpLmFjdGl2ZSA+IGEgPiAuZmEtYW5nbGUtbGVmdCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgfVxuICAuc2lkZWJhci1tZW51IGxpLmFjdGl2ZSA+IC50cmVldmlldy1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuc2lkZWJhci1tZW51IC50cmVldmlldy1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7IH1cbiAgICAuc2lkZWJhci1tZW51IC50cmVldmlldy1tZW51IC50cmVldmlldy1tZW51IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxuICAgIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSB7XG4gICAgICBtYXJnaW46IDA7IH1cbiAgICAgIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGEge1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgICAgIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGEgPiAuZmEsXG4gICAgICAgIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGEgPiAuZ2x5cGhpY29uLFxuICAgICAgICAuc2lkZWJhci1tZW51IC50cmVldmlldy1tZW51ID4gbGkgPiBhID4gLmlvbiB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7IH1cbiAgICAgICAgLnNpZGViYXItbWVudSAudHJlZXZpZXctbWVudSA+IGxpID4gYSA+IC5mYS1hbmdsZS1sZWZ0LFxuICAgICAgICAuc2lkZWJhci1tZW51IC50cmVldmlldy1tZW51ID4gbGkgPiBhID4gLmZhLWFuZ2xlLWRvd24ge1xuICAgICAgICAgIHdpZHRoOiBhdXRvOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IFNpZGViYXIgTWluaVxuICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5jb250ZW50LXdyYXBwZXIsXG4gIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAucmlnaHQtc2lkZSxcbiAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLWZvb3RlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiA4NDA7IH1cbiAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLXNpZGViYXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogODUwOyB9XG4gIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51ID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51ID4gbGkgPiBhIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxuICAgIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51ID4gbGkgPiBhID4gc3BhbiB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4OyB9XG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5zaWRlYmFyLW1lbnUgPiBsaTpub3QoLnRyZWV2aWV3KSA+IGEgPiBzcGFuIHtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7IH1cbiAgICAuc2lkZWJhci1taW5pLnNpZGViYXItY29sbGFwc2UgLnNpZGViYXItbWVudSA+IGxpID4gLnRyZWV2aWV3LW1lbnUge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4OyB9XG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5zaWRlYmFyLW1lbnUgPiBsaTpob3ZlciA+IGEgPiBzcGFuOm5vdCgucHVsbC1yaWdodCksXG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5zaWRlYmFyLW1lbnUgPiBsaTpob3ZlciA+IC50cmVldmlldy1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTgwcHg7XG4gICAgICBsZWZ0OiA1MHB4OyB9XG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5zaWRlYmFyLW1lbnUgPiBsaTpob3ZlciA+IGEgPiBzcGFuIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgcGFkZGluZzogMTJweCA1cHggMTJweCAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgfVxuICAgIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51ID4gbGk6aG92ZXIgPiAudHJlZXZpZXctbWVudSB7XG4gICAgICB0b3A6IDQ0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAuc2lkZWJhci1taW5pLnNpZGViYXItY29sbGFwc2UgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCA+IC5pbmZvLFxuICAuc2lkZWJhci1taW5pLnNpZGViYXItY29sbGFwc2UgLnNpZGViYXItZm9ybSxcbiAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEgPiBzcGFuLFxuICAuc2lkZWJhci1taW5pLnNpZGViYXItY29sbGFwc2UgLnNpZGViYXItbWVudSA+IGxpID4gLnRyZWV2aWV3LW1lbnUsXG4gIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51ID4gbGkgPiBhID4gLnB1bGwtcmlnaHQsXG4gIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAuc2lkZWJhci1tZW51IGxpLmhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyB9XG4gIC5zaWRlYmFyLW1pbmkuc2lkZWJhci1jb2xsYXBzZSAubWFpbi1oZWFkZXIgLmxvZ28ge1xuICAgIHdpZHRoOiA1MHB4OyB9XG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLWhlYWRlciAubG9nbyA+IC5sb2dvLW1pbmkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4OyB9XG4gICAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLWhlYWRlciAubG9nbyA+IC5sb2dvLWxnIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnNpZGViYXItbWluaS5zaWRlYmFyLWNvbGxhcHNlIC5tYWluLWhlYWRlciAubmF2YmFyIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgfSB9XG5cbi5zaWRlYmFyLW1lbnUsXG4ubWFpbi1zaWRlYmFyIC51c2VyLXBhbmVsLFxuLnNpZGViYXItbWVudSA+IGxpLmhlYWRlciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnNpZGViYXItbWVudTpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5zaWRlYmFyLWZvcm0sXG4uc2lkZWJhci1tZW51ID4gbGkuaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDsgfVxuXG4uc2lkZWJhci1tZW51IGxpID4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuc2lkZWJhci1tZW51IGxpID4gYSA+IC5wdWxsLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTdweDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBDb250cm9sIHNpZGViYXIuIEJ5IGRlZmF1bHQsIHRoaXMgaXMgdGhlIHJpZ2h0IHNpZGViYXIuXG4gKi9cbi5jb250cm9sLXNpZGViYXItYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvdHRvbTogMDsgfVxuXG4uY29udHJvbC1zaWRlYmFyLWJnLFxuLmNvbnRyb2wtc2lkZWJhciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0yMzBweDtcbiAgd2lkdGg6IDIzMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7IH1cblxuLmNvbnRyb2wtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHotaW5kZXg6IDEwMTA7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRyb2wtc2lkZWJhciB7XG4gICAgICBwYWRkaW5nLXRvcDogMTAwcHg7IH0gfVxuICAuY29udHJvbC1zaWRlYmFyID4gLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cbiAgLmNvbnRyb2wtc2lkZWJhci5jb250cm9sLXNpZGViYXItb3BlbixcbiAgLmNvbnRyb2wtc2lkZWJhci5jb250cm9sLXNpZGViYXItb3BlbiArIC5jb250cm9sLXNpZGViYXItYmcge1xuICAgIHJpZ2h0OiAwOyB9XG5cbi5jb250cm9sLXNpZGViYXItb3BlbiAuY29udHJvbC1zaWRlYmFyLWJnLFxuLmNvbnRyb2wtc2lkZWJhci1vcGVuIC5jb250cm9sLXNpZGViYXIge1xuICByaWdodDogMDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRyb2wtc2lkZWJhci1vcGVuIC5jb250ZW50LXdyYXBwZXIsXG4gIC5jb250cm9sLXNpZGViYXItb3BlbiAucmlnaHQtc2lkZSxcbiAgLmNvbnRyb2wtc2lkZWJhci1vcGVuIC5tYWluLWZvb3RlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMzBweDsgfSB9XG5cbi5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpOmZpcnN0LW9mLXR5cGUgPiBhLCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaTpmaXJzdC1vZi10eXBlID4gYTpob3ZlciwgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGk6Zmlyc3Qtb2YtdHlwZSA+IGE6Zm9jdXMge1xuICBib3JkZXItbGVmdC13aWR0aDogMDsgfVxuXG4ubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGEge1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG4gIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpID4gYSwgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhOmhvdmVyIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxuICAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhLCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhOmFjdGl2ZSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzIHtcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH0gfVxuXG4uY29udHJvbC1zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5jb250cm9sLXNpZGViYXItbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAtMTVweDsgfVxuICAuY29udHJvbC1zaWRlYmFyLW1lbnUgPiBsaSA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgfVxuICAgIC5jb250cm9sLXNpZGViYXItbWVudSA+IGxpID4gYTpiZWZvcmUsIC5jb250cm9sLXNpZGViYXItbWVudSA+IGxpID4gYTphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gICAgLmNvbnRyb2wtc2lkZWJhci1tZW51ID4gbGkgPiBhOmFmdGVyIHtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgLmNvbnRyb2wtc2lkZWJhci1tZW51ID4gbGkgPiBhID4gLmNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgLmNvbnRyb2wtc2lkZWJhci1tZW51IC5tZW51LWljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4OyB9XG4gIC5jb250cm9sLXNpZGViYXItbWVudSAubWVudS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7IH1cbiAgICAuY29udHJvbC1zaWRlYmFyLW1lbnUgLm1lbnUtaW5mbyA+IC5jb250cm9sLXNpZGViYXItc3ViaGVhZGluZyB7XG4gICAgICBtYXJnaW46IDA7IH1cbiAgICAuY29udHJvbC1zaWRlYmFyLW1lbnUgLm1lbnUtaW5mbyA+IHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMXB4OyB9XG4gIC5jb250cm9sLXNpZGViYXItbWVudSAucHJvZ3Jlc3Mge1xuICAgIG1hcmdpbjogMDsgfVxuXG4uY29udHJvbC1zaWRlYmFyLWRhcmsge1xuICBjb2xvcjogI2I4YzdjZTsgfVxuICAuY29udHJvbC1zaWRlYmFyLWRhcmssXG4gIC5jb250cm9sLXNpZGViYXItZGFyayArIC5jb250cm9sLXNpZGViYXItYmcge1xuICAgIGJhY2tncm91bmQ6ICMyMjJkMzI7IH1cbiAgLmNvbnRyb2wtc2lkZWJhci1kYXJrIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTogIzFjMjUyOTsgfVxuICAgIC5jb250cm9sLXNpZGViYXItZGFyayAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGEge1xuICAgICAgYmFja2dyb3VuZDogIzE4MWYyMztcbiAgICAgIGNvbG9yOiAjYjhjN2NlOyB9XG4gICAgICAuY29udHJvbC1zaWRlYmFyLWRhcmsgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhLCAuY29udHJvbC1zaWRlYmFyLWRhcmsgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhOmhvdmVyLCAuY29udHJvbC1zaWRlYmFyLWRhcmsgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxNDFhMWQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMxNDFhMWQ7IH1cbiAgICAgIC5jb250cm9sLXNpZGViYXItZGFyayAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGE6aG92ZXIsIC5jb250cm9sLXNpZGViYXItZGFyayAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGE6Zm9jdXMsIC5jb250cm9sLXNpZGViYXItZGFyayAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGE6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzFjMjUyOTsgfVxuICAgICAgLmNvbnRyb2wtc2lkZWJhci1kYXJrIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpID4gYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmNvbnRyb2wtc2lkZWJhci1kYXJrIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpLmFjdGl2ZSA+IGEsIC5jb250cm9sLXNpZGViYXItZGFyayAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhOmhvdmVyLCAuY29udHJvbC1zaWRlYmFyLWRhcmsgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkuYWN0aXZlID4gYTpmb2N1cywgLmNvbnRyb2wtc2lkZWJhci1kYXJrIC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpLmFjdGl2ZSA+IGE6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyMjJkMzI7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuICAuY29udHJvbC1zaWRlYmFyLWRhcmsgLmNvbnRyb2wtc2lkZWJhci1oZWFkaW5nLFxuICAuY29udHJvbC1zaWRlYmFyLWRhcmsgLmNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAuY29udHJvbC1zaWRlYmFyLWRhcmsgLmNvbnRyb2wtc2lkZWJhci1tZW51ID4gbGkgPiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWUyODJjOyB9XG4gIC5jb250cm9sLXNpZGViYXItZGFyayAuY29udHJvbC1zaWRlYmFyLW1lbnUgPiBsaSA+IGEgLm1lbnUtaW5mbyA+IHAge1xuICAgIGNvbG9yOiAjYjhjN2NlOyB9XG5cbi5jb250cm9sLXNpZGViYXItbGlnaHQge1xuICBjb2xvcjogIzVlNWU1ZTsgfVxuICAuY29udHJvbC1zaWRlYmFyLWxpZ2h0LFxuICAuY29udHJvbC1zaWRlYmFyLWxpZ2h0ICsgLmNvbnRyb2wtc2lkZWJhci1iZyB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYztcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkMmQ2ZGU7IH1cbiAgLmNvbnRyb2wtc2lkZWJhci1saWdodCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMge1xuICAgIGJvcmRlci1ib3R0b206ICNkMmQ2ZGU7IH1cbiAgICAuY29udHJvbC1zaWRlYmFyLWxpZ2h0IC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpID4gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZThlY2Y0O1xuICAgICAgY29sb3I6ICM0NDQ7IH1cbiAgICAgIC5jb250cm9sLXNpZGViYXItbGlnaHQgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhLCAuY29udHJvbC1zaWRlYmFyLWxpZ2h0IC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpID4gYTpob3ZlciwgLmNvbnRyb2wtc2lkZWJhci1saWdodCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGE6Zm9jdXMge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2QyZDZkZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2QyZDZkZTsgfVxuICAgICAgLmNvbnRyb2wtc2lkZWJhci1saWdodCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaSA+IGE6aG92ZXIsIC5jb250cm9sLXNpZGViYXItbGlnaHQgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkgPiBhOmZvY3VzLCAuY29udHJvbC1zaWRlYmFyLWxpZ2h0IC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpID4gYTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmMmY3OyB9XG4gICAgLmNvbnRyb2wtc2lkZWJhci1saWdodCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhLCAuY29udHJvbC1zaWRlYmFyLWxpZ2h0IC5uYXYtdGFicy5jb250cm9sLXNpZGViYXItdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsIC5jb250cm9sLXNpZGViYXItbGlnaHQgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzID4gbGkuYWN0aXZlID4gYTpmb2N1cywgLmNvbnRyb2wtc2lkZWJhci1saWdodCAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMgPiBsaS5hY3RpdmUgPiBhOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZjO1xuICAgICAgY29sb3I6ICMxMTE7IH1cbiAgLmNvbnRyb2wtc2lkZWJhci1saWdodCAuY29udHJvbC1zaWRlYmFyLWhlYWRpbmcsXG4gIC5jb250cm9sLXNpZGViYXItbGlnaHQgLmNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgICBjb2xvcjogIzExMTsgfVxuICAuY29udHJvbC1zaWRlYmFyLWxpZ2h0IC5jb250cm9sLXNpZGViYXItbWVudSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4OyB9XG4gICAgLmNvbnRyb2wtc2lkZWJhci1saWdodCAuY29udHJvbC1zaWRlYmFyLW1lbnUgPiBsaSA+IGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNTsgfVxuICAgIC5jb250cm9sLXNpZGViYXItbGlnaHQgLmNvbnRyb2wtc2lkZWJhci1tZW51ID4gbGkgPiBhIC5tZW51LWluZm8gPiBwIHtcbiAgICAgIGNvbG9yOiAjNWU1ZTVlOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IERyb3Bkb3duIG1lbnVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi8qRHJvcGRvd25zIGluIGdlbmVyYWwqL1xuLmRyb3Bkb3duLW1lbnUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItY29sb3I6ICNlZWU7IH1cbiAgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAjNzc3OyB9XG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhID4gLmdseXBoaWNvbixcbiAgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEgPiAuZmEsXG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhID4gLmlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U5O1xuICAgIGNvbG9yOiAjMzMzOyB9XG4gIC5kcm9wZG93bi1tZW51ID4gLmRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7IH1cblxuLm5hdmJhci1uYXYgPiAubm90aWZpY2F0aW9ucy1tZW51ID4gLmRyb3Bkb3duLW1lbnUsXG4ubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUsXG4ubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUge1xuICB3aWR0aDogMjgwcHg7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiAxMDAlOyB9XG4gIC5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGksXG4gIC5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLFxuICAubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkuaGVhZGVyLFxuLm5hdmJhci1uYXYgPiAubWVzc2FnZXMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkuaGVhZGVyLFxuLm5hdmJhci1uYXYgPiAudGFza3MtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkuaGVhZGVyIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkuZm9vdGVyID4gYSxcbi5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGEsXG4ubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaS5mb290ZXIgPiBhIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGNvbG9yOiAjNDQ0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAubmF2YmFyLW5hdiA+IC5ub3RpZmljYXRpb25zLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGEsXG4gICAgLm5hdmJhci1uYXYgPiAubWVzc2FnZXMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkuZm9vdGVyID4gYSxcbiAgICAubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaS5mb290ZXIgPiBhIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjNDQ0ICFpbXBvcnRhbnQ7IH0gfVxuICAubmF2YmFyLW5hdiA+IC5ub3RpZmljYXRpb25zLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGE6aG92ZXIsXG4gIC5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGE6aG92ZXIsXG4gIC5uYXZiYXItbmF2ID4gLnRhc2tzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUsXG4ubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSxcbi5uYXZiYXItbmF2ID4gLnRhc2tzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51IHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4gIC5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGEsXG4gIC5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51ID4gbGkgPiBhLFxuICAubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAvKiBQcmV2ZW50IHRleHQgZnJvbSBicmVha2luZyAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0OyB9XG4gICAgLm5hdmJhci1uYXYgPiAubm90aWZpY2F0aW9ucy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYTpob3ZlcixcbiAgICAubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYTpob3ZlcixcbiAgICAubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGEge1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBhZGRpbmc6IDEwcHg7IH1cbiAgLm5hdmJhci1uYXYgPiAubm90aWZpY2F0aW9ucy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSA+IC5nbHlwaGljb24sXG4gIC5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGEgPiAuZmEsXG4gIC5uYXZiYXItbmF2ID4gLm5vdGlmaWNhdGlvbnMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGEgPiAuaW9uIHtcbiAgICB3aWR0aDogMjBweDsgfVxuXG4ubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAxMHB4OyB9XG4gIC5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51ID4gbGkgPiBhID4gZGl2ID4gaW1nIHtcbiAgICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIGF1dG87XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4OyB9XG4gIC5uYXZiYXItbmF2ID4gLm1lc3NhZ2VzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51ID4gbGkgPiBhID4gaDQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIDAgMCA0NXB4O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSA+IGg0ID4gc21hbGwge1xuICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDsgfVxuICAubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSA+IHAge1xuICAgIG1hcmdpbjogMCAwIDAgNDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4ODg4ODg7IH1cbiAgLm5hdmJhci1uYXYgPiAubWVzc2FnZXMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGE6YmVmb3JlLCAubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7IH1cbiAgLm5hdmJhci1uYXYgPiAubWVzc2FnZXMtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGE6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoOyB9XG5cbi5uYXZiYXItbmF2ID4gLnRhc2tzLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51ID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMTBweDsgfVxuICAubmF2YmFyLW5hdiA+IC50YXNrcy1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSA+IGxpID4gYSA+IGgzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgY29sb3I6ICM2NjY2NjY7IH1cbiAgLm5hdmJhci1uYXYgPiAudGFza3MtbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUgPiBsaSA+IGEgPiAucHJvZ3Jlc3Mge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwOyB9XG5cbi5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgd2lkdGg6IDI4MHB4OyB9XG4gIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51LFxuICAubmF2YmFyLW5hdiA+IC51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWJvZHkge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4OyB9XG4gIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIge1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAubmF2YmFyLW5hdiA+IC51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLnVzZXItaGVhZGVyID4gaW1nIHtcbiAgICAgIHotaW5kZXg6IDU7XG4gICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XG4gICAgLm5hdmJhci1uYXYgPiAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaS51c2VyLWhlYWRlciA+IHAge1xuICAgICAgei1pbmRleDogNTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgICAgIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIgPiBwID4gc21hbGwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDsgfVxuICAgIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keTpiZWZvcmUsIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keTphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gICAgLm5hdmJhci1uYXYgPiAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5OmFmdGVyIHtcbiAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgLm5hdmJhci1uYXYgPiAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5IGEge1xuICAgICAgY29sb3I6ICM0NDQgIWltcG9ydGFudDsgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICM0NDQgIWltcG9ydGFudDsgfSB9XG4gIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAubmF2YmFyLW5hdiA+IC51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3RlcjpiZWZvcmUsIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItZm9vdGVyOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAubmF2YmFyLW5hdiA+IC51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3RlcjphZnRlciB7XG4gICAgICBjbGVhcjogYm90aDsgfVxuICAgIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItZm9vdGVyIC5idG4tZGVmYXVsdCB7XG4gICAgICBjb2xvcjogIzY2NjY2NjsgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIC5uYXZiYXItbmF2ID4gLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItZm9vdGVyIC5idG4tZGVmYXVsdDpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgfSB9XG5cbi5uYXZiYXItbmF2ID4gLnVzZXItbWVudSAudXNlci1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTJweDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubmF2YmFyLW5hdiA+IC51c2VyLW1lbnUgLnVzZXItaW1hZ2Uge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7IH0gfVxuXG4vKiBBZGQgZmFkZSBhbmltYXRpb24gdG8gZHJvcGRvd24gbWVudXMgYnkgYXBwZW5kaW5nXG4gdGhlIGNsYXNzIC5hbmltYXRlZC1kcm9wZG93bi1tZW51IHRvIHRoZSAuZHJvcGRvd24tbWVudSB1bCAob3Igb2wpKi9cbi5vcGVuOm5vdCguZHJvcHVwKSA+IC5hbmltYXRlZC1kcm9wZG93bi1tZW51IHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmxpcEluWCAwLjdzIGJvdGg7XG4gIC1vLWFuaW1hdGlvbjogZmxpcEluWCAwLjdzIGJvdGg7XG4gIGFuaW1hdGlvbjogZmxpcEluWCAwLjdzIGJvdGg7IH1cblxuQGtleWZyYW1lcyBmbGlwSW5YIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjsgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpOyB9IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47IH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTsgfSB9XG5cbi8qIEZpeCBkcm9wZG93biBtZW51IGluIG5hdmJhcnMgKi9cbi5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLWN1c3RvbS1tZW51ID4gLm5hdmJhci1uYXYge1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiA+IGxpIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7IH1cbiAgICAgIC5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfSB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IEZvcm1cbiAqIC0tLS0tLS0tLS0tLS0tLVxuICovXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjZDJkNmRlOyB9XG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzNjOGRiYztcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5mb3JtLWNvbnRyb2w6Oi1tb3otcGxhY2Vob2xkZXIsIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2JiYjtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIC5mb3JtLWNvbnRyb2w6bm90KHNlbGVjdCkge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTsgfVxuXG4uZm9ybS1ncm91cC5oYXMtc3VjY2VzcyBsYWJlbCB7XG4gIGNvbG9yOiAjMDBhNjVhOyB9XG5cbi5mb3JtLWdyb3VwLmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICMwMGE2NWE7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmZvcm0tZ3JvdXAuaGFzLXN1Y2Nlc3MgLmhlbHAtYmxvY2sge1xuICBjb2xvcjogIzAwYTY1YTsgfVxuXG4uZm9ybS1ncm91cC5oYXMtd2FybmluZyBsYWJlbCB7XG4gIGNvbG9yOiAjZjM5YzEyOyB9XG5cbi5mb3JtLWdyb3VwLmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6ICNmMzljMTI7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmZvcm0tZ3JvdXAuaGFzLXdhcm5pbmcgLmhlbHAtYmxvY2sge1xuICBjb2xvcjogI2YzOWMxMjsgfVxuXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgbGFiZWwge1xuICBjb2xvcjogI2RkNGIzOTsgfVxuXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogI2RkNGIzOTtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uZm9ybS1ncm91cC5oYXMtZXJyb3IgLmhlbHAtYmxvY2sge1xuICBjb2xvcjogI2RkNGIzOTsgfVxuXG4vKiBJbnB1dCBncm91cCAqL1xuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1jb2xvcjogI2QyZDZkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4vKiBidXR0b24gZ3JvdXBzICovXG4uYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4uYnRuLWZsYXQ6Zmlyc3Qtb2YtdHlwZSwgLmJ0bi1ncm91cC12ZXJ0aWNhbCAuYnRuLmJ0bi1mbGF0Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmljaGVjayA+IGxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XG5cbi8qIHN1cHBvcnQgRm9udCBBd2Vzb21lIGljb25zIGluIGZvcm0tY29udHJvbCAqL1xuLmZvcm0tY29udHJvbC1mZWVkYmFjay5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG5cbi5pbnB1dC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2suZmEsXG4uaW5wdXQtZ3JvdXAtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLmZhLFxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2suZmEge1xuICBsaW5lLWhlaWdodDogNDZweDsgfVxuXG4uaW5wdXQtc20gKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLmZhLFxuLmlucHV0LWdyb3VwLXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjay5mYSxcbi5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2wgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLmZhIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxuLypcbiAqIENvbXBvbmVudDogUHJvZ3Jlc3MgQmFyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4ucHJvZ3Jlc3MsXG4ucHJvZ3Jlc3MgPiAucHJvZ3Jlc3MtYmFyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5wcm9ncmVzcywgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIsXG4gIC5wcm9ncmVzcyA+IC5wcm9ncmVzcy1iYXIsXG4gIC5wcm9ncmVzcyA+IC5wcm9ncmVzcy1iYXIgLnByb2dyZXNzLWJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4OyB9XG5cbi8qIHNpemUgdmFyaWF0aW9uICovXG4ucHJvZ3Jlc3Muc20sXG4ucHJvZ3Jlc3Mtc20ge1xuICBoZWlnaHQ6IDEwcHg7IH1cbiAgLnByb2dyZXNzLnNtLCAucHJvZ3Jlc3Muc20gLnByb2dyZXNzLWJhcixcbiAgLnByb2dyZXNzLXNtLFxuICAucHJvZ3Jlc3Mtc20gLnByb2dyZXNzLWJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4OyB9XG5cbi5wcm9ncmVzcy54cyxcbi5wcm9ncmVzcy14cyB7XG4gIGhlaWdodDogN3B4OyB9XG4gIC5wcm9ncmVzcy54cywgLnByb2dyZXNzLnhzIC5wcm9ncmVzcy1iYXIsXG4gIC5wcm9ncmVzcy14cyxcbiAgLnByb2dyZXNzLXhzIC5wcm9ncmVzcy1iYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDsgfVxuXG4ucHJvZ3Jlc3MueHhzLFxuLnByb2dyZXNzLXh4cyB7XG4gIGhlaWdodDogM3B4OyB9XG4gIC5wcm9ncmVzcy54eHMsIC5wcm9ncmVzcy54eHMgLnByb2dyZXNzLWJhcixcbiAgLnByb2dyZXNzLXh4cyxcbiAgLnByb2dyZXNzLXh4cyAucHJvZ3Jlc3MtYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7IH1cblxuLyogVmVydGljYWwgYmFycyAqL1xuLnByb2dyZXNzLnZlcnRpY2FsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgLnByb2dyZXNzLnZlcnRpY2FsID4gLnByb2dyZXNzLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDsgfVxuICAucHJvZ3Jlc3MudmVydGljYWwuc20sIC5wcm9ncmVzcy52ZXJ0aWNhbC5wcm9ncmVzcy1zbSB7XG4gICAgd2lkdGg6IDIwcHg7IH1cbiAgLnByb2dyZXNzLnZlcnRpY2FsLnhzLCAucHJvZ3Jlc3MudmVydGljYWwucHJvZ3Jlc3MteHMge1xuICAgIHdpZHRoOiAxMHB4OyB9XG4gIC5wcm9ncmVzcy52ZXJ0aWNhbC54eHMsIC5wcm9ncmVzcy52ZXJ0aWNhbC5wcm9ncmVzcy14eHMge1xuICAgIHdpZHRoOiAzcHg7IH1cblxuLnByb2dyZXNzLWdyb3VwIC5wcm9ncmVzcy10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4ucHJvZ3Jlc3MtZ3JvdXAgLnByb2dyZXNzLW51bWJlciB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4vKiBSZW1vdmUgbWFyZ2lucyBmcm9tIHByb2dyZXNzIGJhcnMgd2hlbiBwdXQgaW4gYSB0YWJsZSAqL1xuLnRhYmxlIHRyID4gdGQgLnByb2dyZXNzIHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5wcm9ncmVzcy1iYXItbGlnaHQtYmx1ZSxcbi5wcm9ncmVzcy1iYXItcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7IH1cbiAgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1saWdodC1ibHVlLCAucHJvZ3Jlc3Mtc3RyaXBlZFxuICAucHJvZ3Jlc3MtYmFyLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7IH1cblxuLnByb2dyZXNzLWJhci1ncmVlbixcbi5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NWE7IH1cbiAgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1ncmVlbiwgLnByb2dyZXNzLXN0cmlwZWRcbiAgLnByb2dyZXNzLWJhci1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpOyB9XG5cbi5wcm9ncmVzcy1iYXItYXF1YSxcbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGMwZWY7IH1cbiAgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1hcXVhLCAucHJvZ3Jlc3Mtc3RyaXBlZFxuICAucHJvZ3Jlc3MtYmFyLWluZm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7IH1cblxuLnByb2dyZXNzLWJhci15ZWxsb3csXG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5YzEyOyB9XG4gIC5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXIteWVsbG93LCAucHJvZ3Jlc3Mtc3RyaXBlZFxuICAucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7IH1cblxuLnByb2dyZXNzLWJhci1yZWQsXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7IH1cbiAgLnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1yZWQsIC5wcm9ncmVzcy1zdHJpcGVkXG4gIC5wcm9ncmVzcy1iYXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IFNtYWxsIEJveFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnNtYWxsLWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuc21hbGwtYm94ID4gLmlubmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG4gIC5zbWFsbC1ib3ggPiAuc21hbGwtYm94LWZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcHggMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAuc21hbGwtYm94ID4gLnNtYWxsLWJveC1mb290ZXI6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG4gIC5zbWFsbC1ib3ggaDMge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5zbWFsbC1ib3ggcCB7XG4gICAgZm9udC1zaXplOiAxNXB4OyB9XG4gICAgLnNtYWxsLWJveCBwID4gc21hbGwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICAuc21hbGwtYm94IGgzLCAuc21hbGwtYm94IHAge1xuICAgIHotaW5kZXg6IDU7IH1cbiAgLnNtYWxsLWJveCAuaWNvbiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTsgfVxuICAuc21hbGwtYm94OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmOWY5Zjk7IH1cbiAgICAuc21hbGwtYm94OmhvdmVyIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogOTVweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNtYWxsLWJveCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLnNtYWxsLWJveCAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLnNtYWxsLWJveCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfSB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IEJveFxuICogLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgLmJveC5ib3gtcHJpbWFyeSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNjOGRiYzsgfVxuICAuYm94LmJveC1pbmZvIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDBjMGVmOyB9XG4gIC5ib3guYm94LWRhbmdlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2RkNGIzOTsgfVxuICAuYm94LmJveC13YXJuaW5nIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZjM5YzEyOyB9XG4gIC5ib3guYm94LXN1Y2Nlc3Mge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMGE2NWE7IH1cbiAgLmJveC5ib3gtZGVmYXVsdCB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2QyZDZkZTsgfVxuICAuYm94LmNvbGxhcHNlZC1ib3ggLmJveC1ib2R5LFxuICAuYm94LmNvbGxhcHNlZC1ib3ggLmJveC1mb290ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmJveCAubmF2LXN0YWNrZWQgPiBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgbWFyZ2luOiAwOyB9XG4gICAgLmJveCAubmF2LXN0YWNrZWQgPiBsaTpsYXN0LW9mLXR5cGUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAuYm94LmhlaWdodC1jb250cm9sIC5ib3gtYm9keSB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgLmJveCAuYm9yZGVyLXJpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjRmNGY0OyB9XG4gIC5ib3ggLmJvcmRlci1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNGY0ZjQ7IH1cbiAgLmJveC5ib3gtc29saWQge1xuICAgIGJvcmRlci10b3A6IDA7IH1cbiAgICAuYm94LmJveC1zb2xpZCA+IC5ib3gtaGVhZGVyIC5idG4uYnRuLWRlZmF1bHQge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICAuYm94LmJveC1zb2xpZCA+IC5ib3gtaGVhZGVyIC5idG46aG92ZXIsXG4gICAgLmJveC5ib3gtc29saWQgPiAuYm94LWhlYWRlciBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAgIC5ib3guYm94LXNvbGlkLmJveC1kZWZhdWx0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7IH1cbiAgICAgIC5ib3guYm94LXNvbGlkLmJveC1kZWZhdWx0ID4gLmJveC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgYmFja2dyb3VuZDogI2QyZDZkZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDZkZTsgfVxuICAgICAgICAuYm94LmJveC1zb2xpZC5ib3gtZGVmYXVsdCA+IC5ib3gtaGVhZGVyIGEsXG4gICAgICAgIC5ib3guYm94LXNvbGlkLmJveC1kZWZhdWx0ID4gLmJveC1oZWFkZXIgLmJ0biB7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7IH1cbiAgICAuYm94LmJveC1zb2xpZC5ib3gtcHJpbWFyeSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2M4ZGJjOyB9XG4gICAgICAuYm94LmJveC1zb2xpZC5ib3gtcHJpbWFyeSA+IC5ib3gtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzYzhkYmM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7IH1cbiAgICAgICAgLmJveC5ib3gtc29saWQuYm94LXByaW1hcnkgPiAuYm94LWhlYWRlciBhLFxuICAgICAgICAuYm94LmJveC1zb2xpZC5ib3gtcHJpbWFyeSA+IC5ib3gtaGVhZGVyIC5idG4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmJveC5ib3gtc29saWQuYm94LWluZm8ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwYzBlZjsgfVxuICAgICAgLmJveC5ib3gtc29saWQuYm94LWluZm8gPiAuYm94LWhlYWRlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMGVmOyB9XG4gICAgICAgIC5ib3guYm94LXNvbGlkLmJveC1pbmZvID4gLmJveC1oZWFkZXIgYSxcbiAgICAgICAgLmJveC5ib3gtc29saWQuYm94LWluZm8gPiAuYm94LWhlYWRlciAuYnRuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5ib3guYm94LXNvbGlkLmJveC1kYW5nZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkNGIzOTsgfVxuICAgICAgLmJveC5ib3gtc29saWQuYm94LWRhbmdlciA+IC5ib3gtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7IH1cbiAgICAgICAgLmJveC5ib3gtc29saWQuYm94LWRhbmdlciA+IC5ib3gtaGVhZGVyIGEsXG4gICAgICAgIC5ib3guYm94LXNvbGlkLmJveC1kYW5nZXIgPiAuYm94LWhlYWRlciAuYnRuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5ib3guYm94LXNvbGlkLmJveC13YXJuaW5nIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMzljMTI7IH1cbiAgICAgIC5ib3guYm94LXNvbGlkLmJveC13YXJuaW5nID4gLmJveC1oZWFkZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMjsgfVxuICAgICAgICAuYm94LmJveC1zb2xpZC5ib3gtd2FybmluZyA+IC5ib3gtaGVhZGVyIGEsXG4gICAgICAgIC5ib3guYm94LXNvbGlkLmJveC13YXJuaW5nID4gLmJveC1oZWFkZXIgLmJ0biB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAuYm94LmJveC1zb2xpZC5ib3gtc3VjY2VzcyB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBhNjVhOyB9XG4gICAgICAuYm94LmJveC1zb2xpZC5ib3gtc3VjY2VzcyA+IC5ib3gtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGE2NWE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NWE7IH1cbiAgICAgICAgLmJveC5ib3gtc29saWQuYm94LXN1Y2Nlc3MgPiAuYm94LWhlYWRlciBhLFxuICAgICAgICAuYm94LmJveC1zb2xpZC5ib3gtc3VjY2VzcyA+IC5ib3gtaGVhZGVyIC5idG4ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmJveC5ib3gtc29saWQgPiAuYm94LWhlYWRlciA+IC5ib3gtdG9vbHMgLmJ0biB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3gtc2hhZG93OiBub25lOyB9XG4gICAgLmJveC5ib3gtc29saWRbY2xhc3MqPSdiZyddID4gLmJveC1oZWFkZXIge1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgLmJveCAuYm94LWdyb3VwID4gLmJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4gIC5ib3ggLmtub2ItbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTsgfVxuXG4uYm94ID4gLm92ZXJsYXksXG4uYm94ID4gLmxvYWRpbmctaW1nLFxuLm92ZXJsYXktd3JhcHBlciA+IC5vdmVybGF5LFxuLm92ZXJsYXktd3JhcHBlciA+IC5sb2FkaW5nLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5ib3ggLm92ZXJsYXksXG4ub3ZlcmxheS13cmFwcGVyIC5vdmVybGF5IHtcbiAgei1pbmRleDogNTA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gIC5ib3ggLm92ZXJsYXkgPiAuZmEsXG4gIC5vdmVybGF5LXdyYXBwZXIgLm92ZXJsYXkgPiAuZmEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDsgfVxuXG4uYm94IC5vdmVybGF5LmRhcmssXG4ub3ZlcmxheS13cmFwcGVyIC5vdmVybGF5LmRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmJveC1oZWFkZXI6YmVmb3JlLCAuYm94LWhlYWRlcjphZnRlcixcbi5ib3gtYm9keTpiZWZvcmUsXG4uYm94LWJvZHk6YWZ0ZXIsXG4uYm94LWZvb3RlcjpiZWZvcmUsXG4uYm94LWZvb3RlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4uYm94LWhlYWRlcjphZnRlcixcbi5ib3gtYm9keTphZnRlcixcbi5ib3gtZm9vdGVyOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7IH1cblxuLmJveC1oZWFkZXIge1xuICBjb2xvcjogIzQ0NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuYm94LWhlYWRlci53aXRoLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7IH1cbiAgICAuY29sbGFwc2VkLWJveCAuYm94LWhlYWRlci53aXRoLWJvcmRlciB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIC5ib3gtaGVhZGVyID4gLmZhLFxuICAuYm94LWhlYWRlciA+IC5nbHlwaGljb24sXG4gIC5ib3gtaGVhZGVyID4gLmlvbixcbiAgLmJveC1oZWFkZXIgLmJveC10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7IH1cbiAgLmJveC1oZWFkZXIgPiAuZmEsXG4gIC5ib3gtaGVhZGVyID4gLmdseXBoaWNvbixcbiAgLmJveC1oZWFkZXIgPiAuaW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICAuYm94LWhlYWRlciA+IC5ib3gtdG9vbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDVweDsgfVxuICAgIC5ib3gtaGVhZGVyID4gLmJveC10b29scyBbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5ib3gtaGVhZGVyID4gLmJveC10b29scy5wdWxsLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogYXV0bzsgfVxuXG4uYnRuLWJveC10b29sIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzk3YTBiMzsgfVxuICAub3BlbiAuYnRuLWJveC10b29sLCAuYnRuLWJveC10b29sOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwNmM4NDsgfVxuICAuYnRuLWJveC10b29sLmJ0bjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmJveC1ib2R5IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweDsgfVxuICAubm8taGVhZGVyIC5ib3gtYm9keSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7IH1cbiAgLmJveC1ib2R5ID4gLnRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIC5ib3gtYm9keSAuZmMge1xuICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICAuYm94LWJvZHkgLmZ1bGwtd2lkdGgtY2hhcnQge1xuICAgIG1hcmdpbjogLTE5cHg7IH1cbiAgLmJveC1ib2R5Lm5vLXBhZGRpbmcgLmZ1bGwtd2lkdGgtY2hhcnQge1xuICAgIG1hcmdpbjogLTlweDsgfVxuICAuYm94LWJvZHkgLmJveC1wYW5lIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDsgfVxuICAuYm94LWJvZHkgLmJveC1wYW5lLXJpZ2h0IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDsgfVxuXG4uYm94LWZvb3RlciB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjRmNGY0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi5jaGFydC1sZWdlbmQge1xuICBtYXJnaW46IDEwcHggMDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuY2hhcnQtbGVnZW5kID4gbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH0gfVxuXG4uYm94LWNvbW1lbnRzIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNzsgfVxuICAuYm94LWNvbW1lbnRzIC5ib3gtY29tbWVudCB7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IH1cbiAgICAuYm94LWNvbW1lbnRzIC5ib3gtY29tbWVudDpiZWZvcmUsIC5ib3gtY29tbWVudHMgLmJveC1jb21tZW50OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAuYm94LWNvbW1lbnRzIC5ib3gtY29tbWVudDphZnRlciB7XG4gICAgICBjbGVhcjogYm90aDsgfVxuICAgIC5ib3gtY29tbWVudHMgLmJveC1jb21tZW50Omxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAwOyB9XG4gICAgLmJveC1jb21tZW50cyAuYm94LWNvbW1lbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDsgfVxuICAgIC5ib3gtY29tbWVudHMgLmJveC1jb21tZW50IGltZyB7XG4gICAgICBmbG9hdDogbGVmdDsgfVxuICAuYm94LWNvbW1lbnRzIC5jb21tZW50LXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIGNvbG9yOiAjNTU1OyB9XG4gIC5ib3gtY29tbWVudHMgLnVzZXJuYW1lIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG4gIC5ib3gtY29tbWVudHMgLnRleHQtbXV0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi8qIFdpZGdldDogVE9ETyBMSVNUICovXG4udG9kby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuICAudG9kby1saXN0ID4gbGkge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U2ZTdlODtcbiAgICBjb2xvcjogIzQ0NDsgfVxuICAgIC50b2RvLWxpc3QgPiBsaTpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAgIC50b2RvLWxpc3QgPiBsaSA+IGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgbWFyZ2luOiAwIDEwcHggMCA1cHg7IH1cbiAgICAudG9kby1saXN0ID4gbGkgLnRleHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAudG9kby1saXN0ID4gbGkgLmxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiA5cHg7IH1cbiAgICAudG9kby1saXN0ID4gbGkgLnRvb2xzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogI2RkNGIzOTsgfVxuICAgICAgLnRvZG8tbGlzdCA+IGxpIC50b29scyA+IC5mYSwgLnRvZG8tbGlzdCA+IGxpIC50b29scyA+IC5nbHlwaGljb24sIC50b2RvLWxpc3QgPiBsaSAudG9vbHMgPiAuaW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC50b2RvLWxpc3QgPiBsaTpob3ZlciAudG9vbHMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLnRvZG8tbGlzdCA+IGxpLmRvbmUge1xuICAgICAgY29sb3I6ICM5OTk7IH1cbiAgICAgIC50b2RvLWxpc3QgPiBsaS5kb25lIC50ZXh0IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgICAgIC50b2RvLWxpc3QgPiBsaS5kb25lIC5sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkMmQ2ZGUgIWltcG9ydGFudDsgfVxuICAudG9kby1saXN0IC5kYW5nZXIge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGQ0YjM5OyB9XG4gIC50b2RvLWxpc3QgLndhcm5pbmcge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjM5YzEyOyB9XG4gIC50b2RvLWxpc3QgLmluZm8ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBjMGVmOyB9XG4gIC50b2RvLWxpc3QgLnN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBhNjVhOyB9XG4gIC50b2RvLWxpc3QgLnByaW1hcnkge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjM2M4ZGJjOyB9XG4gIC50b2RvLWxpc3QgLmhhbmRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBtYXJnaW46IDAgNXB4OyB9XG5cbi8qIENoYXQgd2lkZ2V0IChERVBSRUNBVEVEIC0gdGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gVXNlIERpcmVjdCBDaGF0IGluc3RlYWQpKi9cbi5jaGF0IHtcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDEwcHg7IH1cbiAgLmNoYXQgLml0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgICAuY2hhdCAuaXRlbTpiZWZvcmUsIC5jaGF0IC5pdGVtOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAuY2hhdCAuaXRlbTphZnRlciB7XG4gICAgICBjbGVhcjogYm90aDsgfVxuICAgIC5jaGF0IC5pdGVtID4gaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cbiAgICAuY2hhdCAuaXRlbSA+IC5vbmxpbmUge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwYTY1YTsgfVxuICAgIC5jaGF0IC5pdGVtID4gLm9mZmxpbmUge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2RkNGIzOTsgfVxuICAgIC5jaGF0IC5pdGVtID4gLm1lc3NhZ2Uge1xuICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtNDBweDsgfVxuICAgICAgLmNoYXQgLml0ZW0gPiAubWVzc2FnZSA+IC5uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAuY2hhdCAuaXRlbSA+IC5hdHRhY2htZW50IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAgIC5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQgPiBoNCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAgIC5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQgPiBwLCAuY2hhdCAuaXRlbSA+IC5hdHRhY2htZW50ID4gLmZpbGVuYW1lIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgLmNoYXQgLml0ZW0gPiAuYXR0YWNobWVudDpiZWZvcmUsIC5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAgIC5jaGF0IC5pdGVtID4gLmF0dGFjaG1lbnQ6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuXG4uYm94LWlucHV0IHtcbiAgbWF4LXdpZHRoOiAyMDBweDsgfVxuXG4ubW9kYWwgLnBhbmVsLWJvZHkge1xuICBjb2xvcjogIzQ0NDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBJbmZvIEJveFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW5mby1ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICAuaW5mby1ib3ggc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAuaW5mby1ib3ggLnByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luOiA1cHggLTEwcHggNXB4IC0xMHB4O1xuICAgIGhlaWdodDogMnB4OyB9XG4gICAgLmluZm8tYm94IC5wcm9ncmVzcyxcbiAgICAuaW5mby1ib3ggLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAgIC5pbmZvLWJveCAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5pbmZvLWJveC1pY29uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICAuaW5mby1ib3gtaWNvbiA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbi5pbmZvLWJveC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4OyB9XG5cbi5pbmZvLWJveC1udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4ucHJvZ3Jlc3MtZGVzY3JpcHRpb24sXG4uaW5mby1ib3gtdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi5pbmZvLWJveC10ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uaW5mby1ib3gtbW9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5wcm9ncmVzcy1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBUaW1lbGluZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgbGVmdDogMzFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gIC50aW1lbGluZSA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiAgICAudGltZWxpbmUgPiBsaTpiZWZvcmUsIC50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgZGlzcGxheTogdGFibGU7IH1cbiAgICAudGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgICBjbGVhcjogYm90aDsgfVxuICAgIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWl0ZW0ge1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZSB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtaXRlbSA+IC50aW1lbGluZS1oZWFkZXIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xOyB9XG4gICAgICAgIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtaGVhZGVyID4gYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgICAgLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtaXRlbSA+IC50aW1lbGluZS1ib2R5LCAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1pdGVtID4gLnRpbWVsaW5lLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IH1cbiAgICAudGltZWxpbmUgPiBsaSA+IC5mYSxcbiAgICAudGltZWxpbmUgPiBsaSA+IC5nbHlwaGljb24sXG4gICAgLnRpbWVsaW5lID4gbGkgPiAuaW9uIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGJhY2tncm91bmQ6ICNkMmQ2ZGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsZWZ0OiAxOHB4O1xuICAgICAgdG9wOiAwOyB9XG4gIC50aW1lbGluZSA+IC50aW1lLWxhYmVsID4gc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbi50aW1lbGluZS1pbnZlcnNlID4gbGkgPiAudGltZWxpbmUtaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAudGltZWxpbmUtaW52ZXJzZSA+IGxpID4gLnRpbWVsaW5lLWl0ZW0gPiAudGltZWxpbmUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IEJ1dHRvblxuICogLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgfVxuICAuYnRuLnVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAuYnRuLmJ0bi1mbGF0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItd2lkdGg6IDFweDsgfVxuICAuYnRuOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOyB9XG4gIC5idG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmJ0bi5idG4tZmlsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAuYnRuLmJ0bi1maWxlID4gaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuXG4uYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkOyB9XG4gIC5idG4tZGVmYXVsdDpob3ZlciwgLmJ0bi1kZWZhdWx0OmFjdGl2ZSwgLmJ0bi1kZWZhdWx0LmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3OyB9XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG4gIGJvcmRlci1jb2xvcjogIzM2N2ZhOTsgfVxuICAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeS5ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2N2ZhOTsgfVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjVhO1xuICBib3JkZXItY29sb3I6ICMwMDhkNGM7IH1cbiAgLmJ0bi1zdWNjZXNzOmhvdmVyLCAuYnRuLXN1Y2Nlc3M6YWN0aXZlLCAuYnRuLXN1Y2Nlc3MuaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhkNGM7IH1cblxuLmJ0bi1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzBlZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhY2Q2OyB9XG4gIC5idG4taW5mbzpob3ZlciwgLmJ0bi1pbmZvOmFjdGl2ZSwgLmJ0bi1pbmZvLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2Q2OyB9XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbiAgYm9yZGVyLWNvbG9yOiAjZDczOTI1OyB9XG4gIC5idG4tZGFuZ2VyOmhvdmVyLCAuYnRuLWRhbmdlcjphY3RpdmUsIC5idG4tZGFuZ2VyLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDczOTI1OyB9XG5cbi5idG4td2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7XG4gIGJvcmRlci1jb2xvcjogI2UwOGUwYjsgfVxuICAuYnRuLXdhcm5pbmc6aG92ZXIsIC5idG4td2FybmluZzphY3RpdmUsIC5idG4td2FybmluZy5ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwOGUwYjsgfVxuXG4uYnRuLW91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLmJ0bi1vdXRsaW5lOmhvdmVyLCAuYnRuLW91dGxpbmU6Zm9jdXMsIC5idG4tb3V0bGluZTphY3RpdmUge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cblxuLmJ0bi1saW5rIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5idG5bY2xhc3MqPSdiZy0nXTpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4uYnRuLWFwcCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2NjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5idG4tYXBwID4gLmZhLCAuYnRuLWFwcCA+IC5nbHlwaGljb24sIC5idG4tYXBwID4gLmlvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5idG4tYXBwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlci1jb2xvcjogI2FhYTsgfVxuICAuYnRuLWFwcDphY3RpdmUsIC5idG4tYXBwOmZvY3VzIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgLmJ0bi1hcHAgPiAuYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0zcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IENhbGxvdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uY2FsbG91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAxNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlZWU7IH1cbiAgLmNhbGxvdXQgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiAgICAuY2FsbG91dCBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZWVlOyB9XG4gIC5jYWxsb3V0IGg0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLmNhbGxvdXQgcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIC5jYWxsb3V0IGNvZGUsXG4gIC5jYWxsb3V0IC5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNhbGxvdXQuY2FsbG91dC1kYW5nZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2MyMzMyMTsgfVxuICAuY2FsbG91dC5jYWxsb3V0LXdhcm5pbmcge1xuICAgIGJvcmRlci1jb2xvcjogI2M4N2YwYTsgfVxuICAuY2FsbG91dC5jYWxsb3V0LWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogIzAwOTdiYzsgfVxuICAuY2FsbG91dC5jYWxsb3V0LXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogIzAwNzMzZTsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBhbGVydFxuICogLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgLmFsZXJ0IGg0IHtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG4gIC5hbGVydCAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC5hbGVydCAuY2xvc2UsIC5hbGVydCAubWFpbGJveC1hdHRhY2htZW50LWNsb3NlIHtcbiAgICBjb2xvcjogIzExMTtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTsgfVxuICAgIC5hbGVydCAuY2xvc2U6aG92ZXIsIC5hbGVydCAubWFpbGJveC1hdHRhY2htZW50LWNsb3NlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7IH1cbiAgLmFsZXJ0IGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA4ZDRjOyB9XG5cbi5hbGVydC1kYW5nZXIsXG4uYWxlcnQtZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNkNzM5MjU7IH1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNlMDhlMGI7IH1cblxuLmFsZXJ0LWluZm8ge1xuICBib3JkZXItY29sb3I6ICMwMGFjZDY7IH1cblxuLypcbiAqIENvbXBvbmVudDogTmF2XG4gKiAtLS0tLS0tLS0tLS0tLVxuICovXG4ubmF2ID4gbGkgPiBhOmhvdmVyLFxuLm5hdiA+IGxpID4gYTphY3RpdmUsXG4ubmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7IH1cblxuLyogTkFWIFBJTExTICovXG4ubmF2LXBpbGxzID4gbGkgPiBhIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ0NDsgfVxuICAubmF2LXBpbGxzID4gbGkgPiBhID4gLmZhLFxuICAubmF2LXBpbGxzID4gbGkgPiBhID4gLmdseXBoaWNvbixcbiAgLm5hdi1waWxscyA+IGxpID4gYSA+IC5pb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5uYXYtcGlsbHMgPiBsaS5hY3RpdmUgPiBhLFxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2LXBpbGxzID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzYzhkYmM7IH1cblxuLm5hdi1waWxscyA+IGxpLmFjdGl2ZSA+IGEge1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi8qIE5BViBTVEFDS0VEICovXG4ubmF2LXN0YWNrZWQgPiBsaSA+IGEge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ0NDsgfVxuXG4ubmF2LXN0YWNrZWQgPiBsaS5hY3RpdmUgPiBhLFxuLm5hdi1zdGFja2VkID4gbGkuYWN0aXZlID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ0NDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMzYzhkYmM7IH1cblxuLm5hdi1zdGFja2VkID4gbGkuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjNzc3O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4vKiBOQVYgVEFCUyAqL1xuLm5hdi10YWJzLWN1c3RvbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Y0ZjRmNDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDsgfVxuICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaSB7XG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaSA+IGEge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAgICAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzID4gbGkgPiBhLnRleHQtbXV0ZWQge1xuICAgICAgICAgIGNvbG9yOiAjOTk5OyB9XG4gICAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaSA+IGEsIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaSA+IGE6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzID4gbGkgPiBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzk5OTsgfVxuICAgICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicyA+IGxpOm5vdCguYWN0aXZlKSA+IGE6aG92ZXIsXG4gICAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzID4gbGk6bm90KC5hY3RpdmUpID4gYTpmb2N1cyxcbiAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaTpub3QoLmFjdGl2ZSkgPiBhOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzID4gbGkuYWN0aXZlIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICMzYzhkYmM7IH1cbiAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuICAgICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZTpob3ZlciA+IGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzQ0NDsgfVxuICAgICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2Y0ZjRmNDsgfVxuICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzID4gbGk6Zmlyc3Qtb2YtdHlwZS5hY3RpdmUgPiBhIHtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicy5wdWxsLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMucHVsbC1yaWdodCA+IGxpIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgICAubmF2LXRhYnMtY3VzdG9tID4gLm5hdi10YWJzLnB1bGwtcmlnaHQgPiBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gICAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMucHVsbC1yaWdodCA+IGxpOmZpcnN0LW9mLXR5cGUgPiBhIHtcbiAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4OyB9XG4gICAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMucHVsbC1yaWdodCA+IGxpOmZpcnN0LW9mLXR5cGUuYWN0aXZlID4gYSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaS5oZWFkZXIge1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzQ0NDsgfVxuICAgICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicyA+IGxpLmhlYWRlciA+IC5mYSxcbiAgICAgIC5uYXYtdGFicy1jdXN0b20gPiAubmF2LXRhYnMgPiBsaS5oZWFkZXIgPiAuZ2x5cGhpY29uLFxuICAgICAgLm5hdi10YWJzLWN1c3RvbSA+IC5uYXYtdGFicyA+IGxpLmhlYWRlciA+IC5pb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICAubmF2LXRhYnMtY3VzdG9tID4gLnRhYi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7IH1cbiAgLm5hdi10YWJzLWN1c3RvbSAuZHJvcGRvd24ub3BlbiA+IGE6YWN0aXZlLCAubmF2LXRhYnMtY3VzdG9tIC5kcm9wZG93bi5vcGVuID4gYTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM5OTk7IH1cbiAgLm5hdi10YWJzLWN1c3RvbS50YWItcHJpbWFyeSA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzNjOGRiYzsgfVxuICAubmF2LXRhYnMtY3VzdG9tLnRhYi1pbmZvID4gLm5hdi10YWJzID4gbGkuYWN0aXZlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMDBjMGVmOyB9XG4gIC5uYXYtdGFicy1jdXN0b20udGFiLWRhbmdlciA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2RkNGIzOTsgfVxuICAubmF2LXRhYnMtY3VzdG9tLnRhYi13YXJuaW5nID4gLm5hdi10YWJzID4gbGkuYWN0aXZlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZjM5YzEyOyB9XG4gIC5uYXYtdGFicy1jdXN0b20udGFiLXN1Y2Nlc3MgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMGE2NWE7IH1cbiAgLm5hdi10YWJzLWN1c3RvbS50YWItZGVmYXVsdCA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2QyZDZkZTsgfVxuXG4vKiBQQUdJTkFUSU9OICovXG4ucGFnaW5hdGlvbiA+IGxpID4gYSB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGNvbG9yOiAjNjY2OyB9XG5cbi5wYWdpbmF0aW9uLnBhZ2luYXRpb24tZmxhdCA+IGxpID4gYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBQcm9kdWN0cyBMaXN0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnByb2R1Y3RzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cbiAgLnByb2R1Y3RzLWxpc3QgPiAuaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gICAgLnByb2R1Y3RzLWxpc3QgPiAuaXRlbTpiZWZvcmUsIC5wcm9kdWN0cy1saXN0ID4gLml0ZW06YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgIC5wcm9kdWN0cy1saXN0ID4gLml0ZW06YWZ0ZXIge1xuICAgICAgY2xlYXI6IGJvdGg7IH1cbiAgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtaW1nIHtcbiAgICBmbG9hdDogbGVmdDsgfVxuICAgIC5wcm9kdWN0cy1saXN0IC5wcm9kdWN0LWltZyBpbWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7IH1cbiAgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7IH1cbiAgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4ucHJvZHVjdC1saXN0LWluLWJveCA+IC5pdGVtIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDsgfVxuICAucHJvZHVjdC1saXN0LWluLWJveCA+IC5pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBUYWJsZVxuICogLS0tLS0tLS0tLS0tLS0tLVxuICovXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGQsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGgsXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsXG4udGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y0ZjRmNDsgfVxuXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y0ZjRmNDsgfVxuXG4udGFibGUgdHIgdGQgLnByb2dyZXNzIHtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7IH1cbiAgLnRhYmxlLWJvcmRlcmVkID4gdGhlYWQgPiB0ciA+IHRoLFxuICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHIgPiB0aCxcbiAgLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkLFxuICAudGFibGUtYm9yZGVyZWQgPiB0Zm9vdCA+IHRyID4gdGgsXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRmb290ID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDsgfVxuICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4OyB9XG5cbi50YWJsZS5uby1ib3JkZXIsXG4udGFibGUubm8tYm9yZGVyIHRkLFxuLnRhYmxlLm5vLWJvcmRlciB0aCB7XG4gIGJvcmRlcjogMDsgfVxuXG4vKiAudGV4dC1jZW50ZXIgaW4gdGFibGVzICovXG50YWJsZS50ZXh0LWNlbnRlciwgdGFibGUudGV4dC1jZW50ZXIgdGQsIHRhYmxlLnRleHQtY2VudGVyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi50YWJsZS5hbGlnbiB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRhYmxlLmFsaWduIHRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLypcbiAqIENvbXBvbmVudDogTGFiZWxcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmxhYmVsLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkNmRlO1xuICBjb2xvcjogIzQ0NDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBEaXJlY3QgQ2hhdFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uZGlyZWN0LWNoYXQgLmJveC1ib2R5IHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5kaXJlY3QtY2hhdC5jaGF0LXBhbmUtb3BlbiAuZGlyZWN0LWNoYXQtY29udGFjdHMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfVxuXG4uZGlyZWN0LWNoYXQtbWVzc2FnZXMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmRpcmVjdC1jaGF0LW1zZyxcbi5kaXJlY3QtY2hhdC10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmRpcmVjdC1jaGF0LW1zZyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLmRpcmVjdC1jaGF0LW1zZzpiZWZvcmUsIC5kaXJlY3QtY2hhdC1tc2c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gIC5kaXJlY3QtY2hhdC1tc2c6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoOyB9XG5cbi5kaXJlY3QtY2hhdC1tZXNzYWdlcyxcbi5kaXJlY3QtY2hhdC1jb250YWN0cyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7IH1cblxuLmRpcmVjdC1jaGF0LXRleHQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkMmQ2ZGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7XG4gIG1hcmdpbjogNXB4IDAgMCA1MHB4O1xuICBjb2xvcjogIzQ0NDsgfVxuICAuZGlyZWN0LWNoYXQtdGV4dDphZnRlciwgLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZDJkNmRlO1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIge1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7IH1cbiAgLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcbiAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4OyB9XG4gIC5yaWdodCAuZGlyZWN0LWNoYXQtdGV4dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgLnJpZ2h0IC5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyLCAucmlnaHQgLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogMTAwJTtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2QyZDZkZTsgfVxuXG4uZGlyZWN0LWNoYXQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDsgfVxuICAucmlnaHQgLmRpcmVjdC1jaGF0LWltZyB7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5kaXJlY3QtY2hhdC1pbmZvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5kaXJlY3QtY2hhdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4uZGlyZWN0LWNoYXQtdGltZXN0YW1wIHtcbiAgY29sb3I6ICM5OTk7IH1cblxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzLW9wZW4gLmRpcmVjdC1jaGF0LWNvbnRhY3RzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cblxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDElLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMSUsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDElLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAxJSwgMCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyZDMyO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmNvbnRhY3RzLWxpc3QgPiBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDsgfVxuICAuY29udGFjdHMtbGlzdCA+IGxpOmJlZm9yZSwgLmNvbnRhY3RzLWxpc3QgPiBsaTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7IH1cbiAgLmNvbnRhY3RzLWxpc3QgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7IH1cbiAgLmNvbnRhY3RzLWxpc3QgPiBsaTpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLmNvbnRhY3RzLWxpc3QtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmNvbnRhY3RzLWxpc3QtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uY29udGFjdHMtbGlzdC1uYW1lLFxuLmNvbnRhY3RzLWxpc3Qtc3RhdHVzIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmNvbnRhY3RzLWxpc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLmNvbnRhY3RzLWxpc3Qtc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5jb250YWN0cy1saXN0LWRhdGUge1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4uY29udGFjdHMtbGlzdC1tc2cge1xuICBjb2xvcjogIzk5OTsgfVxuXG4uZGlyZWN0LWNoYXQtZGFuZ2VyIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcbiAgYm9yZGVyLWNvbG9yOiAjZGQ0YjM5O1xuICBjb2xvcjogI2ZmZjsgfVxuICAuZGlyZWN0LWNoYXQtZGFuZ2VyIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyLCAuZGlyZWN0LWNoYXQtZGFuZ2VyIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNkZDRiMzk7IH1cblxuLmRpcmVjdC1jaGF0LXByaW1hcnkgLnJpZ2h0ID4gLmRpcmVjdC1jaGF0LXRleHQge1xuICBiYWNrZ3JvdW5kOiAjM2M4ZGJjO1xuICBib3JkZXItY29sb3I6ICMzYzhkYmM7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5kaXJlY3QtY2hhdC1wcmltYXJ5IC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyLCAuZGlyZWN0LWNoYXQtcHJpbWFyeSAucmlnaHQgPiAuZGlyZWN0LWNoYXQtdGV4dDpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjM2M4ZGJjOyB9XG5cbi5kaXJlY3QtY2hhdC13YXJuaW5nIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgYm9yZGVyLWNvbG9yOiAjZjM5YzEyO1xuICBjb2xvcjogI2ZmZjsgfVxuICAuZGlyZWN0LWNoYXQtd2FybmluZyAucmlnaHQgPiAuZGlyZWN0LWNoYXQtdGV4dDphZnRlciwgLmRpcmVjdC1jaGF0LXdhcm5pbmcgLnJpZ2h0ID4gLmRpcmVjdC1jaGF0LXRleHQ6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2YzOWMxMjsgfVxuXG4uZGlyZWN0LWNoYXQtaW5mbyAucmlnaHQgPiAuZGlyZWN0LWNoYXQtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICMwMGMwZWY7XG4gIGJvcmRlci1jb2xvcjogIzAwYzBlZjtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLmRpcmVjdC1jaGF0LWluZm8gLnJpZ2h0ID4gLmRpcmVjdC1jaGF0LXRleHQ6YWZ0ZXIsIC5kaXJlY3QtY2hhdC1pbmZvIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMGMwZWY7IH1cblxuLmRpcmVjdC1jaGF0LXN1Y2Nlc3MgLnJpZ2h0ID4gLmRpcmVjdC1jaGF0LXRleHQge1xuICBiYWNrZ3JvdW5kOiAjMDBhNjVhO1xuICBib3JkZXItY29sb3I6ICMwMGE2NWE7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5kaXJlY3QtY2hhdC1zdWNjZXNzIC5yaWdodCA+IC5kaXJlY3QtY2hhdC10ZXh0OmFmdGVyLCAuZGlyZWN0LWNoYXQtc3VjY2VzcyAucmlnaHQgPiAuZGlyZWN0LWNoYXQtdGV4dDpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBhNjVhOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IFVzZXJzIExpc3RcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4udXNlcnMtbGlzdCA+IGxpIHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAudXNlcnMtbGlzdCA+IGxpIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87IH1cbiAgLnVzZXJzLWxpc3QgPiBsaSA+IGE6aG92ZXIsXG4gIC51c2Vycy1saXN0ID4gbGkgPiBhOmhvdmVyIC51c2Vycy1saXN0LW5hbWUge1xuICAgIGNvbG9yOiAjOTk5OyB9XG5cbi51c2Vycy1saXN0LW5hbWUsXG4udXNlcnMtbGlzdC1kYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnVzZXJzLWxpc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4udXNlcnMtbGlzdC1kYXRlIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4vKlxuICogQ29tcG9uZW50OiBDYXJvdXNlbFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0LCAuY2Fyb3VzZWwtY29udHJvbC5yaWdodCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IH1cblxuLmNhcm91c2VsLWNvbnRyb2wgPiAuZmEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTIwcHg7IH1cblxuLypcbiAqIENvbXBvbmVudDogbW9kYWxcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyOiAwOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpOyB9IH1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmNGY0ZjQ7IH1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmNGY0ZjQ7IH1cblxuLm1vZGFsLXByaW1hcnkgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1wcmltYXJ5IC5tb2RhbC1mb290ZXIge1xuICBib3JkZXItY29sb3I6ICMzMDcwOTU7IH1cblxuLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC13YXJuaW5nIC5tb2RhbC1mb290ZXIge1xuICBib3JkZXItY29sb3I6ICNjODdmMGE7IH1cblxuLm1vZGFsLWluZm8gLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1pbmZvIC5tb2RhbC1mb290ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDk3YmM7IH1cblxuLm1vZGFsLXN1Y2Nlc3MgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1zdWNjZXNzIC5tb2RhbC1mb290ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDczM2U7IH1cblxuLm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyLFxuLm1vZGFsLWRhbmdlciAubW9kYWwtZm9vdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzIzMzIxOyB9XG5cbi8qXG4gKiBDb21wb25lbnQ6IFNvY2lhbCBXaWRnZXRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5ib3gtd2lkZ2V0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLndpZGdldC11c2VyIC53aWRnZXQtdXNlci1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7IH1cblxuLndpZGdldC11c2VyIC53aWRnZXQtdXNlci11c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4ud2lkZ2V0LXVzZXIgLndpZGdldC11c2VyLWRlc2Mge1xuICBtYXJnaW4tdG9wOiAwOyB9XG5cbi53aWRnZXQtdXNlciAud2lkZ2V0LXVzZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjVweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQ1cHg7IH1cbiAgLndpZGdldC11c2VyIC53aWRnZXQtdXNlci1pbWFnZSA+IGltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7IH1cblxuLndpZGdldC11c2VyIC5ib3gtZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7IH1cblxuLndpZGdldC11c2VyLTIgLndpZGdldC11c2VyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDsgfVxuXG4ud2lkZ2V0LXVzZXItMiAud2lkZ2V0LXVzZXItdXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi53aWRnZXQtdXNlci0yIC53aWRnZXQtdXNlci1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4ud2lkZ2V0LXVzZXItMiAud2lkZ2V0LXVzZXItdXNlcm5hbWUsXG4ud2lkZ2V0LXVzZXItMiAud2lkZ2V0LXVzZXItZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4OyB9XG5cbi53aWRnZXQtdXNlci0yIC53aWRnZXQtdXNlci1pbWFnZSA+IGltZyB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi8qXG4gKiBQYWdlOiBNYWlsYm94XG4gKiAtLS0tLS0tLS0tLS0tXG4gKi9cbi5tYWlsYm94LW1lc3NhZ2VzID4gLnRhYmxlIHtcbiAgbWFyZ2luOiAwOyB9XG5cbi5tYWlsYm94LWNvbnRyb2xzIHtcbiAgcGFkZGluZzogNXB4OyB9XG4gIC5tYWlsYm94LWNvbnRyb2xzLndpdGgtYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDsgfVxuXG4ubWFpbGJveC1yZWFkLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgcGFkZGluZzogMTBweDsgfVxuICAubWFpbGJveC1yZWFkLWluZm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDA7IH1cbiAgLm1haWxib3gtcmVhZC1pbmZvIGg1IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4IDAgMCAwOyB9XG5cbi5tYWlsYm94LXJlYWQtdGltZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuLm1haWxib3gtcmVhZC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4ubWFpbGJveC1hdHRhY2htZW50cyBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4ubWFpbGJveC1hdHRhY2htZW50LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NjY7IH1cblxuLm1haWxib3gtYXR0YWNobWVudC1pY29uLFxuLm1haWxib3gtYXR0YWNobWVudC1pbmZvLFxuLm1haWxib3gtYXR0YWNobWVudC1zaXplIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLm1haWxib3gtYXR0YWNobWVudC1pbmZvIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDsgfVxuXG4ubWFpbGJveC1hdHRhY2htZW50LXNpemUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5tYWlsYm94LWF0dGFjaG1lbnQtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogIzY2NjtcbiAgcGFkZGluZzogMjBweCAxMHB4OyB9XG4gIC5tYWlsYm94LWF0dGFjaG1lbnQtaWNvbi5oYXMtaW1nIHtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgLm1haWxib3gtYXR0YWNobWVudC1pY29uLmhhcy1pbWcgPiBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvOyB9XG5cbi8qXG4gKiBQYWdlOiBMb2NrIFNjcmVlblxuICogLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLyogQUREIFRISVMgQ0xBU1MgVE8gVEhFIDxCT0RZPiBUQUcgKi9cbi5sb2Nrc2NyZWVuIHtcbiAgYmFja2dyb3VuZDogI2QyZDZkZTsgfVxuXG4ubG9ja3NjcmVlbi1sb2dvIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgLmxvY2tzY3JlZW4tbG9nbyBhIHtcbiAgICBjb2xvcjogIzQ0NDsgfVxuXG4ubG9ja3NjcmVlbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTsgfVxuXG4vKiBVc2VyIG5hbWUgW29wdGlvbmFsXSAqL1xuLmxvY2tzY3JlZW4gLmxvY2tzY3JlZW4tbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4vKiBXaWxsIGNvbnRhaW4gdGhlIGltYWdlIGFuZCB0aGUgc2lnbiBpbiBmb3JtICovXG4ubG9ja3NjcmVlbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbiAgd2lkdGg6IDI5MHB4OyB9XG5cbi8qIFVzZXIgaW1hZ2UgKi9cbi5sb2Nrc2NyZWVuLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHotaW5kZXg6IDEwOyB9XG4gIC5sb2Nrc2NyZWVuLWltYWdlID4gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4OyB9XG5cbi8qIENvbnRhaW5zIHRoZSBwYXNzd29yZCBpbnB1dCBhbmQgdGhlIGxvZ2luIGJ1dHRvbiAqL1xuLmxvY2tzY3JlZW4tY3JlZGVudGlhbHMge1xuICBtYXJnaW4tbGVmdDogNzBweDsgfVxuICAubG9ja3NjcmVlbi1jcmVkZW50aWFscyAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IDA7IH1cbiAgLmxvY2tzY3JlZW4tY3JlZGVudGlhbHMgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMCAxMHB4OyB9XG5cbi5sb2Nrc2NyZWVuLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cblxuLypcbiAqIFBhZ2U6IExvZ2luICYgUmVnaXN0ZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmxvZ2luLWxvZ28sXG4ucmVnaXN0ZXItbG9nbyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwOyB9XG4gIC5sb2dpbi1sb2dvIGEsXG4gIC5yZWdpc3Rlci1sb2dvIGEge1xuICAgIGNvbG9yOiAjNDQ0OyB9XG5cbi5sb2dpbi1wYWdlLFxuLnJlZ2lzdGVyLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZDJkNmRlOyB9XG5cbi5sb2dpbi1ib3gsXG4ucmVnaXN0ZXItYm94IHtcbiAgd2lkdGg6IDM2MHB4O1xuICBtYXJnaW46IDclIGF1dG87IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmxvZ2luLWJveCxcbiAgICAucmVnaXN0ZXItYm94IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4OyB9IH1cblxuLmxvZ2luLWJveC1ib2R5LFxuLnJlZ2lzdGVyLWJveC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgY29sb3I6ICM2NjY7IH1cbiAgLmxvZ2luLWJveC1ib2R5IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4gIC5yZWdpc3Rlci1ib3gtYm9keSAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogIzc3NzsgfVxuXG4ubG9naW4tYm94LW1zZyxcbi5yZWdpc3Rlci1ib3gtbXNnIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7IH1cblxuLnNvY2lhbC1hdXRoLWxpbmtzIHtcbiAgbWFyZ2luOiAxMHB4IDA7IH1cblxuLypcbiAqIFBhZ2U6IDQwMCBhbmQgNTAwIGVycm9yIHBhZ2VzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmVycm9yLXBhZ2Uge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bzsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuZXJyb3ItcGFnZSB7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG4gIC5lcnJvci1wYWdlID4gLmhlYWRsaW5lIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIC5lcnJvci1wYWdlID4gLmhlYWRsaW5lIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XG4gIC5lcnJvci1wYWdlID4gLmVycm9yLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgLmVycm9yLXBhZ2UgPiAuZXJyb3ItY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cbiAgICAuZXJyb3ItcGFnZSA+IC5lcnJvci1jb250ZW50ID4gaDMge1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIC5lcnJvci1wYWdlID4gLmVycm9yLWNvbnRlbnQgPiBoMyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cblxuLypcbiAqIFBhZ2U6IEludm9pY2VcbiAqIC0tLS0tLS0tLS0tLS1cbiAqL1xuLmludm9pY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAyNXB4OyB9XG5cbi5pbnZvaWNlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4vKlxuICogUGFnZTogUHJvZmlsZVxuICogLS0tLS0tLS0tLS0tLVxuICovXG4ucHJvZmlsZS11c2VyLWltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2QyZDZkZTsgfVxuXG4ucHJvZmlsZS11c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXRvcDogNXB4OyB9XG5cbi5wb3N0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQ2ZGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzY2NjsgfVxuICAucG9zdDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxuICAucG9zdCAudXNlci1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG4vKiFcbiAqIFN0eWxlc2hlZXQgZm9yIHRoZSBEYXRlIFJhbmdlIFBpY2tlciwgZm9yIHVzZSB3aXRoIEJvb3RzdHJhcCAzLnhcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1IERhbiBHcm9zc21hbiAoIGh0dHA6Ly93d3cuZGFuZ3Jvc3NtYW4uaW5mbyApXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbiAqIEJ1aWx0IGZvciBodHRwOi8vd3d3LmltcHJvdmVseS5jb21cbiAqL1xuLmRhdGVyYW5nZXBpY2tlci5kcm9wZG93bi1tZW51IHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB6LWluZGV4OiAzMDAwOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNsZWZ0IC5yYW5nZXMsIC5kYXRlcmFuZ2VwaWNrZXIub3BlbnNsZWZ0IC5jYWxlbmRhciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDRweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zcmlnaHQgLnJhbmdlcywgLmRhdGVyYW5nZXBpY2tlci5vcGVuc3JpZ2h0IC5jYWxlbmRhcixcbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNjZW50ZXIgLnJhbmdlcywgLmRhdGVyYW5nZXBpY2tlci5vcGVuc2NlbnRlciAuY2FsZW5kYXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNHB4OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIuc2luZ2xlIC5yYW5nZXMsIC5kYXRlcmFuZ2VwaWNrZXIuc2luZ2xlIC5jYWxlbmRhciB7XG4gIGZsb2F0OiBub25lOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLnJhbmdlcyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgLnJhbmdlX2lucHV0cyA+IGRpdiB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLnJhbmdlcyAucmFuZ2VfaW5wdXRzID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmctbGVmdDogMTFweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMjcwcHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlci5zaG93LWNhbGVuZGFyIC5jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyLnNpbmdsZSAuY2FsZW5kYXItZGF0ZSB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0aCwgLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQge1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDMycHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAuZGF0ZXJhbmdlcGlja2VyX3N0YXJ0X2lucHV0IGxhYmVsLFxuLmRhdGVyYW5nZXBpY2tlciAuZGF0ZXJhbmdlcGlja2VyX2VuZF9pbnB1dCBsYWJlbCB7XG4gIGNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHRleHQtc2hhZG93OiAjZmZmIDFweCAxcHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogNzRweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgaW5wdXQge1xuICBmb250LXNpemU6IDExcHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIC5pbnB1dC1taW5pIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzU1NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBwYWRkaW5nOiAwIDZweDtcbiAgd2lkdGg6IDc0cHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLnJhbmdlcyBsaSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgY29sb3I6ICMwOGM7XG4gIHBhZGRpbmc6IDNweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIGxpLmFjdGl2ZSwgLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA4YztcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4YztcbiAgY29sb3I6ICNmZmY7IH1cblxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXItZGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyLXRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogOHB4IGF1dG8gMCBhdXRvO1xuICBsaW5lLWhlaWdodDogMzBweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlci5vcGVuc2xlZnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjY2NjO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNsZWZ0OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7IH1cblxuLmRhdGVyYW5nZXBpY2tlci5vcGVuc2NlbnRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJzsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zY2VudGVyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNyaWdodDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogOXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI2NjYztcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiAnJzsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zcmlnaHQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIuZHJvcHVwIHtcbiAgbWFyZ2luLXRvcDogLTVweDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyLmRyb3B1cDpiZWZvcmUge1xuICB0b3A6IGluaXRpYWw7XG4gIGJvdHRvbTogLTdweDtcbiAgYm9yZGVyLWJvdHRvbTogaW5pdGlhbDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNjY2M7IH1cblxuLmRhdGVyYW5nZXBpY2tlci5kcm9wdXA6YWZ0ZXIge1xuICB0b3A6IGluaXRpYWw7XG4gIGJvdHRvbTogLTZweDtcbiAgYm9yZGVyLWJvdHRvbTogaW5pdGlhbDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZCwgLmRhdGVyYW5nZXBpY2tlciB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHRkLm9mZiB7XG4gIGNvbG9yOiAjOTk5OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuZGlzYWJsZWQsIC5kYXRlcmFuZ2VwaWNrZXIgb3B0aW9uLmRpc2FibGVkIHtcbiAgY29sb3I6ICM5OTk7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC5hdmFpbGFibGU6aG92ZXIsIC5kYXRlcmFuZ2VwaWNrZXIgdGguYXZhaWxhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHRkLmluLXJhbmdlIHtcbiAgYmFja2dyb3VuZDogI2ViZjRmODtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC5zdGFydC1kYXRlIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC5lbmQtZGF0ZSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwOyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuc3RhcnQtZGF0ZS5lbmQtZGF0ZSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuYWN0aXZlLCAuZGF0ZXJhbmdlcGlja2VyIHRkLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTdlYmQ7XG4gIGJvcmRlci1jb2xvcjogIzMwNzFhOTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC53ZWVrLCAuZGF0ZXJhbmdlcGlja2VyIHRoLndlZWsge1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNjY2M7IH1cblxuLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QubW9udGhzZWxlY3QsIC5kYXRlcmFuZ2VwaWNrZXIgc2VsZWN0LnllYXJzZWxlY3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5tb250aHNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIHdpZHRoOiA1NiU7IH1cblxuLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QueWVhcnNlbGVjdCB7XG4gIHdpZHRoOiA0MCU7IH1cblxuLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QuaG91cnNlbGVjdCwgLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QubWludXRlc2VsZWN0LCAuZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5zZWNvbmRzZWxlY3QsIC5kYXRlcmFuZ2VwaWNrZXIgc2VsZWN0LmFtcG1zZWxlY3Qge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uZGF0ZXJhbmdlcGlja2VyX3N0YXJ0X2lucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmRhdGVyYW5nZXBpY2tlcl9lbmRfaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMXB4OyB9XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGgubW9udGgge1xuICB3aWR0aDogYXV0bzsgfVxuXG4vKlxuICogUGx1Z2luOiBTZWxlY3QyXG4gKiAtLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1mb2N1cywgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0OmZvY3VzLCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQ6YWN0aXZlLFxuLnNlbGVjdDItc2VsZWN0aW9uLnNlbGVjdDItY29udGFpbmVyLS1mb2N1cyxcbi5zZWxlY3QyLXNlbGVjdGlvbjpmb2N1cyxcbi5zZWxlY3QyLXNlbGVjdGlvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSxcbi5zZWxlY3QyLXNlbGVjdGlvbiAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBoZWlnaHQ6IDM0cHg7IH1cblxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0LnNlbGVjdDItY29udGFpbmVyLS1vcGVuIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M4ZGJjOyB9XG5cbi5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDZkZTtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZFthcmlhLXNlbGVjdGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24ge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IH1cblxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTRweDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXJbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyB7XG4gIGhlaWdodDogMjhweDtcbiAgcmlnaHQ6IDNweDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19hcnJvdyBiIHtcbiAgbWFyZ2luLXRvcDogMDsgfVxuXG4uc2VsZWN0Mi1kcm9wZG93biAuc2VsZWN0Mi1zZWFyY2hfX2ZpZWxkLFxuLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUgLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ2ZGU7IH1cbiAgLnNlbGVjdDItZHJvcGRvd24gLnNlbGVjdDItc2VhcmNoX19maWVsZDpmb2N1cyxcbiAgLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUgLnNlbGVjdDItc2VhcmNoX19maWVsZDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2M4ZGJjOyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGNvbG9yOiAjOTk5OyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZD10cnVlXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cbiAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkPXRydWVdLCAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV06aG92ZXIge1xuICAgIGNvbG9yOiAjNDQ0OyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDZkZTtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZTpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2M4ZGJjOyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gIGJvcmRlci1jb2xvcjogI2QyZDZkZTsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG4gIGJvcmRlci1jb2xvcjogIzM2N2ZhOTtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLW11bHRpcGxlIC5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsgfVxuICAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cblxuLypcbiAqIEdlbmVyYWw6IE1pc2NlbGxhbmVvdXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnBhZCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDsgfVxuXG4ubWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLm1hcmdpbi1ib3R0b20tbm9uZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLm1hcmdpbi1yLTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuXG4uaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lOyB9XG5cbi5kZXNjcmlwdGlvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5kZXNjcmlwdGlvbi1ibG9jay5tYXJnaW4tYm90dG9tIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gIC5kZXNjcmlwdGlvbi1ibG9jayA+IC5kZXNjcmlwdGlvbi1oZWFkZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5kZXNjcmlwdGlvbi1ibG9jayA+IC5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5iZy1yZWQsIC5jYWxsb3V0LmNhbGxvdXQtZGFuZ2VyLCAuYWxlcnQtZGFuZ2VyLFxuLmFsZXJ0LWVycm9yLCAubGFiZWwtZGFuZ2VyLCAubW9kYWwtZGFuZ2VyIC5tb2RhbC1ib2R5LFxuLmJnLXllbGxvdyxcbi5jYWxsb3V0LmNhbGxvdXQtd2FybmluZyxcbi5hbGVydC13YXJuaW5nLFxuLmxhYmVsLXdhcm5pbmcsXG4ubW9kYWwtd2FybmluZyAubW9kYWwtYm9keSxcbi5iZy1hcXVhLFxuLmNhbGxvdXQuY2FsbG91dC1pbmZvLFxuLmFsZXJ0LWluZm8sXG4ubGFiZWwtaW5mbyxcbi5tb2RhbC1pbmZvIC5tb2RhbC1ib2R5LFxuLmJnLWJsdWUsXG4uYmctbGlnaHQtYmx1ZSxcbi5sYWJlbC1wcmltYXJ5LFxuLm1vZGFsLXByaW1hcnkgLm1vZGFsLWJvZHksXG4uYmctZ3JlZW4sXG4uY2FsbG91dC5jYWxsb3V0LXN1Y2Nlc3MsXG4uYWxlcnQtc3VjY2Vzcyxcbi5sYWJlbC1zdWNjZXNzLFxuLm1vZGFsLXN1Y2Nlc3MgLm1vZGFsLWJvZHksXG4uYmctbmF2eSxcbi5iZy10ZWFsLFxuLmJnLW9saXZlLFxuLmJnLWxpbWUsXG4uYmctb3JhbmdlLFxuLmJnLWZ1Y2hzaWEsXG4uYmctcHVycGxlLFxuLmJnLW1hcm9vbixcbi5iZy1ibGFjayxcbi5iZy1yZWQtYWN0aXZlLFxuLm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyLFxuLm1vZGFsLWRhbmdlciAubW9kYWwtZm9vdGVyLFxuLmJnLXllbGxvdy1hY3RpdmUsXG4ubW9kYWwtd2FybmluZyAubW9kYWwtaGVhZGVyLFxuLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWZvb3Rlcixcbi5iZy1hcXVhLWFjdGl2ZSxcbi5tb2RhbC1pbmZvIC5tb2RhbC1oZWFkZXIsXG4ubW9kYWwtaW5mbyAubW9kYWwtZm9vdGVyLFxuLmJnLWJsdWUtYWN0aXZlLFxuLmJnLWxpZ2h0LWJsdWUtYWN0aXZlLFxuLm1vZGFsLXByaW1hcnkgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1wcmltYXJ5IC5tb2RhbC1mb290ZXIsXG4uYmctZ3JlZW4tYWN0aXZlLFxuLm1vZGFsLXN1Y2Nlc3MgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1zdWNjZXNzIC5tb2RhbC1mb290ZXIsXG4uYmctbmF2eS1hY3RpdmUsXG4uYmctdGVhbC1hY3RpdmUsXG4uYmctb2xpdmUtYWN0aXZlLFxuLmJnLWxpbWUtYWN0aXZlLFxuLmJnLW9yYW5nZS1hY3RpdmUsXG4uYmctZnVjaHNpYS1hY3RpdmUsXG4uYmctcHVycGxlLWFjdGl2ZSxcbi5iZy1tYXJvb24tYWN0aXZlLFxuLmJnLWJsYWNrLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLmJnLWdyYXkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDZkZSAhaW1wb3J0YW50OyB9XG5cbi5iZy1ncmF5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzsgfVxuXG4uYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExICFpbXBvcnRhbnQ7IH1cblxuLmJnLXJlZCwgLmNhbGxvdXQuY2FsbG91dC1kYW5nZXIsIC5hbGVydC1kYW5nZXIsXG4uYWxlcnQtZXJyb3IsIC5sYWJlbC1kYW5nZXIsIC5tb2RhbC1kYW5nZXIgLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5ICFpbXBvcnRhbnQ7IH1cblxuLmJnLXllbGxvdywgLmNhbGxvdXQuY2FsbG91dC13YXJuaW5nLCAuYWxlcnQtd2FybmluZywgLmxhYmVsLXdhcm5pbmcsIC5tb2RhbC13YXJuaW5nIC5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMiAhaW1wb3J0YW50OyB9XG5cbi5iZy1hcXVhLCAuY2FsbG91dC5jYWxsb3V0LWluZm8sIC5hbGVydC1pbmZvLCAubGFiZWwtaW5mbywgLm1vZGFsLWluZm8gLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMGVmICFpbXBvcnRhbnQ7IH1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I3ICFpbXBvcnRhbnQ7IH1cblxuLmJnLWxpZ2h0LWJsdWUsIC5sYWJlbC1wcmltYXJ5LCAubW9kYWwtcHJpbWFyeSAubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmMgIWltcG9ydGFudDsgfVxuXG4uYmctZ3JlZW4sIC5jYWxsb3V0LmNhbGxvdXQtc3VjY2VzcywgLmFsZXJ0LXN1Y2Nlc3MsIC5sYWJlbC1zdWNjZXNzLCAubW9kYWwtc3VjY2VzcyAubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE2NWEgIWltcG9ydGFudDsgfVxuXG4uYmctbmF2eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFGM0YgIWltcG9ydGFudDsgfVxuXG4uYmctdGVhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOUNDQ0MgIWltcG9ydGFudDsgfVxuXG4uYmctb2xpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q5OTcwICFpbXBvcnRhbnQ7IH1cblxuLmJnLWxpbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFGRjcwICFpbXBvcnRhbnQ7IH1cblxuLmJnLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjg1MUIgIWltcG9ydGFudDsgfVxuXG4uYmctZnVjaHNpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMDEyQkUgIWltcG9ydGFudDsgfVxuXG4uYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNWNhOCAhaW1wb3J0YW50OyB9XG5cbi5iZy1tYXJvb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwICFpbXBvcnRhbnQ7IH1cblxuLmJnLWdyYXktYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWJiYzggIWltcG9ydGFudDsgfVxuXG4uYmctYmxhY2stYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxuXG4uYmctcmVkLWFjdGl2ZSwgLm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyLFxuLm1vZGFsLWRhbmdlciAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMzcyNCAhaW1wb3J0YW50OyB9XG5cbi5iZy15ZWxsb3ctYWN0aXZlLCAubW9kYWwtd2FybmluZyAubW9kYWwtaGVhZGVyLFxuLm1vZGFsLXdhcm5pbmcgLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjhiMGIgIWltcG9ydGFudDsgfVxuXG4uYmctYXF1YS1hY3RpdmUsIC5tb2RhbC1pbmZvIC5tb2RhbC1oZWFkZXIsXG4ubW9kYWwtaW5mbyAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTdkMCAhaW1wb3J0YW50OyB9XG5cbi5iZy1ibHVlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUzODQgIWltcG9ydGFudDsgfVxuXG4uYmctbGlnaHQtYmx1ZS1hY3RpdmUsIC5tb2RhbC1wcmltYXJ5IC5tb2RhbC1oZWFkZXIsXG4ubW9kYWwtcHJpbWFyeSAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2NhNSAhaW1wb3J0YW50OyB9XG5cbi5iZy1ncmVlbi1hY3RpdmUsIC5tb2RhbC1zdWNjZXNzIC5tb2RhbC1oZWFkZXIsXG4ubW9kYWwtc3VjY2VzcyAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGQ0YyAhaW1wb3J0YW50OyB9XG5cbi5iZy1uYXZ5LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFhMzUgIWltcG9ydGFudDsgfVxuXG4uYmctdGVhbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiYmJiICFpbXBvcnRhbnQ7IH1cblxuLmJnLW9saXZlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjg3NjMgIWltcG9ydGFudDsgfVxuXG4uYmctbGltZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlNzY1ICFpbXBvcnRhbnQ7IH1cblxuLmJnLW9yYW5nZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NzAyICFpbXBvcnRhbnQ7IH1cblxuLmJnLWZ1Y2hzaWEtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMGVhZCAhaW1wb3J0YW50OyB9XG5cbi5iZy1wdXJwbGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTI5OSAhaW1wb3J0YW50OyB9XG5cbi5iZy1tYXJvb24tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMTk1YSAhaW1wb3J0YW50OyB9XG5cbltjbGFzc149XCJiZy1cIl0uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY1O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpOyB9XG5cbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAjZGQ0YjM5ICFpbXBvcnRhbnQ7IH1cblxuLnRleHQteWVsbG93IHtcbiAgY29sb3I6ICNmMzljMTIgIWltcG9ydGFudDsgfVxuXG4udGV4dC1hcXVhIHtcbiAgY29sb3I6ICMwMGMwZWYgIWltcG9ydGFudDsgfVxuXG4udGV4dC1ibHVlIHtcbiAgY29sb3I6ICMwMDczYjcgIWltcG9ydGFudDsgfVxuXG4udGV4dC1ibGFjayB7XG4gIGNvbG9yOiAjMTExICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzAwYTY1YSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWdyYXkge1xuICBjb2xvcjogI2QyZDZkZSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LW5hdnkge1xuICBjb2xvcjogIzAwMUYzRiAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LXRlYWwge1xuICBjb2xvcjogIzM5Q0NDQyAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LW9saXZlIHtcbiAgY29sb3I6ICMzRDk5NzAgIWltcG9ydGFudDsgfVxuXG4udGV4dC1saW1lIHtcbiAgY29sb3I6ICMwMUZGNzAgIWltcG9ydGFudDsgfVxuXG4udGV4dC1vcmFuZ2Uge1xuICBjb2xvcjogI0ZGODUxQiAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWZ1Y2hzaWEge1xuICBjb2xvcjogI0YwMTJCRSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LXB1cnBsZSB7XG4gIGNvbG9yOiAjNjA1Y2E4ICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtbWFyb29uIHtcbiAgY29sb3I6ICNEODFCNjAgIWltcG9ydGFudDsgfVxuXG4ubGluay1tdXRlZCB7XG4gIGNvbG9yOiAjN2E4NjlkOyB9XG4gIC5saW5rLW11dGVkOmhvdmVyLCAubGluay1tdXRlZDpmb2N1cyB7XG4gICAgY29sb3I6ICM2MDZjODQ7IH1cblxuLmxpbmstYmxhY2sge1xuICBjb2xvcjogIzY2NjsgfVxuICAubGluay1ibGFjazpob3ZlciwgLmxpbmstYmxhY2s6Zm9jdXMge1xuICAgIGNvbG9yOiAjOTk5OyB9XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDsgfVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cblxuLm5vLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4ubGlzdC11bnN0eWxlZCwgLmNoYXJ0LWxlZ2VuZCwgLmNvbnRhY3RzLWxpc3QsIC51c2Vycy1saXN0LCAubWFpbGJveC1hdHRhY2htZW50cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG4ubGlzdC1ncm91cC11bmJvcmRlcmVkID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDsgfVxuXG4uZmxhdCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgfVxuXG4udGV4dC1ib2xkLCAudGV4dC1ib2xkLnRhYmxlIHRkLCAudGV4dC1ib2xkLnRhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uanFzdG9vbHRpcCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4uYmctdGVhbC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICMzOUNDQ0MgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgIzM5Q0NDQyksIGNvbG9yLXN0b3AoMSwgIzdhZGRkZCkpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzM5Q0NDQywgIzdhZGRkZCkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICMzOUNDQ0MgMCUsICM3YWRkZGQgMTAwJSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjN2FkZGRkLCAjMzlDQ0NDKSBcIiFpbXBvcnRhbnRcIjtcbiAgZmlsdGVyOiBlKCUgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnRAaW5jbHVkZSBncmFkaWVudChzdGFydENvbG9yc3RyPSclZCcsIGVuZENvbG9yc3RyPSclZCcsIEdyYWRpZW50VHlwZT0wKVwiLCAjN2FkZGRkLCAjMzlDQ0NDKTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmJnLWxpZ2h0LWJsdWUtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAjM2M4ZGJjIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICMzYzhkYmMpLCBjb2xvci1zdG9wKDEsICM2N2E4Y2UpKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChib3R0b20sICMzYzhkYmMsICM2N2E4Y2UpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjM2M4ZGJjIDAlLCAjNjdhOGNlIDEwMCUpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzY3YThjZSwgIzNjOGRiYykgXCIhaW1wb3J0YW50XCI7XG4gIGZpbHRlcjogZSglIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0QGluY2x1ZGUgZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJWQnLCBlbmRDb2xvcnN0cj0nJWQnLCBHcmFkaWVudFR5cGU9MClcIiwgIzY3YThjZSwgIzNjOGRiYyk7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5iZy1ibHVlLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogIzAwNzNiNyBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjMDA3M2I3KSwgY29sb3Itc3RvcCgxLCAjMDA4OWRiKSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMDA3M2I3LCAjMDA4OWRiKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgIzAwNzNiNyAwJSwgIzAwODlkYiAxMDAlKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCMwMDg5ZGIsICMwMDczYjcpIFwiIWltcG9ydGFudFwiO1xuICBmaWx0ZXI6IGUoJSBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdEBpbmNsdWRlIGdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyVkJywgZW5kQ29sb3JzdHI9JyVkJywgR3JhZGllbnRUeXBlPTApXCIsICMwMDg5ZGIsICMwMDczYjcpO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYmctYXF1YS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICMwMGMwZWYgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgIzAwYzBlZiksIGNvbG9yLXN0b3AoMSwgIzE0ZDFmZikpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzAwYzBlZiwgIzE0ZDFmZikgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICMwMGMwZWYgMCUsICMxNGQxZmYgMTAwJSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjMTRkMWZmLCAjMDBjMGVmKSBcIiFpbXBvcnRhbnRcIjtcbiAgZmlsdGVyOiBlKCUgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnRAaW5jbHVkZSBncmFkaWVudChzdGFydENvbG9yc3RyPSclZCcsIGVuZENvbG9yc3RyPSclZCcsIEdyYWRpZW50VHlwZT0wKVwiLCAjMTRkMWZmLCAjMDBjMGVmKTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmJnLXllbGxvdy1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICNmMzljMTIgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgI2YzOWMxMiksIGNvbG9yLXN0b3AoMSwgI2Y3YmM2MCkpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgI2YzOWMxMiwgI2Y3YmM2MCkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICNmMzljMTIgMCUsICNmN2JjNjAgMTAwJSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjZjdiYzYwLCAjZjM5YzEyKSBcIiFpbXBvcnRhbnRcIjtcbiAgZmlsdGVyOiBlKCUgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnRAaW5jbHVkZSBncmFkaWVudChzdGFydENvbG9yc3RyPSclZCcsIGVuZENvbG9yc3RyPSclZCcsIEdyYWRpZW50VHlwZT0wKVwiLCAjZjdiYzYwLCAjZjM5YzEyKTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmJnLXB1cnBsZS1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICM2MDVjYTggXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgIzYwNWNhOCksIGNvbG9yLXN0b3AoMSwgIzk0OTFjNCkpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgIzYwNWNhOCwgIzk0OTFjNCkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGNlbnRlciBib3R0b20sICM2MDVjYTggMCUsICM5NDkxYzQgMTAwJSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgjOTQ5MWM0LCAjNjA1Y2E4KSBcIiFpbXBvcnRhbnRcIjtcbiAgZmlsdGVyOiBlKCUgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnRAaW5jbHVkZSBncmFkaWVudChzdGFydENvbG9yc3RyPSclZCcsIGVuZENvbG9yc3RyPSclZCcsIEdyYWRpZW50VHlwZT0wKVwiLCAjOTQ5MWM0LCAjNjA1Y2E4KTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmJnLWdyZWVuLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogIzAwYTY1YSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjMDBhNjVhKSwgY29sb3Itc3RvcCgxLCAjMDBjYTZkKSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMDBhNjVhLCAjMDBjYTZkKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgIzAwYTY1YSAwJSwgIzAwY2E2ZCAxMDAlKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCMwMGNhNmQsICMwMGE2NWEpIFwiIWltcG9ydGFudFwiO1xuICBmaWx0ZXI6IGUoJSBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdEBpbmNsdWRlIGdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyVkJywgZW5kQ29sb3JzdHI9JyVkJywgR3JhZGllbnRUeXBlPTApXCIsICMwMGNhNmQsICMwMGE2NWEpO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYmctcmVkLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI2RkNGIzOSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLCAjZGQ0YjM5KSwgY29sb3Itc3RvcCgxLCAjZTQ3MzY1KSkgXCIhaW1wb3J0YW50XCI7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjZGQ0YjM5LCAjZTQ3MzY1KSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIGJvdHRvbSwgI2RkNGIzOSAwJSwgI2U0NzM2NSAxMDAlKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCNlNDczNjUsICNkZDRiMzkpIFwiIWltcG9ydGFudFwiO1xuICBmaWx0ZXI6IGUoJSBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdEBpbmNsdWRlIGdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyVkJywgZW5kQ29sb3JzdHI9JyVkJywgR3JhZGllbnRUeXBlPTApXCIsICNlNDczNjUsICNkZDRiMzkpO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uYmctYmxhY2stZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAjMTExIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICMxMTEpLCBjb2xvci1zdG9wKDEsICMyYjJiMmIpKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChib3R0b20sICMxMTEsICMyYjJiMmIpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjMTExIDAlLCAjMmIyYjJiIDEwMCUpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzJiMmIyYiwgIzExMSkgXCIhaW1wb3J0YW50XCI7XG4gIGZpbHRlcjogZSglIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0QGluY2x1ZGUgZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJWQnLCBlbmRDb2xvcnN0cj0nJWQnLCBHcmFkaWVudFR5cGU9MClcIiwgIzJiMmIyYiwgIzExMSk7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5iZy1tYXJvb24tZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAjRDgxQjYwIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDAsICNEODFCNjApLCBjb2xvci1zdG9wKDEsICNlNzNmN2MpKSBcIiFpbXBvcnRhbnRcIjtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChib3R0b20sICNEODFCNjAsICNlNzNmN2MpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAjRDgxQjYwIDAlLCAjZTczZjdjIDEwMCUpIFwiIWltcG9ydGFudFwiO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoI2U3M2Y3YywgI0Q4MUI2MCkgXCIhaW1wb3J0YW50XCI7XG4gIGZpbHRlcjogZSglIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0QGluY2x1ZGUgZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nJWQnLCBlbmRDb2xvcnN0cj0nJWQnLCBHcmFkaWVudFR5cGU9MClcIiwgI2U3M2Y3YywgI0Q4MUI2MCk7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5kZXNjcmlwdGlvbi1ibG9jayAuZGVzY3JpcHRpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ubm8tcGFkLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAwOyB9XG5cbi5wb3NpdGlvbi1zdGF0aWMge1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7IH1cblxuLmxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjY2OyB9XG5cbi5saXN0LXNlcGVyYXRvciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBtYXJnaW46IDE1cHggMCA5cHggMDsgfVxuXG4ubGlzdC1saW5rID4gYSB7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6ICM3Nzc7IH1cbiAgLmxpc3QtbGluayA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMjIyOyB9XG5cbi5mb250LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG4udXNlci1ibG9jazpiZWZvcmUsIC51c2VyLWJsb2NrOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cbi51c2VyLWJsb2NrOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7IH1cblxuLnVzZXItYmxvY2sgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLnVzZXItYmxvY2sgLnVzZXJuYW1lLFxuLnVzZXItYmxvY2sgLmRlc2NyaXB0aW9uLFxuLnVzZXItYmxvY2sgLmNvbW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7IH1cblxuLnVzZXItYmxvY2sgLnVzZXJuYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwOyB9XG5cbi51c2VyLWJsb2NrIC5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuLnVzZXItYmxvY2sudXNlci1ibG9jay1zbSAudXNlcm5hbWUsXG4udXNlci1ibG9jay51c2VyLWJsb2NrLXNtIC5kZXNjcmlwdGlvbixcbi51c2VyLWJsb2NrLnVzZXItYmxvY2stc20gLmNvbW1lbnQge1xuICBtYXJnaW4tbGVmdDogNDBweDsgfVxuXG4udXNlci1ibG9jay51c2VyLWJsb2NrLXNtIC51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uaW1nLXNtLCAuYm94LWNvbW1lbnRzIC5ib3gtY29tbWVudCBpbWcsIC51c2VyLWJsb2NrLnVzZXItYmxvY2stc20gaW1nLFxuLmltZy1tZCxcbi5pbWctbGcge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uaW1nLXNtLCAuYm94LWNvbW1lbnRzIC5ib3gtY29tbWVudCBpbWcsIC51c2VyLWJsb2NrLnVzZXItYmxvY2stc20gaW1nIHtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IH1cbiAgLmltZy1zbSArIC5pbWctcHVzaCwgLmJveC1jb21tZW50cyAuYm94LWNvbW1lbnQgaW1nICsgLmltZy1wdXNoLCAudXNlci1ibG9jay51c2VyLWJsb2NrLXNtIGltZyArIC5pbWctcHVzaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cblxuLmltZy1tZCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7IH1cbiAgLmltZy1tZCArIC5pbWctcHVzaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7IH1cblxuLmltZy1sZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDsgfVxuICAuaW1nLWxnICsgLmltZy1wdXNoIHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7IH1cblxuLmltZy1ib3JkZXJlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkMmQ2ZGU7XG4gIHBhZGRpbmc6IDNweDsgfVxuXG4uaW1nLWJvcmRlcmVkLXNtIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZDZkZTtcbiAgcGFkZGluZzogMnB4OyB9XG5cbi5hdHRhY2htZW50LWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3OyB9XG4gIC5hdHRhY2htZW50LWJsb2NrIC5hdHRhY2htZW50LWltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgLmF0dGFjaG1lbnQtYmxvY2sgLmF0dGFjaG1lbnQtcHVzaGVkIHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7IH1cbiAgLmF0dGFjaG1lbnQtYmxvY2sgLmF0dGFjaG1lbnQtaGVhZGluZyB7XG4gICAgbWFyZ2luOiAwOyB9XG4gIC5hdHRhY2htZW50LWJsb2NrIC5hdHRhY2htZW50LXRleHQge1xuICAgIGNvbG9yOiAjNTU1OyB9XG5cbi5jb25uZWN0ZWRTb3J0YWJsZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4OyB9XG5cbi51aS1oZWxwZXItaGlkZGVuLWFjY2Vzc2libGUge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDsgfVxuXG4uc29ydC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uZnVsbC1vcGFjaXR5LWhvdmVyIHtcbiAgb3BhY2l0eTogMC42NTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTsgfVxuICAuZnVsbC1vcGFjaXR5LWhvdmVyOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApOyB9XG5cbi5jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmNoYXJ0IHN2ZyxcbiAgLmNoYXJ0IGNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuXG4vKlxuICogTWlzYzogcHJpbnRcbiAqIC0tLS0tLS0tLS0tXG4gKi9cbkBtZWRpYSBwcmludCB7XG4gIC5uby1wcmludCwgLm1haW4tc2lkZWJhcixcbiAgLmxlZnQtc2lkZSxcbiAgLm1haW4taGVhZGVyLFxuICAuY29udGVudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuY29udGVudC13cmFwcGVyLFxuICAucmlnaHQtc2lkZSxcbiAgLm1haW4tZm9vdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTsgfVxuICAuZml4ZWQgLmNvbnRlbnQtd3JhcHBlcixcbiAgLmZpeGVkIC5yaWdodC1zaWRlIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5pbnZvaWNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgLmludm9pY2UtY29sIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzMuMzMzMzMzMyU7IH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgdHIgdGgsXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUgdHIgdGQge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50OyB9IH1cbiIsIi8vQWRtaW5MVEUgbWl4aW5zXG4vLz09PT09PT09PT09PT09PVxuXG4vL0NoYW5nZXMgdGhlIGNvbG9yIGFuZCB0aGUgaG92ZXJpbmcgcHJvcGVydGllcyBvZiB0aGUgbmF2YmFyXG5AbWl4aW4gbmF2YmFyLXZhcmlhbnQoJGNvbG9yLCAkZm9udC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLCAkaG92ZXItY29sb3I6ICNmNmY2ZjYsICRob3Zlci1iZzogcmdiYSgwLCAwLCAwLCAwLjEpKVxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIC8vTmF2YmFyIGxpbmtzXG4gIC5uYXYgPiBsaSA+IGEge1xuICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcbiAgfVxuXG4gIC5uYXYgPiBsaSA+IGE6aG92ZXIsXG4gIC5uYXYgPiBsaSA+IGE6YWN0aXZlLFxuICAubmF2ID4gbGkgPiBhOmZvY3VzLFxuICAubmF2IC5vcGVuID4gYSxcbiAgLm5hdiAub3BlbiA+IGE6aG92ZXIsXG4gIC5uYXYgLm9wZW4gPiBhOmZvY3VzLFxuICAubmF2ID4gLmFjdGl2ZSA+IGEge1xuICAgIGJhY2tncm91bmQ6ICRob3Zlci1iZztcbiAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICB9XG5cbiAgLy9BZGQgY29sb3IgdG8gdGhlIHNpZGViYXIgdG9nZ2xlIGJ1dHRvblxuICAuc2lkZWJhci10b2dnbGUge1xuICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAkaG92ZXItYmc7XG4gICAgfVxuICB9XG59XG5cbi8vTG9nbyBjb2xvciB2YXJpYXRpb25cbkBtaXhpbiBsb2dvLXZhcmlhbnQoJGJnLWNvbG9yLCAkY29sb3I6ICNmZmYsICRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCwgJGJvcmRlci1ib3R0b20td2lkdGg6IDApXG57XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgY29sb3I6ICRjb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci1ib3R0b20td2lkdGggc29saWQgJGJvcmRlci1ib3R0b20tY29sb3I7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiZy1jb2xvciwgMSUpO1xuICB9XG59XG5cbi8vQm94IHNvbGlkIGNvbG9yIHZhcmlhbnRpb24gY3JlYXRvclxuQG1peGluIGJveC1zb2xpZC12YXJpYW50KCRjb2xvciwgJHRleHQtY29sb3I6ICNmZmYpXG57XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcjtcbiAgPiAuYm94LWhlYWRlciB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgYSxcbiAgICAuYnRuIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy9EaXJlY3QgQ2hhdCBWYXJpYW50XG5AbWl4aW4gZGlyZWN0LWNoYXQtdmFyaWFudCgkYmctY29sb3IsICRjb2xvcjogI2ZmZilcbntcbiAgLnJpZ2h0ID4gLmRpcmVjdC1jaGF0LXRleHQge1xuICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRiZy1jb2xvcjtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgICY6YWZ0ZXIsXG4gICAgJjpiZWZvcmUge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLy9ib3JkZXIgcmFkaXVzIGNyZWF0b3JcbkBtaXhpbiBib3JkZXItcmFkaXVzLWFsbCgkcmFkaXVzKVxue1xuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xufVxuXG4vL0RpZmZlcmVudCByYWRpdXMgZWFjaCBzaWRlXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkdG9wLWxlZnQsICR0b3AtcmlnaHQsICRib3R0b20tbGVmdCwgJGJvdHRvbS1yaWdodClcbntcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1sZWZ0O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1yaWdodDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tcmlnaHQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tbGVmdDtcbn1cblxuLy9HcmFkaWVudCBiYWNrZ3JvdW5kXG5AbWl4aW4gZ3JhZGllbnQoJGNvbG9yOiAjRjVGNUY1LCAkc3RhcnQ6ICNFRUUsICRzdG9wOiAjRkZGLCAkaW1wb3J0YW50OiAnJylcbntcbiAgYmFja2dyb3VuZDogJGNvbG9yICRpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMCwgJHN0YXJ0KSwgY29sb3Itc3RvcCgxLCAkc3RvcCkpICRpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAkc3RhcnQsICRzdG9wKSAkaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgYm90dG9tLCAkc3RhcnQgMCUsICRzdG9wIDEwMCUpICRpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RvcCwgJHN0YXJ0KSAkaW1wb3J0YW50O1xuICBmaWx0ZXI6IGUoJShcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdEBpbmNsdWRlIGdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyVkJywgZW5kQ29sb3JzdHI9JyVkJywgR3JhZGllbnRUeXBlPTApXCIsJHN0b3AsJHN0YXJ0KSk7XG59XG5cbi8vQWRkZWQgMi4xLjBcbi8vU2tpbnMgTWl4aW5zXG5cbi8vRGFyayBTaWRlYmFyIE1peGluXG5AbWl4aW4gc2tpbi1kYXJrLXNpZGViYXIoJGxpbmstaG92ZXItYm9yZGVyLWNvbG9yKVxue1xuICAvLyBTaWRlYmFyIGJhY2tncm91bmQgY29sb3IgKEJvdGggLndyYXBwZXIgYW5kIC5sZWZ0LXNpZGUgYXJlIHJlc3BvbnNpYmxlIGZvciBzaWRlYmFyIGJnIGNvbG9yKVxuICAud3JhcHBlcixcbiAgLm1haW4tc2lkZWJhcixcbiAgLmxlZnQtc2lkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItZGFyay1iZztcbiAgfVxuICAvL1VzZXIgUGFuZWwgKHJlc2lkZXMgaW4gdGhlIHNpZGViYXIpXG4gIC51c2VyLXBhbmVsIHtcbiAgICA+IC5pbmZvLCA+IC5pbmZvID4gYSB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLy9TaWRlYmFyIE1lbnUuIEZpcnN0IGxldmVsIGxpbmtzXG4gIC5zaWRlYmFyLW1lbnUgPiBsaSB7XG4gICAgLy9TZWN0aW9uIEhlYWRuaW5nXG4gICAgJi5oZWFkZXIge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHNpZGViYXItZGFyay1iZywgMjAlKTtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkc2lkZWJhci1kYXJrLWJnLCA0JSk7XG4gICAgfVxuICAgIC8vbGlua3NcbiAgICA+IGEge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLy9Ib3ZlciBhbmQgYWN0aXZlIHN0YXRlc1xuICAgICY6aG92ZXIgPiBhLCAmLmFjdGl2ZSA+IGEge1xuICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1kYXJrLWhvdmVyLWJnO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRsaW5rLWhvdmVyLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gICAgLy9GaXJzdCBMZXZlbCBTdWJtZW51XG4gICAgPiAudHJlZXZpZXctbWVudSB7XG4gICAgICBtYXJnaW46IDAgMXB4O1xuICAgICAgYmFja2dyb3VuZDogJHNpZGViYXItZGFyay1zdWJtZW51LWJnO1xuICAgIH1cbiAgfVxuICAvL0FsbCBsaW5rcyB3aXRoaW4gdGhlIHNpZGViYXIgbWVudVxuICAuc2lkZWJhciBhIHtcbiAgICBjb2xvcjogJHNpZGViYXItZGFyay1jb2xvcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbiAgLy9BbGwgc3VibWVudXNcbiAgLnRyZWV2aWV3LW1lbnUge1xuICAgID4gbGkge1xuICAgICAgPiBhIHtcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstc3VibWVudS1jb2xvcjtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlID4gYSwgPiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstc3VibWVudS1ob3Zlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9UaGUgc2lkZWJhciBzZWFyY2ggZm9ybVxuICAuc2lkZWJhci1mb3JtIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDNweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkc2lkZWJhci1kYXJrLWJnLCAxMCUpO1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuYnRuIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzaWRlYmFyLWRhcmstYmcsIDEwJSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsICR0cmFuc2l0aW9uLXNwZWVkICR0cmFuc2l0aW9uLWZuKTtcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDJweCwgMCwgMnB4LCAwKTtcbiAgICAgICY6Zm9jdXMsICY6Zm9jdXMgKyAuaW5wdXQtZ3JvdXAtYnRuIC5idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICAgICY6Zm9jdXMgKyAuaW5wdXQtZ3JvdXAtYnRuIC5idG4ge1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCwgMnB4LCAwLCAycHgpO1xuICAgIH1cbiAgfVxufVxuXG4vL0xpZ2h0IFNpZGViYXIgTWl4aW5cbkBtaXhpbiBza2luLWxpZ2h0LXNpZGViYXIoJGljb24tYWN0aXZlLWNvbG9yKVxue1xuICAvLyBTaWRlYmFyIGJhY2tncm91bmQgY29sb3IgKEJvdGggLndyYXBwZXIgYW5kIC5sZWZ0LXNpZGUgYXJlIHJlc3BvbnNpYmxlIGZvciBzaWRlYmFyIGJnIGNvbG9yKVxuICAud3JhcHBlcixcbiAgLm1haW4tc2lkZWJhcixcbiAgLmxlZnQtc2lkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItbGlnaHQtYmc7XG4gIH1cbiAgLmNvbnRlbnQtd3JhcHBlcixcbiAgLm1haW4tZm9vdGVyIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmF5O1xuICB9XG4gIC8vVXNlciBQYW5lbCAocmVzaWRlcyBpbiB0aGUgc2lkZWJhcilcbiAgLnVzZXItcGFuZWwge1xuICAgID4gLmluZm8sID4gLmluZm8gPiBhIHtcbiAgICAgIGNvbG9yOiAkc2lkZWJhci1saWdodC1jb2xvcjtcbiAgICB9XG4gIH1cbiAgLy9TaWRlYmFyIE1lbnUuIEZpcnN0IGxldmVsIGxpbmtzXG4gIC5zaWRlYmFyLW1lbnUgPiBsaSB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXItbGVmdC1jb2xvciAuM3MgZWFzZSk7XG4gICAgLy9ib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vU2VjdGlvbiBIZWFkbmluZ1xuICAgICYuaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRzaWRlYmFyLWxpZ2h0LWNvbG9yLCAyNSUpO1xuICAgICAgYmFja2dyb3VuZDogJHNpZGViYXItbGlnaHQtYmc7XG4gICAgfVxuICAgIC8vbGlua3NcbiAgICA+IGEge1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC8vSG92ZXIgYW5kIGFjdGl2ZSBzdGF0ZXNcbiAgICAmOmhvdmVyID4gYSxcbiAgICAmLmFjdGl2ZSA+IGEge1xuICAgICAgY29sb3I6ICRzaWRlYmFyLWxpZ2h0LWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZDogJHNpZGViYXItbGlnaHQtaG92ZXItYmc7XG4gICAgfVxuICAgICY6aG92ZXIgPiBhIHtcblxuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogJGljb24tYWN0aXZlLWNvbG9yO1xuICAgICAgPiBhIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9GaXJzdCBMZXZlbCBTdWJtZW51XG4gICAgPiAudHJlZXZpZXctbWVudSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1saWdodC1zdWJtZW51LWJnO1xuICAgIH1cbiAgfVxuICAvL0FsbCBsaW5rcyB3aXRoaW4gdGhlIHNpZGViYXIgbWVudVxuICAuc2lkZWJhciBhIHtcbiAgICBjb2xvcjogJHNpZGViYXItbGlnaHQtY29sb3I7XG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG4gIC8vQWxsIHN1Ym1lbnVzXG4gIC50cmVldmlldy1tZW51IHtcbiAgICA+IGxpIHtcbiAgICAgID4gYSB7XG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1saWdodC1zdWJtZW51LWNvbG9yO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUgPiBhLFxuICAgICAgPiBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLWxpZ2h0LXN1Ym1lbnUtaG92ZXItY29sb3I7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSA+IGEge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL1RoZSBzaWRlYmFyIHNlYXJjaCBmb3JtXG4gIC5zaWRlYmFyLWZvcm0ge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoM3B4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheTsgLy9kYXJrZW4oJHNpZGViYXItbGlnaHQtYmcsIDUlKTtcbiAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgICAuYnRuIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvL2Rhcmtlbigkc2lkZWJhci1saWdodC1iZywgMyUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAkdHJhbnNpdGlvbi1zcGVlZCAkdHJhbnNpdGlvbi1mbik7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygycHgsIDAsIDJweCwgMCk7XG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyArIC5pbnB1dC1ncm91cC1idG4gLmJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgICAgJjpmb2N1cyArIC5pbnB1dC1ncm91cC1idG4gLmJ0biB7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwLCAycHgsIDAsIDJweCk7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgICYuc2lkZWJhci1taW5pLnNpZGViYXItY29sbGFwc2Uge1xuICAgICAgLnNpZGViYXItbWVudSA+IGxpID4gLnRyZWV2aWV3LW1lbnUge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogU2lkZWJhclxuICogLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi8vTWFpbiBTaWRlYmFyXG4vLyBgYGAgLmxlZnQtc2lkZSBoYXMgYmVlbiBkZXByZWNhdGVkIGFzIG9mIDIuMC4wIGluIGZhdm9yIG9mIC5tYWluLXNpZGViYXIgYGBgXG5cbi5tYWluLXNpZGViYXIsXG4ubGVmdC1zaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHNpZGViYXItd2lkdGg7XG4gIHotaW5kZXg6IDgxMDtcbiAgLy9Vc2luZyBkaXNwb3NhYmxlIHZhcmlhYmxlIHRvIGpvaW4gc3RhdGVtZW50cyB3aXRoIGEgY29tbWFcbiAgJHRyYW5zaXRpb24tcnVsZTogJHRyYW5zaXRpb24tc3BlZWQgJHRyYW5zaXRpb24tZm4sXG4gIHdpZHRoICR0cmFuc2l0aW9uLXNwZWVkICR0cmFuc2l0aW9uLWZuO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSgkdHJhbnNpdGlvbi1ydWxlKTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4taGVhZGVyLWNvbGxhcHNlKSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtJHNpZGViYXItd2lkdGgsIDApO1xuICB9XG4gIC5zaWRlYmFyLWNvbGxhcHNlICYge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtKSB7XG4gICAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLSRzaWRlYmFyLXdpZHRoLCAwKTtcbiAgICB9XG4gIH1cbiAgLnNpZGViYXItb3BlbiAmIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLy8gcmVtb3ZlIGJvcmRlciBmcm9tIGZvcm1cbi5zaWRlYmFyLWZvcm0ge1xuICBpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vL1NpZGViYXIgdXNlciBwYW5lbFxuLnVzZXItcGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICA+IC5pbWFnZSA+IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICA+IC5pbmZvIHtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1NXB4O1xuICAgID4gcCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIH1cbiAgICA+IGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgPiAuZmEsXG4gICAgICA+IC5pb24sXG4gICAgICA+IC5nbHlwaGljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gU2lkZWJhciBtZW51XG4uc2lkZWJhci1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvL0ZpcnN0IExldmVsXG4gID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICA+IGEge1xuICAgICAgcGFkZGluZzogMTJweCA1cHggMTJweCAxNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICA+IC5mYSxcbiAgICAgID4gLmdseXBoaWNvbixcbiAgICAgID4gLmlvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubGFiZWwsXG4gICAgLmJhZGdlIHtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgfVxuICBsaS5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMjVweCAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIGxpID4gYSA+IC5mYS1hbmdsZS1sZWZ0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIGxpLmFjdGl2ZSB7XG4gICAgPiBhID4gLmZhLWFuZ2xlLWxlZnQge1xuICAgICAgQGluY2x1ZGUgcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgID4gLnRyZWV2aWV3LW1lbnUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLy8gVHJlZSB2aWV3IG1lbnVcbiAgLnRyZWV2aWV3LW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAudHJlZXZpZXctbWVudSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICAgID4gbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgPiBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgPiAuZmEsXG4gICAgICAgID4gLmdseXBoaWNvbixcbiAgICAgICAgPiAuaW9uIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICA+IC5mYS1hbmdsZS1sZWZ0LFxuICAgICAgICA+IC5mYS1hbmdsZS1kb3duIHtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogU2lkZWJhciBNaW5pXG4gKi9cblxuLy9BZGQgc2lkZWJhci1taW5pIGNsYXNzIHRvIHRoZSBib2R5IHRhZyB0byBhY3RpdmF0ZSB0aGlzIGZlYXR1cmVcbi5zaWRlYmFyLW1pbmkge1xuICAvL1NpZGViYXIgbWluaSBzaG91bGQgd29yayBvbmx5IG9uIGRldmljZXMgbGFyZ2VyIHRoYW4gJHNjcmVlbi1zbVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbSkge1xuICAgIC8vV2hlbiB0aGUgc2lkZWJhciBpcyBjb2xsYXBzZWQuLi5cbiAgICAmLnNpZGViYXItY29sbGFwc2Uge1xuXG4gICAgICAvL0FwcGx5IHRoZSBuZXcgbWFyZ2luaW5nIHRvIHRoZSBtYWluIGNvbnRlbnQgYW5kIGZvb3RlclxuICAgICAgLmNvbnRlbnQtd3JhcHBlcixcbiAgICAgIC5yaWdodC1zaWRlLFxuICAgICAgLm1haW4tZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogODQwO1xuICAgICAgfVxuXG4gICAgICAvL01vZGlmeSB0aGUgc2lkZWJhciB0byBzaHJpbmsgaW5zdGVhZCBvZiBkaXNhcHBlYXJpbmdcbiAgICAgIC5tYWluLXNpZGViYXIge1xuICAgICAgICAvL0Rvbid0IGdvIGF3YXkhIEp1c3Qgc2hyaW5rXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogODUwO1xuICAgICAgfVxuXG4gICAgICAuc2lkZWJhci1tZW51IHtcbiAgICAgICAgPiBsaSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgID4gYSA+IHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOm5vdCgudHJlZXZpZXcpIHtcbiAgICAgICAgICAgID4gYSA+IHNwYW4ge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgID4gLnRyZWV2aWV3LW1lbnUge1xuICAgICAgICAgICAgLy9BZGQgc29tZSBwYWRkaW5nIHRvIHRoZSB0cmVldmlldyBtZW51XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9TaG93IG1lbnUgaXRlbXMgb24gaG92ZXJcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgIC8vb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+IGEgPiBzcGFuOm5vdCgucHVsbC1yaWdodCksXG4gICAgICAgICAgICA+IC50cmVldmlldy1tZW51IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogJHNpZGViYXItd2lkdGggLSA1MDtcbiAgICAgICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9wb3NpdGlvbiB0aGUgaGVhZGVyICYgdHJlZXZpZXcgbWVudXNcbiAgICAgICAgICAgID4gYSA+IHNwYW4ge1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDVweCAxMnB4IDIwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA+IC50cmVldmlldy1tZW51IHtcbiAgICAgICAgICAgICAgdG9wOiA0NHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9NYWtlIHRoZSBzaWRlYmFyIGxpbmtzLCBtZW51cywgbGFiZWxzLCBiYWRnZXNcbiAgICAgIC8vYW5kIGFuZ2xlIGljb25zIGRpc2FwcGVhclxuICAgICAgLm1haW4tc2lkZWJhciAudXNlci1wYW5lbCA+IC5pbmZvLFxuICAgICAgLnNpZGViYXItZm9ybSxcbiAgICAgIC5zaWRlYmFyLW1lbnUgPiBsaSA+IGEgPiBzcGFuLFxuICAgICAgLnNpZGViYXItbWVudSA+IGxpID4gLnRyZWV2aWV3LW1lbnUsXG4gICAgICAuc2lkZWJhci1tZW51ID4gbGkgPiBhID4gLnB1bGwtcmlnaHQsXG4gICAgICAuc2lkZWJhci1tZW51IGxpLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgIC8vTGV0J3MgbWFrZSB0aGUgbG9nbyBhbHNvIHNocmluayBhbmQgdGhlIG1pbmkgbG9nbyB0byBhcHBlYXJcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgID4gLmxvZ28tbWluaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgID4gLmxvZ28tbGcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1NpbmNlIHRoZSBsb2dvIGdvdCBzbWFsbGVyLCB3ZSBuZWVkIHRvIGZpeCB0aGUgbmF2YmFyJ3MgcG9zaXRpb25cbiAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy9BIGZpeCBmb3IgdGV4dCBvdmVyZmxvdyB3aGlsZSB0cmFuc2l0aW9uaW5nIGZyb20gc2lkZWJhciBtaW5pIHRvIGZ1bGwgc2lkZWJhclxuLnNpZGViYXItbWVudSxcbi5tYWluLXNpZGViYXIgLnVzZXItcGFuZWwsXG4uc2lkZWJhci1tZW51ID4gbGkuaGVhZGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXItbWVudTpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uc2lkZWJhci1mb3JtLFxuLnNpZGViYXItbWVudSA+IGxpLmhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG59XG5cbi5zaWRlYmFyLW1lbnUgbGkgPiBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA+IC5wdWxsLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogQ29udHJvbCBzaWRlYmFyLiBCeSBkZWZhdWx0LCB0aGlzIGlzIHRoZSByaWdodCBzaWRlYmFyLlxuICovXG4vL1RoZSBzaWRlYmFyJ3MgYmFja2dyb3VuZCBjb250cm9sIGNsYXNzXG4vL1RoaXMgaXMgYSBoYWNrIHRvIG1ha2UgdGhlIGJhY2tncm91bmQgdmlzaWJsZSB3aGlsZSBzY3JvbGxpbmdcbi5jb250cm9sLXNpZGViYXItYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLy9UcmFuc2l0aW9uc1xuLmNvbnRyb2wtc2lkZWJhci1iZyxcbi5jb250cm9sLXNpZGViYXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtJGNvbnRyb2wtc2lkZWJhci13aWR0aDtcbiAgd2lkdGg6ICRjb250cm9sLXNpZGViYXItd2lkdGg7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24ocmlnaHQgJHRyYW5zaXRpb24tc3BlZWQgZWFzZS1pbi1vdXQpO1xufVxuXG4vL1RoZSBzaWRlYmFyXG4uY29udHJvbC1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogJG5hdmJhci1oZWlnaHQ7XG4gIHotaW5kZXg6IDEwMTA7XG4gIC8vRml4IHBvc2l0aW9uIGFmdGVyIGhlYWRlciBjb2xsYXBzZVxuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbSkge1xuICAgIHBhZGRpbmctdG9wOiAkbmF2YmFyLWhlaWdodCArIDUwO1xuICB9XG4gIC8vVGFiIHBhbmVzXG4gID4gLnRhYi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbiAgLy9PcGVuIHN0YXRlIHdpdGggc2xpZGUgb3ZlciBjb250ZW50IGVmZmVjdFxuICAmLmNvbnRyb2wtc2lkZWJhci1vcGVuIHtcbiAgICAmLFxuICAgICsgLmNvbnRyb2wtc2lkZWJhci1iZyB7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLy9PcGVuIHdpdGhvdXQgc2xpZGUgb3ZlciBjb250ZW50XG4uY29udHJvbC1zaWRlYmFyLW9wZW4ge1xuICAuY29udHJvbC1zaWRlYmFyLWJnLFxuICAuY29udHJvbC1zaWRlYmFyIHtcbiAgICByaWdodDogMDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbSkge1xuICAgIC5jb250ZW50LXdyYXBwZXIsXG4gICAgLnJpZ2h0LXNpZGUsXG4gICAgLm1haW4tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJGNvbnRyb2wtc2lkZWJhci13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuLy9Db250cm9sIHNpZGViYXIgdGFic1xuLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzIHtcbiAgPiBsaSB7XG4gICAgJjpmaXJzdC1vZi10eXBlID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgPiBhIHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDApO1xuXG4gICAgICAvL0hvdmVyIGFuZCBhY3RpdmUgc3RhdGVzXG4gICAgICAmLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC8vQWN0aXZlIHN0YXRlXG4gICAgJi5hY3RpdmUge1xuICAgICAgPiBhIHtcbiAgICAgICAgJixcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9SZW1vdmUgcmVzcG9uc2l2ZW5lc3Mgb24gc21hbGwgc2NyZWVuc1xuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbSkge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgID4gbGkge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB9XG4gIH1cbn1cblxuLy9IZWFkaW5ncyBpbiB0aGUgc2lkZWJhciBjb250ZW50XG4uY29udHJvbC1zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLy9TdWJoZWFkaW5nc1xuLmNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLy9Db250cm9sIFNpZGViYXIgTWVudVxuLmNvbnRyb2wtc2lkZWJhci1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xuICA+IGxpID4gYSB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgPiAuY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmcge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgLm1lbnUtaWNvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLm1lbnUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgID4gLmNvbnRyb2wtc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgPiBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cbiAgLnByb2dyZXNzIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy9EYXJrIHNraW5cbi5jb250cm9sLXNpZGViYXItZGFyayB7XG4gIGNvbG9yOiAkc2lkZWJhci1kYXJrLWNvbG9yO1xuICAvLyBCYWNrZ3JvdW5kXG4gICYsXG4gICsgLmNvbnRyb2wtc2lkZWJhci1iZyB7XG4gICAgYmFja2dyb3VuZDogJHNpZGViYXItZGFyay1iZztcbiAgfVxuICAvLyBTaWRlYmFyIHRhYnNcbiAgLm5hdi10YWJzLmNvbnRyb2wtc2lkZWJhci10YWJzIHtcbiAgICBib3JkZXItYm90dG9tOiBkYXJrZW4oJHNpZGViYXItZGFyay1iZywgMyUpO1xuICAgID4gbGkge1xuICAgICAgPiBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRzaWRlYmFyLWRhcmstYmcsIDUlKTtcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstY29sb3I7XG4gICAgICAgIC8vSG92ZXIgYW5kIGFjdGl2ZSBzdGF0ZXNcbiAgICAgICAgJixcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGRhcmtlbigkc2lkZWJhci1kYXJrLWJnLCA3JSk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZGFya2VuKCRzaWRlYmFyLWRhcmstYmcsIDclKTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRzaWRlYmFyLWRhcmstYmcsIDMlKTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9BY3RpdmUgc3RhdGVcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1kYXJrLWJnO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vSGVhZGluZyAmIHN1YmhlYWRpbmdcbiAgLmNvbnRyb2wtc2lkZWJhci1oZWFkaW5nLFxuICAuY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmcge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC8vU2lkZWJhciBsaXN0XG4gIC5jb250cm9sLXNpZGViYXItbWVudSB7XG4gICAgPiBsaSB7XG4gICAgICA+IGEge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1kYXJrLWhvdmVyLWJnO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51LWluZm8ge1xuICAgICAgICAgID4gcCB7XG4gICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1jb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy9MaWdodCBza2luXG4uY29udHJvbC1zaWRlYmFyLWxpZ2h0IHtcbiAgY29sb3I6IGxpZ2h0ZW4oJHNpZGViYXItbGlnaHQtY29sb3IsIDEwJSk7XG4gIC8vIEJhY2tncm91bmRcbiAgJixcbiAgKyAuY29udHJvbC1zaWRlYmFyLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1saWdodC1iZztcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmF5O1xuICB9XG4gIC8vIFNpZGViYXIgdGFic1xuICAubmF2LXRhYnMuY29udHJvbC1zaWRlYmFyLXRhYnMge1xuICAgIGJvcmRlci1ib3R0b206ICRncmF5O1xuICAgID4gbGkge1xuICAgICAgPiBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRzaWRlYmFyLWxpZ2h0LWJnLCA1JSk7XG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1saWdodC1jb2xvcjtcbiAgICAgICAgLy9Ib3ZlciBhbmQgYWN0aXZlIHN0YXRlc1xuICAgICAgICAmLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJGdyYXk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkc2lkZWJhci1saWdodC1iZywgMyUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL0FjdGl2ZSBzdGF0ZVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzLFxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWxpZ2h0LWJnO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vSGVhZGluZyAmIHN1YmhlYWRpbmdcbiAgLmNvbnRyb2wtc2lkZWJhci1oZWFkaW5nLFxuICAuY29udHJvbC1zaWRlYmFyLXN1YmhlYWRpbmcge1xuICAgIGNvbG9yOiAjMTExO1xuICB9XG4gIC8vU2lkZWJhciBsaXN0XG4gIC5jb250cm9sLXNpZGViYXItbWVudSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xuICAgID4gbGkge1xuICAgICAgPiBhIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHNpZGViYXItbGlnaHQtaG92ZXItYmc7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaW5mbyB7XG4gICAgICAgICAgPiBwIHtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRzaWRlYmFyLWxpZ2h0LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogRHJvcGRvd24gbWVudXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKkRyb3Bkb3ducyBpbiBnZW5lcmFsKi9cbi5kcm9wZG93bi1tZW51IHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlO1xuICA+IGxpID4gYSB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbiAgPiBsaSA+IGEgPiAuZ2x5cGhpY29uLFxuICA+IGxpID4gYSA+IC5mYSxcbiAgPiBsaSA+IGEgPiAuaW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgPiBsaSA+IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGdyYXksIDUlKTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICA+IC5kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB9XG59XG5cbi8vTmF2YmFyIGN1c3RvbSBkcm9wZG93biBtZW51XG4ubmF2YmFyLW5hdiA+IC5ub3RpZmljYXRpb25zLW1lbnUsXG4ubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51LFxuLm5hdmJhci1uYXYgPiAudGFza3MtbWVudSB7XG4gIC8vZml4IHdpZHRoIGFuZCBwYWRkaW5nXG4gID4gLmRyb3Bkb3duLW1lbnUge1xuICAgID4gbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICB3aWR0aDogMjgwcHg7XG4gICAgLy9SZW1vdmUgcGFkZGluZyBhbmQgbWFyZ2luc1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRvcDogMTAwJTtcbiAgfVxuICAvL0RlZmluZSBoZWFkZXIgY2xhc3NcbiAgPiAuZHJvcGRvd24tbWVudSA+IGxpLmhlYWRlciB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg0cHgsIDRweCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAvL0RlZmluZSBmb290ZXIgY2xhc3NcbiAgPiAuZHJvcGRvd24tbWVudSA+IGxpLmZvb3RlciA+IGEge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCwwLCA0cHgsIDRweCk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgY29sb3I6ICM0NDQgIWltcG9ydGFudDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjNDQ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvL0hvdmVyIHN0YXRlXG4gICAgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgfVxuXG4gIC8vQ2xlYXIgaW5uZXIgbWVudSBwYWRkaW5nIGFuZCBtYXJnaW5zXG4gID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgPiBsaSA+IGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBQcmV2ZW50IHRleHQgZnJvbSBicmVha2luZyAqL1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAvLyBIb3ZlIHN0YXRlXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL05vdGlmaWNhdGlvbnMgbWVudVxuLm5hdmJhci1uYXYgPiAubm90aWZpY2F0aW9ucy1tZW51IHtcbiAgPiAuZHJvcGRvd24tbWVudSA+IGxpIC5tZW51IHtcbiAgICAvLyBMaW5rcyBpbnNpZGUgdGhlIG1lbnVcbiAgICA+IGxpID4gYSB7XG4gICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAvLyBJY29ucyBpbnNpZGUgdGhlIG1lbnVcbiAgICAgID4gLmdseXBoaWNvbixcbiAgICAgID4gLmZhLFxuICAgICAgPiAuaW9uIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLy9NZXNzYWdlcyBtZW51XG4ubmF2YmFyLW5hdiA+IC5tZXNzYWdlcy1tZW51IHtcbiAgLy9Jbm5lciBtZW51XG4gID4gLmRyb3Bkb3duLW1lbnUgPiBsaSAubWVudSB7XG4gICAgLy8gTWVzc2FnZXMgbWVudSBpdGVtXG4gICAgPiBsaSA+IGEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgLy9saW5lLWhlaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgIC8vIFVzZXIgaW1hZ2VcbiAgICAgID4gZGl2ID4gaW1nIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byBhdXRvO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgLy8gTWVzc2FnZSBoZWFkaW5nXG4gICAgICA+IGg0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCA0NXB4O1xuICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIFNtYWxsIGZvciBtZXNzYWdlIHRpbWUgZGlzcGxheVxuICAgICAgICA+IHNtYWxsIHtcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IHAge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDQ1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIGNsZWFyZml4KCk7XG5cbiAgICB9XG5cbiAgfVxufVxuXG4vL1Rhc2tzIG1lbnVcbi5uYXZiYXItbmF2ID4gLnRhc2tzLW1lbnUge1xuICA+IC5kcm9wZG93bi1tZW51ID4gbGkgLm1lbnUge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgID4gaDMge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICB9XG5cbiAgICAgID4gLnByb2dyZXNzIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL1VzZXIgbWVudVxuLm5hdmJhci1uYXYgPiAudXNlci1tZW51IHtcbiAgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gICAgcGFkZGluZzogMXB4IDAgMCAwO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgd2lkdGg6IDI4MHB4O1xuXG4gICAgJixcbiAgICA+IC51c2VyLWJvZHkge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoNHB4KTtcbiAgICB9XG4gICAgLy8gSGVhZGVyIG1lbnVcbiAgICA+IGxpLnVzZXItaGVhZGVyIHtcbiAgICAgIGhlaWdodDogMTc1cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gVXNlciBpbWFnZVxuICAgICAgPiBpbWcge1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICB9XG4gICAgICA+IHAge1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAvL3RleHQtc2hhZG93OiAycHggMnB4IDNweCAjMzMzMzMzO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICA+IHNtYWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZW51IEJvZHlcbiAgICA+IC51c2VyLWJvZHkge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNDQ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogIzQ0NCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVudSBGb290ZXJcbiAgICA+IC51c2VyLWZvb3RlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIEBpbmNsdWRlIGNsZWFyZml4KCk7XG4gICAgICAuYnRuLWRlZmF1bHQge1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudXNlci1pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vKiBBZGQgZmFkZSBhbmltYXRpb24gdG8gZHJvcGRvd24gbWVudXMgYnkgYXBwZW5kaW5nXG4gdGhlIGNsYXNzIC5hbmltYXRlZC1kcm9wZG93bi1tZW51IHRvIHRoZSAuZHJvcGRvd24tbWVudSB1bCAob3Igb2wpKi9cbi5vcGVuOm5vdCguZHJvcHVwKSA+IC5hbmltYXRlZC1kcm9wZG93bi1tZW51IHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBAaW5jbHVkZSBhbmltYXRpb24oZmxpcEluWCAuN3MgYm90aCk7XG5cbn1cblxuQGtleWZyYW1lcyBmbGlwSW5YIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG5cbi8qIEZpeCBkcm9wZG93biBtZW51IGluIG5hdmJhcnMgKi9cbi5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiB7XG4gID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICA+IC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gIC5uYXZiYXItY3VzdG9tLW1lbnUgPiAubmF2YmFyLW5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgID4gbGkge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuQG1peGluIGJvcmRlci1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbiIsIi8qXG4gKiBDb21wb25lbnQ6IEZvcm1cbiAqIC0tLS0tLS0tLS0tLS0tLVxuICovXG4uZm9ybS1jb250cm9sIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoJGlucHV0LXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogJGdyYXk7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAmOjotbW96LXBsYWNlaG9sZGVyLFxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNiYmI7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICY6bm90KHNlbGVjdCkge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4uZm9ybS1ncm91cCB7XG4gICYuaGFzLXN1Y2Nlc3Mge1xuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgfVxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZ3JlZW47XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAuaGVscC1ibG9jayB7XG4gICAgICBjb2xvcjogJGdyZWVuO1xuICAgIH1cbiAgfVxuXG4gICYuaGFzLXdhcm5pbmcge1xuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAkeWVsbG93O1xuICAgIH1cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHllbGxvdztcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5oZWxwLWJsb2NrIHtcbiAgICAgIGNvbG9yOiAkeWVsbG93O1xuICAgIH1cbiAgfVxuXG4gICYuaGFzLWVycm9yIHtcbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogJHJlZDtcbiAgICB9XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBib3JkZXItY29sb3I6ICRyZWQ7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAuaGVscC1ibG9jayB7XG4gICAgICBjb2xvcjogJHJlZDtcbiAgICB9XG4gIH1cbn1cblxuLyogSW5wdXQgZ3JvdXAgKi9cbi5pbnB1dC1ncm91cCB7XG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoJGlucHV0LXJhZGl1cyk7XG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi8qIGJ1dHRvbiBncm91cHMgKi9cbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICAuYnRuIHtcbiAgICAmLmJ0bi1mbGF0OmZpcnN0LW9mLXR5cGUsICYuYnRuLWZsYXQ6bGFzdC1vZi10eXBlIHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDApO1xuICAgIH1cbiAgfVxufVxuXG4uaWNoZWNrID4gbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi8qIHN1cHBvcnQgRm9udCBBd2Vzb21lIGljb25zIGluIGZvcm0tY29udHJvbCAqL1xuLmZvcm0tY29udHJvbC1mZWVkYmFjay5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG59XG5cbi5pbnB1dC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2suZmEsXG4uaW5wdXQtZ3JvdXAtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLmZhLFxuLmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2suZmEge1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbn1cblxuLmlucHV0LXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjay5mYSxcbi5pbnB1dC1ncm91cC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2suZmEsXG4uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjay5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xufVxuIiwiLypcbiAqIENvbXBvbmVudDogUHJvZ3Jlc3MgQmFyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8vR2VuZXJhbCBDU1Ncbi5wcm9ncmVzcyxcbi5wcm9ncmVzcyA+IC5wcm9ncmVzcy1iYXIge1xuICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICAmLCAucHJvZ3Jlc3MtYmFyIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgkcHJvZ3Jlc3MtYmFyLWJvcmRlci1yYWRpdXMpO1xuICB9XG59XG5cbi8qIHNpemUgdmFyaWF0aW9uICovXG4ucHJvZ3Jlc3Muc20sXG4ucHJvZ3Jlc3Mtc20ge1xuICBoZWlnaHQ6IDEwcHg7XG4gICYsIC5wcm9ncmVzcy1iYXIge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRwcm9ncmVzcy1iYXItc20tYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuLnByb2dyZXNzLnhzLFxuLnByb2dyZXNzLXhzIHtcbiAgaGVpZ2h0OiA3cHg7XG4gICYsIC5wcm9ncmVzcy1iYXIge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRwcm9ncmVzcy1iYXIteHMtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuLnByb2dyZXNzLnh4cyxcbi5wcm9ncmVzcy14eHMge1xuICBoZWlnaHQ6IDNweDtcbiAgJiwgLnByb2dyZXNzLWJhciB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoJHByb2dyZXNzLWJhci14cy1ib3JkZXItcmFkaXVzKTtcbiAgfVxufVxuXG4vKiBWZXJ0aWNhbCBiYXJzICovXG4ucHJvZ3Jlc3MudmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgPiAucHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLy9TaXplc1xuICAmLnNtLFxuICAmLnByb2dyZXNzLXNtIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuXG4gICYueHMsXG4gICYucHJvZ3Jlc3MteHMge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gICYueHhzLFxuICAmLnByb2dyZXNzLXh4cyB7XG4gICAgd2lkdGg6IDNweDtcbiAgfVxufVxuXG4vL1Byb2dyZXNzIEdyb3Vwc1xuLnByb2dyZXNzLWdyb3VwIHtcbiAgLnByb2dyZXNzLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLnByb2dyZXNzLW51bWJlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi8qIFJlbW92ZSBtYXJnaW5zIGZyb20gcHJvZ3Jlc3MgYmFycyB3aGVuIHB1dCBpbiBhIHRhYmxlICovXG4udGFibGUge1xuICB0ciA+IHRkIC5wcm9ncmVzcyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi8vIFZhcmlhdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5wcm9ncmVzcy1iYXItbGlnaHQtYmx1ZSxcbi5wcm9ncmVzcy1iYXItcHJpbWFyeSB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRsaWdodC1ibHVlKTtcbn1cblxuLnByb2dyZXNzLWJhci1ncmVlbixcbi5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRncmVlbik7XG59XG5cbi5wcm9ncmVzcy1iYXItYXF1YSxcbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRhcXVhKTtcbn1cblxuLnByb2dyZXNzLWJhci15ZWxsb3csXG4ucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xuICBAaW5jbHVkZSBwcm9ncmVzcy1iYXItdmFyaWFudCgkeWVsbG93KTtcbn1cblxuLnByb2dyZXNzLWJhci1yZWQsXG4ucHJvZ3Jlc3MtYmFyLWRhbmdlciB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRyZWQpO1xufVxuIiwiLy8gUHJvZ3Jlc3MgYmFyc1xuXG5AbWl4aW4gcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAvLyBEZXByZWNhdGVkIHBhcmVudCBjbGFzcyByZXF1aXJlbWVudCBhcyBvZiB2My4yLjBcbiAgLnByb2dyZXNzLXN0cmlwZWQgJiB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtc3RyaXBlZDtcbiAgfVxufVxuIiwiLy8gR3JhZGllbnRzXG5cblxuXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFNhZmFyaSA1LjEtNiwgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAjNTU1LCAkb3V0ZXItY29sb3I6ICMzMzMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbiIsIi8qXG4gKiBDb21wb25lbnQ6IFNtYWxsIEJveFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uc21hbGwtYm94IHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm94LXNoYWRvdzogJGJveC1ib3hzaGFkb3c7XG4gIC8vIGNvbnRlbnQgd3JhcHBlclxuICA+IC5pbm5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gID4gLnNtYWxsLWJveC1mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIH1cbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogMDtcblxuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgID4gc21hbGwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cblxuICBoMywgcCB7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC8vIHRoZSBpY29uXG4gIC5pY29uIHtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAkdHJhbnNpdGlvbi1zcGVlZCBsaW5lYXIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG5cbiAgLy8gU21hbGwgYm94IGhvdmVyIHN0YXRlXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICAvLyBBbmltYXRlIGljb25zIG9uIHNtYWxsIGJveCBob3ZlclxuICAgIC5pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogOTVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gIC8vIE5vIG5lZWQgZm9yIGljb25zIG9uIHZlcnkgc21hbGwgZGV2aWNlc1xuICAuc21hbGwtYm94IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBCb3hcbiAqIC0tLS0tLS0tLS0tLS0tXG4gKi9cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRib3gtYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAkYm94LWRlZmF1bHQtYm9yZGVyLXRvcC1jb2xvcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6ICRib3gtYm94c2hhZG93O1xuXG4gIC8vIEJveCBjb2xvciB2YXJpYXRpb25zXG4gICYuYm94LXByaW1hcnkge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRsaWdodC1ibHVlO1xuICB9XG4gICYuYm94LWluZm8ge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRhcXVhO1xuICB9XG4gICYuYm94LWRhbmdlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHJlZDtcbiAgfVxuICAmLmJveC13YXJuaW5nIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkeWVsbG93O1xuICB9XG4gICYuYm94LXN1Y2Nlc3Mge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRncmVlbjtcbiAgfVxuICAmLmJveC1kZWZhdWx0IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkZ3JheTtcbiAgfVxuXG4gIC8vIGNvbGxhcHNlZCBtb2RlXG4gICYuY29sbGFwc2VkLWJveCB7XG4gICAgLmJveC1ib2R5LFxuICAgIC5ib3gtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm5hdi1zdGFja2VkIHtcbiAgICA+IGxpIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm94LWJvcmRlci1jb2xvcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmaXhlZCBoZWlnaHQgdG8gMzAwcHhcbiAgJi5oZWlnaHQtY29udHJvbCB7XG4gICAgLmJveC1ib2R5IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmJvcmRlci1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJveC1ib3JkZXItY29sb3I7XG4gIH1cbiAgLmJvcmRlci1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3gtYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgLy9TT0xJRCBCT1hcbiAgLy8tLS0tLS0tLS1cbiAgLy91c2UgdGhpcyBjbGFzcyB0byBnZXQgYSBjb2xvcmVkIGhlYWRlciBhbmQgYm9yZGVyc1xuXG4gICYuYm94LXNvbGlkIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgID4gLmJveC1oZWFkZXIge1xuICAgICAgLmJ0bi5idG4tZGVmYXVsdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgLmJ0bixcbiAgICAgIGEge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCb3ggY29sb3IgdmFyaWF0aW9uc1xuICAgICYuYm94LWRlZmF1bHQge1xuICAgICAgQGluY2x1ZGUgYm94LXNvbGlkLXZhcmlhbnQoJGdyYXksICM0NDQpO1xuICAgIH1cbiAgICAmLmJveC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIGJveC1zb2xpZC12YXJpYW50KCRsaWdodC1ibHVlKTtcbiAgICB9XG4gICAgJi5ib3gtaW5mbyB7XG4gICAgICBAaW5jbHVkZSBib3gtc29saWQtdmFyaWFudCgkYXF1YSk7XG4gICAgfVxuICAgICYuYm94LWRhbmdlciB7XG4gICAgICBAaW5jbHVkZSBib3gtc29saWQtdmFyaWFudCgkcmVkKTtcbiAgICB9XG4gICAgJi5ib3gtd2FybmluZyB7XG4gICAgICBAaW5jbHVkZSBib3gtc29saWQtdmFyaWFudCgkeWVsbG93KTtcbiAgICB9XG4gICAgJi5ib3gtc3VjY2VzcyB7XG4gICAgICBAaW5jbHVkZSBib3gtc29saWQtdmFyaWFudCgkZ3JlZW4pO1xuICAgIH1cblxuICAgID4gLmJveC1oZWFkZXIgPiAuYm94LXRvb2xzIC5idG4ge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBGaXggZm9udCBjb2xvciBmb3IgdGlsZXNcbiAgICAmW2NsYXNzKj0nYmcnXSB7XG4gICAgICA+IC5ib3gtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvL0JPWCBHUk9VUFxuICAuYm94LWdyb3VwIHtcbiAgICA+IC5ib3gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGpRdWVyeSBLbm9iIGluIGEgYm94XG4gIC5rbm9iLWxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gIH1cbn1cblxuLmJveCxcbi5vdmVybGF5LXdyYXBwZXIge1xuICAvLyBCb3ggb3ZlcmxheSBmb3IgTE9BRElORyBTVEFURSBlZmZlY3RcbiAgPiAub3ZlcmxheSxcbiAgPiAubG9hZGluZy1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAub3ZlcmxheSB7XG4gICAgei1pbmRleDogNTA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRib3gtYm9yZGVyLXJhZGl1cyk7XG4gICAgPiAuZmEge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5vdmVybGF5LmRhcmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxufVxuXG4vL0FkZCBjbGVhcmZpeCB0byBoZWFkZXIsIGJvZHkgYW5kIGZvb3RlclxuLmJveC1oZWFkZXIsXG4uYm94LWJvZHksXG4uYm94LWZvb3RlciB7XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7XG59XG5cbi8vQm94IGhlYWRlclxuLmJveC1oZWFkZXIge1xuICBjb2xvcjogIzQ0NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6ICRib3gtcGFkZGluZztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vQWRkIGJvdHRvbSBib3JkZXJcbiAgJi53aXRoLWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3gtYm9yZGVyLWNvbG9yO1xuICAgIC5jb2xsYXBzZWQtYm94ICYge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvL0ljb25zIGFuZCBib3ggdGl0bGVcbiAgPiAuZmEsXG4gID4gLmdseXBoaWNvbixcbiAgPiAuaW9uLFxuICAuYm94LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICA+IC5mYSxcbiAgPiAuZ2x5cGhpY29uLFxuICA+IC5pb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gID4gLmJveC10b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIFtkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYucHVsbC1yaWdodCB7XG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL0JveCBUb29scyBCdXR0b25zXG4uYnRuLWJveC10b29sIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogZGFya2VuKCRib3gtZGVmYXVsdC1ib3JkZXItdG9wLWNvbG9yLCAyMCUpO1xuICAub3BlbiAmLFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogZGFya2VuKCRib3gtZGVmYXVsdC1ib3JkZXItdG9wLWNvbG9yLCA0MCUpO1xuICB9XG4gICYuYnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4vL0JveCBCb2R5XG4uYm94LWJvZHkge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDAsIDAsICRib3gtYm9yZGVyLXJhZGl1cywgJGJveC1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogJGJveC1wYWRkaW5nO1xuICAubm8taGVhZGVyICYge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRib3gtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbiAgLy8gVGFibGVzIHdpdGhpbiB0aGUgYm94IGJvZHlcbiAgPiAudGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAvLyBDYWxlbmRhciB3aXRoaW4gdGhlIGJveCBib2R5XG4gIC5mYyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG5cbiAgLmZ1bGwtd2lkdGgtY2hhcnQge1xuICAgIG1hcmdpbjogLTE5cHg7XG4gIH1cbiAgJi5uby1wYWRkaW5nIC5mdWxsLXdpZHRoLWNoYXJ0IHtcbiAgICBtYXJnaW46IC05cHg7XG4gIH1cblxuICAuYm94LXBhbmUge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCwgMCwgJGJveC1ib3JkZXItcmFkaXVzLCAwKTtcbiAgfVxuICAuYm94LXBhbmUtcmlnaHQge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCwgMCwgMCwgJGJveC1ib3JkZXItcmFkaXVzKTtcbiAgfVxufVxuXG4vL0JveCBmb290ZXJcbi5ib3gtZm9vdGVyIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwLCAwLCAkYm94LWJvcmRlci1yYWRpdXMsICRib3gtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm94LWJvcmRlci1jb2xvcjtcbiAgcGFkZGluZzogJGJveC1wYWRkaW5nO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94LWZvb3Rlci1iZztcbn1cblxuLmNoYXJ0LWxlZ2VuZCB7XG4gIEBleHRlbmQgLmxpc3QtdW5zdHlsZWQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICA+IGxpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vL0NvbW1lbnQgQm94XG4uYm94LWNvbW1lbnRzIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgLmJveC1jb21tZW50IHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIEBleHRlbmQgLmltZy1zbTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxuICAuY29tbWVudC10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICAudXNlcm5hbWUge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLnRleHQtbXV0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi8vV2lkZ2V0c1xuLy8tLS0tLS0tLS0tLVxuXG4vKiBXaWRnZXQ6IFRPRE8gTElTVCAqL1xuXG4udG9kby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLy8gVG9kbyBsaXN0IGVsZW1lbnRcbiAgPiBsaSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMnB4KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U2ZTdlODtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICBtYXJnaW46IDAgMTBweCAwIDVweDtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAvLyBUaW1lIGxhYmVsc1xuICAgIC5sYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIH1cblxuICAgIC8vIFRvb2xzIGFuZCBvcHRpb25zIGJveFxuICAgIC50b29scyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAvLyBpY29uc1xuICAgICAgPiAuZmEsID4gLmdseXBoaWNvbiwgPiAuaW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgIH1cbiAgICAmOmhvdmVyIC50b29scyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgJi5kb25lIHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgLnRleHQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyYXkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb2xvciB2YXJhaXR5XG4gIC5kYW5nZXIge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcmVkO1xuICB9XG4gIC53YXJuaW5nIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHllbGxvdztcbiAgfVxuICAuaW5mbyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRhcXVhO1xuICB9XG4gIC5zdWNjZXNzIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJGdyZWVuO1xuICB9XG4gIC5wcmltYXJ5IHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIH1cblxuICAuaGFuZGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cblxufVxuXG4vLyBFTkQgVE9ETyBXSURHRVRcblxuLyogQ2hhdCB3aWRnZXQgKERFUFJFQ0FURUQgLSB0aGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBVc2UgRGlyZWN0IENoYXQgaW5zdGVhZCkqL1xuLmNoYXQge1xuICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTBweDtcblxuICAuaXRlbSB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIFRoZSBpbWFnZVxuICAgID4gaW1nIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg1MCUpO1xuICAgIH1cblxuICAgID4gLm9ubGluZSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkZ3JlZW47XG4gICAgfVxuICAgID4gLm9mZmxpbmUge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgJHJlZDtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWVzc2FnZSBib2R5XG4gICAgPiAubWVzc2FnZSB7XG4gICAgICBtYXJnaW4tbGVmdDogNTVweDtcbiAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgPiAubmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBhdHRhY2htZW50XG4gICAgPiAuYXR0YWNobWVudCB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgkYXR0YWNobWVudC1ib3JkZXItcmFkaXVzKTtcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICA+IGg0IHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgID4gcCwgPiAuZmlsZW5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vRU5EIENIQVQgV0lER0VUXG5cbi8vSW5wdXQgaW4gYm94XG4uYm94LWlucHV0IHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLy9BIGZpeCBmb3IgcGFuZWxzIGJvZHkgdGV4dCBjb2xvciB3aGVuIHBsYWNlZCB3aXRoaW5cbi8vIGEgbW9kYWxcbi5tb2RhbCB7XG4gIC5wYW5lbC1ib2R5IHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogSW5mbyBCb3hcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmluZm8tYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAkYm94LWJveHNoYWRvdztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAucHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIG1hcmdpbjogNXB4IC0xMHB4IDVweCAtMTBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICAmLFxuICAgICYgLnByb2dyZXNzLWJhciB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgwKTtcbiAgICB9XG4gICAgLnByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG4uaW5mby1ib3gtaWNvbiB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMnB4LCAwLCAycHgsIDApO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5pbmZvLWJveC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4uaW5mby1ib3gtbnVtYmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wcm9ncmVzcy1kZXNjcmlwdGlvbixcbi5pbmZvLWJveC10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvLWJveC10ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmluZm8tYm94LW1vcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2dyZXNzLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xufVxuIiwiLypcbiAqIENvbXBvbmVudDogVGltZWxpbmVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAvLyBUaGUgbGluZVxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGxlZnQ6IDMxcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDJweCk7XG4gIH1cblxuICA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcblxuICAgIC8vIFRoZSBjb250ZW50XG4gICAgPiAudGltZWxpbmUtaXRlbSB7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCRib3gtYm94c2hhZG93KTtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRib3gtYm9yZGVyLXJhZGl1cyk7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAvLyBUaGUgdGltZSBhbmQgaGVhZGVyXG4gICAgICA+IC50aW1lIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgPiAudGltZWxpbmUtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3gtYm9yZGVyLWNvbG9yO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgID4gYSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSXRlbSBib2R5IGFuZCBmb290ZXJcbiAgICAgID4gLnRpbWVsaW5lLWJvZHksID4gLnRpbWVsaW5lLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBUaGUgaWNvbnNcbiAgICA+IC5mYSxcbiAgICA+IC5nbHlwaGljb24sXG4gICAgPiAuaW9uIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGVmdDogMThweDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cblxuICAvLyBUaW1lIGxhYmVsXG4gID4gLnRpbWUtbGFiZWwge1xuICAgID4gc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoNHB4KTtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWVsaW5lLWludmVyc2Uge1xuICA+IGxpIHtcbiAgICA+IC50aW1lbGluZS1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgICAgID4gLnRpbWVsaW5lLWhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBCdXR0b25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmJ0biB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKCRidG4tYm9yZGVyLXJhZGl1cyk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJGJ0bi1ib3hzaGFkb3cpO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmLnVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICB9XG5cbiAgLy8gRmxhdCBidXR0b25zXG4gICYuYnRuLWZsYXQge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDApO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxuXG4gIC8vIEFjdGl2ZSBzdGF0ZVxuICAmOmFjdGl2ZSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC8vIGlucHV0IGZpbGUgYnRuXG4gICYuYnRuLWZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgID4gaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMCk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLy9CdXR0b24gY29sb3IgdmFyaWF0aW9uc1xuLmJ0bi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgY29sb3I6ICM0NDQ7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICYuaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZjRmNGY0LCA1JSk7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCRsaWdodC1ibHVlLCA1JSk7XG4gICY6aG92ZXIsICY6YWN0aXZlLCAmLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LWJsdWUsIDUlKTtcbiAgfVxufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCRncmVlbiwgNSUpO1xuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJi5ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRncmVlbiwgNSUpO1xuICB9XG59XG5cbi5idG4taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRhcXVhO1xuICBib3JkZXItY29sb3I6IGRhcmtlbigkYXF1YSwgNSUpO1xuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJi5ob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhcXVhLCA1JSk7XG4gIH1cbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xuICBib3JkZXItY29sb3I6IGRhcmtlbigkcmVkLCA1JSk7XG4gICY6aG92ZXIsICY6YWN0aXZlLCAmLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHJlZCwgNSUpO1xuICB9XG59XG5cbi5idG4td2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCR5ZWxsb3csIDUlKTtcbiAgJjpob3ZlciwgJjphY3RpdmUsICYuaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkeWVsbG93LCA1JSk7XG4gIH1cbn1cblxuLmJ0bi1vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNyk7XG4gIH1cbn1cblxuLmJ0bi1saW5rIHtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbn1cblxuLy9HZW5lcmFsIC5idG4gd2l0aCBiZyBjbGFzc1xuLmJ0bltjbGFzcyo9J2JnLSddOmhvdmVyIHtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDAgMTAwcHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcbn1cblxuLy8gQXBwbGljYXRpb24gYnV0dG9uc1xuLmJ0bi1hcHAge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgzcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xuICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBmb250LXNpemU6IDEycHg7XG4gIC8vSWNvbnMgd2l0aGluIHRoZSBidG5cbiAgPiAuZmEsID4gLmdseXBoaWNvbiwgPiAuaW9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcbiAgfVxuXG4gICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIC4xMjUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjEyNSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgLjEyNSk7XG4gIH1cblxuICAvL1RoZSBiYWRnZVxuICA+IC5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbiIsIi8vIE9wYWNpdHlcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHkpIHtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIC8vIElFOCBmaWx0ZXJcbiAgJG9wYWNpdHktaWU6ICgkb3BhY2l0eSAqIDEwMCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0kb3BhY2l0eS1pZSk7XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBDYWxsb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vLyBCYXNlIHN0eWxlcyAocmVnYXJkbGVzcyBvZiB0aGVtZSlcbi5jYWxsb3V0IHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoM3B4KTtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAxNXB4O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlZWU7XG4gIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNlZWU7XG4gICAgfVxuICB9XG4gIGg0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgcDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGNvZGUsXG4gIC5oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICAvLyBUaGVtZXMgZm9yIGRpZmZlcmVudCBjb250ZXh0c1xuICAmLmNhbGxvdXQtZGFuZ2VyIHtcbiAgICBAZXh0ZW5kIC5iZy1yZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHJlZCwgMTAlKTtcbiAgfVxuICAmLmNhbGxvdXQtd2FybmluZyB7XG4gICAgQGV4dGVuZCAuYmcteWVsbG93O1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCR5ZWxsb3csIDEwJSk7XG4gIH1cbiAgJi5jYWxsb3V0LWluZm8ge1xuICAgIEBleHRlbmQgLmJnLWFxdWE7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGFxdWEsIDEwJSk7XG4gIH1cbiAgJi5jYWxsb3V0LXN1Y2Nlc3Mge1xuICAgIEBleHRlbmQgLmJnLWdyZWVuO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRncmVlbiwgMTAlKTtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogYWxlcnRcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uYWxlcnQge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgzcHgpO1xuICBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC4yKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBpbmNsdWRlIG9wYWNpdHkoLjUpO1xuICAgIH1cbiAgfVxuICBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4vL0FsZXJ0IFZhcmlhbnRzXG4uYWxlcnQtc3VjY2VzcyB7XG4gIEBleHRlbmQgLmJnLWdyZWVuO1xuICBib3JkZXItY29sb3I6IGRhcmtlbigkZ3JlZW4sIDUlKTtcbn1cblxuLmFsZXJ0LWRhbmdlcixcbi5hbGVydC1lcnJvciB7XG4gIEBleHRlbmQgLmJnLXJlZDtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHJlZCwgNSUpO1xufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIEBleHRlbmQgLmJnLXllbGxvdztcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHllbGxvdywgNSUpO1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIEBleHRlbmQgLmJnLWFxdWE7XG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCRhcXVhLCA1JSk7XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBOYXZcbiAqIC0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm5hdiB7XG4gID4gbGkgPiBhOmhvdmVyLFxuICA+IGxpID4gYTphY3RpdmUsXG4gID4gbGkgPiBhOmZvY3VzIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG59XG5cbi8qIE5BViBQSUxMUyAqL1xuLm5hdi1waWxscyB7XG4gID4gbGkgPiBhIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgwKTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgPiAuZmEsXG4gICAgPiAuZ2x5cGhpY29uLFxuICAgID4gLmlvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbiAgPiBsaS5hY3RpdmUgPiBhLFxuICA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4gID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIH1cbiAgPiBsaS5hY3RpdmUgPiBhIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi8qIE5BViBTVEFDS0VEICovXG4ubmF2LXN0YWNrZWQge1xuICA+IGxpID4gYSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMCk7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gID4gbGkuYWN0aXZlID4gYSxcbiAgPiBsaS5hY3RpdmUgPiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgfVxuXG4gID4gbGkuaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogIzc3NztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLyogTkFWIFRBQlMgKi9cbi5uYXYtdGFicy1jdXN0b20ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAkYm94LWJveHNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogJGJveC1ib3JkZXItcmFkaXVzO1xuICA+IC5uYXYtdGFicyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmNGY0ZjQ7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJGJveC1ib3JkZXItcmFkaXVzKTtcbiAgICA+IGxpIHtcbiAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICA+IGEge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMCk7XG4gICAgICAgICYudGV4dC1tdXRlZCB7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIH1cbiAgICAgICAgJixcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOm5vdCguYWN0aXZlKSB7XG4gICAgICAgID4gYTpob3ZlcixcbiAgICAgICAgPiBhOmZvY3VzLFxuICAgICAgICA+IGE6YWN0aXZlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICA+IGxpLmFjdGl2ZSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgICAgICYgPiBhLFxuICAgICAgJjpob3ZlciA+IGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIH1cbiAgICAgID4gYSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjRmNGY0O1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgPiBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgJi5hY3RpdmUge1xuICAgICAgICA+IGEge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vUHVsbGVkIHRvIHRoZSByaWdodFxuICAgICYucHVsbC1yaWdodCB7XG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgPiBsaSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICAgID4gbGk6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgID4gbGkuaGVhZGVyIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICA+IC5mYSxcbiAgICAgID4gLmdseXBoaWNvbixcbiAgICAgID4gLmlvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gLnRhYi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGJveC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuXG4gIC5kcm9wZG93bi5vcGVuID4gYSB7XG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbiAgfVxuICAvLyBUYWIgY29sb3IgdmFyaWF0aW9uc1xuICAmLnRhYi1wcmltYXJ5IHtcbiAgICA+IC5uYXYtdGFicyB7XG4gICAgICA+IGxpLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICRsaWdodC1ibHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnRhYi1pbmZvIHtcbiAgICA+IC5uYXYtdGFicyB7XG4gICAgICA+IGxpLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICRhcXVhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnRhYi1kYW5nZXIge1xuICAgID4gLm5hdi10YWJzIHtcbiAgICAgID4gbGkuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHJlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi50YWItd2FybmluZyB7XG4gICAgPiAubmF2LXRhYnMge1xuICAgICAgPiBsaS5hY3RpdmUge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAkeWVsbG93O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnRhYi1zdWNjZXNzIHtcbiAgICA+IC5uYXYtdGFicyB7XG4gICAgICA+IGxpLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICRncmVlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi50YWItZGVmYXVsdCB7XG4gICAgPiAubmF2LXRhYnMge1xuICAgICAgPiBsaS5hY3RpdmUge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAkZ3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogUEFHSU5BVElPTiAqL1xuLnBhZ2luYXRpb24ge1xuICA+IGxpID4gYSB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuICAmLnBhZ2luYXRpb24tZmxhdCB7XG4gICAgPiBsaSA+IGEge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogUHJvZHVjdHMgTGlzdFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5wcm9kdWN0cy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICA+IC5pdGVtIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCgkYm94LWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGJveC1ib3hzaGFkb3cpO1xuICAgIEBpbmNsdWRlIGNsZWFyZml4KCk7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLnByb2R1Y3QtaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICB9XG4gIC5wcm9kdWN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzk5OTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdC1pbi1ib3ggPiAuaXRlbSB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDApO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJveC1ib3JkZXItY29sb3I7XG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBUYWJsZVxuICogLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi50YWJsZSB7XG4gIC8vQ2VsbHNcbiAgPiB0aGVhZCxcbiAgPiB0Ym9keSxcbiAgPiB0Zm9vdCB7XG4gICAgPiB0ciB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm94LWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy90aGVhZCBjZWxsc1xuICA+IHRoZWFkID4gdHIgPiB0aCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRib3gtYm9yZGVyLWNvbG9yO1xuICB9XG4gIC8vcHJvZ3Jlc3MgYmFycyBpbiB0YWJsZXNcbiAgdHIgdGQgLnByb2dyZXNzIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cblxuLy9Cb3JkZXJlZCBUYWJsZVxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJveC1ib3JkZXItY29sb3I7XG4gID4gdGhlYWQsXG4gID4gdGJvZHksXG4gID4gdGZvb3Qge1xuICAgID4gdHIge1xuICAgICAgPiB0aCxcbiAgICAgID4gdGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm94LWJvcmRlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgPiB0aGVhZCA+IHRyIHtcbiAgICA+IHRoLFxuICAgID4gdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUubm8tYm9yZGVyIHtcbiAgJixcbiAgdGQsXG4gIHRoIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLyogLnRleHQtY2VudGVyIGluIHRhYmxlcyAqL1xudGFibGUudGV4dC1jZW50ZXIge1xuICAmLCB0ZCwgdGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udGFibGUuYWxpZ24ge1xuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICB0ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiIsIi8qXG4gKiBDb21wb25lbnQ6IExhYmVsXG4gKiAtLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5sYWJlbC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4ubGFiZWwtZGFuZ2VyIHtcbiAgQGV4dGVuZCAuYmctcmVkO1xufVxuXG4ubGFiZWwtaW5mbyB7XG4gIEBleHRlbmQgLmJnLWFxdWE7XG59XG5cbi5sYWJlbC13YXJuaW5nIHtcbiAgQGV4dGVuZCAuYmcteWVsbG93O1xufVxuXG4ubGFiZWwtcHJpbWFyeSB7XG4gIEBleHRlbmQgLmJnLWxpZ2h0LWJsdWU7XG59XG5cbi5sYWJlbC1zdWNjZXNzIHtcbiAgQGV4dGVuZCAuYmctZ3JlZW47XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBEaXJlY3QgQ2hhdFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uZGlyZWN0LWNoYXQge1xuICAuYm94LWJvZHkge1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAmLmNoYXQtcGFuZS1vcGVuIHtcbiAgICAuZGlyZWN0LWNoYXQtY29udGFjdHMge1xuICAgICAgQGluY2x1ZGUgdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgfVxufVxuXG4uZGlyZWN0LWNoYXQtbWVzc2FnZXMge1xuICBAaW5jbHVkZSB0cmFuc2xhdGUoMCwgMCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZGlyZWN0LWNoYXQtbXNnLFxuLmRpcmVjdC1jaGF0LXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpcmVjdC1jaGF0LW1zZyB7XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kaXJlY3QtY2hhdC1tZXNzYWdlcyxcbi5kaXJlY3QtY2hhdC1jb250YWN0cyB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tdHJhbnNmb3JtKC41cyBlYXNlLWluLW91dCk7XG59XG5cbi5kaXJlY3QtY2hhdC10ZXh0IHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoNXB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogJGRpcmVjdC1jaGF0LWRlZmF1bHQtbXNnLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkZGlyZWN0LWNoYXQtZGVmYXVsdC1tc2ctYm9yZGVyLWNvbG9yO1xuICBtYXJnaW46IDVweCAwIDAgNTBweDtcbiAgY29sb3I6ICRkaXJlY3QtY2hhdC1kZWZhdWx0LWZvbnQtY29sb3I7XG5cbiAgLy9DcmVhdGUgdGhlIGFycm93XG4gICY6YWZ0ZXIsXG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkZGlyZWN0LWNoYXQtZGVmYXVsdC1tc2ctYm9yZGVyLWNvbG9yO1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICB9XG4gIC5yaWdodCAmIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRkaXJlY3QtY2hhdC1kZWZhdWx0LW1zZy1ib3JkZXItY29sb3I7XG4gICAgfVxuICB9XG59XG5cbi5kaXJlY3QtY2hhdC1pbWcge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg1MCUpO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLnJpZ2h0ICYge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG4uZGlyZWN0LWNoYXQtaW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpcmVjdC1jaGF0LW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlyZWN0LWNoYXQtdGltZXN0YW1wIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi8vRGlyZWN0IGNoYXQgY29udGFjdHMgcGFuZVxuLmRpcmVjdC1jaGF0LWNvbnRhY3RzLW9wZW4ge1xuICAuZGlyZWN0LWNoYXQtY29udGFjdHMge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxufVxuXG4uZGlyZWN0LWNoYXQtY29udGFjdHMge1xuICBAaW5jbHVkZSB0cmFuc2xhdGUoMTAxJSwgMCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyZDMyO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8vQ29udGFjdHMgbGlzdCAtLSBmb3IgZGlzcGxheWluZyBjb250YWN0cyBpbiBkaXJlY3QgY2hhdCBjb250YWN0cyBwYW5lXG4uY29udGFjdHMtbGlzdCB7XG4gIEBleHRlbmQgLmxpc3QtdW5zdHlsZWQ7XG4gID4gbGkge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4KCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGFjdHMtbGlzdC1pbWcge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg1MCUpO1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb250YWN0cy1saXN0LWluZm8ge1xuICBtYXJnaW4tbGVmdDogNDVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0cy1saXN0LW5hbWUsXG4uY29udGFjdHMtbGlzdC1zdGF0dXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRhY3RzLWxpc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb250YWN0cy1saXN0LXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRhY3RzLWxpc3QtZGF0ZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY29udGFjdHMtbGlzdC1tc2cge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLy9EaXJlY3QgQ2hhdCBWYXJpYW50c1xuLmRpcmVjdC1jaGF0LWRhbmdlciB7XG4gIEBpbmNsdWRlIGRpcmVjdC1jaGF0LXZhcmlhbnQoJHJlZCk7XG59XG5cbi5kaXJlY3QtY2hhdC1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgZGlyZWN0LWNoYXQtdmFyaWFudCgkbGlnaHQtYmx1ZSk7XG59XG5cbi5kaXJlY3QtY2hhdC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgZGlyZWN0LWNoYXQtdmFyaWFudCgkeWVsbG93KTtcbn1cblxuLmRpcmVjdC1jaGF0LWluZm8ge1xuICBAaW5jbHVkZSBkaXJlY3QtY2hhdC12YXJpYW50KCRhcXVhKTtcbn1cblxuLmRpcmVjdC1jaGF0LXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBkaXJlY3QtY2hhdC12YXJpYW50KCRncmVlbik7XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBVc2VycyBMaXN0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLnVzZXJzLWxpc3Qge1xuICBAZXh0ZW5kIC5saXN0LXVuc3R5bGVkO1xuICA+IGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg1MCUpO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICA+IGE6aG92ZXIge1xuICAgICAgJixcbiAgICAgIC51c2Vycy1saXN0LW5hbWUge1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnVzZXJzLWxpc3QtbmFtZSxcbi51c2Vycy1saXN0LWRhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVzZXJzLWxpc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnVzZXJzLWxpc3QtZGF0ZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEycHg7XG59XG4iLCIvKlxuICogQ29tcG9uZW50OiBDYXJvdXNlbFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uY2Fyb3VzZWwtY29udHJvbCB7XG4gICYubGVmdCxcbiAgJi5yaWdodCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICA+IC5mYSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogbW9kYWxcbiAqIC0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cy1hbGwoMCk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgLjEyNSkpO1xuICBib3JkZXI6IDA7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgLjEyNSkpO1xuICB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm94LWJvcmRlci1jb2xvcjtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICRib3gtYm9yZGVyLWNvbG9yO1xufVxuXG4vL01vZGFsIHZhcmlhbnRzXG4ubW9kYWwtcHJpbWFyeSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBAZXh0ZW5kIC5iZy1saWdodC1ibHVlO1xuICB9XG4gIC5tb2RhbC1oZWFkZXIsXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIEBleHRlbmQgLmJnLWxpZ2h0LWJsdWUtYWN0aXZlO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRsaWdodC1ibHVlLCAxMCUpO1xuICB9XG59XG5cbi5tb2RhbC13YXJuaW5nIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIEBleHRlbmQgLmJnLXllbGxvdztcbiAgfVxuICAubW9kYWwtaGVhZGVyLFxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBAZXh0ZW5kIC5iZy15ZWxsb3ctYWN0aXZlO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCR5ZWxsb3csIDEwJSk7XG4gIH1cbn1cblxuLm1vZGFsLWluZm8ge1xuICAubW9kYWwtYm9keSB7XG4gICAgQGV4dGVuZCAuYmctYXF1YTtcbiAgfVxuICAubW9kYWwtaGVhZGVyLFxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBAZXh0ZW5kIC5iZy1hcXVhLWFjdGl2ZTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYXF1YSwgMTAlKTtcbiAgfVxufVxuXG4ubW9kYWwtc3VjY2VzcyB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBAZXh0ZW5kIC5iZy1ncmVlbjtcbiAgfVxuICAubW9kYWwtaGVhZGVyLFxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBAZXh0ZW5kIC5iZy1ncmVlbi1hY3RpdmU7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGdyZWVuLCAxMCUpO1xuICB9XG59XG5cbi5tb2RhbC1kYW5nZXIge1xuICAubW9kYWwtYm9keSB7XG4gICAgQGV4dGVuZCAuYmctcmVkO1xuICB9XG4gIC5tb2RhbC1oZWFkZXIsXG4gIC5tb2RhbC1mb290ZXIge1xuICAgIEBleHRlbmQgLmJnLXJlZC1hY3RpdmU7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHJlZCwgMTAlKTtcbiAgfVxufVxuIiwiLypcbiAqIENvbXBvbmVudDogU29jaWFsIFdpZGdldHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLy9HZW5lcmFsIHdpZGdldCBzdHlsZVxuLmJveC13aWRnZXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLy9Vc2VyIFdpZGdldCBTdHlsZSAxXG4ud2lkZ2V0LXVzZXIge1xuICAvL1VzZXIgbmFtZSBjb250YWluZXJcbiAgLndpZGdldC11c2VyLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRib3gtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbiAgLy9Vc2VyIG5hbWVcbiAgLndpZGdldC11c2VyLXVzZXJuYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICAvL1VzZXIgc2luZ2xlIGxpbmUgZGVzY3JpcHRpb25cbiAgLndpZGdldC11c2VyLWRlc2Mge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLy9Vc2VyIGltYWdlIGNvbnRhaW5lclxuICAud2lkZ2V0LXVzZXItaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY1cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiAgICA+IGltZyB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gICAgfVxuICB9XG4gIC5ib3gtZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxufVxuXG4vL1VzZXIgV2lkZ2V0IFN0eWxlIDJcbi53aWRnZXQtdXNlci0yIHtcbiAgLy9Vc2VyIG5hbWUgY29udGFpbmVyXG4gIC53aWRnZXQtdXNlci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJGJveC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuICAvL1VzZXIgbmFtZVxuICAud2lkZ2V0LXVzZXItdXNlcm5hbWUge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLy9Vc2VyIHNpbmdsZSBsaW5lIGRlc2NyaXB0aW9uXG4gIC53aWRnZXQtdXNlci1kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC53aWRnZXQtdXNlci11c2VybmFtZSxcbiAgLndpZGdldC11c2VyLWRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICB9XG4gIC8vVXNlciBpbWFnZSBjb250YWluZXJcbiAgLndpZGdldC11c2VyLWltYWdlIHtcbiAgICA+IGltZyB7XG4gICAgICB3aWR0aDogNjVweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxufVxuIiwiLypcbiAqIFBhZ2U6IE1haWxib3hcbiAqIC0tLS0tLS0tLS0tLS1cbiAqL1xuLm1haWxib3gtbWVzc2FnZXMge1xuICA+IC50YWJsZSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5tYWlsYm94LWNvbnRyb2xzIHtcbiAgcGFkZGluZzogNXB4O1xuICAmLndpdGgtYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJveC1ib3JkZXItY29sb3I7XG4gIH1cbn1cblxuLm1haWxib3gtcmVhZC1pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3gtYm9yZGVyLWNvbG9yO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBoNSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAwIDAgMDtcbiAgfVxufVxuXG4ubWFpbGJveC1yZWFkLXRpbWUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWFpbGJveC1yZWFkLW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpbGJveC1hdHRhY2htZW50cyB7XG4gIEBleHRlbmQgLmxpc3QtdW5zdHlsZWQ7XG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG4ubWFpbGJveC1hdHRhY2htZW50LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tYWlsYm94LWF0dGFjaG1lbnQtaWNvbixcbi5tYWlsYm94LWF0dGFjaG1lbnQtaW5mbyxcbi5tYWlsYm94LWF0dGFjaG1lbnQtc2l6ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbGJveC1hdHRhY2htZW50LWluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG4ubWFpbGJveC1hdHRhY2htZW50LXNpemUge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWFpbGJveC1hdHRhY2htZW50LWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgY29sb3I6ICM2NjY7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgJi5oYXMtaW1nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgID4gaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLm1haWxib3gtYXR0YWNobWVudC1jbG9zZSB7XG4gIEBleHRlbmQgLmNsb3NlO1xufVxuIiwiLypcbiAqIFBhZ2U6IExvY2sgU2NyZWVuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLVxuICovXG4vKiBBREQgVEhJUyBDTEFTUyBUTyBUSEUgPEJPRFk+IFRBRyAqL1xuLmxvY2tzY3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAkZ3JheTtcbn1cblxuLmxvY2tzY3JlZW4tbG9nbyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBhIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxufVxuXG4ubG9ja3NjcmVlbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLyogVXNlciBuYW1lIFtvcHRpb25hbF0gKi9cbi5sb2Nrc2NyZWVuIC5sb2Nrc2NyZWVuLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIFdpbGwgY29udGFpbiB0aGUgaW1hZ2UgYW5kIHRoZSBzaWduIGluIGZvcm0gKi9cbi5sb2Nrc2NyZWVuLWl0ZW0ge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg0cHgpO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbiAgd2lkdGg6IDI5MHB4O1xufVxuXG4vKiBVc2VyIGltYWdlICovXG4ubG9ja3NjcmVlbi1pbWFnZSB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMtYWxsKDUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgei1pbmRleDogMTA7XG4gID4gaW1nIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzLWFsbCg1MCUpO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuXG4vKiBDb250YWlucyB0aGUgcGFzc3dvcmQgaW5wdXQgYW5kIHRoZSBsb2dpbiBidXR0b24gKi9cbi5sb2Nrc2NyZWVuLWNyZWRlbnRpYWxzIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogMDtcbiAgfVxuICAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cblxuLmxvY2tzY3JlZW4tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsIi8qXG4gKiBQYWdlOiBMb2dpbiAmIFJlZ2lzdGVyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmxvZ2luLWxvZ28sXG4ucmVnaXN0ZXItbG9nbyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBhIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxufVxuXG4ubG9naW4tcGFnZSxcbi5yZWdpc3Rlci1wYWdlIHtcbiAgYmFja2dyb3VuZDogJGdyYXk7XG59XG5cbi5sb2dpbi1ib3gsXG4ucmVnaXN0ZXItYm94IHtcbiAgd2lkdGg6IDM2MHB4O1xuICBtYXJnaW46IDclIGF1dG87XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtKSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5cbi5sb2dpbi1ib3gtYm9keSxcbi5yZWdpc3Rlci1ib3gtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIGNvbG9yOiAjNjY2O1xuICAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4ubG9naW4tYm94LW1zZyxcbi5yZWdpc3Rlci1ib3gtbXNnIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG5cbi5zb2NpYWwtYXV0aC1saW5rcyB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuIiwiLypcbiAqIFBhZ2U6IDQwMCBhbmQgNTAwIGVycm9yIHBhZ2VzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmVycm9yLXBhZ2Uge1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLy9Gb3IgdGhlIGVycm9yIG51bWJlciBlLmc6IDQwNFxuICA+IC5oZWFkbGluZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC8vRm9yIHRoZSBtZXNzYWdlXG4gID4gLmVycm9yLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxOTBweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICA+IGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiLypcbiAqIFBhZ2U6IEludm9pY2VcbiAqIC0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uaW52b2ljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDI1cHg7XG59XG5cbi5pbnZvaWNlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiIsIi8qXG4gKiBQYWdlOiBQcm9maWxlXG4gKiAtLS0tLS0tLS0tLS0tXG4gKi9cblxuLnByb2ZpbGUtdXNlci1pbWcge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICRncmF5O1xufVxuXG4ucHJvZmlsZS11c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucG9zdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNjY2O1xuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG4gIC51c2VyLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4iLCIvKiFcbiAqIFN0eWxlc2hlZXQgZm9yIHRoZSBEYXRlIFJhbmdlIFBpY2tlciwgZm9yIHVzZSB3aXRoIEJvb3RzdHJhcCAzLnhcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1IERhbiBHcm9zc21hbiAoIGh0dHA6Ly93d3cuZGFuZ3Jvc3NtYW4uaW5mbyApXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbiAqIEJ1aWx0IGZvciBodHRwOi8vd3d3LmltcHJvdmVseS5jb21cbiAqL1xuXG4gLmRhdGVyYW5nZXBpY2tlci5kcm9wZG93bi1tZW51IHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB6LWluZGV4OiAzMDAwO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zbGVmdCAucmFuZ2VzLCAuZGF0ZXJhbmdlcGlja2VyLm9wZW5zbGVmdCAuY2FsZW5kYXIge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNyaWdodCAucmFuZ2VzLCAuZGF0ZXJhbmdlcGlja2VyLm9wZW5zcmlnaHQgLmNhbGVuZGFyLFxuLmRhdGVyYW5nZXBpY2tlci5vcGVuc2NlbnRlciAucmFuZ2VzLCAuZGF0ZXJhbmdlcGlja2VyLm9wZW5zY2VudGVyIC5jYWxlbmRhciB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIuc2luZ2xlIC5yYW5nZXMsIC5kYXRlcmFuZ2VwaWNrZXIuc2luZ2xlIC5jYWxlbmRhciB7XG4gIGZsb2F0OiBub25lO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMge1xuICB3aWR0aDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLnJhbmdlcyAucmFuZ2VfaW5wdXRzPmRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgLnJhbmdlX2lucHV0cz5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMXB4O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMjcwcHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIuc2hvdy1jYWxlbmRhciAuY2FsZW5kYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhci5zaW5nbGUgLmNhbGVuZGFyLWRhdGUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRoLCAuZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZCB7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAuZGF0ZXJhbmdlcGlja2VyX3N0YXJ0X2lucHV0IGxhYmVsLFxuLmRhdGVyYW5nZXBpY2tlciAuZGF0ZXJhbmdlcGlja2VyX2VuZF9pbnB1dCBsYWJlbCB7XG4gIGNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHRleHQtc2hhZG93OiAjZmZmIDFweCAxcHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogNzRweDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgLmlucHV0LW1pbmkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICB3aWR0aDogNzRweDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAucmFuZ2VzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgbGkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGNvbG9yOiAjMDhjO1xuICBwYWRkaW5nOiAzcHggMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgbGkuYWN0aXZlLCAuZGF0ZXJhbmdlcGlja2VyIC5yYW5nZXMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDhjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDhjO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXItZGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhci10aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDhweCBhdXRvIDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlci5vcGVuc2xlZnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIHJpZ2h0OiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjY2NjO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zbGVmdDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zY2VudGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3B4O1xuICBsZWZ0OiAwOyAgXG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNjZW50ZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgbGVmdDogMDsgIFxuICByaWdodDogMDsgIFxuICB3aWR0aDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyLm9wZW5zcmlnaHQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29udGVudDogJyc7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIub3BlbnNyaWdodDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICBsZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogJyc7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIuZHJvcHVwe1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRhdGVyYW5nZXBpY2tlci5kcm9wdXA6YmVmb3Jle1xuICB0b3A6IGluaXRpYWw7XG4gIGJvdHRvbTotN3B4O1xuICBib3JkZXItYm90dG9tOiBpbml0aWFsO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2NjYztcbn1cbi5kYXRlcmFuZ2VwaWNrZXIuZHJvcHVwOmFmdGVye1xuICB0b3A6IGluaXRpYWw7XG4gIGJvdHRvbTotNnB4O1xuICBib3JkZXItYm90dG9tOiBpbml0aWFsO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZjtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQsIC5kYXRlcmFuZ2VwaWNrZXIgdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQub2ZmIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuZGlzYWJsZWQsIC5kYXRlcmFuZ2VwaWNrZXIgb3B0aW9uLmRpc2FibGVkIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuYXZhaWxhYmxlOmhvdmVyLCAuZGF0ZXJhbmdlcGlja2VyIHRoLmF2YWlsYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuaW4tcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZWJmNGY4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC5zdGFydC1kYXRlIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuZW5kLWRhdGUge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciB0ZC5zdGFydC1kYXRlLmVuZC1kYXRlIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQuYWN0aXZlLCAuZGF0ZXJhbmdlcGlja2VyIHRkLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTdlYmQ7XG4gIGJvcmRlci1jb2xvcjogIzMwNzFhOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgdGQud2VlaywgLmRhdGVyYW5nZXBpY2tlciB0aC53ZWVrIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5tb250aHNlbGVjdCwgLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QueWVhcnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5tb250aHNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIHdpZHRoOiA1NiU7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgc2VsZWN0LnllYXJzZWxlY3Qge1xuICB3aWR0aDogNDAlO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5ob3Vyc2VsZWN0LCAuZGF0ZXJhbmdlcGlja2VyIHNlbGVjdC5taW51dGVzZWxlY3QsIC5kYXRlcmFuZ2VwaWNrZXIgc2VsZWN0LnNlY29uZHNlbGVjdCwgLmRhdGVyYW5nZXBpY2tlciBzZWxlY3QuYW1wbXNlbGVjdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyX3N0YXJ0X2lucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXJfZW5kX2lucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7IFxuICBwYWRkaW5nLWxlZnQ6IDExcHhcbn1cblxuLmRhdGVyYW5nZXBpY2tlciB0aC5tb250aCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuIiwiLypcbiAqIFBsdWdpbjogU2VsZWN0MlxuICogLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLy9TaWdubGUgc2VsZWN0XG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQsXG4uc2VsZWN0Mi1zZWxlY3Rpb24ge1xuICAmLnNlbGVjdDItY29udGFpbmVyLS1mb2N1cyxcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1yYWRpdXM7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiB7XG4gIGJvcmRlci1jb2xvcjogJGxpZ2h0LWJsdWU7XG59XG5cbi5zZWxlY3QyLWRyb3Bkb3duIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6ICRpbnB1dC1yYWRpdXM7XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkW2FyaWEtc2VsZWN0ZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUgLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4uc2VsZWN0Mi1jb250YWluZXJbZGlyPVwicnRsXCJdIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fYXJyb3cge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHJpZ2h0OiAzcHg7XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93IGIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc2VsZWN0Mi1kcm9wZG93bixcbi5zZWxlY3QyLXNlYXJjaC0taW5saW5lIHtcbiAgLnNlbGVjdDItc2VhcmNoX19maWVsZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWJsdWU7XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAmLFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxufVxuXG4vL011bHRpcGxlIHNlbGVjdFxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcbiAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LXJhZGl1cztcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgfVxuICB9XG4gICYuc2VsZWN0Mi1jb250YWluZXItLWZvY3VzIC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUge1xuICAgIGJvcmRlci1jb2xvcjogJGdyYXk7XG4gIH1cbn1cblxuLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LWJsdWUsIDUlKTtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSAuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43KTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIC5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIiwiLypcbiAqIEdlbmVyYWw6IE1pc2NlbGxhbmVvdXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLy8gMTBweCBwYWRkaW5nIGFuZCBtYXJnaW5zXG4ucGFkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbS1ub25lIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1hcmdpbi1yLTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLy8gRGlzcGxheSBpbmxpbmVcbi5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8vIERlc2NyaXB0aW9uIEJsb2Nrc1xuLmRlc2NyaXB0aW9uLWJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYubWFyZ2luLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuICA+IC5kZXNjcmlwdGlvbi1oZWFkZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gID4gLmRlc2NyaXB0aW9uLXRleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLy8gQmFja2dyb3VuZCBjb2xvcnNcbi5iZy1yZWQsXG4uYmcteWVsbG93LFxuLmJnLWFxdWEsXG4uYmctYmx1ZSxcbi5iZy1saWdodC1ibHVlLFxuLmJnLWdyZWVuLFxuLmJnLW5hdnksXG4uYmctdGVhbCxcbi5iZy1vbGl2ZSxcbi5iZy1saW1lLFxuLmJnLW9yYW5nZSxcbi5iZy1mdWNoc2lhLFxuLmJnLXB1cnBsZSxcbi5iZy1tYXJvb24sXG4uYmctYmxhY2ssXG4uYmctcmVkLWFjdGl2ZSxcbi5iZy15ZWxsb3ctYWN0aXZlLFxuLmJnLWFxdWEtYWN0aXZlLFxuLmJnLWJsdWUtYWN0aXZlLFxuLmJnLWxpZ2h0LWJsdWUtYWN0aXZlLFxuLmJnLWdyZWVuLWFjdGl2ZSxcbi5iZy1uYXZ5LWFjdGl2ZSxcbi5iZy10ZWFsLWFjdGl2ZSxcbi5iZy1vbGl2ZS1hY3RpdmUsXG4uYmctbGltZS1hY3RpdmUsXG4uYmctb3JhbmdlLWFjdGl2ZSxcbi5iZy1mdWNoc2lhLWFjdGl2ZSxcbi5iZy1wdXJwbGUtYWN0aXZlLFxuLmJnLW1hcm9vbi1hY3RpdmUsXG4uYmctYmxhY2stYWN0aXZlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmJnLWdyYXkge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXkgIWltcG9ydGFudDtcbn1cblxuLmJnLWdyYXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4uYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWQgIWltcG9ydGFudDtcbn1cblxuLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmJnLWFxdWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXF1YSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWUgIWltcG9ydGFudDtcbn1cblxuLmJnLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1uYXZ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnkgIWltcG9ydGFudDtcbn1cblxuLmJnLXRlYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbCAhaW1wb3J0YW50O1xufVxuXG4uYmctb2xpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZSAhaW1wb3J0YW50O1xufVxuXG4uYmctb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZnVjaHNpYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmdWNoc2lhICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wdXJwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1tYXJvb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFyb29uICFpbXBvcnRhbnQ7XG59XG5cbi8vU2V0IG9mIEFjdGl2ZSBCYWNrZ3JvdW5kIENvbG9yc1xuLmJnLWdyYXktYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZ3JheSwgMTAlKSAhaW1wb3J0YW50O1xufVxuXG4uYmctYmxhY2stYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibGFjaywgMTAlKSAhaW1wb3J0YW50O1xufVxuXG4uYmctcmVkLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcmVkICwgNiUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy15ZWxsb3ctYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR5ZWxsb3cgLCA2JSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWFxdWEtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhcXVhICwgNiUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ibHVlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmx1ZSAsIDEwJSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0LWJsdWUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRsaWdodC1ibHVlICwgNiUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ncmVlbi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGdyZWVuICwgNSUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1uYXZ5LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkbmF2eSAsIDIlKSAhaW1wb3J0YW50O1xufVxuXG4uYmctdGVhbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHRlYWwgLCA1JSkgIWltcG9ydGFudDtcbn1cblxuLmJnLW9saXZlLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkb2xpdmUgLCA1JSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpbWUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRsaW1lICwgNSUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1vcmFuZ2UtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRvcmFuZ2UgLCA1JSkgIWltcG9ydGFudDtcbn1cblxuLmJnLWZ1Y2hzaWEtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmdWNoc2lhICwgNSUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wdXJwbGUtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwdXJwbGUgLCA1JSkgIWltcG9ydGFudDtcbn1cblxuLmJnLW1hcm9vbi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJG1hcm9vbiAsIDMlKSAhaW1wb3J0YW50O1xufVxuXG4vL0Rpc2FibGVkIVxuW2NsYXNzXj1cImJnLVwiXS5kaXNhYmxlZCB7XG4gIEBpbmNsdWRlIG9wYWNpdHkoLjY1KTtcbn1cblxuLy8gVGV4dCBjb2xvcnNcbi50ZXh0LXJlZCB7XG4gIGNvbG9yOiAkcmVkICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXllbGxvdyB7XG4gIGNvbG9yOiAkeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWFxdWEge1xuICBjb2xvcjogJGFxdWEgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYmx1ZSB7XG4gIGNvbG9yOiAkYmx1ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ibGFjayB7XG4gIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAkbGlnaHQtYmx1ZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAkZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLnRleHQtZ3JheSB7XG4gIGNvbG9yOiAkZ3JheSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1uYXZ5IHtcbiAgY29sb3I6ICRuYXZ5ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRlYWwge1xuICBjb2xvcjogJHRlYWwgIWltcG9ydGFudDtcbn1cblxuLnRleHQtb2xpdmUge1xuICBjb2xvcjogJG9saXZlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWxpbWUge1xuICBjb2xvcjogJGxpbWUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtb3JhbmdlIHtcbiAgY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZnVjaHNpYSB7XG4gIGNvbG9yOiAkZnVjaHNpYSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wdXJwbGUge1xuICBjb2xvcjogJHB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1tYXJvb24ge1xuICBjb2xvcjogJG1hcm9vbiAhaW1wb3J0YW50O1xufVxuXG4ubGluay1tdXRlZCB7XG4gIGNvbG9yOiBkYXJrZW4oJGdyYXksIDMwJSk7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiBkYXJrZW4oJGdyYXksIDQwJSk7XG4gIH1cbn1cblxuLmxpbmstYmxhY2sge1xuICBjb2xvcjogIzY2NjtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbn1cblxuLy8gSGlkZSBlbGVtZW50cyBieSBkaXNwbGF5IG5vbmUgb25seVxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIFJlbW92ZSBib3JkZXJzXG4ubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8vIFJlbW92ZSBwYWRkaW5nXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLy8gUmVtb3ZlIG1hcmdpbnNcbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLy8gUmVtb3ZlIGJveCBzaGFkb3dcbi5uby1zaGFkb3cge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVuc3R5bGVkIExpc3Rcbi5saXN0LXVuc3R5bGVkIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdC1ncm91cC11bmJvcmRlcmVkIHtcbiAgPiAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4vLyBSZW1vdmUgYm9yZGVyIHJhZGl1c1xuLmZsYXQge1xuICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgJiwgJi50YWJsZSB0ZCwgJi50YWJsZSB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLy8gX2ZpeCBmb3Igc3BhcmtsaW5lIHRvb2x0aXBcbi5qcXN0b29sdGlwIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4vLyBHcmFkaWVudCBCYWNrZ3JvdW5kIGNvbG9yc1xuLmJnLXRlYWwtZ3JhZGllbnQge1xuICBAaW5jbHVkZSBncmFkaWVudCgkdGVhbCwgJHRlYWwsIGxpZ2h0ZW4oJHRlYWwsIDE2JSksIFwiIWltcG9ydGFudFwiKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iZy1saWdodC1ibHVlLWdyYWRpZW50IHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQoJGxpZ2h0LWJsdWUsICRsaWdodC1ibHVlLCBsaWdodGVuKCRsaWdodC1ibHVlLCAxMiUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctYmx1ZS1ncmFkaWVudCB7XG4gIEBpbmNsdWRlIGdyYWRpZW50KCRibHVlLCAkYmx1ZSwgbGlnaHRlbigkYmx1ZSwgNyUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctYXF1YS1ncmFkaWVudCB7XG4gIEBpbmNsdWRlIGdyYWRpZW50KCRhcXVhLCAkYXF1YSwgbGlnaHRlbigkYXF1YSwgNyUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmcteWVsbG93LWdyYWRpZW50IHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQoJHllbGxvdywgJHllbGxvdywgbGlnaHRlbigkeWVsbG93LCAxNiUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctcHVycGxlLWdyYWRpZW50IHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQoJHB1cnBsZSwgJHB1cnBsZSwgbGlnaHRlbigkcHVycGxlLCAxNiUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctZ3JlZW4tZ3JhZGllbnQge1xuICBAaW5jbHVkZSBncmFkaWVudCgkZ3JlZW4sICRncmVlbiwgbGlnaHRlbigkZ3JlZW4sIDclKSwgXCIhaW1wb3J0YW50XCIpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnLXJlZC1ncmFkaWVudCB7XG4gIEBpbmNsdWRlIGdyYWRpZW50KCRyZWQsICRyZWQsIGxpZ2h0ZW4oJHJlZCwgMTAlKSwgXCIhaW1wb3J0YW50XCIpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnLWJsYWNrLWdyYWRpZW50IHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQoJGJsYWNrLCAkYmxhY2ssIGxpZ2h0ZW4oJGJsYWNrLCAxMCUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctbWFyb29uLWdyYWRpZW50IHtcbiAgQGluY2x1ZGUgZ3JhZGllbnQoJG1hcm9vbiwgJG1hcm9vbiwgbGlnaHRlbigkbWFyb29uLCAxMCUpLCBcIiFpbXBvcnRhbnRcIik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vL0Rlc2NyaXB0aW9uIEJsb2NrIEV4dGVuc2lvblxuLmRlc2NyaXB0aW9uLWJsb2NrIHtcbiAgLmRlc2NyaXB0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4vL1JlbW92ZSB0b3AgcGFkZGluZ1xuLm5vLXBhZC10b3Age1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLy9NYWtlIHBvc2l0aW9uIHN0YXRpY1xuLnBvc2l0aW9uLXN0YXRpYyB7XG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbn1cblxuLy9MaXN0IHV0aWxpdHkgY2xhc3Nlc1xuLmxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubGlzdC1zZXBlcmF0b3Ige1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogJGJveC1ib3JkZXItY29sb3I7XG4gIG1hcmdpbjogMTVweCAwIDlweCAwO1xufVxuXG4ubGlzdC1saW5rIHtcbiAgPiBhIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzIyMjtcbiAgICB9XG4gIH1cbn1cblxuLy9MaWdodCBmb250IHdlaWdodFxuLmZvbnQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4vL1VzZXIgYmxvY2tcbi51c2VyLWJsb2NrIHtcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnVzZXJuYW1lLFxuICAuZGVzY3JpcHRpb24sXG4gIC5jb21tZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICAudXNlcm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gICYudXNlci1ibG9jay1zbSB7XG4gICAgaW1nIHtcbiAgICAgIEBleHRlbmQgLmltZy1zbTtcbiAgICB9XG4gICAgLnVzZXJuYW1lLFxuICAgIC5kZXNjcmlwdGlvbixcbiAgICAuY29tbWVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG4gICAgLnVzZXJuYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy9JbWFnZSBzaXplc1xuLmltZy1zbSxcbi5pbWctbWQsXG4uaW1nLWxnIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbWctc20ge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgKyAuaW1nLXB1c2gge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG59XG5cbi5pbWctbWQge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICArIC5pbWctcHVzaCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIH1cbn1cblxuLmltZy1sZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgKyAuaW1nLXB1c2gge1xuICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgfVxufVxuXG4vLyBJbWFnZSBib3JkZXJlZFxuLmltZy1ib3JkZXJlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICRncmF5O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5pbWctYm9yZGVyZWQtc20ge1xuICBib3JkZXI6IDJweCBzb2xpZCAkZ3JheTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4vL0dlbmVyYWwgYXR0YWNoZW1udCBibG9ja1xuLmF0dGFjaG1lbnQtYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm94LWJvcmRlci1jb2xvcjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuXG4gIC5hdHRhY2htZW50LWltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmF0dGFjaG1lbnQtcHVzaGVkIHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gIH1cbiAgLmF0dGFjaG1lbnQtaGVhZGluZyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5hdHRhY2htZW50LXRleHQge1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG59XG5cbi5jb25uZWN0ZWRTb3J0YWJsZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4udWktaGVscGVyLWhpZGRlbi1hY2Nlc3NpYmxlIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi5zb3J0LWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZnVsbC1vcGFjaXR5LWhvdmVyIHtcbiAgQGluY2x1ZGUgb3BhY2l0eSguNjUpO1xuICAmOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KDEpO1xuICB9XG59XG5cbi8vIENoYXJ0c1xuLmNoYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgc3ZnLFxuICBjYW52YXMge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi8qXG4gKiBNaXNjOiBwcmludFxuICogLS0tLS0tLS0tLS1cbiAqL1xuQG1lZGlhIHByaW50IHtcbiAgLy9BZGQgdG8gZWxlbWVudHMgdGhhdCB5b3UgZG8gbm90IHdhbnQgdG8gc2hvdyB3aGVuIHByaW50aW5nXG4gIC5uby1wcmludCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy9FbGVtZW50cyB0aGF0IHdlIHdhbnQgdG8gaGlkZSB3aGVuIHByaW50aW5nXG4gIC5tYWluLXNpZGViYXIsXG4gIC5sZWZ0LXNpZGUsXG4gIC5tYWluLWhlYWRlcixcbiAgLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBAZXh0ZW5kIC5uby1wcmludDtcbiAgfVxuXG4gIC8vVGhpcyBpcyB0aGUgb25seSBlbGVtZW50IHRoYXQgc2hvdWxkIGFwcGVhciwgc28gbGV0J3MgcmVtb3ZlIHRoZSBtYXJnaW5zXG4gIC5jb250ZW50LXdyYXBwZXIsXG4gIC5yaWdodC1zaWRlLFxuICAubWFpbi1mb290ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuXG4gIC5maXhlZCAuY29udGVudC13cmFwcGVyLFxuICAuZml4ZWQgLnJpZ2h0LXNpZGUge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvL0ludm9pY2UgcHJpbnRpbmdcbiAgLmludm9pY2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5pbnZvaWNlLWNvbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMlO1xuICB9XG5cbiAgLy9NYWtlIHN1cmUgdGFibGUgY29udGVudCBkaXNwbGF5cyBwcm9wZXJseVxuICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgPiAudGFibGUgdHIgdGgsXG4gICAgPiAudGFibGUgdHIgdGQge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */
