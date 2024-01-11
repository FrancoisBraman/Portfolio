const express = require('express');

const router = express.Router();

const pageController = require('../controllers/page.controller');
const controllerWrapper = require('../middlewares/controller-wrapper.middleware');

router.route('/')
  /**
   * GET /
   * @summary Display all available routes
   */
  .get(controllerWrapper(pageController.getHomePage));

router.rout('/contacts')
  .get(controllerWrapper(contactController.getContactForm));