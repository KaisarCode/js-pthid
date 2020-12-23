// Format path as ID
function pthid(pth) {
    pth = pth || '';
    var id = pth;
    id = id.replace(/-/g,'');
    id = id.split('?')[0].replace(/\//g, '-');
    id = id.replace(/^-/,'');
    id = id || 'home';
    return id;
}
