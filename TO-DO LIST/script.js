function adicionarTarefa(dia) {
    const tarefaInput = document.getElementById(`tarefa${dia.charAt(0).toUpperCase() + dia.slice(1)}`);
    const tarefa = tarefaInput.value;

    if (tarefa) {
        const tarefas = obterTarefas(dia);
        tarefas.push(tarefa);
        salvarTarefas(dia, tarefas);
        tarefaInput.value = '';
        carregarTarefas(dia);
    }
}

function salvarTarefas(dia, tarefas) {
    localStorage.setItem(dia, JSON.stringify(tarefas));
}

function obterTarefas(dia) {
    const tarefas = localStorage.getItem(dia);
    return tarefas ? JSON.parse(tarefas) : [];
}

function carregarTarefas(dia) {
    const tarefas = obterTarefas(dia);
    const ul = document.getElementById(`tarefas${dia.charAt(0).toUpperCase() + dia.slice(1)}`);
    ul.innerHTML = '';
    
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa;
        li.onclick = () => removerTarefa(dia, index);
        ul.appendChild(li);
    });
}

function removerTarefa(dia, index) {
    const tarefas = obterTarefas(dia);
    tarefas.splice(index, 1); // Remove a tarefa pelo índice
    salvarTarefas(dia, tarefas);
    carregarTarefas(dia);
}

// Carregar as tarefas ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    const dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
    dias.forEach(dia => carregarTarefas(dia));
});
