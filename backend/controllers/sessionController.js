const checkSession = async (req, res) => {
    if (req.session.user) {
        res.status(200).json({ message: 'Session active'});
    } else {
        res.status(401).json({ error: 'Not authenticated' });
    }
};

module.exports = {checkSession}