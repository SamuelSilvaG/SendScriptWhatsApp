async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Filme ABELHA

Escrito por Jerry Seinfeld, Andy Robin, Barry Marder e Spike Feresten


Filme ABELHA
De acordo com todas as leis conhecidas da aviação, não há como uma abelha ser capaz de voar.
Suas asas são pequenas demais para tirar seu corpinho gordo do chão.
A abelha, claro, voa de qualquer maneira porque as abelhas não se importam com o que os humanos pensam ser impossível.
Amarelo, preto. Amarelo, preto. Amarelo, preto. Amarelo, preto.
Ah, preto e amarelo!
Vamos agitar um pouco.
Barry! O café da manhã está pronto!
Chegando!
Espere um segundo.
Olá?
Barry?
Adão?
Você pode acreditar que isso está acontecendo?
Não posso.
Eu vou buscar você.
Parecendo afiado.
Use as escadas. Seu pai pagou um bom dinheiro por elas.
Desculpe. Estou animado.
Aqui está o graduado.
Estamos muito orgulhosos de você, filho.
Um boletim perfeito, todos B's.
Muito orgulhoso.
Mãe! Tenho uma coisa acontecendo aqui.
Você tem fiapos na sua penugem.
Ai! Esse sou eu!
Acene para nós! Estaremos na linha 118.000.
Tchau!
Barry, eu te disse, pare de voar dentro de casa!
Olá, Adão.
Olá, Barry.
Isso é gel de penugem?
Um pouco. Dia especial, formatura.
Nunca pensei que conseguiria.
Três dias de ensino fundamental, três dias de ensino médio.
Isso foi estranho.
Três dias de faculdade. Estou feliz por ter tirado um dia e pegado carona pelo The Hive.
Você voltou diferente.
Olá, Barry. Artie, deixando crescer o bigode? Parece bom.
Ouviu falar de Frankie?
Sim.
Você vai ao funeral?
Não, eu não vou.
Todo mundo sabe, pique alguém e você morre.
Não desperdice com um esquilo.
Que cabeça quente.
Acho que ele poderia simplesmente ter saído do caminho.
Adoro incorporar um parque de diversões em nossos dias.
É por isso que não precisamos de férias.
Rapaz, um pouco de pompa dadas as circunstâncias.
Bem, Adam, hoje somos homens.
Nós somos!
Homens abelhas.
Amém!
Aleluia!
Alunos, professores, abelhas ilustres,
por favor, dê as boas-vindas ao Reitor Buzzwell.
Bem-vindos, turma de formandos de New Hive City às 9h15.
Isso conclui nossas cerimônias e inicia sua carreira na Honex Industries!
Vamos escolher nosso trabalho hoje?
Ouvi dizer que é apenas orientação.
Atenção! Aqui vamos nós.
Mantenha sempre as mãos e as antenas dentro do bonde.
Quer saber como será?
Um pouco assustador.
Bem-vindo à Honex, uma divisão da Honesco e parte do Grupo Hexagon.
É isso!
Uau.
Uau.
Sabemos que você, como abelha, trabalhou a vida inteira para chegar ao ponto em que pudesse trabalhar a vida inteira.
O mel começa quando nossos valentes Pollen Jocks trazem o néctar para The Hive.
Nossa fórmula ultrassecreta é automaticamente corrigida de cor, ajustada de perfume e com contorno de bolha neste xarope doce calmante com seu brilho dourado característico que você conhece como... Querida!
Aquela garota era gostosa.
Ela é minha prima!
Ela é?
Sim, somos todos primos.
Certo. Você tem razão.
Na Honex, nos esforçamos constantemente para melhorar todos os aspectos da existência das abelhas.
Estas abelhas estão testando uma nova tecnologia de capacete.
O que você acha que ele faz?
Não o suficiente.
Aqui temos nosso mais recente avanço, o Krelman.
O que isso faz?
Pega aquele fiozinho de mel que fica pendurado depois de derramado.
Economiza-nos milhões.
Alguém pode trabalhar no Krelman?
Claro. A maioria dos trabalhos de abelhas são pequenos.
Mas as abelhas sabem que cada pequeno trabalho, se bem feito, significa muito.
Mas escolha com cuidado porque você permanecerá no emprego que escolheu pelo resto da vida.
O mesmo trabalho pelo resto da vida? Eu não sabia disso.
Qual é a diferença?
Você ficará feliz em saber que as abelhas, como espécie, não tiveram um dia de folga em 27 milhões de anos.
Então você vai nos fazer trabalhar até a morte?
Com certeza tentaremos.
Uau! Isso me surpreendeu!
“Qual é a diferença?”
Como você pode dizer isso?
Um trabalho para sempre?
Essa é uma escolha insana de se fazer.
Estou aliviado. Agora só nos resta tomar uma decisão na vida.
Mas, Adam, como eles poderiam nunca ter nos contado isso?
Por que você questionaria alguma coisa? Somos abelhas.
Somos a sociedade que funciona mais perfeitamente na Terra.
Você já pensou que talvez as coisas funcionem um pouco bem demais aqui?
Como o que? Dê-me um exemplo.
Não sei. Mas você sabe do que estou falando.
Por favor, limpe o portão. Força Real do Néctar em aproximação.
Espere um segundo. Confira.
Ei, esses são Pollen Jocks!
Uau.
Nunca os vi tão de perto.
Eles sabem como é fora do The Hive.
Sim, mas alguns não voltam.
Ei, atletas!
Olá, Jocks!
Vocês se saíram muito bem!
Vocês são monstros!
Vocês são malucos do céu! Eu amo isso! Eu amo isso!
Eu me pergunto onde eles estavam.
Não sei.
O dia deles não está planejado.
Fora da Colmeia, voando sabe-se lá para onde, fazendo sabe-se lá o quê.
Você não pode simplesmente decidir ser um Pollen Jock. Você tem que ser criado para isso.
Certo.
Olhar. Isso é mais pólen do que você e eu veremos durante toda a vida.
É apenas um símbolo de status.
As abelhas dão muita importância a isso.
Talvez. A menos que você esteja usando e as mulheres vejam você usando.
Essas senhoras?
Eles não são nossos primos também?
Distante. Distante.
Olhe para esses dois.
Casal de Harrys da Colmeia.
Vamos nos divertir com eles.
Deve ser perigoso ser um Pollen Jock.
Sim. Uma vez um urso me prendeu contra um cogumelo!
Ele tinha uma pata na minha garganta e com a outra me dava um tapa!
Oh meu Deus!
Nunca pensei que iria nocauteá-lo.
O que você estava fazendo durante isso?
Tentando alertar as autoridades.
Posso autografar isso.
Um pouco de vento lá fora hoje, não foi, camaradas?
Sim. Tempestuoso.
Amanhã chegaremos a um canteiro de girassóis a seis milhas daqui.
Seis milhas, hein?
Barry!
Um pulo em uma poça para nós, mas talvez você não esteja a fim.
Talvez eu esteja.
Você não é!
Vamos às 9h no J-Gate.
O que você acha, garoto agitado?
Você é abelha o suficiente?
Eu poderia estar. Tudo depende do que significa 0900.
Olá, Honex!
Pai, você me surpreendeu.
Você decide no que está interessado?
Bem, há muitas opções.
Mas você só ganha um.
Você já ficou entediado fazendo o mesmo trabalho todos os dias?
Filho, deixe-me falar sobre como mexer.
Você pega aquele pedaço de pau, apenas o move e mexe.
Você entra em um ritmo.
É uma coisa linda.
Você sabe, pai, quanto mais penso nisso,
talvez o campo de mel não seja adequado para mim.
Você estava pensando em quê, fazer animais de balão?
Isso é um trabalho ruim para um cara com ferrão.
Janet, seu filho não tem certeza se quer entrar no mercado de mel!
Barry, você é tão engraçado às vezes.
Não estou tentando ser engraçado.
Você não é engraçado! Você está entrando no amor. Nosso filho, o agitador!
Você vai ser um agitador?
Ninguém está me ouvindo!
Espere até ver os gravetos que tenho.
Eu poderia dizer qualquer coisa agora.
Vou fazer uma tatuagem de formiga!
Vamos abrir um pouco de mel e comemorar!
Talvez eu fure meu tórax. Raspe minhas antenas. Acomode-se com um gafanhoto. Arranje um dente de ouro e chame todo mundo de "cara"!
Estou tão orgulhoso.
Começamos os trabalhos hoje!
Hoje é o dia.
Vamos! Todos os bons empregos desaparecerão.
Sim, certo.
Contagem de pólen, abelha acrobática, derramamento, agitador, recepção, depilação...
Ainda está disponível?
Espere. Faltam dois!
Um deles é seu! Parabéns!
Dê um passo para o lado.
O que você conseguiu?
Escolhendo a sujeira. Estelar!
Uau!
Casal de novatos?
Sim, senhor! Nosso primeiro dia! Estamos prontos!
Faça sua escolha.
Você quer ir primeiro?
Não, você vai.
Oh meu Deus. O que está disponível?
O atendente do banheiro está aberto, não pelo motivo que você pensa.
Alguma chance de pegar o Krelman?
Claro, você está ligado.
Sinto muito, o Krelman acabou de fechar.
O macaco de cera está sempre aberto.
O Krelman se abriu novamente.
O que aconteceu?
Uma abelha morreu. Faz uma abertura. Ver? Ele está morto. Outro morto.
Mortal. Deadificado. Mais dois mortos.
Morto do pescoço para cima. Morto do pescoço para baixo. Essa é a vida!
Ah, isso é tão difícil!
Aquecimento, resfriamento, dublê, despejador, agitador, zumbido, inspetor número sete, coordenador de fiapos, supervisor de listras, organizador de ácaros.
Barry, o que você acha que eu deveria... Barry?
Barry!
Tudo bem, temos o canteiro de girassóis no quadrante nove...
O que aconteceu com você?
Onde você está?
Eu estou saindo.
Fora? Fora para onde?
Lá fora.
Oh não!
Eu tenho que fazer isso antes de ir trabalhar pelo resto da minha vida.
Você vai morrer! Você é louco! Olá?
Outra chamada chegando.
Se alguém se sentir corajoso, há uma delicatessen coreana na rua 83 que recebe rosas hoje.
Ei pessoal.
Veja isso.
Não é aquele garoto que vimos ontem?
Espere, filho, a cabine de comando está restrita.
Está tudo bem, Lou. Nós vamos levá-lo para cima.
Realmente? Está se sentindo com sorte, não é?
Assine aqui, aqui. Apenas inicialize isso.
Obrigado.
OK.
Vocês receberam um aviso de chuva hoje e, como todos sabem, as abelhas não podem voar na chuva.
Portanto, tenha cuidado. Como sempre, observe suas vassouras, tacos de hóquei, cachorros, pássaros, ursos e morcegos.
Além disso, recebi alguns relatos de cerveja sendo derramada sobre nós.
Murphy está em casa por causa disso, balbuciando como uma cigarra!
Isso é horrível.
E um lembrete para vocês, novatos, lei das abelhas número um, absolutamente nada de falar com humanos!
Muito bem, lancem posições!
Zumbido, zumbido, zumbido, zumbido! Zumbido, zumbido, zumbido, zumbido! Zumbido, zumbido, zumbido, zumbido!
Preto e amarelo!
Olá!
Você está pronto para isso, atirador?
Sim. Sim, vamos lá.
Vento, confira.
Antenas, confira.
Pacote de néctar, confira.
Asas, confira.
Stinger, confira.
Assustado com meu short, confira.
OK, senhoras,
vamos tirar isso!
Batam nessas petúnias, seus sugadores de caule listrados!
Todos vocês, esvaziem essas flores!
Uau! Estou fora!
Não acredito que estou fora!
Tão azul.
Eu me sinto tão rápido e livre!
Pipa de caixa!
Uau!
Flores!
Este é o Líder Azul, temos rosas visuais.
Traga cerca de 30 graus e segure.
Rosas!
30 graus, Roger. Trazendo isso por aí.
Fique de lado, garoto.
Tem um pouco de força.
Esse é um coletor de néctar!
Você já viu a polinização de perto?
Não, senhor.
Eu pego um pouco de pólen aqui e espalho aqui. Talvez uma corrida ali, uma pitada disso.
Vê isso? É um pouco de magia.
Isso é incrível. Por que fazemos isso?
Esse é o poder do pólen. Mais pólen, mais flores, mais néctar, mais mel para nós.
Legal.
Estou pegando muito amarelo brilhante, Podem ser margaridas, Não precisamos delas?
Copie esse visual.
Espere. Uma dessas flores parece estar em movimento.
Diga de novo? Você está relatando uma flor em movimento?
Afirmativo.
Isso estava em jogo!
Isso é o mais legal. O que é?
Não sei, mas estou amando essa cor.
Cheira bem.
Não gosto de uma flor, mas gosto dela.
Sim, confuso.
Químico.
Cuidado, pessoal. É um pouco cativante.
Meu doce senhor das abelhas!
Cérebro doce, sai daí!
Problema!
Pessoal!
Isso pode ser ruim.
Afirmativo.
Muito perto.
Vai doer.
O garotinho da mamãe.
Você está fora de posição, novato!
Chegando em você como um míssil!
Me ajude!
Não creio que sejam flores.
Deveríamos contar a ele?
Eu acho que ele sabe.
O que é isso?!
Ponto de partida!
Você pode começar a fazer as malas, querido, porque você está prestes a comê-lo!
Uau!
Bruto.
Tem uma abelha no carro!
Faça alguma coisa!
Estou dirigindo!
Olá, abelha.
Ele está de volta aqui!
Ele vai me picar!
Ninguém se mexe. Se você não se mover, ele não vai te picar. Congelar!
Ele piscou!
Borrife nele, vovó!
O que você está fazendo?!
Uau... o nível de tensão aqui é inacreditável.
Eu tenho que ir para casa.
Não posso voar na chuva. Não posso voar na chuva. Não posso voar na chuva.
Socorro! Socorro! Abelha caindo!
Ken, você poderia fechar a janela, por favor?
Ken, você poderia fechar a janela, por favor?
Confira meu novo currículo. Transformei-o em um folheto desdobrável. Você vê? Desdobra-se.
Oh não. Mais humanos. Eu não preciso disso.
O que é que foi isso?
Talvez desta vez. Desta vez. Desta vez. Desta vez! Desta vez! Isto... Cortinas!
Isso é diabólico.
É fantástico. Tem todas as minhas habilidades especiais, até mesmo meus dez filmes favoritos.
Qual é o número um? Guerra nas Estrelas?
Não, eu não gosto desse... tipo de coisa.
Não admira que não devêssemos falar com eles. Eles estão loucos.
Quando saio de uma entrevista de emprego, eles ficam pasmos, não acreditam no que digo.
Aí está o sol. Talvez seja uma saída.
Não me lembro do sol ter um grande 75 nele.
Eu previ o aquecimento global. Eu podia sentir que estava ficando mais quente. No começo pensei que era só eu.
Espere! Parar! Abelha!
Afaste-se. Estas são botas de inverno.
Espere!
Não o mate!
Você sabe que sou alérgico a eles! Essa coisa pode me matar!
Por que a vida dele tem menos valor que a sua?
Por que a vida dele tem menos valor que a minha? Essa é a sua afirmação?
Só estou dizendo que toda vida tem valor. Você não sabe o que ele é capaz de sentir.
Meu folheto!
Aí está, garotinho.
Não tenho medo dele. É uma coisa alérgica.
Coloque isso no folheto do seu currículo.
Todo o meu rosto poderia inchar.
Faça disso uma de suas habilidades especiais.
Nocautear alguém também é uma habilidade especial.
Certo. Tchau, Wanessa. Obrigado.
Vanessa, semana que vem? Noite de iogurte?
Claro, Ken. Você sabe, tanto faz.
Você poderia colocar chips de alfarroba lá.
Tchau.
Deveria ter menos calorias.
Tchau.
Eu tenho que dizer algo. Ela salvou minha vida. Eu tenho que dizer algo.
Tudo bem, aqui vai.
Não.
O que eu diria?
Eu poderia realmente me meter em problemas. É uma lei das abelhas. Você não deveria falar com um humano.
Não acredito que estou fazendo isso. Eu preciso.
Ah, eu não posso fazer isso. Vamos!
Não. Sim. Não. Faça isso. Não posso.
Como devo começar? "Você gosta de jazz?" Não, isso não é bom.
Aí vem ela! Fala, seu idiota!
Oi!
Desculpe. Você está falando.
Sim eu sei.
Você está falando!
Eu sinto muito.
Não, está tudo bem. Está tudo bem.
Eu sei que estou sonhando. Mas não me lembro de ter ido para a cama.
Bem, tenho certeza que isso é muito desconcertante.
Isso é uma surpresa para mim. Quero dizer, você é uma abelha!
Eu sou. E eu não deveria estar fazendo isso, mas todos estavam tentando me matar.
E se não fosse por você... eu tinha que agradecer. Foi assim que fui criado.
Isso foi um pouco estranho. Estou conversando com uma abelha.
Sim.
Estou falando com uma abelha. E a abelha está falando comigo!
Só quero dizer que estou grato.
Eu vou embora agora.
Espere! Como você aprendeu a fazer isso?
O que?
A coisa de falar.
Da mesma forma que você fez, eu acho. "Mamãe, papai, querido." Você pega.
Isso é muito engraçado.
Sim.
As abelhas são engraçadas. Se não ríamos, choraríamos com o que temos que lidar.
Enfim... Posso... pegar algo para você?
Como o que?
Não sei. Quer dizer... eu não sei. Café?
Eu não quero te colocar para fora.
Não é problema. Demora dois minutos.
É só café.
Eu odeio impor.
Não seja ridículo!
Na verdade, eu adoraria uma xícara.
Ei, você quer bolo de rum?
Eu não deveria.
Tome um pouco.
Não, não posso.
Vamos!
Estou tentando perder alguns microgramas.
Onde?
Essas listras não ajudam.
Você está ótimo!
Não sei se você entende alguma coisa de moda.
Você está bem?
Não.
Ele está fazendo o empate no táxi enquanto eles voam para Madison.
Ele finalmente chega lá.
Ele sobe correndo os degraus da igreja.
O casamento está acontecendo.
E ele diz: "Melancia?
Achei que você tivesse dito guatemalteco.
Por que eu me casaria com uma melancia?"
Isso é uma piada de abelha?
Esse é o tipo de coisa que fazemos.
Sim, diferente.
Então, o que você vai fazer, Barry?
Sobre trabalho? Não sei.
Quero fazer a minha parte pelo The Hive, mas não posso fazer do jeito que eles querem.
Eu sei como você se sente.
Você faz?
Claro.
Meus pais queriam que eu fosse advogado ou médico, mas eu queria ser florista.
Realmente?
Meu único interesse são flores.
Nossa nova rainha acaba de ser eleita com o mesmo slogan de campanha.
De qualquer forma, se você olhar... Lá está minha colméia bem ali. Vê?
Você está em Sheep Meadow!
Sim! Estou perto do Lago das Tartarugas!
Sem chance! Eu conheço essa área. Perdi um anel no dedo do pé lá uma vez.
Por que as meninas colocam anéis nos dedos dos pés?
Por que não?
É como colocar um chapéu no joelho.
Talvez eu tente isso.
Você está bem, senhora?
Oh sim. Multar.
Só tomando duas xícaras de café!
De qualquer forma, isso tem sido ótimo.
Obrigado pelo café.
Sim, não é problema.
Desculpe, não consegui terminar. Se eu fizesse isso, ficaria acordado o resto da minha vida.
Você é...?
Posso levar um pedaço disso comigo?
Claro! Aqui, coma uma migalha.
Obrigado!
Sim.
Tudo bem. Bem, então... acho que te vejo por aí. Ou não.
OK, Barry.
E muito obrigado novamente... por antes.
Ah, isso? Isso não foi nada.
Bem, não nada, mas... Enfim...
Isso não pode funcionar.
Ele está pronto para ir.
Podemos muito bem tentar.
OK, Dave, puxe o pára-quedas.
Parece incrível.
Foi incrível!
Foi o momento mais assustador e feliz da minha vida.
Humanos! Não acredito que você estava com humanos!
Humanos gigantes e assustadores!
Como eles eram?
Enorme e louco. Eles falam maluco.
Eles comem coisas gigantes malucas.
Eles enlouquecem.
Eles tentam matar você, como na TV?
Alguns deles. Mas alguns deles não.
Como você voltou?
Poodle.
Você fez isso e estou feliz. Você viu tudo o que queria ver.
Você teve sua “experiência”. Agora você pode escolher seu trabalho e ser normal.
Bem...
Bem?
Bem, eu conheci alguém.
Você fez? Ela era uma abelha?
Uma vespa?! Seus pais vão te matar!
Não, não, não, não é uma vespa .
Aranha?
Não sinto atração por aranhas.
Eu sei que é a coisa mais gostosa, com oito patas e tudo. Não consigo passar por essa cara.
Então quem é ela?
Ela é... humana.
Não, não. Essa é uma lei das abelhas. Você não quebraria uma lei das abelhas.
O nome dela é Vanessa.
Ah, garoto.
Ela é tão legal. E ela é florista!
Oh não! Você está namorando uma florista humana!
Não estamos namorando.
Você está voando para fora da Colmeia, conversando com humanos que atacam nossas casas com lavadoras de alta pressão e M-80s! Um oitavo por uma banana de dinamite!
Ela salvou minha vida! E ela me entende.
Isso acabou!
Coma isso.
Isso não acabou! O que é que foi isso?
Eles chamam isso de migalha.
Foi tão listrado!
E não é isso que eles comem.
Isso é o que cai do que eles comem!
Você sabe o que é um Cinnabon?
Não.
É pão, canela e glacê. Eles aquecem...
Sente-se!
...muito quente!
Escute-me!
Nós não somos eles! Nós somos nós.
Há nós e há eles!
Sim, mas quem pode negar o coração que anseia?
Não há saudade. Pare de ansiar. Escute-me!
Você tem que começar a pensar, meu amigo. Abelha pensando!
Abelha pensando.
Abelha pensando.
Abelha pensando! Abelha pensando! Abelha pensando! Abelha pensando!
Aí está ele. Ele está na piscina.
Você sabe qual é o seu problema, Barry?
Tenho que começar a pensar, abelha?
Quanto tempo mais isso vai durar?
Já se passaram três dias! Por que você não está trabalhando?
Tenho muitas decisões importantes na vida em que pensar.
Que vida? Você não tem vida!
Você não tem emprego. Você mal é uma abelha!
Mataria você fazer um pouco de mel?
Barry, saia. Seu pai está falando com você.
Martin, você poderia falar com ele?
Barry, estou falando com você!
Você vem?
Tem tudo?
Tudo pronto!
Vá em frente. Eu vou alcançá-lo.
Não demore muito.
Observe isso!
Vanessa!
Ainda estamos aqui.
Eu disse para você não gritar com ele.
Ele não responde aos gritos!
Então por que gritar comigo?
Porque você não escuta!
Eu não estou ouvindo isso.
Desculpe, preciso ir.
Onde você está indo?
Vou me encontrar com um amigo.
Uma garota? É por isso que você não consegue decidir?
Tchau.
Eu só espero que ela seja Bee-ish.
Eles fazem um grande desfile de flores todos os anos em Pasadena?
Estar no Torneio de Rosas é o sonho de todo florista!
Em cima de um carro alegórico, rodeado de flores, multidões aplaudindo.
Um torneio. As rosas competem em eventos esportivos?
Não. Tudo bem, eu tenho um.
Por que você não voa para todos os lugares?
É exaustivo. Por que você não corre para todos os lados? É mais rápido.
Sim, ok, entendo, entendo.
Tudo bem, sua vez.
TiVo. Você pode simplesmente congelar a TV ao vivo? Isso é loucura!
Você não tem isso?
Temos Hivo, mas é uma doença. É uma doença horrível, horrível.
Oh meu Deus.
Abelhas idiotas!
Você deve querer picar todos aqueles idiotas.
Tentamos não picar. Geralmente é fatal para nós.
Então você tem que tomar cuidado com seu temperamento.
Com muito cuidado.
Você chuta uma parede, dá um passeio, escreve uma carta furiosa e joga fora. Trabalhe com isso como qualquer emoção: raiva, ciúme, luxúria.
Ó meu Deus! Você está bem?
Sim.
O que há de errado com você?!
É um bug.
Ele não está incomodando ninguém.
Saia daqui, seu canalha!
O que é que foi isso? Uma circular do Pic 'N' Save?
Sim, foi. Como você sabia?
Pareciam cerca de 10 páginas. Setenta e cinco é praticamente o nosso limite.
Você realmente transformou isso em ciência.
Perdi um primo para a Vogue italiana.
Aposto.
O que em nome do poderoso Hércules é isso?
Como isso chegou aqui? Abelha fofa, Golden Blossom, Ray Liotta Private Select?
Ele é aquele ator?
Nunca ouvi falar dele.
Por que isso está aqui?
Para pessoas. Nós comemos.
Você não tem comida suficiente?
Bem, sim.
Como você consegue isso?
As abelhas conseguem.
Eu sei quem faz isso! E é difícil conseguir!
Há aquecimento, resfriamento, agitação. Você precisa de uma coisa toda de Krelman!
É orgânico.
É nosso-gânico!
É só querido, Barry.
Apenas o quê?!
As abelhas não sabem disso! Isso é roubar! Muito roubo!
Você tomou nossas casas, escolas, hospitais ! Isso é tudo que temos!
E está em promoção?! Estou chegando ao fundo disso.
Estou chegando ao fundo de tudo isso!
Olá, Heitor. Você está quase terminando?
Quase.
Ele está aqui. Eu sinto isso.
Bem, acho que vou para casa agora e deixarei esse lindo querido lá fora, sem ninguém por perto.
Você está preso, garoto da caixa!
Eu sabia que ouvi alguma coisa.
Então você pode conversar!
Eu posso conversar. E agora você vai começar a falar!
Onde você consegue as coisas doces? Quem é seu fornecedor?
Eu não entendo.
Achei que éramos amigos.
A última coisa que queremos é incomodar as abelhas!
Você está muito atrasado! É nosso agora!
Você, senhor, cruzou a espada errada!
Você, senhor, será o almoço da minha iguana, Ignacio!
De onde vem o mel? Diga-me onde!
Fazendas de mel! Vem das Fazendas de Mel!
Pessoa louca!
Que coisa horrível aconteceu aqui?
Esses rostos, eles nunca souberam o que os atingiu. E agora
eles estão na estrada para lugar nenhum!
Apenas fique quieto.
O que? Você não está morto?
Pareço morto? Eles limparão tudo que se mover. Para onde você foi?
Para Fazendas de Mel. Estou descobrindo algo enorme aqui.
Estou indo para o Alasca. Sangue de alce, coisa maluca. Explode sua cabeça!
Estou indo para Tacoma.
E você?
Ele realmente está morto.
Tudo bem.
Uh-oh!
O que é aquilo?!
Oh não!
Um limpador! Lâmina tripla!
Lâmina tripla?
Vá em frente! É sua única chance, abelha!
Por que tudo tem
estar tão limpo?!
Quanto vocês precisam ver?!
Abra seus olhos!
Coloque a cabeça para fora da janela!
Da NPR News em Washington,
Meu nome é Carl Kasell.
Mas não mate mais insetos!
Abelha!
Cara de sangue de alce!!
Você ouviu alguma coisa?
Como o que?
Como pequenos gritos.
Desligar o rádio.
E aí, garoto abelha?
Ei, Sangue.
Apenas uma fileira de potes de mel, até onde a vista alcançava.
Uau!
Presumo que onde quer que este camião vá é onde o vão buscar. Quero dizer, esse mel é nosso.
As abelhas ficam firmes. Estamos todos presos.
É uma comunidade próxima.
Nós não, cara. Nós por conta própria. Cada mosquito sozinho.
E se você tiver problemas?
Você é um mosquito, você está em apuros. Ninguém gosta de nós. Eles apenas batem. Veja um mosquito, tapa, tapa!
Pelo menos você está no mundo. Você deve conhecer garotas.
Garotas mosquitos tentam negociar, pegar uma mariposa, libélula. A menina mosquito não quer nenhum mosquito.
Você deve estar brincando comigo!
Mooseblood está prestes a sair do prédio! Adeus, abelha!
Ei pessoal!
Sangue de alce!
Eu sabia que encontraria vocês aqui.
Você trouxe seu canudo maluco?
Jogamos em potes, colocamos um rótulo e é praticamente puro lucro.
O que é esse lugar?
Uma abelha tem um cérebro do tamanho de uma cabeça de alfinete.
Eles são idiotas!
Cabeça de alfinete.
Confira o novo fumante.
Ah, querido. Esse é o que você quer. O Thomas 3000!
Fumante?
Noventa baforadas por minuto, semiautomáticas. O dobro da nicotina, todo o alcatrão. Algumas respirações disso os nocauteiam.
Eles fazem o mel e nós ganhamos o dinheiro.
“Eles fazem o mel e nós ganhamos o dinheiro”?
Oh meu Deus!
O que está acontecendo? Você está bem?
Sim. Não dura muito.
Você sabia que está em uma colmeia falsa com paredes falsas?
Nossa rainha foi transferida para cá. Não tivemos escolha.
Esta é a sua rainha? Esse é um homem com roupas de mulher! Isso é uma drag queen!
O que é isso?
Oh não!
Existem centenas deles!
Abelha, querida.
Nosso mel está sendo descaradamente roubado em grande escala!
Isso é pior do que qualquer coisa que os ursos já fizeram! Pretendo fazer algo.
Ah, Barry, pare.
Quem disse que os humanos estão tomando nosso mel? Isso é um boato.
Isso parece rumores?
Isso é uma teoria da conspiração. Estas são obviamente fotos adulteradas. Como você se envolveu nisso?
Ele tem conversado com humanos.
O que? Conversando com humanos?!
Ele tem uma namorada humana. E eles se beijam!
Decifrar? Barry!
Nós não.
Você gostaria de poder.
De que lado você está?
As abelhas!
Namorei um grilo uma vez em San Antonio. Aquelas pernas malucas me mantiveram acordado a noite toda.
Barry, é isso que você quer fazer da sua vida?
Eu quero fazer isso por todas as nossas vidas. Ninguém trabalha mais do que as abelhas!
Pai, lembro de você voltando para casa tão sobrecarregado
suas mãos ainda estavam mexendo. Você não conseguia parar.
Eu me lembro disso.
Que direito eles têm sobre o nosso querido?
Vivemos com duas xícaras por ano. Eles colocaram em protetor labial sem motivo algum!
Mesmo que seja verdade, o que uma abelha pode fazer?
Pice-os onde realmente dói.
Na cara! O olho!
Isso iria doer.
Não.
Até o nariz? Isso é um assassino.
Só há um lugar onde você pode picar os humanos, um lugar onde isso importa.
Hive at Five, a única fonte de notícias de ação de uma hora inteira do The Hive.
Chega de barbas de abelha!
Com Bob Bumble na mesa do âncora. Clima com Tempestade Stinger. Esportes com Buzz Larvi. E Jeanette Chung.
Boa noite. Eu sou Bob Bumble.
E eu sou Jeanette Ohung.
Uma abelha de três condados, Barry Benson, pretende processar a raça humana por roubar nosso mel, embalá-lo e lucrar com ele ilegalmente!
Amanhã à noite no Bee Larry King, teremos três ex-rainhas aqui em nosso estúdio, discutindo seu novo livro, Classy Ladies, lançado esta semana na Hexagon.
Esta noite estamos conversando com Barry Benson.
Você já pensou: "Sou um garoto do The Hive. Não posso fazer isso"?
As abelhas nunca tiveram medo de mudar o mundo.
E quanto a Bee Oolumbus? Abelha Gandhi? Meu Deus?
De onde eu venho, nunca processaríamos humanos.
Estávamos pensando em lojas de stickball ou de doces.
Quantos anos você tem?
A comunidade apícola está apoiando você neste caso, que será o julgamento do século das abelhas.
Você sabe, eles também têm um Larry King no mundo humano.
É um nome comum. Próxima semana...
Ele se parece com você e tem show e suspensórios e bolinhas coloridas...
Próxima semana...
Copos, citações do convidado na parte inferior, mesmo que você tenha acabado de ouvi-las.
Semana do Urso na próxima semana! Eles são assustadores, peludos e moram aqui.
Sempre inclinado para a frente, ombros pontudos, olhos semicerrados, muito judeu.
No tênis, você ataca no ponto fraco!
Era minha avó, Ken. Ela tem 81 anos.
Querido, o backhand dela é uma piada!
Eu não vou aproveitar isso?
Calma, por favor.
Trabalho real acontecendo aqui.
É a mesma abelha?
É sim!
Estou ajudando-o a processar a raça humana.
Olá.
Olá, abelha.
Este é o Ken.
Sim, eu me lembro de você. Timberland, tamanho dez e meio. Sola vibram, eu acredito.
Por que ele fala de novo?
Ouça, é melhor você ir porque estamos muito ocupados trabalhando.
Mas é a nossa noite de iogurte!
Bye Bye.
Por que a noite do iogurte é tão difícil?!
Coitadinho. Vocês dois estão nisso há horas!
Sim, e Adam aqui tem sido de grande ajuda.
Geada...
Quantos açúcares?
Apenas um. Tento não usar a concorrência.
Então por que você está me ajudando?
As abelhas têm boas qualidades. E isso tira minha mente da loja. Em vez de flores, as pessoas agora estão dando buquês de balões.
Isso é ótimo, se você tiver três anos.
E flores artificiais.
Oh, isso me deixa psicótico!
Sim, eu também.
Ferrões tortos, polinização inútil.
As abelhas devem odiar essas coisas falsas!
Nada pior do que um narciso que já foi trabalhado.
Talvez isso possa compensar um pouco.
Este processo é muito importante.
Eu acho.
Tem certeza que quer continuar com isso?
Tenho certeza? Quando eu terminar com os humanos, eles não poderão dizer: “Querido, estou em casa” sem pagar royalties!
É uma cena incrível aqui no centro de Manhattan, onde o mundo espera ansiosamente, porque pela primeira vez na história, ouviremos por nós mesmos se uma abelha consegue realmente falar.
Em que nos metemos aqui, Barry?
É bem grande, não é?
Não posso acreditar quantos humanos não trabalham durante o dia.
Você acha que as multinacionais de alimentos de bilhões de dólares têm bons advogados?
Todos precisam ficar atrás da barricada.
Qual é o problema?
Não sei, só estou com um resfriado.
Bem, se não for o time das abelhas.
Vocês, rapazes, trabalham nisso?
Todos se levantem! O Honorável Juiz Bumbleton presidindo.
Tudo bem. Caso número 4475,
Tribunal Superior de Nova York,
Barry Bee Benson v. a Indústria do Mel está agora em sessão.
Sr. Montgomery, você está representando as cinco empresas alimentícias coletivamente?
Um privilégio.
Sr. Benson... você está representando todas as abelhas do mundo?
Eu estou brincando. Sim, Meritíssimo, estamos prontos para prosseguir.
Sr. Montgomery, sua declaração de abertura, por favor.
Senhoras e senhores do júri, a minha avó era uma mulher simples. Nascida numa fazenda, ela acreditava que era direito divino do homem beneficiar-se da generosidade da natureza que Deus colocou diante de nós.
Se vivêssemos no mundo de pernas para o ar que o Sr. Benson imagina, basta pensar no que isso significaria.
Eu teria que negociar com o bicho-da-seda o elástico da minha calça!
Abelha falante!
Como sabemos que isso não é algum tipo de magia holográfica de Hollywood para captura de filmes?
Eles poderiam estar usando raios laser! Robótica! Ventriloquismo! Clonagem! Pelo que sabemos, ele pode estar tomando esteróides!
Sr.
Senhoras e senhores, não há truques aqui. Sou apenas uma abelha comum. Honey é muito importante para mim. É importante para todas as abelhas. Nós inventamos isso! Nós conseguimos. E nós o protegemos com nossas vidas.
Infelizmente, há algumas pessoas nesta sala que pensam que podem tirar isso de nós porque somos os pequeninos!
Espero que, depois que tudo isso passar, você veja como, ao levar o nosso mel, você não só leva tudo o que temos, mas tudo o que somos!
Eu gostaria que ele se vestisse assim o tempo todo. Tão legal!
Chame sua primeira testemunha.
Então, Sr. Klauss Vanderhayden da Honey Farms, você tem uma grande empresa.
Suponho que sim.
Vejo que você também possui Honeyburton e Honron!
Sim, eles fornecem apicultores para nossas fazendas.
Apicultor. Acho que é um termo muito perturbador.
Não imagino que você empregue alguém livre de abelhas, não é?
Não.
Eu não consegui ouvir você.
Não.
Não. Porque você não liberta abelhas. Você cria abelhas. Além disso, parece que você pensou que um urso seria uma imagem apropriada para um pote de mel.
Eles são criaturas muito adoráveis. Urso Yogi, Urso Fozzie, Build-A-Bear.
Você quer dizer assim?
Ursos matam abelhas!
Você gostaria que a cabeça dele batesse na sua sala?! Mordendo seu sofá! Cuspindo suas almofadas! OK, isso é o suficiente. Leve-o embora.
Então, Sr. Sting, obrigado por estar aqui. Seu nome me intriga. Onde eu já ouvi isso antes?
Eu estava com uma banda chamada The Police.
Mas você nunca foi policial, não é?
Não, não tenho.
Não, você não fez isso. E aqui temos mais um exemplo de cultura de abelhas roubada casualmente por um humano por nada mais do que um nome artístico arrogante.
Ah, por favor.
Você já foi picado, Sr. Sting? Porque estou me sentindo um pouco magoado, Sting. Ou devo dizer... Sr. Gordon M. Sumner!
Esse não é o nome verdadeiro dele?! Seus idiotas!
Liotta, em primeiro lugar, parabéns tardios pela sua vitória no Emmy por uma participação especial em ER em 2005.
Obrigado. Obrigado.
Vejo pelo seu currículo que você é diabolicamente bonito, com uma agitação interna agitada que está prestes a explodir.
Eu gosto do que faço. Isso é um crime?
Ainda não, não é. Mas é isso que aconteceu para você? Explorando abelhas minúsculas e indefesas para não ter que ensaiar sua parte e aprender suas falas, senhor?
Cuidado, Benson! Eu poderia explodir agora mesmo!
Este não é um bom companheiro.
Este é um cara mau!
Por que alguém simplesmente não pisa nesse canalha e podemos todos ir para casa?!
Ordem neste tribunal!
Vocês estão todos pensando nisso!
Ordem! Ordem, eu digo!
Diga!
Sr. Liotta, por favor, sente-se!
Acho que foi muito gentil da parte daquele urso ajudar daquele jeito. Acho que o júri está do nosso lado.
Estamos fazendo tudo certo, legalmente?
Eu sou florista.
Certo. Bem, um brinde a uma grande equipe.
Para uma grande equipe!
Bem, olá.
Ken!
Olá.
Eu não pensei que você viria.
Não, só cheguei atrasado, tentei ligar, mas... a bateria.
Eu não queria que tudo isso fosse desperdiçado,
então liguei para Barry. Felizmente, ele estava livre.
Ah, isso foi sorte.
Resta um pouco. Eu poderia aquecê-lo.
Sim, aqueça, claro, tanto faz.
Ouvi dizer que você é um grande jogador de tênis. Eu não sou muito fã do jogo. A bola está um pouco pegajosa.
É onde costumo sentar. Certo... ali.
Ken, Barry estava olhando seu currículo e concordou comigo que comer com pauzinhos não é uma habilidade especial.
Você acha que eu não vejo o que você está fazendo?
Eu sei como é difícil encontrar o emprego certo. Temos isso em comum.
Nós?
As abelhas têm 100% de emprego, mas nós fazemos trabalhos como retirar a sujeira.
Isso é exatamente o que eu estava pensando em fazer.
Ken, emprestei sua navalha para Barry para a penugem dele. Espero que esteja tudo bem.
Vou drenar o ferrão velho.
Sim, você faz isso.
Veja isso.
Você sabe, estou quase farto de seus pequenos jogos mentais.
O que é isso?
Vogue italiana.
Mamma mia, são muitas páginas.
Muitos anúncios.
Lembra do que Van disse, por que sua vida é mais valiosa que a minha?
Engraçado, simplesmente não consigo me lembrar disso! Acho que algo fede aqui!
Adoro o cheiro das flores.
Você gosta do cheiro das chamas?!
Não tanto.
Inseto aquático! Não tomar partido!
Ken, estou usando um chapéu Chapstick!
Isso é patético!
Eu tenho problemas!
Bem, bem, bem, um royal flush!
Você está blefando.
Eu sou?
Acabou o surf, cara!
Poxa água!
Essa tigela é nodosa. Exceto aqueles anéis amarelos sujos!
Kenneth! O que você está fazendo?!
Você sabe, eu nem gosto de mel! Eu não como!
Precisamos conversar! Ele é apenas uma abelhinha!
E ele é a abelha mais legal que já conheci há muito tempo!
Muito tempo? O que você está falando?! Existem outros bugs em sua vida?
Não, mas há outras coisas que me incomodam na vida. E você é um deles!
Multar! Abelhas falantes, sem noite de iogurte...
Meus nervos estão à flor da pele por andar nesta montanha-russa emocional!
Adeus, Ken.
E para sua informação, prefiro adoçantes artificiais sem açúcar feitos pelo homem!
Sinto muito por tudo isso.
Eu sei que tem um gosto residual! Eu gosto disso!
Sempre senti que havia algum tipo de barreira entre Ken e eu. Eu não consegui superar isso.
Ah bem.
Você está bem para o julgamento?
Acredito que o Sr. Montgomery está quase sem ideias.
Gostaríamos de chamar o Sr. Barry Benson Bee para depor.
Boa ideia! Você pode realmente ver porque ele é considerado um dos melhores advogados...
Sim.
Layton, você precisa fazer mágica com esse júri, ou tudo estará acabado.
Não se preocupe. A única coisa que tenho que fazer para mudar esse júri é lembrá-los do que eles não gostam nas abelhas.
Você tem a pinça?
Você é alérgico?
Apenas para perder, filho. Apenas para perder.
Sr. Benson Bee, vou perguntar o que acho que todos gostaríamos de saber.
Qual é exatamente o seu relacionamento com aquela mulher?
Somos amigos.
Bons amigos?
Sim.
Quão bom? Vocês moram juntos?
Espere um minuto... Você é o pequeno... percevejo dela?
Já vi um ou dois documentários sobre abelhas. Pelo que entendi, sua rainha não dá à luz todos os filhos das abelhas?
Sim, mas...
Então esses não são seus pais verdadeiros!
Ah, Barry...
Sim, eles estão!
Segure-me!
Você é uma abelha ilegítima, não é, Benson?
Ele está denunciando as abelhas!
Vocês não namoram seus primos?
Objeção!
Eu vou alfinetar esse cara!
Adão, não! É o que ele quer!
Ah, fui atingido!! Oh, meu Deus, fui atingido!
Ordem! Ordem!
O veneno! O veneno está correndo em minhas veias! Fui derrubado por uma fera alada de destruição! Você vê? Você não pode tratá-los como iguais! Eles são selvagens listrados! Picar é a única coisa que eles sabem! É o jeito deles!
Adão, fique comigo.
Não consigo sentir minhas pernas.
Que Anjo da Misericórdia se apresentará para sugar o veneno das minhas nádegas arfantes?
Terei ordem neste tribunal. Ordem! Encomende, por favor!
O caso das abelhas versus a raça humana deu uma guinada acentuada contra as abelhas ontem, quando um membro de sua equipe jurídica picou Layton T. Montgomery.
Ei, amigo.
Ei.
Há muita dor?
Sim.
Eu... eu estraguei todo o caso, não foi?
Não importa. O que importa é
você está vivo. Você poderia ter morrido.
Estaria melhor morto. Olhe para mim.
Eles pegaram no refeitório do térreo, em um sanduíche de atum. Olha, ainda tem um pouco de aipo.
Como foi picar alguém?
Eu não posso explicar isso. Foi tudo... Toda adrenalina e depois... e depois êxtase!
Tudo bem.
Você acha que foi tudo uma armadilha?
Claro. Desculpe. Eu nos levei direto para isso.
O que estávamos pensando? Olhe para nós. Somos apenas alguns insetos neste mundo.
O que os humanos farão conosco se vencerem?
Não sei.
Ouvi dizer que colocam baratas em motéis. Isso não parece tão ruim.
Adam, eles fazem check-in, mas não fazem check-out!
Oh meu Deus.
Você poderia pedir a uma enfermeira para fechar aquela janela?
Por que?
A fumaça.
As abelhas não fumam.
Certo. As abelhas não fumam.
As abelhas não fumam!
Mas algumas abelhas estão fumando.
É isso! Esse é o nosso caso!
Isso é? Não acabou?
Vista-se. Eu tenho que ir a algum lugar.
Volte para a quadra e pare. Pare da maneira que puder.
E supondo que você tenha executado o passo corretamente, você está pronto para a banheira.
Sr.
Sim? Sim, Meritíssimo!
Onde está o resto da sua equipe?
Bem, Meritíssimo, é interessante. As abelhas são treinadas para voar ao acaso e, como resultado, não avançamos muito bem.
Na verdade, ouvi uma história engraçada sobre...
Meritíssimo, esses erros ridículos não ocuparam bastante o valioso tempo deste tribunal? Por quanto tempo mais permitiremos que essas travessuras absurdas continuem?
Eles não apresentaram provas convincentes para apoiar as suas acusações contra os meus clientes, que gerem negócios legítimos.
Eu proponho a rejeição completa de todo este caso!
Sr. Flayman, receio que terei que considerar a moção do Sr. Montgomery.
Mas você não pode! Temos um caso fantástico.
Onde está sua prova?
Onde está a evidência?
Mostre-me a arma fumegante!
Espere, Meritíssimo!
Você quer uma arma fumegante? Aqui está sua arma fumegante.
O que é aquilo?
É um fumante de abelha!
O que, isso? Esta pequena engenhoca inofensiva? Isso não poderia machucar uma mosca, muito menos uma abelha.
Veja o que aconteceu com as abelhas às quais nunca foi perguntado: "Fuma ou não?" É isso que a natureza planejou para nós? Ser viciado à força em máquinas de fumaça e em campos de trabalho feitos com ripas de madeira?
Viver nossas vidas como escravos do homem branco?
O que vamos fazer?
Ele está jogando a carta da espécie.
Senhoras e senhores, por favor, libertem estas abelhas!
Liberte as abelhas! Liberte as abelhas! Liberte as abelhas! Liberte as abelhas! Liberte as abelhas!
O tribunal decide a favor das abelhas!
Wanessa, vencemos!
Eu sabia que você conseguiria! Mais cinco!
Desculpe.
Estou bem! Você sabe o que isso significa?
Todo o mel finalmente pertencerá às abelhas.
Agora não teremos que trabalhar tanto o tempo todo.
Isto é uma perversão profana do equilíbrio da natureza, Benson.
Você vai se arrepender disso.
Barry, quanto mel existe por aí?
Tudo bem. Um de cada vez.
Barry, quem você está vestindo?
Meu suéter é Ralph Lauren e não tenho calças.
E se Montgomery estiver certo?
O que você quer dizer?
Vivemos como as abelhas há muito tempo, 27 milhões de anos.
Parabéns pela sua vitória. O que você exigirá como acordo?
Primeiro, exigiremos o fechamento completo de todos os campos de trabalho apícola.
Então queremos de volta o mel que era nosso, até a última gota.
Exigimos o fim da glorificação do urso como algo mais do que uma máquina imunda, fedorenta e fedorenta.
Todos sabemos o que eles fazem na floresta.
Espere pelo meu sinal. Leve-o para fora.
Ele ficará enjoado por algumas horas e depois ficará bem.
E não toleraremos mais apelidos negativos para abelhas...
Mas é apenas um nome artístico arrogante!
...inclusão desnecessária de mel em falsos produtos de saúde e la-dee-da humana na hora do chá.
Não consigo respirar.
Tragam isso, rapazes!
Espere aí! Bom.
Toque nele.
Sr. Buzzwell, acabamos de passar três xícaras e há mais galões chegando!
Acho que precisamos desligar!
Desligar? Nunca fechamos.
Interrompa a produção de mel!
Pare de fazer mel!
Vire a chave, senhor!
O que fazemos agora?
Bala de canhão!
Estamos encerrando a produção de mel!
Abortar missão.
Abortando a polinização e o detalhe do néctar.
Voltando à base.
Adam, você não acreditaria na quantidade de mel que existe por aí.
Oh sim?
O que está acontecendo? Onde está todo mundo?
Eles estão comemorando?
Eles estão em casa.
Eles não sabem o que fazer. Deitado, dormindo.
Ouvi dizer que seu tio Carl estava a caminho de San Antonio com um grilo.
Pelo menos recuperamos o nosso mel.
Às vezes penso: e daí se os humanos gostassem do nosso mel? Quem não gostaria?
É a melhor coisa do mundo! Eu estava animado por fazer parte da produção.
Esta era minha nova mesa. Este era meu novo trabalho. Eu queria fazer isso muito bem. E agora...
Agora não posso.
Não entendo por que eles não estão felizes.
Achei que a vida deles seria melhor!
Eles não estão fazendo nada. É incrível.
Honey realmente muda as pessoas.
Você não tem ideia do que está acontecendo, não é?
O que você queria me mostrar?
Esse.
O que aconteceu aqui?
Isso não é metade da questão.
Oh não. Oh meu Deus.
Estão todos murchando.
Não parece muito bom, não é?
Não.
E de quem você acha que é a culpa?
Você sabe, vou adivinhar abelhas.
Abelhas?
Especificamente, eu.
Não pensei que as abelhas que não precisassem produzir mel afetariam todas essas coisas.
Não são apenas flores. Frutas, vegetais, todos precisam de abelhas.
Esse é todo o nosso teste SAT aqui.
Retire os produtos que afetam todo o reino animal.
E então, é claro...
A espécie humana?
Então, se não houver mais polinização, tudo pode ir para o sul aqui, não é?
Eu sei que isso também é parcialmente culpa minha.
Que tal um pacto suicida?
Como fazemos isso?
Eu vou te picar, você pisa em mim.
Isso só te mata duas vezes.
Certo, certo.
Ouça, Barry... desculpe, mas preciso ir.
Tive que abrir a boca e falar.
Vanessa?
Vanessa? Por que você está indo embora?
Onde você está indo?
Para o desfile final do Torneio de Rosas em Pasadena.
Eles mudaram para este fim de semana porque todas as flores estão morrendo.
É a última chance que terei para ver isso.
Vanessa, só quero pedir desculpa.
Eu nunca quis que acontecesse assim.
Eu sei. Nem eu.
Torneio de Rosas.
Roses não pode praticar esportes.
Espere um minuto. Rosas. Rosas?
Rosas!
Vanessa!
Rosas?!
Barry?
Rosas são flores!
Sim, eles estão.
Flores, abelhas, pólen!
Eu sei.
É por isso que este é o último desfile.
Talvez não.
Você poderia pedir a ele para diminuir a velocidade?
Você poderia desacelerar?
Barry!
OK, cometi um grande erro.
Isto é um desastre total, tudo culpa minha.
Sim, meio que é.
Eu arruinei o planeta. Queria ajudar você com a floricultura. Eu tornei tudo pior.
Na verdade, está completamente fechado.
Pensei que talvez você estivesse reformando.
Mas tenho outra ideia, e é maior do que todas as minhas ideias anteriores combinadas.
Eu não quero ouvir isso!
Tudo bem, eles têm as rosas, as rosas têm o pólen.
Conheço todas as abelhas, plantas e botões de flores deste parque.
Tudo o que precisamos fazer é conseguir o que eles têm aqui com o que temos.
Abelhas.
Parque.
Pólen!
Flores.
Repolinização!
Em toda a nação!
Torneio de Rosas, Pasadena, Califórnia.
Eles não têm nada além de flores, carros alegóricos e algodão doce.
A segurança será rigorosa.
Eu tenho uma ideia.
Vanessa Bloome, FTD.
Negócio floral oficial. É real.
Desculpe, senhora. Belo broche.
Obrigado. Foi um presente.
Uma vez lá dentro, basta escolher o flutuador certo.
Que tal A Princesa e a Ervilha?
Eu poderia ser a princesa e você a ervilha!
Sim, entendi.
Onde devo sentar?
O que você está?
Eu acredito que sou a ervilha.
A ervilha?
Vai para baixo dos colchões.
Não neste conto de fadas, querido.
Vou chamar o marechal.
Você faz isso! Todo esse desfile é um fiasco!
Vamos ver o que esse bebê fará.
Ei, o que você está fazendo?!
Então tudo o que fazemos é nos misturarmos ao trânsito... sem levantar suspeitas.
Uma vez no aeroporto, não há como nos parar.
Parar! Segurança.
Você e seu inseto embalam sua bóia?
Sim.
Esteve em sua posse o tempo todo?
Você tiraria os sapatos?
Remova seu ferrão.
Faz parte de mim.
Eu sei. Apenas me divertindo.
Aproveite seu voo.
Então, se tivermos sorte, teremos pólen suficiente para fazer o trabalho.
Você acredita em como somos sortudos? Temos pólen suficiente para fazer o trabalho!
Acho que isso vai funcionar.
Tem que funcionar.
Atenção, passageiros, este é o Capitão Scott. Temos um pouco de mau tempo em Nova York. Parece que teremos um atraso de algumas horas.
Barry, estas são flores cortadas sem água. Eles nunca conseguirão.
Tenho que ir lá e falar com eles.
Tome cuidado.
Posso obter ajuda com a revista Sky Mall? Gostaria de encomendar o aparador de pêlos inflável falante para nariz e orelhas.
Capitão, estou numa situação real.
O que você disse, Hal?
Nada.
Abelha!
Não surte! Toda a minha espécie...
O que você está fazendo?
Espere um minuto! Eu sou advogado!
Quem é advogado?
Não se mova.
Ah, Barry.
Boa tarde, passageiros. Este é o seu capitão. Uma senhorita Vanessa Bloome do 24B poderia se apresentar na cabine? E por favor, se apresse!
O que aconteceu aqui?
Houve um DustBuster, uma peruca, um bote salva-vidas explodido.
Um está careca, o outro está num barco, os dois estão inconscientes!
Isso é outra piada de abelha?
Não!
Ninguém está pilotando o avião!
Daqui é a torre de controle JFK, voo 356. Qual é a sua situação?
Esta é Vanessa Bloome. Sou florista de Nova York.
Onde está o piloto?
Ele está inconsciente e o copiloto também.
Não é bom. Alguém a bordo tem experiência de voo?
Na verdade, existe.
Quem é aquele?
Barry Benson.
Do julgamento do mel?! Ah, ótimo.
Vanessa, isto nada mais é do que uma grande abelha de metal.
Tem asas gigantes, motores enormes.
Eu não posso pilotar um avião.
Por que não? John Travolta não é piloto?
Sim.
Quão difícil poderia ser?
Espere, Barry!
Estamos indo em direção a um raio.
Este é Bob Bumble. Temos as últimas notícias do Aeroporto JFK, onde uma cena de suspense está se desenvolvendo.
Barry Benson, recém-saído de sua vitória legal...
Esse é o Barry!
...está tentando pousar um avião carregado de pessoas, flores e uma tripulação incapacitada.
Flores?!
Temos uma tempestade na área e dois indivíduos nos controles sem absolutamente nenhuma experiência de voo.
Só um minuto. Há uma abelha naquele avião.
Conheço bastante o Sr. Benson e seus compadres desconhecidos.
Eles já causaram danos suficientes.
Mas ele não é sua única esperança?
Tecnicamente, uma abelha não deveria ser capaz de voar.
Suas asas são muito pequenas... Já não ouvimos isso um milhão de vezes?
"A área da superfície das asas e a massa corporal não fazem sentido."
Coloque isso no ar!
Entendi.
Espera.
Nós vamos ao vivo.
A forma como trabalhamos pode ser um mistério para você. Fazer mel exige que muitas abelhas façam muitos pequenos trabalhos.
Mas deixe-me contar sobre um pequeno trabalho. Se você fizer isso bem, faz uma grande diferença.
Mais do que imaginávamos. Para nós, para todos.
É por isso que quero que as abelhas voltem a trabalhar juntas. Esse é o jeito das abelhas! Não somos feitos de gelatina.
Nós apoiamos um sujeito.
Preto e amarelo!
Olá!
Esquerda, direita, baixo, pairar.
Passe o mouse?
Esqueça pairar.
Isso não é tão difícil.
Bip-bip! Bip-bip!
Barry, o que aconteceu?!
Espere, acho que estávamos no piloto automático o tempo todo.
Isso pode ter me ajudado.
E agora não estamos!
Acontece que não posso pilotar um avião.
Todos vocês, vamos apoiar esse sujeito! Mova-se!
Sair!
Nossa única chance é se eu fizer o que faria, você me copiará com as asas do avião!
Não precisa gritar.
Eu não estou gritando! Estamos com muitos problemas.
É muito difícil se concentrar com esse tom de pânico na voz!
Não é um tom. Estou em pânico!
Eu não posso fazer isso!
Vanessa, controle-se. Você tem que sair dessa!
Você sai dessa.
Você sai dessa.
Você sai dessa!
Você sai dessa!
Você sai dessa!
Você sai dessa!
Você sai dessa!
Você sai dessa!
Espere!
Por que? Vamos, é a minha vez.
Como o avião está voando?
Não sei.
Olá?
Benson, tem flores para uma ocasião feliz aí?
Os atletas do pólen!
Eles ficam atrás de um sujeito.
Preto e amarelo.
Olá.
Muito bem, vamos largar esta lata no asfalto.
Onde? Eu não consigo ver nada. Você pode?
Não, nada. Está tudo nublado.
Vamos. Você tem que pensar, Barry.
Abelha pensando.
Abelha pensando.
Abelha pensando!
Abelha pensando! Abelha pensando!
Espere um minuto. Acho que estou sentindo alguma coisa.
O que?
Não sei. É forte, me puxando.
Como um instinto de 27 milhões de anos.
Abaixe o nariz.
Abelha pensando!
Abelha pensando! Abelha pensando!
O que diabos está na pista?
Acenda algumas luzes sobre isso!
Abelha pensando!
Abelha pensando! Abelha pensando!
Vanessa, mire na flor.
OK.
Corte os motores. Vamos entrar no poder das abelhas. Prontos, rapazes?
Afirmativo!
Bom. Bom. Calma, agora. É isso.
Pouse naquela flor!
Preparar? Reverso total!
Gire ao redor!
Essa flor não! O outro!
Qual deles?
Essa flor.
Estou mirando na flor!
É um cara gordo com uma camisa florida.
Quero dizer, a flor pulsante gigante feita de milhões de abelhas!
Puxe para frente. Nariz para baixo. Cauda para cima.
Gire em torno dele.
Isso é uma loucura, Barry!
Esta é a única maneira que conheço de voar.
Eu sou koo-koo-kachoo ou este avião está voando como um inseto?
Coloque seu nariz aí. Não tenha medo. Cheire. Reverso total!
Apenas largue isso. Faça parte disso.
Mire no centro!
Agora coloque-o! Entre, mulher!
Vamos, já.
Barry, conseguimos! Você me ensinou a voar!
Sim. Nada de mais cinco!
Certo.
Barry, funcionou!
Você viu a flor gigante?
Que flor gigante? Onde? Claro
Eu vi a flor! Isso foi genial!
Obrigado.
Mas ainda não terminamos.
Ouçam todos!
Esta pista está coberta com o último pólen das últimas flores disponíveis em qualquer lugar da Terra.
Isso significa que esta é a nossa última chance. Somos os únicos que fazemos mel, polinizamos flores e nos vestimos assim.
Se quisermos sobreviver como espécie, este é o nosso momento! O que você diz?
Seremos abelhas ou apenas chaveiros do Museu de História Natural?
Somos abelhas!
Chaveiro!
Então siga-me! Exceto chaveiro.
Espere, Barry. Aqui. Você ganhou isso.
Sim!
Eu sou um Pólen Jock! E é um ajuste perfeito. Tudo o que tenho que fazer são as mangas.
Oh sim.
Esse é o nosso Barry.
Mãe! As abelhas estão de volta!
Se alguém precisar fazer uma ligação, agora é a hora. Tenho a sensação de que trabalharemos até tarde esta noite!
Aqui está o seu troco. Tenha uma ótima tarde! Posso ajudar quem é o próximo?
Você gostaria de um pouco de mel com isso?
É aprovado pelas abelhas. Não se esqueça disso.
Leite, creme, queijo, sou tudo eu. E não vejo um centavo!
Às vezes me sinto como um pedaço de carne!
Eu não fazia ideia.
Barry, me desculpe.
Você tem um momento?
Você me daria licença?
Meu associado mosquito irá ajudá-lo.
Desculpe, estou atrasado.
Ele também é advogado?
Eu já era um parasita sugador de sangue. Tudo que eu precisava era de uma pasta.
Tenha uma ótima tarde!
Barry, acabei de receber um pedido enorme de tulipas e não consigo comprá-las em lugar nenhum.
Não tem problema, Vannie. Apenas deixe comigo.
Você é um salva-vidas, Barry. Posso ajudar quem é o próximo?
Muito bem, mexam-se, atletas! É hora de voar.
Obrigado, Barry!
Essa abelha está vivendo minha vida!
Deixa pra lá, Kenny.
Quando esse pesadelo vai acabar?!
Deixe tudo ir.
Lindo dia para voar.
Claro que é.
Entre você e eu,
Eu estava morrendo de vontade de sair daquele escritório.
Você tem que começar a pensar, meu amigo.
Abelha pensando!
Meu?
Espere. Vamos parar por um segundo. Espere.
Desculpe. Sinto muito, pessoal. Podemos parar por aqui?
Não vou tomar uma decisão importante na vida durante um número de produção!
Tudo bem. Tome dez, pessoal. Terminem com isso , pessoal .
Praticamente não tive ensaio para isso.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
