# Savoria Restaurant Website

A modern, responsive restaurant website built with React and Tailwind CSS. Features a beautiful user interface with smooth animations, comprehensive menu system, and professional design suitable for fine dining establishments.

## Features

### 🏠 Home Page
- Stunning hero section with compelling call-to-action
- Featured dishes showcase with high-quality imagery
- Restaurant highlights and unique selling points
- Integrated reservation prompts

### 🍽️ Menu System
- Interactive menu with category filtering (Appetizers, Main Courses, Desserts, Beverages)
- Advanced sorting options (Name, Price Low-to-High, Price High-to-Low)
- Detailed dish descriptions with dietary information
- Featured item highlighting
- Responsive card-based layout

### ℹ️ About Page
- Compelling restaurant story and mission
- Team member profiles with professional photography
- Restaurant features and unique selling points
- Awards and recognition showcase

### 📧 Contact & Reservations
- Comprehensive reservation form with date/time selection
- Multiple contact methods (phone, email, address)
- Interactive contact information cards
- Special dietary requirements handling

### 🎨 Design Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional design with warm color palette
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Typography**: Carefully selected fonts with proper hierarchy
- **Color System**: Warm amber tones with professional neutrals
- **Accessibility**: Proper contrast ratios and semantic markup

## Technology Stack

- **Frontend Framework**: React 18 with JavaScript
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router DOM for client-side navigation
- **State Management**: React Context API for menu filtering and sorting
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Footer.jsx       # Site footer with contact info
│   ├── HeroSection.jsx  # Homepage hero section
│   ├── FeaturedDishes.jsx
│   ├── RestaurantFeatures.jsx
│   ├── CallToAction.jsx
│   ├── MenuFilters.jsx  # Menu category and sort controls
│   ├── MenuGrid.jsx     # Menu items display grid
│   └── MenuCard.jsx     # Individual menu item cards
├── pages/               # Route-based page components
│   ├── HomePage.jsx     # Landing page
│   ├── MenuPage.jsx     # Menu browsing page
│   ├── AboutPage.jsx    # Restaurant information
│   └── ContactPage.jsx  # Contact and reservations
├── contexts/            # React Context providers
│   └── MenuContext.jsx  # Menu data and filtering logic
└── App.jsx             # Main application component
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd savoria-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Key Components

### Menu System
The menu system uses React Context for state management, allowing for:
- Real-time filtering by category
- Sorting by name or price
- Dietary restriction indicators
- Featured item highlighting

### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- **Flexible layouts** that adapt to screen size
- **Touch-friendly interfaces** for mobile users

### Performance Features
- **Optimized images** from Pexels CDN
- **Lazy loading** for better initial load times
- **Efficient re-renders** with proper React patterns
- **Fast build times** with Vite bundler

## Customization

The website is designed to be easily customizable:

### Colors
Modify the color scheme in `tailwind.config.js` or use Tailwind's built-in color utilities throughout the components.

### Content
- Update menu items in `src/contexts/MenuContext.jsx`
- Modify restaurant information in the respective page components
- Replace images with your own (maintain aspect ratios for best results)

### Styling
All styling uses Tailwind CSS classes, making it easy to:
- Adjust spacing, colors, and typography
- Modify responsive breakpoints
- Add custom animations and effects

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the built files to an S3 bucket configured for static hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for restaurants that value exceptional digital presence**