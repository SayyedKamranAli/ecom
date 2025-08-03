import app from './app';
import { AppDataSource } from './config/ormconfig';
import { initSuperAdmin } from './utills/initSuperAdmin';


const PORT = process.env.PORT || 8000;
AppDataSource.initialize().then(async () => {
  await initSuperAdmin(); // ⬅️ Seed only once
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
