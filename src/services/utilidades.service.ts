import { RolRepository } from './../repositories/rol.repository';
import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import generadorPassword from 'password-generator'
import CryptoJS from 'crypto-js';
import { repository } from '@loopback/repository';
import jwt from 'jsonwebtoken';
import { Rol } from '../models';
import { environment } from '../config/environment';
// import client from 'twilio';
// import sgMail from '@sendgrid/mail'
// import fetch from 'node-fetch';
@injectable({scope: BindingScope.TRANSIENT})
export class UtilidadesService {
  constructor( 
    @repository(RolRepository)
    public rolRepository : RolRepository
  ) {}

  /*
   * Add service methods here
   */

  secretKeyAES = 'Jojama0186/@'
  generarPassword(){
    return generadorPassword(12, false);
  }

   encriptar( texto: string ){
    let encriptado = CryptoJS.AES.encrypt( texto, this.secretKeyAES).toString();
    return encriptado;
  }

  desencriptar( texto: string ){
    let desencriptado  = CryptoJS.AES.decrypt( texto, this.secretKeyAES ).toString(CryptoJS.enc.Utf8);
    return desencriptado;
  }


  login( Rol: string, Password : string){
    
    try {
      let rol = this.rolRepository.findOne( {
        where : { Rol: Rol, Password: Password }
       } )

      if(rol != null){
        return rol;
      }else{
        return false;
      }
    } catch (error) {
      return false; 
    }
    
  }

  async loginAsync( Rol : string, Password : string){

    try {
      let rol = await this.rolRepository.findOne( {
        where : { Rol: Rol }
       })

      if(rol != null){
        
        let descriptado = this.desencriptar( rol.Password );

        if( descriptado == Password ){
          return rol;
        }else{
          return false;
        }

      }else{
        return false;
      }
    } catch (error) {
      return false; 
    }

  }

  // GenerarTokenJWT( persona : Persona){

  //   let token = jwt.sign( {
  //     nombre : persona.nombre,
  //     apellido : persona.apellido,
  //     id : persona.id,
  //     //rol : persona.rol
  //   }, environment.secretJWT, 
  //   { expiresIn: 60 * 60 });

  //   return token;
  // }
  
  // GenerarTokenJWTEncriptado( persona : Persona){

  //   let datos = {
  //     nombre : persona.nombre,
  //     apellido : persona.apellido,
  //     id : persona.id,
  //     //rol : persona.rol
  //   }

  //   let encriptado =  this.encriptar( JSON.stringify(datos) );

  //   let token = jwt.sign( {
  //     data : encriptado
  //   }, environment.secretJWT, 
  //   { expiresIn: 60 * 60 });

  //   return token;
  // }

  // ValidarTokenJWT( token : string){

  //   try {
      
  //     let valido = jwt.verify( token, environment.secretJWT);
  //     return valido;

  //   } catch (error) {
  //     return false;
  //   }
  // }
  
  // EnvioSMS(message : string, toNumberPhone : string){
    
  //   this.clientTwilio.messages
  //   .create({
  //     body: message, 
  //     from: environment.numberTwilio, 
  //     to: toNumberPhone
  //   })
  //   .then(message => {
  //     console.log(message.sid)
  //     return message.sid
  //   });
                    
  // }

  // EnviarEmail( to : string, subject : string, messageHtml : string){
    
  //   const msg = {
  //     to: to,
  //     from: environment.senderSendGrid,
  //     subject: subject,
  //     text: messageHtml,
  //     html: messageHtml,
  //   }
    
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log('Email enviado')
  //     })
  //     .catch((error : any) => {
  //       console.error(error)
  //   })

  // }

  // EnviarEmailPromise( to : string, subject : string, messageHtml : string){
    
  //   const msg = {
  //     to: to,
  //     from: environment.senderSendGrid,
  //     subject: subject,
  //     text: messageHtml,
  //     html: messageHtml,
  //   }
    
  //   return sgMail.send(msg);      

  // }

  // MsEnviarEmail(to : string, subject : string, messageHtml : string){
    
  //   let url = environment.urlMsSendGrid;
  //   let data = { 
  //               to: to, 
  //               subject: subject + ' - adición', 
  //               message : messageHtml
  //             };

  //   return fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers:{
  //       'Content-Type': 'application/json',
  //     }
  //   });

}
