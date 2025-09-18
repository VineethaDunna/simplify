# React Assignment 2 - User Directory

A responsive React application built with Redux Toolkit and Tailwind CSS for managing user profiles. This project demonstrates advanced React concepts including state management, API integration, and modern UI design.

## 🚀 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Redux State Management**: Centralized state management with Redux Toolkit
- **CRUD Operations**: Create, Read, Update, and Delete user profiles
- **API Integration**: Fetches user data from JSONPlaceholder API
- **Avatar Generation**: Dynamic avatar generation using DiceBear API
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **Loading States**: Elegant loading spinner with animations
- **Error Handling**: Graceful error handling and user feedback
- **Form Validation**: Client-side form validation for user inputs

## 🛠️ Tech Stack

- **React 18**: Latest React with functional components and hooks
- **Redux Toolkit**: Modern Redux for state management
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **Create React App**: Build toolchain

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingSpinner.js    # Loading indicator component
│   ├── UserCard.js          # Individual user card component
│   ├── UserModal.js         # Modal for add/edit user forms
│   └── UserList.js          # Main component displaying user grid
├── store/
│   ├── index.js             # Redux store configuration
│   └── userSlice.js         # User slice with actions and reducers
├── App.js                   # Main application component
├── index.js                 # Application entry point
└── index.css                # Global styles with Tailwind CSS
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-assignment-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Key Components

### UserCard Component

- Displays individual user information in a card layout
- Shows avatar, contact details, address, and company info
- Includes edit and delete action buttons
- Responsive design with hover effects

### UserModal Component

- Modal form for adding new users or editing existing ones
- Form validation for required fields
- Handles nested object updates (address, company)
- Responsive form layout

### UserList Component

- Main container component managing the user grid
- Displays user statistics
- Handles modal state and user operations
- Empty state with call-to-action

### LoadingSpinner Component

- Animated loading indicator
- Multi-layered spinner design
- Loading message and description

## 🔄 Redux Store Structure

```javascript
{
  users: {
    users: [],        // Array of user objects
    loading: false,   // Loading state for API calls
    error: null       // Error message if API fails
  }
}
```

## 📡 API Integration

### Users API

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Purpose**: Fetch initial user data

### Avatar API

- **Endpoint**: `https://avatars.dicebear.com/v2/avataaars/{username}.svg?options[mood][]=happy`
- **Method**: GET
- **Purpose**: Generate unique avatars based on username

## 🎨 Styling Approach

- **Tailwind CSS**: Utility-first approach for rapid UI development
- **Custom CSS Classes**: Component-specific styles in index.css
- **Responsive Design**: Mobile-first approach with breakpoint prefixes
- **Color Scheme**: Primary blue theme with gray accents
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two column grid
- **Desktop**: Three column grid
- **Large Desktop**: Four column grid

## 🔒 State Management Features

- **Async Actions**: Thunk-based async operations for API calls
- **Immutable Updates**: Redux Toolkit's Immer integration
- **Error Handling**: Comprehensive error state management
- **Loading States**: Loading indicators during async operations

## 🚀 Deployment

### Deployment Options

1. **Netlify**

   - Build command: `npm run build`
   - Publish directory: `build`

2. **Vercel**

   - Automatically detects React projects
   - Zero configuration deployment

3. **GitHub Pages**
   - Install: `npm install --save-dev gh-pages`
   - Add to package.json: `"homepage": "https://yourusername.github.io/react-assignment-2"`
   - Deploy: `npm run deploy`

## 🧪 Testing the Application

1. **Loading State**: Check the loading spinner on initial load
2. **User Cards**: Verify all user information displays correctly
3. **Add User**: Test adding new users with the modal form
4. **Edit User**: Test editing existing user information
5. **Delete User**: Test user deletion with confirmation
6. **Responsive**: Test on different screen sizes
7. **Error Handling**: Test with network disconnected

## 🔍 Code Quality Features

- **Modern React**: Functional components with hooks
- **Clean Code**: Well-organized component structure
- **Error Boundaries**: Graceful error handling
- **Performance**: Optimized re-renders with proper dependencies
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📝 Assignment Requirements Met

✅ **Responsive Design**: Mobile, tablet, and desktop support  
✅ **State Management**: Redux Toolkit implementation  
✅ **API Integration**: JSONPlaceholder and DiceBear APIs  
✅ **CRUD Operations**: Create, read, update, delete users  
✅ **Modern UI**: Tailwind CSS styling  
✅ **Loading States**: Animated loading indicators  
✅ **Error Handling**: User-friendly error messages  
✅ **Form Validation**: Input validation and feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for assignment purposes and is available under the MIT License.
