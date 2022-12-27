const model = require('../config/model/index');
const controller = {};
const { Op } = require("sequelize");

// Menampilkan seluruh Game yang ada di Database
controller.getAll= async function (req,res) {
    try {
        let data = await model.items.findAll({
            // Menampilkan Database berdasarkan Nama Provider Game
            where: {provider_name: 'advantplay'},
            // Menampilkan Database Berdasarkan yang ingin di munculkan
            attributes: ['id','game_name','img_url','rtp_percentage','bet_start','bet_end','gacor_time_start','gacor_time_end'],
            // Mengurutkan urutan Game Berdasarkan Abjad
            order: [['game_name','asc']],
            limit: 50
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'Menampilkan Data Game'
            })
        }else{
            res.status(200).json({
                items: [],
                message: 'Data Game Tidak Ada'
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

controller.getOne = async function (req,res) {
    try {
        let data = await model.items.findAll({
            where: {
                id: req.params.id
            }
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'detail game',
                status: 200
            })
        }else{
            res.status(200).json({
                items: [],
                message: 'Data Game Tidak Ada'
            })
        } 
    } catch (error) {
         res.status(404).json({
            message: error
        })
    }
}

controller.post = async function (req,res){
    try {
        let data = await model.items.create({
            provider_name: req.body.provider_name,
            show_rtp: req.body.show_rtp,
            show_patterns: req.body.show_patterns,
            show_dc: req.body.show_dc,
            game_name: req.body.game_name,
            img_url: req.body.img_url,
            rtp_percentage: req.body.rtp_percentage,
            bet_start: req.body.bet_start,
            bet_end: req.body.bet_end,
            gacor_time_start: req.body.gacor_time_start,
            gacor_time_end: req.body.gacor_time_end
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Tambah Items'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.put = async function (req,res){
    try {
        let data = await model.items.update({
            show_rtp: req.body.show_rtp,
            show_patterns: req.body.show_patterns,
            show_dc: req.body.show_dc,
            rtp_percentage: req.body.rtp_percentage,
            bet_start: req.body.bet_start,
            bet_end: req.body.bet_end,
            gacor_time_start: req.body.gacor_time_start,
            gacor_time_end: req.body.gacor_time_end
        },{
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Edit Game'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.delete = async function (req,res){
    try {
        let data = await model.items.destroy({
            where: {
                id: req.params.id
            }       
        })
        res.status(201).json({
            items: data,
            message: 'Berhasil Hapus Game'
        })
    } catch (error) {
        res.status(404).json({
           message: error
       })

    }
}

controller.getSearch = async function (req,res) {
    const search = req.query.keyword;
    try {
        let data = await model.items.findAll({
            where: {
                [Op.or]: [{
                    provider_name : {
                        [Op.like]: '%' +search+ ''
                    }
                },{
                    game_name : {
                        [Op.like]: '%' +search+ ''
                    }
                }]
            }
        })
        if (data.length > 0) {
            res.status(200).json({
                items: data,
                message: 'detail game',
                status: 200
            })
        }else{
            res.status(200).json({
                items: [],
                message: 'Data Game Tidak Ada'
            })
        } 
    } catch (error) {
         res.status(404).json({
            message: error
        })
    }
}

module.exports = controller;