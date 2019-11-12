const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { userSchema, mongoose } = require("../models");

const controller = () => {
    // Autenticação de usuário por email/senha
    const authenticate = async (req, res) => {
        const { email, password } = req.body;

        return res.status(200).send("Autenticação OK");
    };

    // Retorna lista de todos os usuários no banco
    const get = async (req, res) => {
        const { id } = req.params;

        return res.status(200).send("Get OK");
    };

    // Cria um novo usuário no banco
    const post = async (req, res) => {
        return res.send("Post OK");
    };

    // Atualiza um usuário no banco
    const patch = async (req, res) => {
         return res.send("Patch OK");

    };

    return {
        authenticate: authenticate,
        get: get,
        post: post,
        patch: patch,
    };
};

module.exports = controller;
