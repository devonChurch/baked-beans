'use strict';

const { Router, Route, IndexRoute, Redirect, Link, IndexLink, browserHistory } = require('react-router');
const React = require('react');
const ReactDOM = require('react-dom');
const Immutable = require('immutable');
const Redux = require('redux');
const deepFreeze = require('deep-freeze');
const mountNode = document.getElementById('app');
const HomePage = require('./home-page');
const ShowPage = require('./show-page');
const EpisodePage = require('./episode-page');

// Home
//   -- Show
//      -- Episode
//      -- Episode
//      -- Episode
//   -- Show
//      -- Episode
//      -- Episode
//      -- Episode
//   -- Show
//      -- Episode
//      -- Episode
//      -- Episode

// Home:
// - Header
// - Show list
// - Footer

// Show:
// - Header
// - Episode list (AJAX additional content in)
// - Footer

// Show:
// - Header
// - Player
// - Information
// - Footer

// ReactDOM.render(<HomePage name="Sebastian" />, mountNode);
