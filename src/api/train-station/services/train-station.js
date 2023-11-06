'use strict';

/**
 * train-station service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::train-station.train-station');
