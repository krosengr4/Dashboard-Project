//! This file contains code to put seed data (/profileSeeds.json) in db

// Import db connection, Profile model, seed data, and cleanDB 
const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
// const cleanDB = require('./cleanDB'); //?<--- Don't need yet

// 
db.once('open', async () => {
    try {
    //   await cleanDB('Profile', 'profiles'); //?<--- Don't need yet
      
      await Profile.create(profileSeeds);
  
      console.log('Success! Your data is seeded to the db!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });