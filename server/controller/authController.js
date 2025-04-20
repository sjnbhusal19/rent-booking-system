

const signUp = (req, res, next) => {
    res.json({
        status: 'success',
        message:'sign up api is working'
    });
}

module.exports = {signUp}