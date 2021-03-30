const { check } = require('express-validator');

const validator = [
    check('description')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุชื่อผู้ใช้'),
    check('amount')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่จำนวนเงิน'),
    check('month')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุเดือน'),
    check('year')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุปี'),
];

module.exports = { validator };