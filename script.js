let correto = new Audio("src/correto.ogg");
let errado = new Audio("src/errado.ogg");

let tempo = 600;
let acertos = [];
let textos_obj = {
  obj: [
    { 1: "Mão Direita" },
    { 2: "Células danificadas inflamadas/Fibras nervosas sensoriais" },
    { 3: "Neurônio de 1ª Ordem" },
    { 4: "Substância P" },
    { 5: "Corno Dorsal" },
    { 6: "Sinapse" },
    { 7: "Neurônio de 2ª Ordem" },
    { 8: "Trato espinotalâmico" },
    { 9: "Tronco Cerebral" },
    { 10: "Via Ascendente" },
    { 11: "Via Descendente" },
    { 12: "Tálamo" },
    { 13: "Neurônio de 3ª ordem" },
    { 14: "Percepção da Dor" },
    { 15: "Córtex Cerebral" },
    { 16: "Neurotrans 5HT/NA" },
    { 17: "Interneurônio" },
    { 18: "Encefalinas (Opioide)" },
  ],
};

// Timer
let timer = "";

//Telas
window.onload = function() {
  setTimeout(() => {
    document.getElementById("preto").style.zIndex = "0 ";
    document.getElementById("preto").style.opacity = "0 ";
  },500)
  document.getElementById("master").style.animationName = "acerto_sumir"
}
inicio_img1 = () => {
  
  document.getElementById("landing").style.animationName = "acerto_sumir";
  document.getElementById("img_1").style.animationName = "acerto";
  document.getElementById("botao_continuar").style.animationName = "acerto";
  
  document.getElementById("landing_bkg").src = "";
  document.getElementById("landing_bkg").style.backgroundColor = "black";

  setTimeout(() => {
    document.getElementById("img_1").src = "caminho_numm.png";
  document.getElementById("img_1").style.zIndex = "198";
    document.getElementById("menu").style.zIndex = "16";
    document.getElementById("botao_continuar").style.display = "flex";
    document
      .getElementById("botao_continuar")
      .setAttribute("onclick", "img_trocar3()");
    document.getElementById("img_1").style.display = "flex";
    document.getElementById("img_1").style.opacity = "1";
    document.getElementById("landing").style.display = "none";
  }, 1000);
};

img_trocar3 = () => {
  document.getElementById("img_1").style.animationName = "acerto_sumir";
  document.getElementById("menu").style.animationName = "acerto_sumir";
 
 
  setTimeout(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("img_1").style.animationName = "acerto";
    document.getElementById("img_1").src = "caminhocompleto_num.jpg";
    document
      .getElementById("botao_continuar")
      .setAttribute("onclick", "img_trocar4()");
  }, 1);  
};
img_trocar4 = () => {
  document.getElementById("menu").style.animationName = "acerto_sumir";
  document.getElementById("img_1").style.animationName = "acerto_sumir";
 
  setTimeout(() => { 
    $("#menu").empty();
  document.getElementById("menu").innerHTML += "<p>Visão ampliada do que ocorre nessa região dorsal</p>";
  document.getElementById("menu").style.display = "flex";
  document.getElementById("menu").style.margin = "0";
  document.getElementById("img_1").style.animationName = "acerto";
  document.getElementById("img_1").src = "caminhozomm_num.jpg";
  document
    .getElementById("botao_continuar")
    .setAttribute("onclick", "img_trocar5()");
  }, 1);
};
img_trocar5 = () => {
  document.getElementById("img_1").style.display = "none";
  document.getElementById("menu").style.animationName = "acerto_sumir";
  document.getElementById("img_1").style.animationName = "acerto_sumir";
  document.getElementById("img_1").style.width = "100%";
  setTimeout(() => {
  $("#menu").empty(); 
  document.getElementById("menu").innerHTML += "<p>E o que são os números?  </p>";
  document.getElementById("menu").style.display = "flex";
  document.getElementById("img_1").style.display = "flex";
  document.getElementById("img_1").src = "caminho_textos.jpg";

  document.getElementById("img_1").style.animationName = "acerto";
  document
    .getElementById("botao_continuar")
    .setAttribute("onclick", "img_trocar6()");
    
  }, 1);

};
img_trocar6 = () => {
  document.getElementById("menu").style.display = "none";
  document.getElementById("img_1").style.display = "none";
  document.getElementById("quizf").style.display = "flex";
  $("#menu").empty();
  setTimeout(() => { 
  document
    .getElementById("botao_continuar")
    .setAttribute("onclick", "img_trocar7()");
  }, 1);
};
img_trocar7 = () => {
  $("#header_deskf").empty();
  document.getElementById("header_deskf").innerHTML += "<h3>OBJETIVO: RELACIONAR AS ETAPAS COM OS RESPECTIVOS NÚMEROS, </h3>";
  document.getElementById("menu").style.display = "none";
  document.getElementById("img_1").src = "caminho_textos.jpg";
  document
    .getElementById("botao_continuar")
    .setAttribute("onclick", "inicio_popup()");
   ( function mudar() {
      let allBox = document.querySelectorAll(".combo1");
           for (let index = 0; index < allBox.length; index++) {
             allBox[index].style.backgroundColor = "rgb(2 140 72)";
             allBox[index].style.border = "solid";
             allBox[index].style.borderColor = "#01ea77";
             
         }
   })();

   
};

inicio_popup = () => {
  try {
    document.getElementById("landing_bkg").src = "caminhonovo.png";
    document.getElementById("landing_bkg").style.height = "88%";

    document.getElementById("img1_container").style.animationName =
      "acerto_sumir";
    setTimeout(() => {
      document.getElementById("img1_container").remove();
    }, 1000);
    document.getElementById("landing").style.animationName = "acerto_sumir";
  } catch {}
  document.getElementById("inicio_popup").style.animationName = "acerto";
  document.getElementById("inicio_popup").style.zIndex = "16";

  setTimeout(() => {
    document.getElementById("inicio_popup").style.display = "flex";
    document.getElementById("inicio_popup").style.opacity = "1";
  }, 2000);
};

pos_pop_ini = () => {
  document.getElementById("container").style.transform = "scale(1.1)";

  try {
    document.getElementById("landing").style.animationName = "acerto_sumir";
    document.getElementById("landing_bkg").style.animationDuration = "1s";
    document.getElementById("landing_bkg").style.animationName = "acerto_sumir";
  } catch {}

  document.getElementById("inicio_popup").style.animationName = "acerto";
  document.getElementById("master").style.animationName = "acerto";

  setTimeout(() => {
    try {
      document.getElementById("landing").remove();
      document.getElementById("landing_bkg").remove();
    } catch {}
    document.getElementById("branco").style.display = "flex";
  }, 1000);

  if (window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById("btn_quiz").style.display = "none";
    tela_quiz();
  }

  document.getElementById("inicio_popup").style.animationName = "acerto_sumir";
  document.getElementById("inicio_popup").style.animationName = "sumirzindex";
  

  setTimeout(() => {
    //Relógio Start
    if (tempo == 600) {
      let contador_tempo = () => {
        tempo = tempo - 1;

        if (tempo < 120) {
          document.getElementById("relogio").style.borderColor = "#fe0000";
        }

        if (tempo == 0) {
          fim_popup(1);
        }

        let minutos = Math.floor(tempo / 60);
        let segundos = tempo - minutos * 60;

        function str_pad_left(string, pad, length) {
          return (new Array(length + 1).join(pad) + string).slice(-length);
        }

        let tempo_final =
          str_pad_left(minutos, "0", 2) + ":" + str_pad_left(segundos, "0", 2);
        document.getElementById("txt_relogio").innerHTML = tempo_final;
      };

      timer = setInterval(contador_tempo, 1000);
    }

    setTimeout(() => {
      document.getElementById("relogio").style.animationName = "acerto";
    }, 1000);

    document.getElementById("inicio_popup").style.display = "none";
  }, 1000);
};

tela_quiz = () => {
  document.getElementById("textos").style.animationName = "acerto_sumir";

  if (!window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById("container").style.animationName = "acerto_sumir";
  }

  try {
    document.getElementById("relogio").style.animationName = "acerto_sumir";
  } catch {}

  setTimeout(() => {
    document.getElementById("textos").style.display = "none";

    if (!window.matchMedia("(orientation: landscape)").matches) {
      document.getElementById("container").style.display = "none";
      try {
        document.getElementById("relogio").style.display = "none";
        document.getElementById("relogio").innerHTML = "";
      } catch {}
      document.getElementById("relogio_upper").style.animationName = "acerto";
      document.getElementById("relogio_upper").innerHTML =
        "<p id='txt_relogio'></p>";
    }

    document.getElementById("btn_home").className = "material-icons icons";
    document.getElementById("btn_resolucao").className = "material-icons icons";
    document.getElementById("btn_quiz").className =
      "material-icons icons_selected";
    document.getElementById("branco").style.display = "flex";

    //sumir
    document.getElementById("overlay").style.animationName = "acerto_sumir";
    document.getElementById("overlay").style.animationFillMode = "forwards";
    document.getElementById("fim_popup").style.animationName = "acerto_sumir";
    //sumir
    let quiz = document.getElementById("quiz");
    quiz.style.display = "flex";
    quiz.style.animationName = "acerto";

    if (document.getElementById("quiz").innerHTML == "") {
      if (window.matchMedia("(orientation: landscape)").matches) {
        let header_desk = document.createElement("div");
        header_desk.innerHTML =
          '<p>Etapas&nbsp</p><span class="material-icons icons">quiz</span>';
        header_desk.id = "header_desk";
        quiz.appendChild(header_desk);
      }
      let i = 0;
      while (i < 18) {
        let div_opcao = document.createElement("li");
        div_opcao.className = "opcao";
        quiz.appendChild(div_opcao);

        let texto_opc = i + 1;

        let texto = document.createElement("p");
        texto.innerHTML = textos_obj.obj[i][i + 1];
        texto.id = "txt_" + texto_opc;
        div_opcao.appendChild(texto);

        let select = document.createElement("select");
        select.id = "select_" + texto_opc;

        select.className = "combo";

        div_opcao.appendChild(select);

        select.onchange = () =>
          verificador(select.value, texto_opc, texto.id, select.id);

        let contador_option = 1;

        let option_ini = document.createElement("option");
        option_ini.value = "";
        option_ini.innerHTML = "";
        select.appendChild(option_ini);

        while (contador_option <= 18) {
          let option = document.createElement("option");
          option.value = contador_option;
          option.innerHTML = contador_option;
          select.appendChild(option);
          contador_option++;
        }

        i++;
      }
      var ul = document.getElementById("quiz");
      for (let j = ul.children.length; j >= 0; j--) {
        ul.appendChild(ul.children[(Math.random() * j) | 0]);
      }

      let btn_desistir = document.createElement("div");
      btn_desistir.onclick = () => {
        tempo = 0;
        btn_desistir.remove();
        tela_textos();
       
     
      };
      btn_desistir.innerHTML = "<p>Finalizar agora</p>";
      btn_desistir.id = "botao_desistir";
      btn_desistir.style.display = "flex";
      btn_desistir.style.borderColor = "#fe0000";
      document.getElementById("quiz").appendChild(btn_desistir);
    }
  }, 1000);
};

tela_home = () => {
  document.getElementById("textos").style.animationName = "acerto_sumir";
  try {
    document.getElementById("relogio").style.animationName = "acerto";
    document.getElementById("relogio").innerHTML = "<p id='txt_relogio'></p>";
  } catch {}
  document.getElementById("relogio_upper").style.animationName = "acerto_sumir";
  setTimeout(() => {
    document.getElementById("btn_home").className =
      "material-icons icons_selected";
      document.getElementById("btn_quiz").className = "material-icons icons";
    document.getElementById("btn_resolucao").className = "material-icons icons";
   document.getElementById("textos").style.display = "none";
    document.getElementById("relogio_upper").innerHTML = "";

    document.getElementById("container").style.animationName = "acerto";
    document.getElementById("container").style.display = "flex";
 //sumir
 document.getElementById("quiz").style.display = "none";
 document.getElementById("quiz").style.animationFillMode = "forwards";
 document.getElementById("fim_popup").style.animationName = "acerto_sumir";

 document.getElementById("quiz").style.animationName = "acerto_sumir";
 document.getElementById("textos").style.animationName = "acerto";
 document.getElementById("relogio_upper").style.animationName =
   "acerto_sumir";

//sumir

    try {
      document.getElementById("relogio").style.display = "flex";
    } catch {}
  }, 1000);
};

tela_textos = () => {
  if (tempo <= 0 || acertos.length == 18 || tempo == undefined) {
   
    
   


    clearInterval(timer);
    console.log(tempo);
    tempo = undefined;

    //Remover Overlays
    document.getElementById("caminho").src = "caminhonovo.png";
    // document.getElementById("caminho").style.zIndex = 3

    //Responder todas
    let qtd = 1;
    let array_geral = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];
    console.log(array_geral[qtd]);

    while (qtd < 19) {
      document.getElementById("select_" + qtd).selectedIndex = qtd;

      let omodal = document.getElementById("modal_" + qtd);
      omodal.style.animationName = "fmodal";

      let modal_vlr = array_geral[qtd];
      document.getElementById("opcao_" + qtd).style.opacity = 0;
      document.getElementById("opcao_" + qtd).onclick = () => modala(modal_vlr);

      try {
        document.getElementById("acerto_alert").remove();
      } catch {}

      document.getElementById("select_" + qtd).disabled = true;
      qtd++;
    }

    document.getElementById("overlay").style.animationName = "acerto_sumir";
    document.getElementById("overlay").style.animationFillMode = "forwards";
    document.getElementById("fim_popup").style.animationName = "acerto_sumir";

    document.getElementById("quiz").style.animationName = "acerto_sumir";
    document.getElementById("textos").style.animationName = "acerto";
    document.getElementById("relogio_upper").style.animationName ="acerto_sumir";

    try {
      document.getElementById("btn_ajuda").remove();
     
      document.getElementById("relogio").remove();
    } catch {}

    document.getElementById("container").style.animationName = "acerto_sumir";

    setTimeout(() => {
      document.getElementById("fim_popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";

      document.getElementById("btn_home").className = "material-icons icons";
      document.getElementById("btn_resolucao").className =
        "material-icons icons_selected";
      document.getElementById("btn_quiz").className = "material-icons icons";

      document.getElementById("textos").style.display = "flex";
      document.getElementById("quiz").style.display = "none";
      document.getElementById("container").style.display = "none";
      textinho();
    }, 1000);
  } else {
    erro("Finalize o questionário para  acessar essa função.");
    
  }
};

// Fim Telas

//Ações

verificador = (valor, correto, id_texto, id_select) => {
  if (valor == correto) {
    document.getElementById(id_texto).style.color = "#01ea77";
    document.getElementById(id_select).style.color = "#BFBFBF";
    document.getElementById(id_select).disabled = "true";
    let opcao_id_img = "opcao_" + correto;
    let verde = "opcao_" + correto + "a";
    let modal = "modal_" + correto;
    acertos.push(correto);
    acerto(opcao_id_img, verde, modal, correto);
  } else {
    document.getElementById(id_texto).style.color = "#fe0000";
    document.getElementById(id_select).style.color = "#fe0000";
    erro();
  }
  console.log(id_texto, id_select, valor);
};

acerto = (opcao_id_img, verde, modal, correto_opc) => {
  document.getElementById("acerto_alert").style.borderColor = "#01ea77";
  document.getElementById("acerto_alert").innerHTML =
    "<span class='material-icons acerto'> check_circle </span>";

  document.getElementById("acerto_alert").innerHTML += "<p>Você Acertou!</p>";

  let opcao = document.getElementById(opcao_id_img);
  document.getElementById("content").scrollLeft += -100000;
  opcao.style.animationName = "aparecer";
  opcao.onclick = () => modala(correto_opc);

  setTimeout(() => {
    document.body.style.animationName = "bkg_escuro";
  }, 1000);

  console.log(opcao_id_img);

  setTimeout(() => {
    let aopcao = document.getElementById(verde);
    aopcao.style.animationName = "mudar";
  }, 10000);

  let omodal = document.getElementById(modal);
  omodal.style.animationName = "fmodal";

  if (!window.matchMedia("(orientation: landscape)").matches) {
    tela_home();
  }

  setTimeout(() => {
    // if (
    //   opcao_id_img == "opcao_2" ||
    //   opcao_id_img == "opcao_3" ||
    //   opcao_id_img == "opcao_4" ||
    //   opcao_id_img == "opcao_6" ||
    //   opcao_id_img == "opcao_7" ||
    //   opcao_id_img == "opcao_9" ||
    //   opcao_id_img == "opcao_10" ||
    //   opcao_id_img == "opcao_11" ||
    //   opcao_id_img == "opcao_14" ||
    //   opcao_id_img == "opcao_15" ||
    //   opcao_id_img == "opcao_16" ||
    //   opcao_id_img == "opcao_17" ||
    //   opcao_id_img == "opcao_18"
    // ) {
    // } else {
    //   if (window.matchMedia("(orientation: portrait)").matches) {
    //     document.getElementById("container").style.transformOrigin =
    //       Math.trunc(opcao.getBoundingClientRect().left) -
    //       10 +
    //       "px" +
    //       " " +
    //       (Math.trunc(opcao.getBoundingClientRect().top) - 30 + "px");

    //     document.getElementById("container").style.transform = "scale(3)";
    //   }
    // }

    document.getElementById("container").style.zIndex = 6;
    document.getElementById("acerto_alert").style.animationName = "acerto";
    document.getElementById("acerto_alert").style.zIndex = 150;
    opcao.style.zIndex = 5;

    setTimeout(() => {
      correto.play();
    }, 500);

    setTimeout(() => {
      document.getElementById("container").style.transform = "scale(1.1)";
      document.getElementById("acerto_alert").style.animationName =
        "acerto_sumircorreto";
        
      document.getElementById("overlay").style.animationName = "acerto_sumir";
    
      
      
    }, 5000);

    setTimeout(() => {
      document.body.style.animationName = "bkg_voltar";
      if (acertos.length == 18) {
        fim_popup(0);
      }
    }, 7000);
  }, 2000);

  console.log(acertos.length);
};

erro = (texto) => {
  errado.play();
  document.getElementById("overlay").style.animationName = "acerto";
  document.getElementById("overlay").style.display = "inherit";
  setTimeout(() => {
    document.getElementById("overlay").style.animationName = "acerto_sumir";
    document.getElementById("acerto_alert").style.zIndex = 150;
    document.getElementById("acerto_alert").style.animationName = "acerto";

  }, 200);
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
  }, 600);
  document.getElementById("acerto_alert").style.borderColor = "#fe0000";
  document.getElementById("acerto_alert").innerHTML =
    "<span class='material-icons acerto'> highlight_off </span>";

  if (!texto) {
    document.getElementById("acerto_alert").innerHTML += "<p>Você errou!</p>";
  } else {
    document.getElementById("acerto_alert").innerHTML += "<p>" + texto + "</p>";
  }

  setTimeout(() => {
    document.getElementById("acerto_alert").style.display = "flex";
    document.getElementById("acerto_alert").style.animationDuration = "1.5s";

    document.getElementById("acerto_alert").style.animationName =
      "acerto_sumircorreto";
     
      
  }, 3000);
};

fim_popup = (estado) => {
  document.getElementById("relogio").style.display = "none";
  document.getElementById("relogio_upper").style.display = "none";

  document.getElementById("overlay").style.backgroundColor = "#000000";
  document.getElementById("overlay").style.animationName = "acerto";
  document.getElementById("overlay").style.display = "inherit";

  document.getElementById("fim_popup").style.animationName = "acerto";

  setTimeout(() => {
    document.getElementById("fim_popup").style.display = "flex";
  }, 1000);

  // Estado = 0 -> Fim por acertos;
  // Estado = 1 -> Fim por tempo;

  if (estado == 0) {
    document.getElementById("fim_popup").innerHTML =
      "<span class='material-icons fim_icon'> emoji_events </span>";
    document.getElementById("fim_popup").innerHTML +=
      "<p>Parabéns, você acertou todas as questões!</p>";
    document.getElementById("fim_popup").innerHTML +=
      "<div id='botao_textos' onclick='tela_textos()'><p>Ir para respostas</p></div>";
  }

  if (estado == 1) {
    estado = undefined;
    document.getElementById("fim_popup").innerHTML =
      "<span class='material-icons fim_icon'> sentiment_dissatisfied </span>";
    document.getElementById("fim_popup").innerHTML +=
      "<p>Que pena, o seu tempo esgotou...</p>";
    document.getElementById("fim_popup").innerHTML +=
      "<div id='botao_textos' onclick='window.location.reload()'><p>Tentar Novamente</p></div>";
    document.getElementById("fim_popup").innerHTML +=
      "<div id='botao_textos' onclick='tela_textos()'><p>Ver respostas</p></div>";
  }
};

show_respostas = (elemento) => {
  document.getElementById(elemento.id).nextElementSibling.style.display =
    "flex";
  document.getElementById(elemento.id).nextElementSibling.style.animationName =
    "acerto";
};

// Fim Ações

modalf = () => {
  document.getElementById("modalativo").style.animationName = "acerto_sumir";
  setTimeout(() => {
    document.getElementById("modalativo").style.display = "none";
  }, 1000);
};
modala = (v) => {
  if (document.getElementById("modalativo").style.display == "none") {
    document.getElementById("modalativo").style.display = "flex";
  }

  console.log(v);
  switch (v) {
    case 1:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>1 - Mão Direita</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>A mão direita sofre uma lesão evidente e as células imunológicas reagem. Quando uma célula é danificada, incluindo as células da pele, elas começam a liberar citocinas pró-inflamatórias. Estas fomentam a liberação de prostaglandinas no local da lesão ou infecção de tecidos. As prostaglandinas controlam o processo da inflamação, entre outros.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";

      break;
    case 2:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h2>2 - Células danificadas inflamadas/Fibras nervosas sensoriais</h2>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Neurofibras sensoriais existem em todo o corpo e vão responder às prostaglandinas.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 3:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>3 - Neurônio de 1ª ordem</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>O neurônio de 1ª ordem leva sinal de perigo à medula espinhal para o corno dorsal.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 4:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>4 - Substância P</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Um neuropeptídeo que age como neurotransmissor e neuromodulador. No processo da dor, a Substância P transmite sinais nociceptivos por meio de fibras aferentes primárias para neurônios de segunda ordem da coluna e do tronco cerebral.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 5:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>5 - Corno Dorsal</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>A substância cinzenta está localizada na parte interna da medula espinhal. A medula espinhal é o primeiro local de retransmissão na transmissão de informações nociceptivas da periferia para o cérebro. É o lugar onde os corpos neuronais estão localizados e onde as informações são processadas. Ela está configurada em diferentes cornos: ventral, dorsal, lateral e intermédio. O Corno Dorsalespinhal é o responsável pelas informações sensoriais. Os sinais sensoriais são transmitidos da periferia por fibras aferentes primárias para o corno dorsal da medula espinhal, onde esses aferentes fazem sinapses com neurônios intrínsecos do corno dorsal espinhal.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 6:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>6 - Sinapse</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Dentro do Corno Dorsal, o neurônio de 1ª ordem faz sinapse e retransmite o sinal de perigo para o neurônio de 2ª ordem (8 precisa  ser destacado).</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 7:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>7 - Neurônio de 2ª ordem</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Neurônio de 2ª ordem, cruza para o lado oposto e sobe pelo trato espinotalâmico, através do tronco encefálico e na direção do tálamo, no encéfalo.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 8:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>8 - Trato espinotalâmico</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Trato espinotalâmico para o tálamo (ver nociceptor doc)</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 9:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>9 - Tronco cerebral</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Tronco cerebral composto de três componentes:</p>";
      document.getElementById("modalativo").innerHTML +=
        "<ol> <li>Mesencéfalo</li> <li>Ponte</li> <li>Medula</li> </ol>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 10:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>10 - Via Ascendente</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>A via ascendente é responsável por transmitir sinais de dor para a dor, para o córtex somatossensorial a dor.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 11:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>11 - Via Descendente";
      document.getElementById("modalativo").innerHTML +=
        "<p> A via descendente controla / inibe a via ascendente, modulando a dor antes de chegar a níveis superiores do Sistema Nervoso Central. Uma rede modulatória central da dor inclui o giro cingulado, cinza periaquedutal, tegmento pontino dorsolateral e medula ventromedial. Essas áreas exercem efeitos antinociceptivos ou pronociceptivos por meio de vias descendentes que utilizam serotonina, norepinefrina ou dopamina como seus neurotransmissores primários.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 12:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML += " <h1>12 - Tálamo";
      document.getElementById("modalativo").innerHTML +=
        "<p> No tálamo, o neurônio de 2ª ordem faz sinapse com o neurônio de 3ªordem. ";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 13:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>13 - Neurônio de 3ª ordem</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p> O neurônio de 3ª ordem carrega o sinal de ameaça e a retransmite para a região do cérebro que se correlaciona com a MÃO DIREITA lesionada.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 14:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>14 - Percepção da Dor</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Sensação no lado oposto do cérebro onde o estímulo ocorreu.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 15:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>15 - Córtex Cerebral</h1>";
      document.getElementById("modalativo").innerHTML +=
        '<p>O córtex cerebral é onde a percepção da dor é percebida. Os estudos de imagens cerebrais revisados ​​aqui indicam o substrato cortical e sub-cortical que sustenta a percepção da dor. Em vez de localizar um "centro de dor" no cérebro, estudos de neuroimagem identificam uma rede de estruturas somatossensoriais (S1, S2, IC), límbicas (IC,      ACC) e associativas (PFC) que recebem entradas paralelas de múltiplas vias nociceptivas.</p>';
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 16:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>16 - Neurotrans 5HT/NA</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>Neurotransmissores influenciam a modulação facilitadora ou inibidora da transmissão do impulso doloroso a nível da medula espinhal. Os mais importantes no sistema descendente são a serotonina (5-HT), noradrenalina (NA) e opioides endógenos.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 17:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        "<h1>17 - Interneurônio</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p> A liberação da Substância P estimula um pequeno interneurônio, que libera um opioide endógeno chamado encefalina.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 18:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        "<h1>18 - Encefalinas</h1>";
      document.getElementById("modalativo").innerHTML +=
        "<p>As encefalinas são chamadas de ligantes endógenos, pois são derivadas internamente e se ligam aos receptores opióides do corpo. Elas tem importante papel ao regular a nocicepção no corpo:</p>";
      document.getElementById("modalativo").innerHTML +=
        '<ol type="a"> <li>Inibindo a liberação da substância P.</li> <li>Inibindo a despolarização do neurônio pós-sináptico, detendo a sinalização para o tálamo.</li></ol>';
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 19:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>3 - Neurônio de 1ª Ordem";
      document.getElementById("modalativo").innerHTML +=
        "<p>O Núcleo Supraótico (NSO) traz um Action Potencial (AP) e estimula vesículas a liberar conteúdo (Substância P).</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    case 20:
      $("#modalativo").empty();
      document.getElementById("modalativo").style.animationName = "acerto";
      document.getElementById("modalativo").style.borderColor = "#01ea77";
      document.getElementById("modalativo").innerHTML +=
        " <h1>4 - Substância P ";
      document.getElementById("modalativo").innerHTML +=
        "<p>  A Substância P estimula o Núcleo Supraótico (NSO) e propaga o impulso até o tálamo.</p>";
      document.getElementById("modalativo").innerHTML +=
        "<div id='femodal' onclick='modalf ()'><p>OK</p></div>";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
};




fimpropaganda = () => {
  $("#propaganda").empty();
  document.getElementById("propaganda").style.animationName = "acerto";
  document.getElementById("propaganda").style.width = "100%";
  document.getElementById("propaganda").style.lineHeight= "18vh";
  document.getElementById("propaganda").style.height = "100%";
  document.getElementById("propaganda").style.background=" linear-gradient(to bottom,  #2d318e, #1d2c3e)";
  document.getElementById("propaganda").innerHTML +=
    "<a href='https://www.dorcronica.blog.br/'style='color: white;'><img  src='./logo-quadrado2.png' id='logo' style='z-index: 2' alt='' /></a>";
  document.getElementById("propaganda").innerHTML +=
    "<h2 style='color: white;'>Saiba tudo sobre dor no <a href='https://www.dorcronica.blog.br/'style='color: white;'>www.dorcronica.blog.br</a></h2>";
    document.getElementById("propaganda").innerHTML +=
    "<div id='femodal' onclick='window.location.reload()'><p>OK</p></div>";
};
textinho = () => {
  $("#textinho").empty();
document.getElementById("textinho").style.borderColor = "#01ea77";
document.getElementById("textinho").innerHTML += "<p>Clique nos textos para ver as explicações</p>";
$("#textinho2").empty();
document.getElementById("textinho2").style.borderColor = "#01ea77";
document.getElementById("textinho2").innerHTML += "<p>Clique nos textos para ver as explicações</p>";
};

