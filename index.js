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
        let speechText = 'Lamento escuchar que te quieras dar de baja, recuerda que no todo está acabado y me alegraría poderte ayudar para guiarte con tus problemas escolares, esto es U D G, rescátame, ¿porqué te quieres dar de baja?';
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
                speechText='Ok amigo, no hay porqué alarmarse, solamente hay que volver a agendar tu materia en el siguiente semestre, de lo contrario caerás en artículo, héchale más ganas esta vez, tu puedes';
            }
            if (resultado ===2){
                speechText='Ok amigo, esta vez hay que solicitar por escrito a la Comisión de Educación del Consejo de Centro o de Escuela, antes del inicio del ciclo inmediato siguiente en que haya sido dado de baja, una nueva oportunidad para acreditar la materia o materias que adeudes';
                displayText= 'Materia reprobada ${veces} veces';
            }
            if (resultado===3){

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
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler).lambda();
