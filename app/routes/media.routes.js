const express = require('express');
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cd){
        console.log(file)
        cd(null, './upload/');
    },
    filename: function(req, file, cd){
        console.log(file)
        cd(null, `file_${file.originalname}`);
    }
})
const fileFilter = (req, file, cd)=>{
    if (file.mimetype ==='image/jpg' || file.mimetype === 'image/JPG'  || file.mimetype === 'image/jpeg' || file.mimetype === 'image/JPEG' || file.mimetype === 'image/png'){
        cd(null, true);
    }else{
        cd(null, false);
    }
}
const upload = multer({
    storage: storage, 
    limits:{
        fileSize: 1024 * 1024 *5
    },
    fileFilter:fileFilter
});

const media = require("../controllers/media.controller");

router.post('/uploadimage', upload.single("file"), media.uploadImage);
router.delete('/deleteimg/:imagename', media.deleteImg);

module.exports = router;