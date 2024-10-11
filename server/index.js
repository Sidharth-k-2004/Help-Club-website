// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const cors = require('cors');

// // // Initialize app and middleware
// // const app = express();
// // app.use(express.json());
// // app.use(cors());

// // // MongoDB URI and Connection
// // const MONGO_URI = 'mongodb+srv://sidharthkdinesan123:MuiiFKdawTLot40o@kcet-resukts.t7dnjbg.mongodb.net/help?retryWrites=true&w=majority&appName=kcet-resukts';
// // mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch((error) => console.log('Error connecting to MongoDB:', error));

// // // User Schema and Model
// // const userSchema = new mongoose.Schema({
// //     username: { type: String, required: true, unique: true },
// //     password: { type: String, required: true }
// // });

// // const User = mongoose.model('UserDetails', userSchema);

// // // JWT Secret Key
// // const JWT_SECRET = 'your_jwt_secret_key';

// // // Signup Route
// // app.post('/signup', async (req, res) => {
// //     const { username, password } = req.body;
    
// //     try {
// //         // Check if user already exists
// //         const existingUser = await User.findOne({ username });
// //         if (existingUser) {
// //             return res.status(400).json({ message: 'Username already exists' });
// //         }

// //         // Hash the password before saving it
// //         const hashedPassword = await bcrypt.hash(password, 10);

// //         // Create new user
// //         const newUser = new User({ username, password: hashedPassword });
// //         await newUser.save();

// //         res.status(201).json({ message: 'User created successfully' });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error creating user', error });
// //     }
// // });

// // // Login Route
// // app.post('/login', async (req, res) => {
// //     const { username, password } = req.body;

// //     try {
// //         // Find user by username
// //         const user = await User.findOne({ username });
// //         if (!user) {
// //             return res.status(400).json({ message: 'Invalid username or password' });
// //         }

// //         // Compare the provided password with the hashed password
// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) {
// //             return res.status(400).json({ message: 'Invalid username or password' });
// //         }

// //         // Create a JWT token
// //         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
// //             expiresIn: '1h',
// //         });

// //         res.status(200).json({ message: 'Login successful', token });
// //     } catch (error) {
// //         res.status(500).json({ message: 'Error logging in', error });
// //     }
// // });

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// // Initialize app and middleware
// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB URI and Connection
// const MONGO_URI = 'mongodb+srv://sidharthkdinesan123:MuiiFKdawTLot40o@kcet-resukts.t7dnjbg.mongodb.net/help?retryWrites=true&w=majority&appName=kcet-resukts';
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch((error) => console.log('Error connecting to MongoDB:', error));

// // User Schema and Model
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });
// const User = mongoose.model('UserDetails', userSchema);

// // Query Schema and Model
// const querySchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserDetails', required: true },
//     queryText: { type: String, required: true },
//     replyText: { type: String }
// });
// const Query = mongoose.model('Query', querySchema);

// // JWT Secret Key
// const JWT_SECRET = 's3cR3tK3y!@#1234'; 


// // Helper middleware to authenticate using JWT
// const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token, JWT_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// // Signup Route
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ username, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating user', error });
//     }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }

//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
//             expiresIn: '1h',
//         });

//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// });

// // Post a query (Authenticated route)
// app.post('/post-query', authenticateToken, async (req, res) => {
//     const { queryText } = req.body;

//     try {
//         const newQuery = new Query({ userId: req.user.id, queryText });
//         await newQuery.save();
//         res.status(201).json({ message: 'Query posted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error posting query', error });
//     }
// });

// // Fetch all queries by the logged-in user (Authenticated route)
// app.get('/student-queries', authenticateToken, async (req, res) => {
//     try {
//         const queries = await Query.find({ userId: req.user.id });
        
//         if (queries.length === 0) {
//             return res.status(200).json({ message: 'No queries found for this user.' });
//         }

//         res.status(200).json(queries);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching queries', error });
//     }
// });


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// // Initialize app and middleware
// const app = express();
// app.use(express.json());
// app.use(cors());
// var current_user;
// // MongoDB URI and Connection
// const MONGO_URI = 'mongodb+srv://sidharthkdinesan123:MuiiFKdawTLot40o@kcet-resukts.t7dnjbg.mongodb.net/help?retryWrites=true&w=majority&appName=kcet-resukts';
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch((error) => console.log('Error connecting to MongoDB:', error));

// // User Schema and Model
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     queries: [{
//         queryText: { type: String, required: true },
//         replyText: { type: String, default: null } // Initialized to null
//     }]
// });

// const User = mongoose.model('UserDetails', userSchema);

// // JWT Secret Key
// const JWT_SECRET = 'your_jwt_secret_key_here'; // Replace with your secret key



// // Signup Route
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Username already exists' });
//         }

//         // Hash the password before saving it
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user with empty queries array
//         const newUser = new User({ 
//             username, 
//             password: hashedPassword, 
//             queries: [] // Start with an empty array
//         });
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating user', error });
//     }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Find user by username
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }

//         // Compare the provided password with the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//         }

//         // Create a JWT token
//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
//             expiresIn: '1h',
//         });
//         current_user=user;


//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
//     }
// });

// // Post a query (Authenticated route)
// app.post('/post-query', authenticateToken, async (req, res) => {
//     const { queryText } = req.body;

//     try {
//         // Find the user and push a new query into their queries array
//         await User.findByIdAndUpdate(req.user.id, {
//             $push: { queries: { queryText, replyText: null } } // Add query with reply initialized to null
//         });

//         res.status(201).json({ message: 'Query posted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error posting query', error });
//     }
// });

// // Fetch all queries by the logged-in user (Authenticated route)
// app.get('/student-queries' async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('queries'); // Select only the queries field
//         res.status(200).json(user.queries); // Send back the queries array
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching queries', error });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize app and middleware
const app = express();
app.use(express.json());
app.use(cors());
var current_user;

// MongoDB URI and Connection
const MONGO_URI = 'mongodb+srv://sidharthkdinesan123:MuiiFKdawTLot40o@kcet-resukts.t7dnjbg.mongodb.net/help?retryWrites=true&w=majority&appName=kcet-resukts';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    queries: [{
        queryText: { type: String, required: true },
        replyText: { type: String, default: null } // Initialized to null
    }]
});

const User = mongoose.model('UserDetails', userSchema);

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key_here'; // Replace with your secret key

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ 
            username, 
            password: hashedPassword, 
            queries: [] // Start with an empty array
        });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
            expiresIn: '1h',
        });
        current_user = user; // Store user details in the variable

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

// Post a query (Authenticated route)
app.post('/post-query', async (req, res) => {
    const { queryText } = req.body;

    try {
        // Check if current_user is defined
        if (!current_user) {
            return res.status(401).json({ message: 'Unauthorized access. Please log in.' });
        }

        // Push a new query into the current user's queries array
        await User.findByIdAndUpdate(current_user._id, {
            $push: { queries: { queryText, replyText: null } } // Add query with reply initialized to null
        });

        res.status(201).json({ message: 'Query posted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error posting query', error });
    }
});
// Fetch all queries by the logged-in user (Authenticated route)
app.get('/student-queries', async (req, res) => {
    try {
        // Check if current_user is set
        if (!current_user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        // Access queries from the current_user variable
        const userQueries = current_user.queries;

        if (!userQueries || userQueries.length === 0) {
            return res.status(200).json({ message: 'No queries found for this user.' });
        }

        res.status(200).json(userQueries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching queries', error });
    }
});

// Middleware to verify JWT
// const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) return res.status(401).json({ message: 'Token is missing' });

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET); // Verify token
//         req.user = decoded; // Attach decoded user info to request object
//         next(); // Proceed to the next middleware or route
//     } catch (error) {
//         return res.status(403).json({ message: 'Invalid or expired token' });
//     }
// };

// // Post a query (Authenticated route)
// app.post('/post-query', authenticateToken, async (req, res) => {
//     const { queryText } = req.body;
//     const userId = req.user.id;

//     try {
//         // Find the user and add the query
//         await User.findByIdAndUpdate(userId, {
//             $push: { queries: { queryText, replyText: null } }
//         });

//         res.status(201).json({ message: 'Query posted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error posting query', error });
//     }
// });

// // Fetch all queries by the logged-in user (Authenticated route)
// app.get('/student-queries', authenticateToken, async (req, res) => {
//     const userId = req.user.id;

//     try {
//         const user = await User.findById(userId);
//         console.log(user);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const userQueries = user.queries;
//         res.status(200).json(userQueries);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching queries', error });
//     }
// });


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
