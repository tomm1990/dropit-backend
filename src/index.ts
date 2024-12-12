import express, { Request, Response } from 'express';
import bodyParser  from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
//   const favorites = await Favorite.find();
  res.status(200).json({
    a: 'b',
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// app.listen(3000);

// app.post('/favorites', async (req, res) => {
//   const favName = req.body.name;
//   const favType = req.body.type;
//   const favUrl = req.body.url;

//   try {
//     if (favType !== 'movie' && favType !== 'character') {
//       throw new Error('"type" should be "movie" or "character"!');
//     }
//     const existingFav = await Favorite.findOne({ name: favName });
//     if (existingFav) {
//       throw new Error('Favorite exists already!');
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }

//   const favorite = new Favorite({
//     name: favName,
//     type: favType,
//     url: favUrl,
//   });

//   try {
//     await favorite.save();
//     res
//       .status(201)
//       .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// });

// app.get('/movies', async (req, res) => {
//   try {
//     const response = await axios.get('https://swapi.dev/api/films');
//     res.status(200).json({ movies: response.data });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// });

// app.get('/people', async (req, res) => {
//   try {
//     const response = await axios.get('https://swapi.dev/api/people');
//     res.status(200).json({ people: response.data });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// });

// mongoose.connect(
//   'mongodb://mongodb:27017/swfavorites',
//   { useNewUrlParser: true },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       app.listen(3000);
//     }
//   }
// );
