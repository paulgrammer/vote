var express = require('express');
var router = express.Router();
var CampaignController = require('../controllers/CampaignController.js');

/*
 * GET
 */
router.get('/', CampaignController.list);

/*
 * GET
 */
router.get('/:id', CampaignController.show);

/*
 * POST
 */
router.post('/', CampaignController.create);

/*
 * PUT
 */
router.put('/:id', CampaignController.update);

/*
 * DELETE
 */
router.delete('/:id', CampaignController.remove);

module.exports = router;
