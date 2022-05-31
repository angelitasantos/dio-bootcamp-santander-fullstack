function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }

    return admins;
}

const usuarios = new Map();
usuarios.set('Luis', 'Admin');
usuarios.set('Paulo', 'Super');
usuarios.set('Carlos', 'Admin');
usuarios.set('Bruno', 'Admin');

console.log(getAdmins(usuarios));