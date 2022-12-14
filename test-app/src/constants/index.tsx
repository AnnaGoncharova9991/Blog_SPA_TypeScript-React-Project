//validation
export const REG_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const REG_NAME = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
export const EMPTY_EMAIL = 'Please enter your email';
export const INCORRECT_EMAIL = 'Incorrect email';
export const EMPTY_PASSWORD = 'Password is required. Please enter your password';
export const INCORRECT_PASSWORD =
  'You password must be at least 8 and no more than 25 characters';
export const EMPTY_USERNAME = 'Please enter your Name';
export const INCORRECT_USERNAME = 'Incorrect Name';

//Pagination
export const DOTS = '...';

//Search
export const OPTIONS = [
  { label: 'Title (A-Z)', value: 'title' },
  { label: 'Description (A-Z)', value: 'summary' },
];

//Tab
export const TAB_BUTTONS = [
  { btnName: 'Blogs', btnPathTo: '/blogs' },
  { btnName: 'Articles', btnPathTo: '/articles' },
];