import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        return res.status(200).json(data);
    });
}

export const createUsers = (req,res) => {
    const { name, email, phone, birthday, password } = req.body;
    
    if(!name || !email || !phone || !birthday || !password) {
        return res.status(400).json({error: "Todos os campos são obrigatórios"})
    }

    const query = `
        INSERT INTO users (name, email, phone, birthday, password)
        VALUES (?, ?, ?, ?, ?)
    `
    db.query(query, [name, email, phone, birthday, password], (err) => {
        if (err){
            console.error("Erro ao inserir usuário:", err.sqlMessage || err);
            return res.status(500).json({ error: "deu ruim"});
        }
        return res.status(201).json({ message: "User created successfully"});
    })
}



export const createCategory = (req, res) => {
    const { category_name } = req.body;
    if(!category_name){
        return res.status(400).json({erro: "Campo obrigatório"})
    }
    
    const query = `
    INSERT INTO categories (category_name)
    VALUES (?)
    `
    db.query(query,[category_name],(err) => {
        if(err){
            console.error("Erro ao inserir o usuário:", err.sqlMessage || err);
        }
        return res.status(201).json({ message: "User created successfully"});
    })

}