# GeekHaven-WebD-Task1
edit readme later
Name: Paras Pandey
Roll no : IIT2024235

Project Structure
WebD-Task1/
│
├── backend/
│   ├── models/          # User, Question, Category
│   ├── routes/          # content.js, auth.js, user.js
│   ├── middleware/      # auth.js, rateLimiter.js
│   ├── seeder/          # seed.js
│   ├── server.js
│   └── .env/.env.example
│
├── frontend/
│   ├── index.html       # main page
│   ├── dashboard.html
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── dashboard.css
│   │   ├── js/
│   │   │   ├── api.js         # fetch wrappers
│   │   │   ├── app.js         # index page logic
│   │   │   ├── dashboard.js   # dashboard logic
│   │   │   ├── theme.js       # dark/light mode
│   │   │   ├── voice.js       # Web Speech API
│   │   │   └── utils.js       # debounce, helpers
│   │   └── img/               # icons, images
│
└── README.md

WebD-Task1/
│
├── backend/            # (Your backend structure is perfect, no changes needed)
│   ├── ...
│
├── frontend-react/     # New folder for the React app
│   ├── public/         # Static assets (favicon, etc.)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   ├── common/
│   │   │   │   ├── Accordion.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── ProgressBar.jsx
│   │   │   └── ui/
│   │   │       ├── Tag.jsx       # For difficulty tags
│   │   │       └── ThemeToggle.jsx
│   │   │
│   │   ├── context/      # React Context for global state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/        # Custom hooks
│   │   │   └── useDebounce.js
│   │   │
│   │   ├── pages/        # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services/     # API call functions
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx       # Main component with routing
│   │   ├── index.css     # Global styles
│   │   └── main.jsx      # Entry point of the React app
│   │
│   ├── .env
│   ├── index.html      # Main HTML file (template)
│   └── package.json
│
└── README.md