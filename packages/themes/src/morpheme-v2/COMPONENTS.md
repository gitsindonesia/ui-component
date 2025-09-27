# Morpheme V2 Components

This document provides a comprehensive reference for all available components in the Morpheme V2 theme.

## Table of Contents

- [Buttons](#buttons)
- [Alerts](#alerts)
- [Cards](#cards)
- [Forms](#forms)
- [Modals](#modals)
- [Badges](#badges)
- [Avatars](#avatars)
- [Progress Bars](#progress-bars)
- [Tooltips](#tooltips)
- [Dropdowns](#dropdowns)
- [Tabs](#tabs)
- [Toasts](#toasts)
- [Data Tables](#data-tables)
- [Pagination](#pagination)
- [Shimmer](#shimmer)
- [Utilities](#utilities)

## Buttons

### Sizes

```vue
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
<button class="btn btn-primary btn-2xl">2X Large</button>
```

### Variants

```vue
<!-- Primary -->
<button class="btn btn-primary btn-md">Primary</button>

<!-- Secondary -->
<button class="btn btn-secondary btn-md">Secondary</button>

<!-- Outlined -->
<button class="btn btn-outlined btn-md">Outlined</button>

<!-- Text -->
<button class="btn btn-text btn-md">Text</button>

<!-- Default -->
<button class="btn btn-default btn-md">Default</button>
```

### Color Variants

```vue
<button class="btn btn-success btn-md">Success</button>
<button class="btn btn-warning btn-md">Warning</button>
<button class="btn btn-error btn-md">Error</button>
```

### States

```vue
<!-- Disabled -->
<button class="btn btn-primary btn-md" disabled>Disabled</button>

<!-- Loading -->
<button class="btn btn-primary btn-md" disabled>
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>
```

## Alerts

### Basic Alerts

```vue
<div class="alert alert-success">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-success-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium">Success! Your changes have been saved.</p>
    </div>
  </div>
</div>

<div class="alert alert-warning">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-warning-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium">Warning! Please check your input.</p>
    </div>
  </div>
</div>

<div class="alert alert-error">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-error-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium">Error! Something went wrong.</p>
    </div>
  </div>
</div>

<div class="alert alert-info">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-info-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium">Info! Here's some useful information.</p>
    </div>
  </div>
</div>
```

### Dismissible Alerts

```vue
<div class="alert alert-success">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-success-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium">Success! Your changes have been saved.</p>
    </div>
    <div class="ml-auto pl-3">
      <div class="-mx-1.5 -my-1.5">
        <button class="inline-flex bg-success-50 rounded-md p-1.5 text-success-500 hover:bg-success-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-success-50 focus:ring-success-600">
          <span class="sr-only">Dismiss</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
```

## Cards

### Basic Card

```vue
<div class="card">
  <div class="card-header">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="text-gray-600 dark:text-gray-300">Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>
```

### Card with Image

```vue
<div class="card">
  <img src="https://via.placeholder.com/400x200" alt="Card image" class="w-full h-48 object-cover" />
  <div class="card-body">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Title</h3>
    <p class="text-gray-600 dark:text-gray-300">Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Read More</button>
  </div>
</div>
```

### Simple Card

```vue
<div class="card">
  <div class="card-body">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple Card</h3>
    <p class="text-gray-600 dark:text-gray-300">A simple card without header or footer.</p>
  </div>
</div>
```

## Forms

### Basic Form

```vue
<form class="space-y-6">
  <div>
    <label class="form-label">Email Address</label>
    <input type="email" class="form-input" placeholder="Enter your email" />
    <p class="form-error">Please enter a valid email</p>
  </div>
  
  <div>
    <label class="form-label">Password</label>
    <input type="password" class="form-input" placeholder="Enter your password" />
  </div>
  
  <div>
    <label class="form-label">Message</label>
    <textarea class="form-input" rows="4" placeholder="Enter your message"></textarea>
  </div>
  
  <div class="flex items-center">
    <input type="checkbox" id="terms" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
    <label for="terms" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
      I agree to the terms and conditions
    </label>
  </div>
  
  <div class="flex space-x-3">
    <button type="submit" class="btn btn-primary btn-md">Submit</button>
    <button type="button" class="btn btn-secondary btn-md">Cancel</button>
  </div>
</form>
```

### Form Groups

```vue
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label class="form-label">First Name</label>
    <input type="text" class="form-input" placeholder="Enter first name" />
  </div>
  <div>
    <label class="form-label">Last Name</label>
    <input type="text" class="form-input" placeholder="Enter last name" />
  </div>
</div>
```

### Select Input

```vue
<div>
  <label class="form-label">Country</label>
  <select class="form-input">
    <option>Select a country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>
```

## Modals

### Basic Modal

```vue
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <p class="text-gray-600 dark:text-gray-300">Modal content goes here.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-md">Cancel</button>
      <button class="btn btn-primary btn-md">Confirm</button>
    </div>
  </div>
</div>
```

### Large Modal

```vue
<div class="modal-overlay">
  <div class="modal-content max-w-2xl">
    <div class="modal-header">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Large Modal</h3>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <p class="text-gray-600 dark:text-gray-300">This is a larger modal with more content.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-md">Cancel</button>
      <button class="btn btn-primary btn-md">Confirm</button>
    </div>
  </div>
</div>
```

## Badges

### Basic Badges

```vue
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>
```

### Badge with Icon

```vue
<span class="badge badge-primary">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  Success
</span>
```

## Avatars

### Basic Avatars

```vue
<div class="flex items-center space-x-4">
  <div class="avatar avatar-sm">A</div>
  <div class="avatar avatar-md">B</div>
  <div class="avatar avatar-lg">C</div>
  <div class="avatar avatar-xl">D</div>
</div>
```

### Avatar with Image

```vue
<div class="flex items-center space-x-4">
  <img class="avatar avatar-sm" src="https://via.placeholder.com/40" alt="Avatar" />
  <img class="avatar avatar-md" src="https://via.placeholder.com/40" alt="Avatar" />
  <img class="avatar avatar-lg" src="https://via.placeholder.com/40" alt="Avatar" />
  <img class="avatar avatar-xl" src="https://via.placeholder.com/40" alt="Avatar" />
</div>
```

## Progress Bars

### Basic Progress Bar

```vue
<div class="progress">
  <div class="progress-bar" style="width: 45%"></div>
</div>
```

### Progress Bar with Label

```vue
<div>
  <div class="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
    <span>Progress</span>
    <span>45%</span>
  </div>
  <div class="progress">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
</div>
```

### Colored Progress Bars

```vue
<div class="space-y-4">
  <div class="progress">
    <div class="bg-primary-500 h-full transition-all duration-300 ease-in-out" style="width: 25%"></div>
  </div>
  <div class="progress">
    <div class="bg-success-500 h-full transition-all duration-300 ease-in-out" style="width: 50%"></div>
  </div>
  <div class="progress">
    <div class="bg-warning-500 h-full transition-all duration-300 ease-in-out" style="width: 75%"></div>
  </div>
  <div class="progress">
    <div class="bg-error-500 h-full transition-all duration-300 ease-in-out" style="width: 100%"></div>
  </div>
</div>
```

## Tooltips

### Basic Tooltip

```vue
<div class="relative inline-block">
  <button class="btn btn-primary btn-md">Hover me</button>
  <div class="tooltip opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div class="tooltip-arrow"></div>
    This is a tooltip
  </div>
</div>
```

## Dropdowns

### Basic Dropdown

```vue
<div class="dropdown">
  <button class="btn btn-primary btn-md">Dropdown</button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Action</a>
    <a href="#" class="dropdown-item">Another action</a>
    <a href="#" class="dropdown-item">Something else here</a>
    <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
    <a href="#" class="dropdown-item">Separated link</a>
  </div>
</div>
```

## Tabs

### Basic Tabs

```vue
<div class="tabs">
  <div class="tab-list">
    <button class="tab tab-active">Tab 1</button>
    <button class="tab">Tab 2</button>
    <button class="tab">Tab 3</button>
  </div>
  <div class="tab-panel">
    <p class="text-gray-600 dark:text-gray-300">Tab 1 content goes here.</p>
  </div>
</div>
```

## Toasts

### Basic Toast

```vue
<div class="toast toast-success">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-success-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-success-800 dark:text-success-300">Success! Your changes have been saved.</p>
    </div>
    <div class="ml-auto pl-3">
      <button class="text-success-400 hover:text-success-600 dark:hover:text-success-300">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>
```

## Data Tables

### Basic Data Table

```vue
<div class="overflow-x-auto">
  <table class="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td><span class="badge badge-success">Active</span></td>
        <td>
          <button class="btn btn-primary btn-sm">Edit</button>
          <button class="btn btn-error btn-sm">Delete</button>
        </td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>User</td>
        <td><span class="badge badge-warning">Pending</span></td>
        <td>
          <button class="btn btn-primary btn-sm">Edit</button>
          <button class="btn btn-error btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Pagination

### Basic Pagination

```vue
<div class="pagination">
  <div class="pagination-info">
    <p>Showing 1 to 10 of 100 results</p>
  </div>
  <div class="pagination-nav">
    <button class="pagination-btn" disabled>Previous</button>
    <button class="pagination-btn pagination-btn-active">1</button>
    <button class="pagination-btn">2</button>
    <button class="pagination-btn">3</button>
    <button class="pagination-btn">Next</button>
  </div>
</div>
```

## Shimmer

### Basic Shimmer

```vue
<div class="space-y-4">
  <div class="shimmer h-4 w-full rounded"></div>
  <div class="shimmer h-4 w-3/4 rounded"></div>
  <div class="shimmer h-4 w-1/2 rounded"></div>
</div>
```

### Card Shimmer

```vue
<div class="card">
  <div class="card-body">
    <div class="shimmer h-6 w-1/3 rounded mb-4"></div>
    <div class="space-y-2">
      <div class="shimmer h-4 w-full rounded"></div>
      <div class="shimmer h-4 w-5/6 rounded"></div>
      <div class="shimmer h-4 w-4/6 rounded"></div>
    </div>
  </div>
</div>
```

## Utilities

### Container Utilities

```vue
<div class="morpheme-container">
  <p>Responsive container with proper padding</p>
</div>
```

### Section Utilities

```vue
<section class="morpheme-section">
  <h2 class="morpheme-heading">Section Title</h2>
  <p class="morpheme-body">Section content</p>
</section>
```

### Typography Utilities

```vue
<h1 class="morpheme-heading">Main Heading</h1>
<h2 class="morpheme-subheading">Sub Heading</h2>
<p class="morpheme-body">Body text with proper styling</p>
```

### Scrollbar Utilities

```vue
<div class="scrollbar-hide overflow-y-auto h-64">
  <p>Content with hidden scrollbar</p>
</div>

<div class="scrollbar-thin overflow-y-auto h-64">
  <p>Content with thin scrollbar</p>
</div>
```

### Text Utilities

```vue
<p class="text-balance">This text will be balanced across lines</p>
<p class="text-pretty">This text will be pretty formatted</p>
```

### Transition Utilities

```vue
<div class="morpheme-transition hover:scale-105">
  <p>Element with smooth transition</p>
</div>

<div class="transition-fast hover:opacity-75">
  <p>Element with fast transition</p>
</div>

<div class="transition-slow hover:rotate-180">
  <p>Element with slow transition</p>
</div>
```

### Animation Utilities

```vue
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-slide-in">Slide in animation</div>
<div class="animate-bounce-in">Bounce in animation</div>
<div class="animate-pulse-slow">Slow pulse animation</div>
<div class="shimmer">Shimmer loading effect</div>
```

This comprehensive component reference should help you build beautiful interfaces with the Morpheme V2 theme. Each component is designed to be accessible, responsive, and customizable through Tailwind CSS utilities.
