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

// Toggle contents between display and hidden.
function toggle_hidden(content_id) {
    var hidden_block = document.getElementById('hidden_' + content_id);
    if (hidden_block === null) {
        return;
    }

    var hidden_button = document.getElementById('toggle_hidden_' + content_id);
    if (hidden_block.style.display === 'none') {
        hidden_block.style.display = 'inline';
        hidden_button.innerHTML = '[Show less]';
    } else {
        hidden_block.style.display = 'none';
        hidden_button.innerHTML = '[Show more]';
    }
}

// Switch between publication lists.
function switch_pub(list_id) {
    var publications = document.getElementById('publication');
    if (publications === null) {
        return;
    }

    for (var idx = 0; idx < publications.tBodies.length; idx++) {
        var pub_list = publications.tBodies[idx];
        var button = document.getElementById('switch_' + pub_list.id);
        if (pub_list.id === 'pub_' + list_id) {
            pub_list.style.display = 'inline';
            button.style.color = '#000000';
        } else {
            pub_list.style.display = 'none';
            button.style.color = '#1772d0';
        }
    }
}

adjust_global_scale();
