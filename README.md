# Duck Lovers Website - React Router App

A beautifully designed React application with smooth navigation and delightful duck-themed UI elements.

## Features

- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- **Smooth Navigation**: React Router DOM for seamless page transitions
- **Interactive UI**: Hover effects, animations, and gradient backgrounds
- **Sticky Header**: Navigation bar that stays visible while scrolling
- **Consistent Theming**: Warm yellow/amber/orange color scheme

## Project Structure

```
src/
├── App.js          # Main application component with routing
├── App.css         # Additional styles (if any)
├── Home.js         # Home page component
├── About.js        # About page component
├── Contact.js      # Contact page component
└── ...            # Other project files
```

## Technologies Used

- **React** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5** - Markup structure

## Design Elements

### Color Palette
- **Primary Colors**: Yellow, Amber, Orange gradients
- **Background**: Light gray (bg-gray-50)
- **Buttons**: White with colored text and hover states

### Components
- **Header**: Gradient background with rounded navigation buttons
- **Main Content**: Centered with max-width container
- **Footer**: Amber background with secondary navigation links

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Routes

- `/` or `/home` - Home page
- `/about` - About page
- `/contact` - Contact page

## Navigation Features

- **Header Navigation**: Three main navigation buttons with hover effects
- **Footer Navigation**: Secondary text links for easy access
- **Active States**: Buttons feature scale transform and color transitions on hover
- **Sticky Header**: Navigation remains visible at the top while scrolling

## Customization

### Styling
The app uses Tailwind CSS classes. Key styling includes:
- Gradient backgrounds: `bg-gradient-to-r from-yellow-400 to-amber-500`
- Button hover effects: `hover:scale-105 transform transition duration-300`
- Shadow effects: `shadow-md` and `shadow-lg`
- Responsive padding and margins

### Adding New Pages
1. Create a new component in the `src/` directory
2. Import the component in `App.js`
3. Add a new Route in the Routes section
4. Add navigation links in both header and footer

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with Create React App
- Styled with Tailwind CSS
- Icons and illustrations from various sources
- Made with love by Duck Lovers

## Support

For support, please open an issue in the repository or contact the development team.