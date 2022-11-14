export namespace environment {
    export const secretJWT = 'JWT@2022++';
    export const urlServicioNotificacion = '';
    export const secretKeyAES = 'E7)AwV<PK$[4';
    export const accountSid = process.env.TWILIO_ACCOUNT_SID;
    export const authToken = process.env.TWILIO_AUTH_TOKEN;
    export const numberTwilio = process.env.TWILIO_NUMBER_ORIGIN;
    export const connectionString = 'mongodb+srv://admin:Abc12345678@clustercun.hkcel.mongodb.net/DWG28?retryWrites=true&w=majority';
    export const numberTwilioG28 = '+12183043608';
    export const accountSidG28 = 'AC903218889ea8c9599c9912cf6f5af2dd';
    export const authTokenG28 = 'a6970885fa61617a3e966c84347802f5'; 
    export const numberTwilioG40 = process.env.TWILIO_NUMBER_ORIGIN_G40;
    export const accountSidG40 = process.env.TWILIO_ACCOUNT_SID_G40;
    export const authTokenG40 = process.env.TWILIO_AUTH_TOKEN_G40;  
    export const secretApiKeySendGrid = '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';  
    export const senderSendGrid = 'no-reply-ucaldas@yopmail.com';
    export const senderSendGridG28 = (process.env.SENDGRID_SENDER_G28 != undefined ? process.env.SENDGRID_SENDER_G28 : "");
    export const apiKeySendGridG28 = (process.env.SENDGRID_API_KEY_G28 != undefined ? process.env.SENDGRID_API_KEY_G28 : "");
    export const senderSendGridG40 = 'no-respoder-g40@yopmail.com';
    export const apiKeySendGridG40 = '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';
    export const urlMsSendGrid = 'http://localhost:8000/enviarMail';
}