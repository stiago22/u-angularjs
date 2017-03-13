# 002 - Routing, Params and Views 

The Purpose of this example it's to understand a more depth routing system, involving params and views, those are the following concepts that we want to cover:

* Routes one file or many? `$stateProvider`
* Abstract states `abstract:true`
* Views `ui-view`
* Sending params `$stateParams`

### To Do
Perform the following in the current example:
* Create an `abstract` state for the `dashboard` module, with the following views:
  * Config, use `resolve` in this state to load a `configuration.json` file.
  * Detail, use `params` to send the detail component wanted.
  * Main, dashboard view.
 * Create a `navbar` to navigate in the pages:
   * show the page name, and buttons to login and logout.
   * show the current user name.
   * hidden in home, login and sigin states, but using routes views.
   * navbar should be a directive.
   * use authFactory to get the login data.
 * If the user is already logged in page should not allow him to see login or signin page.

### Next
* 003 - Communicating with servers.