# Portfolio Project Setup Guide

## Project Structure

```
src/
├── assets/          # Images, fonts, and static files
├── components/      # Reusable React components
│   ├── Navbar.jsx          # Navigation with lock icon
│   ├── Footer.jsx          # Footer component
│   ├── ProjectCard.jsx     # Project card component
│   └── ProtectedRoute.jsx  # Route protection wrapper
├── pages/           # Page components
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Projects.jsx        # Projects showcase
│   ├── Contact.jsx         # Contact form
│   └── AdminDashboard.jsx  # Admin dashboard (protected)
├── layouts/         # Layout components
│   ├── MainLayout.jsx      # Main layout with navbar & footer
│   └── AdminLayout.jsx     # Admin layout with sidebar
├── context/         # React Context for state management
│   └── AuthContext.jsx     # Authentication context (mock auth)
├── hooks/           # Custom React hooks
│   └── index.js           # Custom hooks (useForm, useWindowSize, etc.)
├── services/        # API services
│   └── api.js             # Axios instance and API endpoints
├── utils/           # Utility functions
│   ├── constants.js       # Constants and mock data
│   └── helpers.js         # Helper functions
└── styles/          # Global styles
```

## Key Features

### 1. **Navbar with Lock Icon**
- Located in `src/components/Navbar.jsx`
- Lock icon (🔒) on the right side
- Clicking it navigates to `/admin`
- Uses Lucide React icons

### 2. **Protected Routes**
- `/admin` is protected using `ProtectedRoute` component
- Currently uses mock authentication (`isAdmin = false`)
- To test admin access:
  1. Open `src/context/AuthContext.jsx`
  2. Change `const [isAdmin, setIsAdmin] = useState(false)` to `useState(true)`

### 3. **Authentication Context**
- Located in `src/context/AuthContext.jsx`
- Provides `useAuth()` custom hook
- Includes `login()` and `logout()` methods for future integration

### 4. **API Service Setup**
- Configured in `src/services/api.js`
- Uses Axios for HTTP requests
- Ready for MERN backend integration
- Includes interceptors for token-based auth

### 5. **Admin Dashboard**
- Located at `/admin`
- Includes sidebar navigation
- Mock data and statistics
- Ready for real data integration

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## MERN Backend Integration

### Environment Variables
Create a `.env.local` file:
```env
VITE_API_URL=http://localhost:5000/api
```

### API Endpoints to Implement
In your backend, create these endpoints:

**Projects**
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

**Contact**
- `POST /api/contact` - Send contact message

**Auth (Future)**
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register user

### Update API Calls
1. Replace mock data in `src/utils/constants.js` with API calls
2. Uncomment API calls in components (look for `// TODO` comments)
3. Update `src/services/api.js` as needed

## Customization

### Colors & Theme
- Tailwind CSS is configured with dark theme
- Update colors in `tailwind.config.js`
- Main colors: Gray-900 (dark bg), Blue-600 (primary)

### Mock Data
- Projects: `src/utils/constants.js`
- Replace with real data from backend

### Adding New Pages
1. Create new component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route in the Routes section

## Components Overview

### Navbar
- Responsive navigation
- Lock icon for admin access
- Mobile menu support
- Active link highlighting

### ProjectCard
- Reusable component for displaying projects
- Shows image, description, tags
- Links to live demo and GitHub

### Footer
- Social media links
- Contact information
- Copyright notice

### ProtectedRoute
- Wrapper component for protected routes
- Shows access denied message if unauthorized
- Redirect to home on unauthorized access

### Layouts
- **MainLayout**: For public pages (Navbar + Content + Footer)
- **AdminLayout**: For admin pages (Sidebar + Content)

## Custom Hooks

### useForm
Handles form state and submission:
```javascript
const { values, errors, handleChange, handleSubmit } = useForm(initialValues, onSubmit);
```

### useWindowSize
Get window dimensions:
```javascript
const { width, height } = useWindowSize();
```

### useLocalStorage
Persistent state in localStorage:
```javascript
const [theme, setTheme] = useLocalStorage('theme', 'dark');
```

## Styling

All components use Tailwind CSS utility classes:
- Dark theme friendly
- Responsive design
- Smooth transitions
- Professional appearance

## Next Steps

1. ✅ Frontend structure is ready
2. ⏳ Create MERN backend (Node.js + Express + MongoDB)
3. ⏳ Connect API endpoints
4. ⏳ Implement real authentication
5. ⏳ Add real project data
6. ⏳ Deploy to production

## Tips

- Use `console.log()` to debug
- Check browser console for errors
- Test all routes before deployment
- Keep API base URL in `.env.local`
- Use Postman to test backend endpoints first

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
