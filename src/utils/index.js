const slugify = require("slugify");

function generateUniqueSlug(title) {
    let baseSlug = slugify(title, { lower: true });

    const currentDate = new Date();
    const dateSlug = currentDate.toISOString().slice(0, 10).replace(/-/g, "");

    let uniqueSlug = baseSlug + "_" + dateSlug;

    if (uniqueSlug.length > maxLength) {
        uniqueSlug = uniqueSlug.slice(0, maxLength);
    }

    return uniqueSlug;
}

module.exports = generateUniqueSlug;
