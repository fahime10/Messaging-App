exports.index = (req, res, next) => {
    res.render('index', {
        title: 'Whatsapp',
        content: 'content'
    });
};
