const decodeTheRing = function (s, p) {
    let m = 0;
    let pIndex = 0;
    let starIndex = -1;
    let matchIndex = -1;

    while (m < s.length) {

        if (pIndex < p.length && (p[pIndex] === s[m] || p[pIndex] === '?')) {
            m++;
            pIndex++;
        }

        else if (pIndex < p.length && p[pIndex] === '*') {
            starIndex = pIndex;
            matchIndex = m;
            pIndex++;
        }

        else if (starIndex !== -1) {
            pIndex = starIndex + 1;
            matchIndex++;
            m = matchIndex;
        }

        else {
            return false;
        }
    }

    while (pIndex < p.length && p[pIndex] === '*') {
        pIndex++;
    }


    return pIndex === p.length;
};

module.exports = decodeTheRing;
