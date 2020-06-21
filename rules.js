const rules = {
    1: [[1, 2, 2], [3, 3, 4]],
    2: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 2, 3], [4, 5, 3], [4, 5, 6], [4, 5, 6], [4, 5, 6], [4, 5, 6]],
    3: [[1, 1], [2, 3]],
    4: [[1, 1, 1, 1, 1, 1, 2, 2, 2, 2], [3, 3, 3, 3, 3, 4, 4, 4, 4, 4], [5, 5, 5, 5, 6, 6, 6, 6, 6, 6]],
    5: [[1], [2]],
    6: [[1, 2, 2], [3, 4, 5], [6, 6, 7]],
    7: [[1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 3, 3], [1, 1, 2, 2, 4, 4], [1, 1, 5, 5, 4, 4], [1, 1, 5, 5, 6, 6], [1, 1, 5, 5, 6, 6]],
    8: [[1, 1, 2, 3]],
    9: [[1, 2], [1, 3], [1, 4]],
    10: [[1], [2], [3], [4]],
    11: [[1, 1, 2], [1, 1, 3], [4, 5, 6]],
    12: [[1, 2, 3], [4, 2, 3]],
    13: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    14: [[1, 2, 3], [1, 4, 4]],
    15: [[1, 2, 3], [4, 4, 4], [5, 6, 7]],
    16: [[1, 2]],
    17: [[1], [2], [3]],
    18: [[1, 2, 3]],
    19: [[1, 2], [3, 3]],
    20: [[1, 2], [1, 3]],
    21: [[1, 2], [3, 2]],
    22: [[1, 2, 3, 4]],
    23: [[1, 1], [2, 3], [4, 4]],
    24: [[1, 1], [2, 2], [3, 4]],
    25: [[1, 1], [2, 3], [2, 4]],
    26: [[1, 2], [3, 3], [4, 4]],
    27: [[1, 2, 3], [1, 2, 4]],
    28: [[1, 2], [3, 4]],
    29: [[1, 2], [3, 2], [4, 2]],
    30: [[1, 2, 3], [4, 4, 4]],
    31: [[1, 1, 1], [2, 3, 4]],
    32: [[1, 2, 3], [1, 4, 3]],
    33: [[1, 1, 2], [3, 4, 2]],
    34: [[1, 2], [1, 3], [4, 4], [4, 4]],
    35: [[1, 2], [1, 3], [4, 3]],
    36: [[1], [2], [3], [4], [5]],
    37: [[1, 2, 3], [4, 2, 5]],
    38: [[1, 2], [3, 4], [5, 5]],
    39: [[1,2,3],[4,5,3]],
    40: [[1, 1], [2, 3], [4, 5]],
    41: [[1, 2, 3], [1, 4, 5]],
    42: [[1, 1, 1, 2, 2], [1, 1, 1, 3, 3], [1, 1, 1, 4, 4], [1, 1, 1, 5, 5]],
    43: [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [2, 3, 4, 5], [2, 3, 4, 5]],
    44: [[1, 2, 3, 4], [1, 2, 3, 4], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]],
    45: [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]],
    46: [[1, 2, 3, 4, 5], [1, 6, 3, 7, 5], [8, 6, 10, 7, 12], [8, 9, 10, 11, 12]],
    47: [[1, 2, 3, 4], [5, 6, 6, 7], [8, 6, 6, 9], [10, 11, 12, 13]],
    48: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 11], [12, 13, 11, 11]],
    49: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [6, 6, 6, 6, 6], [6, 6, 6, 6, 6], [7, 8, 9, 10, 11], [7, 8, 9, 10, 11], [7, 8, 9, 10, 11]],
    50: [[1, 2, 3, 4], [1, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 11]],
    51: [[1, 2, 3, 3], [4, 5, 3, 3], [6, 5, 7, 8], [9, 10, 11, 12]],
    52: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [6, 7, 3, 8, 9], [6, 7, 10, 8, 9], [11, 12, 10, 13, 14], [11, 12, 10, 13, 14], [11, 12, 10, 13, 14]]
}



function subclasses() {

    fabric.Clip = fabric.util.createClass(fabric.Rect, {

        type: 'clip',
        selectable: false,
        hoverCursor: 'default',
        objectCaching: false,
        absolutePositioned: true,
        fill: 'rgba(225,225,225,0.4)',

        initialize: function (options) {
            options || (options = {});

            this.callSuper('initialize', options);
            this.set('slot_id', options.slot_id || '');
            this.set('hasPhoto', options.hasPhoto || false);
        },

        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                slot_id: this.get('slot_id'),
                hasPhoto: this.get('hasPhoto')
            });
        },

        _render: function (ctx) {
            this.callSuper('_render', ctx);
        }
    })

    // class Icon delete photo
    fabric.DeleteControl = fabric.util.createClass(fabric.Rect, {

        type: 'DeleteControl',
        initialize: function (options) {
            options || (options = {});
            this.callSuper('initialize', options);
            this.set('slot_id', options.label || '');
        },

        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                label: this.get('slot_id')
            });
        },

        _render: function (ctx) {
            this.callSuper('_render', ctx);
        },

        hide: function () {
            this.set({opacity: 0})
        },

        show: function () {
            this.set({opacity: 1})
        }
    });


    // classe de teste
    

}


subclasses()