var express = require('express');
var router = express.Router();

const {sequelize} = require('../model/bd');
const TarefaService = require('../model/Tarefa');

//listagem das tarefas
router.get('/', async (req,res) => {
  res.json({lista: await TarefaService.lista()});
})

//inserir uma nova tarefa
router.post('/', async (req, res) => {
  try {
    let tarefa = await TarefaService.novo(req.body);
    res.json({tarefa: tarefa});
  } catch (e) {
    res.status(400).json({msg: "Não foi possível inserir a tarefa"});
  }
});

//deletar uma tarefa
router.delete('/:id', async (req, res) => {  
  try {
    const listaTarefas = await TarefaService.lista(); 
    if (listaTarefas.length === 0) {
      return res.status(400).json({ msg: "Não há tarefas para deletar" });
    }
    await TarefaService.deleta(req.params.id);
    res.json({msg: "Tarefa deletada com sucesso"});
  } catch (e) {
    res.status(400).json({msg: "Não foi possível encontrar a tarefa"});
  }
});


/* GET home page. */
router.get('/install', async function(req, res, next) {
  await sequelize.sync({force: true});
  res.json({
    msg: "Instalacao realizada com sucesso", 
  });
});  

module.exports = router;
