// Utility Functions.

// Adjust the homepage scale to fit the device width adaptively.
function adjust_global_scale() {
    // The homepage is placed on a large table, i.e., the first 'Table' tag.
    var table = document.getElementsByTagName('table')[0];
    // Get width by number of pixels.
    var max_width = parseInt(window.getComputedStyle(table).width, 10);
    var current_width = window.innerWidth;
    // Compute scale.
    var scale = 1.0;
    if (current_width < max_width) {
        scale = current_width / max_width;
    }
    // Adjust the table scale.
    table.style.scale = scale;
    table.style.transformOrigin = '0 top';
}


adjust_global_scale();
