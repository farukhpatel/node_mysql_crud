const db = require('../database/db');

const mainController = () => {
    return {
        async insert(req, res) {
            try {
                var color = req.body.color;
                var size = req.body.size;
                var qty = req.body.qty;


                console.log(req.body);
                var sql = `INSERT INTO product_category (color,size,qty) values("${color}","${size}",${qty})`;
                db.query(sql, (error, result) => {
                    if (error) throw error;
                    console.log(result);
                    res.send({ "status": "success" });

                });

            } catch (error) {
                res.send({ "status": error });
            }
        },
        async show(req, res) {
            try {
                var sql = 'SELECT * FROM product_category';
                db.query(sql, (error, result) => {
                    if (error) throw error;
                    console.log(result);
                    res.send({ "status": result });
                })
            } catch (error) {
                res.send({ "status": error });
            }


        },
        //find by id
        async show_id(req, res) {
            try {
                var id = req.params.id;
                var sql = `SELECT * FROM product_category WHERE id=${id}`;
                db.query(sql, (e, r) => {
                    if (e) throw e;
                    res.send({ "status": r });
                });
            } catch (error) {
                res.send({ "status": error });
            }
        },
        //find by id and update
        async update(req, res) {
            try {
                var id = req.params.id;
                var color = req.body.color;
                var size = req.body.size;
                var qty = req.body.qty;
                var sql = `UPDATE  product_category SET color="${color}",size="${size}",qty=${qty} WHERE id=${id}`;
                db.query(sql, (e, r) => {
                    if (e) throw e;
                    console.log("updated data:-");
                    console.log(r);
                    res.send({ "status": r });
                });
            } catch (error) {
                res.send({ "status": error });
            }
        },
        //find by id and delete
        async delete(req, res) {
            try {
                var id = req.params.id;
                var sql = `DELETE FROM product_category WHERE id=${id}`;
                db.query(sql, (e, r) => {
                    if (e) throw e;
                    console.log("deleted status:-");
                    console.log(r);
                    res.send({ "status": r });
                });
            } catch (error) {
                res.send({ "status": error });
            }
        }
    }
}
module.exports = mainController;