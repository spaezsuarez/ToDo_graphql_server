export const getIdDB = (table:string):string => {
    switch (table) {
        case 'User':
            return '_idUser';
        case 'Task':
            return '_idTask';
        case 'ItemTask':
            return '_idItemTask';
    }
}

export const getValueText = (list:any[]):string => {
    let values = 'VALUES(';
    for (let i = 0; i < list.length; i++) {
        if (i === (list.length - 1)) {
            values += `${list[i]});`
        } else {
            values += `${list[i]},`
        }
    }
    return values;
}

export const getUpdateText = (body:any):string => {
    let update = '';
    for (let clave in body) {
        if (body.hasOwnProperty(clave)) {
            update += `${clave} = ${body[clave]},`;
        }
    }
    return update.substring(0, update.length - 1);

}

export const parseString = (text:any):string => {
    return `'${text}'`;
}

