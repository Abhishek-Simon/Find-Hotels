const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({storage});

// Index Route
router.get("/", wrapAsync(listingController.index));

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Create Route
router.post("/", isLoggedIn, upload.single('listing[image]'), validateListing,  wrapAsync(listingController.createListing));

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// Update Route
router.put("/:id", isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing));

// Delete Route 
router.delete("/:id", isLoggedIn, isOwner,  wrapAsync(listingController.deleteListing));

// Show Route
router.get("/:id", wrapAsync(listingController.showListing));


module.exports = router;