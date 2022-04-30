'use strict';

//import ask-sdk-core
const Alexa = require('ask-sdk-core');

//skill name
const appName = 'Udg rescatame';

//code for the handlers
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        //welcome message
        let speechText = '<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_03"/> Lamento escuchar que te quieras dar de baja, recuerda que no todo está acabado y me alegraría poderte ayudar para guiarte con tus problemas escolares, esto es U D G, rescátame, ¿porqué te quieres dar de baja?';
        //welcome screen message
        let displayText = "UDG al rescate";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, displayText)
            .getResponse();
    }
};

//implement custom handlers
const reprobeHandler={
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type ==='IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name ==='reprobe';

    },
    handle(handlerInput){
        let speechText='';
        let displayText='';
        let intent=handlerInput.requestEnvelope.request.intent;
        let veces = intent.slots.veces.value;

        if (veces){
            let resultado=parseInt(veces);
            if(resultado ===1){
                speechText='<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01"/> Ok amigo, no hay porqué alarmarse, solamente hay que volver a agendar tu materia en el siguiente semestre, de lo contrario caerás en artículo, héchale más ganas esta vez, tu puedes';
            }
            if (resultado ===2){
                speechText=' <audio src="soundbank://soundlibrary/hospital/heartbeats_ekg/heartbeats_ekg_04"/> Ok amigo, esta vez hay que solicitar por escrito a la Comisión de Educación del Consejo de Centro o de Escuela, antes del inicio del ciclo inmediato siguiente en que haya sido dado de baja, una nueva oportunidad para acreditar la materia o materias que adeudes';
                displayText= 'Materia reprobada ${veces} veces';
            }
            if (resultado===3){
                
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen, según el artículo 35 de la ley orgánica,no se les autorizará su reingreso a la carrera o posgrado por el cual se les dio de baja. En el caso del bachillerato no se le autorizará su reingreso en ninguna de las modalidades educativas en que se ofrezca.'
            }

            return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName,displayText)
            .withShouldEndSession(true)
            .getResponse();

            //perfom de operation
        }else{
            //Ask for required input
            return handlerInput.responseBuilder
            .addDelegateDirective(intent)
            .getResponse();
        }

    }
};

const articulosHandler={
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type ==='IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name ==='articulos';

    },
    handle(handlerInput){
        let speechText='';
        let displayText='';
        let intent=handlerInput.requestEnvelope.request.intent;
        let articulo = intent.slots.articulo.value;

        if (articulo){
            let resultado2=parseInt(articulo);
            if(resultado2 ===33){
                speechText='<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01"/> Ok amigo, no hay porqué alarmarse, solamente hay que volver a agendar tu materia en el siguiente semestre, de lo contrario caerás en artículo 34, héchale más ganas esta vez, tu puedes';
            }
            if (resultado2 ===34){
                speechText=' <audio src="soundbank://soundlibrary/hospital/heartbeats_ekg/heartbeats_ekg_04"/> Ok amigo, esta vez hay que solicitar por escrito a la Comisión de Educación del Consejo de Centro o de Escuela, antes del inicio del ciclo inmediato siguiente en que haya sido dado de baja, una nueva oportunidad para acreditar la materia o materias que adeudes';
            }
            if (resultado2===35){
                
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen, según el artículo 35 de la ley orgánica,no se les autorizará su reingreso a la carrera o posgrado por el cual se les dio de baja. En el caso del bachillerato no se le autorizará su reingreso en ninguna de las modalidades educativas en que se ofrezca.'
            }

            if (resultado2===63){
                
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen, según el artículo 63 de la ley orgánica,no se les autorizará su reingreso al posgrado por el cual se les dio de baja.'
            }
            return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName,displayText)
            .withShouldEndSession(true)
            .getResponse();

            //perfom de operation
        }else{
            //Ask for required input
            return handlerInput.responseBuilder
            .addDelegateDirective(intent)
            .getResponse();
        }

    }
};

const adeudoHandler={
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type ==='IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name ==='adeudo';

    },
    handle(handlerInput){
        let speechText='';
        let displayText='';
        let intent=handlerInput.requestEnvelope.request.intent;
        let adeudos = intent.slots.adeudos.value;

        if (adeudos){
            let resultado3=parseInt(adeudos);
            if(resultado3 ===1){
                speechText='<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01"/> Ok amigo, no hay porqué alarmarse, solamente hay que pagar antes de agendar el siguiente semestre';
            }
            if (resultado3 ===2){
                speechText=' <audio src="soundbank://soundlibrary/hospital/heartbeats_ekg/heartbeats_ekg_04"/> Ok amigo, esta vez hay que solicitar por escrito a la coordinación de control escolar una petición con los semestres que adeudes';
            }
            if (resultado3===3){
                
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen, según el artículo 35 de la ley orgánica,no se les autorizará su reingreso a la carrera o posgrado por el cual se les dio de baja. En el caso del bachillerato no se le autorizará su reingreso en ninguna de las modalidades educativas en que se ofrezca.'
            }
            return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName,displayText)
            .withShouldEndSession(true)
            .getResponse();

            //perfom de operation
        }else{
            //Ask for required input
            return handlerInput.responseBuilder
            .addDelegateDirective(intent)
            .getResponse();
        }

    }
};

const faltaHandler={
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type ==='IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name ==='falta';

    },
    handle(handlerInput){
        let speechText='';
        let displayText='';
        let intent=handlerInput.requestEnvelope.request.intent;
        let faltas = intent.slots.faltas.value;

        if (faltas){
            let resultado4=parseInt(faltas);
            if(resultado4 ===4){
                speechText='<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01"/> Uff, en tu caso te vas directo al extraordinario';
            }
            if (resultado4 ===7){
                speechText='<audio src="soundbank://soundlibrary/hospital/heartbeats_ekg/heartbeats_ekg_04"/> Salvo que tengas un permiso por escrito del director de la escuela podrás faltar sin problemas, pero si no no alcanzas ni el extraordinario';
            }
            if (resultado4 >7){
                
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen,a repetir la materia y a hecharle más ganas para la otra.'
            }
            return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName,displayText)
            .withShouldEndSession(true)
            .getResponse();

            //perfom de operation
        }else{
            //Ask for required input
            return handlerInput.responseBuilder
            .addDelegateDirective(intent)
            .getResponse();
        }

    }
};

const promediosHandler={
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type ==='IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name ==='promedios';

    },
    handle(handlerInput){
        let speechText='';
        let displayText='';
        let intent=handlerInput.requestEnvelope.request.intent;
        let promedio = intent.slots.promedio.value;

        if (promedio){
            let resultado5=parseInt(promedio);
            if(resultado5 >80){
                speechText='<audio src="soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01"/> Uff, en tu caso héchale más ganas, estás en la cuerda floja';
            }
            if (resultado5 <80){
                speechText=' <audio src="soundbank://soundlibrary/horror/horror_05"/> Ni modo mi buen, según el artículo 35 de la ley orgánica,no se les autorizará su reingreso a la carrera o posgrado por el cual se les dio de baja. En el caso del bachillerato no se le autorizará su reingreso en ninguna de las modalidades educativas en que se ofrezca.';
            }
            return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName,displayText)
            .withShouldEndSession(true)
            .getResponse();

            //perfom de operation
        }else{
            //Ask for required input
            return handlerInput.responseBuilder
            .addDelegateDirective(intent)
            .getResponse();
        }

    }
};

//end Custom handlers

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        //help text for your skill
        let speechText = 'Udg al rescate puede ayudarte a saber que hacer en ciertos casos, prueba diciendo reprobé una materia o tengo muchas faltas';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, speechText)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let speechText = 'Si necesitas ayuda otra vez aquí estaré';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder.getResponse();
    }
};

//Lambda handler function
//Remember to add custom request handlers here
exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                        reprobeHandler,
                        articulosHandler,
                        adeudoHandler,
                        faltaHandler,
                        promediosHandler,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler).lambda();
