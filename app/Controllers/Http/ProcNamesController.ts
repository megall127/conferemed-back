import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProcName from 'App/Models/ProcName'

export default class ProcNamesController {

    public async createProcName( {request, auth}: HttpContextContract) {

        const proc = new ProcName();


        const check = await auth.use('api').authenticate();

        if(check){
            proc.name = request.input('name')

            await proc.save()
        }else {
            return "Não foi possível."
        }


    }


    public async procNames({auth}){

        const check = await auth.use('api').authenticate();


        if(check){
            return ProcName.all()
        } else {
            return "Não autorizado."
        }


    }



}
