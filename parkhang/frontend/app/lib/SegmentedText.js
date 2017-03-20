import TextSegment from './TextSegment'

export default class SegmentedText {

    /**
     *
     * @param {TextSegment[]} segments - Array of TextSegments
     */
    constructor(segments) {
        this.segments = segments;
        this._sortedSegments = null;
        this._sortedText = null;
    }

    /**
     * Combine all the text's segments into a string.
     *
     * @returns {string}
     */
    getText() {
        if (this._sortedText == null) {
            let sorted = this.sortedSegments();
            let text = "";
            for(let i=0; i < sorted.length; i++) {
                text += sorted[i].text;
            }
            this._sortedText = text;
        }
        return this._sortedText;
    }

    /**
     * Get the texts segments sorted by start position.
     *
     * @returns {TextSegment[]|null}
     */
    sortedSegments() {
        if (!this._sortedSegments) {
            this._sortedSegments = Object.assign([], this.segments);
            this._sortedSegments.sort((a, b) => {
                let res = a.start - b.start;
                if (res == 0) {
                    // shorter segments should come first
                    res = a.length - b.length;
                }

                return res;
            });
        }

        return this._sortedSegments;
    }

    /**
     * Get the TextSegment at the given position in the text.
     *
     * @param {number} position
     * @returns {TextSegment}
     */
    segmentAtPosition(position) {
        let foundSegment = false;
        for (let i=0; i < this.segments.length; i++) {
            let segment = this.segments[i];
            const segmentEnd = segment.start + segment.text.length - 1;
            if ((segment.start <= position)
                && (segmentEnd >= position )) {
                foundSegment = segment;
                break;
            }
        }
        return foundSegment;
    }

    /**
     * Get TextSegments within the given range of characters in the text.
     *
     * @param {number} start
     * @param {number} length
     * @returns {TextSegment[]}
     */
    segmentsInRange(start, length) {
        let segments = [];
        let rangeEnd;
        if (length == 0) {
            rangeEnd = start;
        } else {
            rangeEnd = start + length - 1;
        }

        const sorted = this.sortedSegments();
        for (let i=0; i < sorted.length; i++) {
            let segment = sorted[i];
            const segmentEnd = segment.start + segment.text.length - 1;

            if (
                (segment.start <= start
                && segmentEnd >= start
                && segmentEnd <= rangeEnd)
                ||
                (segment.start >= start
                && segmentEnd <= rangeEnd
                )
                ||
                (segment.start <= rangeEnd
                && segmentEnd >= rangeEnd
                )
            )
            {
                segments.push(segment);
            }
        }

        return segments;
    }
}
