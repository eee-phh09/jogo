let vida = 10
let inventario = []
let checkpoint1 = false

function Espanha() {
   alert("Na espanha o atleta não se adaptou e não soube lidar como achou que era esperado, e teve que deixar o país.")


   alert("Ele decidiu deixar a Espanha devido a crescente repressão e falta de oportunidades para nadadores. ")


   alert("Ele embarcou em uma jornada perigosa, saindo do país via terrestre e atravessando a fronteira com o Marrocos.")

}




function Italia() {
   alert("Iman finalmente chegou a Italia, onde recebeu asilo e foi acolhido por uma comunidade de refugiados. Começou a retomar seus treinos com o suporte de um novo treinador e começou a se adaptar a nova vida.")
}

function finalVitoria() {
   alert("A decisão de ele ter deixado o Ira foi dolorosa, mas necessária para garantir um futuro melhor e a liberdade de continuar sua carreira na natação.")
   alert("Contudo isso ele foi convocado até as olimpiadas de Paris 2024.")
   alert("A noticia foi um grande alivio e motivo de orgulho para ele.")
   alert("Isso foi uma recompensa por todo o esforço e sacrificio feitos ao longo dos anos.")
}




alert("A partir daqui começa sua trajetória\n")
alert("Você é um iraniano chamado Iman Mahdavi")
alert("Ele tem o sonho de chegar até as olipíadas, mas para isso ele terá que passar por vários desafios\n")
alert("Iman Mahdavi nasceu nas margens do Mar Cáspio, chamada de região dos lutadores localizada no Irã, lá começou a nadar aos 8 anos, influenciado por um amigo de escola que era nadador.")


while(checkpoint1 == false){
   let escolha = Number(prompt("Ele não estava tendo uma vida boa e confortável lá e por isso decidiu deixar seus país natal, e voce tem que escolher qual país quer ir \n1. Espanha \n2. Itália \ndigite um dos numeros."))
   if (escolha === 1) {
      alert("Se voce escolheu a Espanha, não poderá realizar desafios extras.")
      Espanha()
      alert("Você morreu, faça escolha novamente")
   }
   else if (escolha === 2) {
      alert("Se voce escolheu a Itália, prepare-se para varios desafios que estão por vir.")
      Italia()
      checkpoint1=true
   
   }
   
}

let duelo = prompt("Começando na academia nova, ele foi desafiado por um outro aluno a um duelo!\n Você aceita? Sim/Não").toLocaleLowerCase()

if (duelo === "sim") {
   vida -= 10
   alert("A luta começou muito bem para você, mas o adversário jogou de forma desleal e você se machucou! Você perdeu 10 pontos. Sua barra de progresso está em ${vida}")
}else if(duelo === 'não'){
   vida += 10
   alert("Você entende que ele estava apenas querendo te provocar, e optou por não dar palco pra bundão! Muito bem! Você ganhou 10 pontos. Sua barra de progresso está em ${vida}")
   alert("Foi adicionado ao seu inventário o item: 'Sabedoria'.")
   inventario.push("Sabedoria")
}else{
   alert("Opção inválida!")
}




let campeonato = Number(prompt("Você foi convidado a participar de um campeonato regional nacional junior!\n Você aceita? 1.Sim/ 2.Não"))

if(campeonato === 1){
   alert('Se você escolheu 1, participara do campeonato regional nacional junior.')
   alert("Foi adicionado ao seu inventário o item: 'Coragem'. ")
   inventario.push("Coragem")
   simcampeonato()
}else if(campeonato === 2){
   alert('Se você escolheu 2, não participara do campeonato regional nacional junior.')
   naocampeonato()
   //(aqui pode colocar um checkpoint)
}else{
   alert("Opção inválida!")
}




// let treino1 = Number(prompt("1.Força , 2.resistencia, 3.cardiovascular, 4.flexibilidade"))


function naocampeonato(){
   alert("Como você não participou do campeonato, não tera chances de evoluir e melhorar seu pontencial.")
   alert("Você irá precisar treinar, se quiser participar de seu grande sonho, de chegar até as olimpíadas.")
   alert("Se você escolheu não participar, perdeu.")
   //dá um encerramento para história e game over 
}

function simcampeonato(){

   //continua história aqui
   alert("Quando você chegou até lá foi preparado pelo seu treinador especialista em competir jogos olimpícos.")
   alert("Você terá uma semana para mostras suas habilidades e dar seu melhor possível.")
   alert("Passou dois dias e seu treinador notou uma constante evolução e melhora de seu atleta.")
   alert("Faltando pouco para terminar sua semana se treinamento, seu treinador disse a ele que faltava pouco para seu objetivo for comprido.")
   alert("No último dia seu treinador preparou a lista de convocados.")
   alert("Ele ficou nervoso e tenso, esperando por sua convocação. ")
   alert("Chegou a hora tão esperada e desejada, a convocação.")
   alert("Passou um filme em sua cabeça, ele ficava pensando e lembrando toda hora, o esforço, determinação e foco que ele teve em seus ultimos anos para chegar até as olimpíadas.")
   alert("Até que na hora falaram o nome dele na convocação, vibrou muito e ficou muito feliz pelo feito que ele tanto queria.")

}
function olimpiadasParis(){

   //sua história nas olimpíadas
   alert("Contudo isso que ocorreu, o atleta foi convocado para disputar com a equipe olímpica de refugiados nas olímpiadas de Paris 2024.")
   alert("O atleta chegou a Paris e começou os preparativos finais para as competições.")
   alert("O atleta estava emocionado e ansioso para competir, mesmo sem poder representar oficialmente sua pátria de origem.")
   alert("A sensação do atleta de estar tão perto do seu sonho olímpico era indescritível.")
   alert("A estreia do atleta na competição olímpica foi um momento de grande significado para ele.")
   alert("O atleta conseguiu fazer uma boa apresentação na borboleta 200 metros, representando a equipe olímpica de refugiados com coragem e determinação.")


}
     