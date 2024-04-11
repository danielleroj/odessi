
module.exports = {
    googlePlaces
};

function googlePlaces(req, res) {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    res.redirect(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`)
}  