var express = require('express');
var router = express.Router();

const {sequelize} = require('../model/bd');
const AutorService = require('../model/Autor');
const PostService = require('../model/Post');
//listar os post
router.get('/', async (req,res) => {
  res.json({lista: await PostService.lista()});
})
//lista por autor
router.get('/autor/:autor', async (req, res) => {
  res.json({lista: await PostService.listaPorAutor(req.params.autor)});
})
//Visualizar um post
router.get('/view/:id', async (req, res) => {
  res.json({post: await PostService.contaAcesso(req.params.id)});
})
//inserir um novo post
router.post('/', async (req, res) => {
  try {
    let post = await PostService.novo(req.body);
    res.json({post: post});
  } catch (e) {
    res.status(400).json({msg: "Não foi possível inserir o post"});
  }
})

//alterar um post
router.put('/:id', async (req, res) => {
  try {
    let post = await PostService.altera(req.body, req.params.id);
    res.json({post: post});
  } catch (e) {
    res.status(400).json({msg: "Não foi possível alterar o post"});
  }
})


/* GET home page. */
router.get('/install', async function(req, res, next) {
  await sequelize.sync({force: true});

  let autor = await AutorService.novo('Fulano');
  autor = await AutorService.buscaPorId(autor.id)

  let autor2 = await AutorService.novo('Ciclano');
 /*
  let post = await PostService.novo({
    titulo: "Primeiro post",
    texto: "Texto do primeiro post",
    AutorId: autor.id
  })
  await PostService.altera({
    titulo:"Novo titulo",
    texto:"Novo texto"
  }, post.id);
  await PostService.contaAcesso(post.id);
  post = await PostService.buscaPorId(post.id);

  let post1 = await PostService.listaPorAutor(autor);

  */
  res.json({
    msg: "Instalacao realizada com sucesso", 
  });
});  

module.exports = router;
