import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ConvName from 'App/Models/ConvName';

export default class ConvNamesController {

    public async createConvName( {request, auth}: HttpContextContract) {

        const conv = new ConvName();


        const check = await auth.use('api').authenticate();

        if(check){
            conv.name = request.input('name')

            await conv.save()
        }else {
            return "Não foi possível."
        }


    }


    public async convNames({auth}){

        const check = await auth.use('api').authenticate();


        if(check){
            return ConvName.all()
        } else {
            return "Não autorizado."
        }


    }



}
