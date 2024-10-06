/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
 if (s1.length > s2.length) {
        return false;
    }

    // Helper function to check if two arrays are equal
    function arraysEqual(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    // Frequency arrays for s1 and a window in s2
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    // Fill the frequency arrays for s1 and the first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Now slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (arraysEqual(s1Count, s2Count)) {
            return true;
        }

        // Slide the window: remove the character going out and add the one coming in
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Check the last window
    return arraysEqual(s1Count, s2Count);
    
};
