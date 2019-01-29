module.exports = function (req, res, next) {
    if (req.user){
        return next ();
    }

    return res.redirect('/');
};

//must be logged in to have access to data 
//if you must be logged in, must send a request to the server, must recoginze you as the user
//passport has to decrypt and extract user 
    //if it finds the user--> will send you to the to the next step... otherwise, it will send you to the index 