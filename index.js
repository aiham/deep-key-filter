function deepKeyFilter(obj, keyOrFilter) {
    if (obj && typeof obj === 'object') {
        if (Array.isArray(obj)) {
            for (var value of obj) {
                deepKeyFilter(value, keyOrFilter);
            }
        } else {
            for (var key in obj) {
                if (
                    typeof keyOrFilter === 'function' && keyOrFilter(key) ||
                    typeof keyOrFilter === 'string' && keyOrFilter === key
                ) {
                    delete obj[key];
                } else {
                    deepKeyFilter(obj[key], keyOrFilter);
                }
            }
        }
    }
}

module.exports = deepKeyFilter;
