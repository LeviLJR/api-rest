const {TarefaModel} = require('./bd');

module.exports = {
    novo: async (tarefa) => {
        return await TarefaModel.create(tarefa);
    },
    deleta: async (id) => {
        return await TarefaModel.destroy({where: {id: id}});
    },
    lista: async () => {
        return await TarefaModel.findAll();
    },
}