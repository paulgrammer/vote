var CampaignModel = require('../models/CampaignModel.js');

/**
 * CampaignController.js
 *
 * @description :: Server-side logic for managing Campaigns.
 */
module.exports = {

    /**
     * CampaignController.list()
     */
    list: function (req, res) {
        CampaignModel.find(function (err, Campaigns) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Campaign.',
                    error: err
                });
            }

            return res.json(Campaigns);
        });
    },

    /**
     * CampaignController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CampaignModel.findOne({_id: id}, function (err, Campaign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Campaign.',
                    error: err
                });
            }

            if (!Campaign) {
                return res.status(404).json({
                    message: 'No such Campaign'
                });
            }

            return res.json(Campaign);
        });
    },

    /**
     * CampaignController.create()
     */
    create: function (req, res) {
        
        var Campaign = new CampaignModel({
			candidates : req.body.candidates,
			name : req.body.name,
			startsAt : new Date(req.body.startsAt),
			endsAt : new Date(req.body.endsAt),
        });

        Campaign.save(function (err, Campaign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Campaign',
                    error: err
                });
            }

            return res.status(201).json(Campaign);
        });
    },

    /**
     * CampaignController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CampaignModel.findOne({_id: id}, function (err, Campaign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Campaign',
                    error: err
                });
            }

            if (!Campaign) {
                return res.status(404).json({
                    message: 'No such Campaign'
                });
            }

            Campaign.candidates = req.body.candidates ? req.body.candidates : Campaign.candidates;
			Campaign.name = req.body.name ? req.body.name : Campaign.name;
			Campaign.startsAt = req.body.startsAt ? req.body.startsAt : Campaign.startsAt;
			Campaign.endsAt = req.body.endsAt ? req.body.endsAt : Campaign.endsAt;
            
            Campaign.save(function (err, Campaign) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Campaign.',
                        error: err
                    });
                }

                return res.json(Campaign);
            });
        });
    },

    /**
     * CampaignController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CampaignModel.findByIdAndRemove(id, function (err, Campaign) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Campaign.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
