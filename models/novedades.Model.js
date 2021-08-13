var pool = require('./bd');
/* La función getNovedades devuelve un array de filas de la tabla novedades */
async function getNovedades (){
    var query = "select * from novedades order by id desc";/* devuelve uno ovarios dea curdo alos que haya  */
    var rows = await pool.query( query);
    return rows;
}



/* /* eliminar la novedad según el id. */
async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query( query, [id]);
    return rows;
}

module.exports = { getNovedades, deleteNovedadesById} 