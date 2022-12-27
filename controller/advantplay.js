const model = require('../config/model/index');
const controller = {};

controller.getAll= async function (req,res) {
    try {
        let data = await model.items.findAll()
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
            id: req.body.id,
            provider_gname: req.body.provider_name,
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
    
}

controller.delete = async function (req,res){
    
}

module.exports = controller;