document.addEventListener('contextmenu', event => event.preventDefault());

var dolo_love = false;

$(document)['ready'](function () {

    var _0x399ec4 = {};

    function _0x326088(_0x19a53d, _0x567a79) {
        return Math['round'](Math['random']() * (_0x567a79 - _0x19a53d + 0x1)) + _0x19a53d;
    }
    $(window)['mousemove'](function (_0x32fd1b) {
        _0x399ec4['x'] = _0x32fd1b['pageX'];
        _0x399ec4['y'] = _0x32fd1b['pageY'];
        if (_0x399ec4['x'] > 0x0 && _0x399ec4['y'] > 0x0) {
            var _0xd6406d = dolo_love ? Math['floor'](Math['random']() *  random_love_array['length']) : Math['floor'](Math['random']() *  random_images_array['length']);
            var _0x32090d = dolo_love ? random_love_array[_0xd6406d] : random_images_array[_0xd6406d];
            var _0xb9f424 = '<img height=\"25px\" width=\"25px\" src=' + _0x32090d + ' alt=\"\" border=\"0\">';
            var _0x3ab1c1 = 0xa;
            var _0x5c2c3d = _0x326088(0x2, 0x1);
            size = 'height:P' + _0x5c2c3d + 'px;Pwidth: ' + _0x5c2c3d + 'px;';
            var _0x327bff = 'left: ' + _0x326088(_0x399ec4['x'] - _0x3ab1c1 - _0x5c2c3d, _0x399ec4['x'] + _0x3ab1c1) + 'px;';
            var _0xe8760 = 'top: ' + _0x326088(_0x399ec4['y'] - _0x3ab1c1 - _0x5c2c3d, _0x399ec4['y'] + _0x3ab1c1) + 'px;';
            var _0x167e83 = _0x327bff + _0xe8760 + size;
            $('<div class=\'pointer\' style=\'' + _0x167e83 + '\'>' + _0xb9f424 + '</div>')['appendTo']('#Ilias')['one']('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this)['remove']();
            });
        }
    });

 });


var random_love_array = [
  'https://cdn.cbkdz.eu/img/emoji/two-hearts_1f495.png',
  'https://cdn.cbkdz.eu/img/emoji/rose.png',
  'https://cdn.cbkdz.eu/img/emoji/red-heart_2764-fe0f.png'
];

var random_images_array = [
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-open-mouth-and-cold-sweat_1f605.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-tears-of-joy_1f602.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-heart-shaped-eyes_1f60d.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-smiling-eyes_1f60a.png',
    'https://cdn.cbkdz.eu/img/emoji/overheated-face_1f975.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-pleading-eyes_1f97a.png',
    'https://cdn.cbkdz.eu/img/emoji/heavy-black-heart_2764.png',
    'https://cdn.cbkdz.eu/img/emoji/speak-no-evil-monkey_1f64a.png',
    'https://cdn.cbkdz.eu/img/emoji/see-no-evil-monkey_1f648.png',
    'https://cdn.cbkdz.eu/img/emoji/freezing-face_1f976.png',
    'https://cdn.cbkdz.eu/img/emoji/serious-face-with-symbols-covering-mouth_1f92c.png',
    'https://cdn.cbkdz.eu/img/emoji/grinning-face-with-one-large-and-one-small-eye_1f92a.png',
    'https://cdn.cbkdz.eu/img/emoji/hugging-face_1f917.png',
    'https://cdn.cbkdz.eu/img/emoji/face-with-rolling-eyes_1f644.png',
    'https://cdn.cbkdz.eu/img/emoji/face-throwing-a-kiss_1f618.png',
    'https://cdn.cbkdz.eu/img/emoji/smiling-face-with-halo_1f607.png',
    "https://cdn.cbkdz.eu/img/emoji/butterfly_1f98b.png"
 ];

//Emoji Cursor ~ Dolo
