const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

    //cria tabela
    db.run(`
    
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,  
            description TEXT,
            link TEXT  
        );
    `)

    //insere dados numa tabela
    /* const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        "Exercícios",
        "Saúde",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa officiis dolores, mollitia repudiandae in, ut ex delectus ipsam illo saepe eligendi expedita nemo blanditiis eaque! Quae eligendi dolorem quisquam.",
        "https://rockseat.com.br"
    ]

    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    }) */

    //deletar um dado da tabela
    /* db.run('DELETE FROM ideas WHERE id=?',[1],function(err){
        if (err) return console.log(err)

        console.log("Deletei", this)
    }) */

    //consultar os dados na tabela
    /* db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    }) */

})

module.exports = db