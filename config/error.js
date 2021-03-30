const errorCode = {
    ['not_found']: {
        code: 404,
        msg: 'Data not found'
    },
    ['cant_insert']: {
        code: 400,
        msg: 'Cant insert data'
    },
    ['cant_update']: {
        code: 400,
        msg: 'Cant update data'
    },
}

module.exports = errorCode;