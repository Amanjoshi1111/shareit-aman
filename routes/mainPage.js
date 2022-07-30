const router = require('express').Router();

router.get('', (req, res) => {
    try {
        return res.render('mainPage', { success: "finally" });
    }
    catch (err) {
        return res.render('mainPage', `${err}`);
    }
});

module.exports = router;