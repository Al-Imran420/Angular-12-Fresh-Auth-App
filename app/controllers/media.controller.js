const fs = require('fs');

module.exports.uploadImage = function(req, res, next){
    const file = req.file;
    console.log(file.filename);
    if(!file){
        const error = new Error('No File')
        error.httpStatusCode = 400;
        return next(error)
    }
    res.send(file)
}

const DIR = 'upload'
exports.deleteImg = function(req, res) {
    var img = req.params.imagename;
    if(!img){
        console.log("No file recive!")
    }else{
        try{
            //fs.unlinkSync(DIR+'/'+img+'.png')
            fs.unlinkSync(DIR+'/'+img)
            console.log("File delete successfully!")
            res.status(200).json({msg: "Delete successfully"});
        }catch (err){
            return res.status(400).send(err);
        }
    }
};